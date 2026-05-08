import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  organisation: z.string().min(2, "Please enter your organisation."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  serviceArea: z.string().min(2, "Please choose a service area."),
  message: z.string().min(20, "Please provide a little more detail."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
