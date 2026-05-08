"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { submitContact } from "@/server/actions/contact";
import type { ContactFormValues } from "@/lib/validators";
import { cn } from "@/lib/cn";

const initialValues: ContactFormValues = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  serviceArea: "",
  message: "",
};

type FieldError = Partial<Record<keyof ContactFormValues, string>>;

function validate(values: ContactFormValues): FieldError {
  const errors: FieldError = {};
  if (!values.name || values.name.length < 2) errors.name = "Please enter your name.";
  if (!values.organisation || values.organisation.length < 2)
    errors.organisation = "Please enter your organisation.";
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (!values.serviceArea || values.serviceArea.length < 2)
    errors.serviceArea = "Please choose a service area.";
  if (!values.message || values.message.length < 20)
    errors.message = "Please provide a little more detail (at least 20 characters).";
  return errors;
}

const inputClass = cn(
  "w-full rounded-xl border border-[#E5ECEC] bg-[#F3F7F7] px-4 py-3 text-sm text-[#18232F] placeholder:text-[#6B7280]/60",
  "focus:border-[#12A3A2] focus:outline-none focus:ring-2 focus:ring-[#12A3A2]/20",
  "transition-colors",
);

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FieldError>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    setServerError(null);
    try {
      const result = await submitContact(values);
      if (result.success) {
        setSubmitted(true);
      } else {
        setServerError(result.error);
      }
    } catch {
      setServerError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#12A3A2]/20 bg-[#12A3A2]/5 p-8">
        <div className="mb-3 h-1 w-8 rounded-full bg-[#12A3A2]" />
        <h2 className="font-heading text-xl font-bold text-[#18232F]">
          Message received.
        </h2>
        <p className="mt-3 text-base leading-7 text-[#6B7280]">
          Thank you. Your message has been received and NeroTech will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your full name"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>

        <Field label="Organisation" error={errors.organisation} required>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            value={values.organisation}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your organisation"
            aria-describedby={errors.organisation ? "organisation-error" : undefined}
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email address" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="your@email.com"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field label="Phone number" note="Optional">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="+234 ..."
          />
        </Field>
      </div>

      <Field label="Service area" error={errors.serviceArea} required>
        <select
          id="serviceArea"
          name="serviceArea"
          value={values.serviceArea}
          onChange={handleChange}
          className={cn(inputClass, "cursor-pointer")}
          aria-describedby={errors.serviceArea ? "serviceArea-error" : undefined}
        >
          <option value="">Select a service area</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="general">General enquiry</option>
        </select>
      </Field>

      <Field label="Message" error={errors.message} required>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className={cn(inputClass, "resize-none")}
          placeholder="Tell us about your challenge or what you'd like to discuss..."
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      {serverError && (
        <p role="alert" className="text-sm text-red-600">
          {serverError}
        </p>
      )}

      <Button type="submit" disabled={submitting} className="min-w-[160px]">
        {submitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

type FieldProps = {
  label: string;
  note?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
};

function Field({ label, note, error, required, children }: FieldProps) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#18232F]">
        {label}
        {required && <span className="text-[#12A3A2]" aria-hidden>*</span>}
        {note && <span className="font-normal text-[#6B7280]">({note})</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
