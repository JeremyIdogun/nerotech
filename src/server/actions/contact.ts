"use server";

import { contactSchema } from "@/lib/validators";
import type { ContactFormValues } from "@/lib/validators";

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string };

export async function submitContact(
  values: ContactFormValues,
): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  const { name, organisation, email, phone, serviceArea, message } = parsed.data;

  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "NeroTech Website <website@nerotech.com.ng>",
        to: process.env.CONTACT_TO_EMAIL ?? "hello@nerotech.com.ng",
        subject: `New enquiry from ${name} — ${serviceArea}`,
        text: [
          `Name: ${name}`,
          `Organisation: ${organisation}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          `Service area: ${serviceArea}`,
          ``,
          `Message:`,
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } catch (err) {
      console.error("Resend error:", err);
      return { success: false, error: "Failed to send your message. Please try again." };
    }
  } else {
    console.log("[Contact form submission]", {
      name,
      organisation,
      email,
      phone,
      serviceArea,
      message,
    });
  }

  return { success: true };
}
