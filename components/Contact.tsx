"use client";

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const contactFormSchema = z.object({
  name: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  phone: z.string().min(10, { message: "Por favor, introduce un número de teléfono válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus({ success: true, message: "¡Mensaje enviado con éxito!" });
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus({ success: false, message: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-background py-15 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <h1 className="text-4xl font-semibold lg:text-5xl">Contáctanos</h1>
        <p className="text-muted-foreground mt-4 text-lg">Estamos aquí para responder a tus preguntas y ayudarte con tus proyectos eléctricos.</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="grid grid-cols-2 lg:col-span-2 lg:block lg:space-y-12">
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h2 className="mb-3 text-lg font-semibold">Consultas Generales</h2>
                <Link href="mailto:info@iriarco.com" className="text-primary text-lg hover:underline">
                  info@iriarco.com
                </Link>
                <p className="mt-3 text-sm">099 999 9999</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="@container lg:col-span-3">
            <Card className="p-8 sm:p-12">
              <h3 className="text-xl font-semibold">Envíanos un mensaje</h3>
              <p className="mt-4 text-sm">Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>

              <div className="mt-8 space-y-6">
                <div>
                  <Label htmlFor="name" className="mb-2 block">Nombre completo</Label>
                  <Input id="name" {...register("name")} />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div className="grid gap-6 md:gap-3 md:grid-cols-2">
                  <div>
                    <Label htmlFor="email" className="mb-2 block">Correo electrónico</Label>
                    <Input id="email" {...register("email")} />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">Número de teléfono</Label>
                    <Input id="phone" {...register("phone")} />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2 block">Mensaje</Label>
                  <Textarea id="message" rows={3} {...register("message")} />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
                {submitStatus && (
                  <p className={`text-sm mt-2 ${submitStatus.success ? 'text-green-500' : 'text-red-500'}`}>
                    {submitStatus.message}
                  </p>
                )}
              </div>
            </Card>
          </form>
        </div>
      </div>
    </section>
  );
}