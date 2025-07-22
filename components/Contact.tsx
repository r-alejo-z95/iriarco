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
  country: z.string().nonempty({ message: "Por favor, selecciona un país." }),
  website: z.string().url({ message: "Por favor, introduce una URL válida." }).optional().or(z.literal('')),
  job: z.string().nonempty({ message: "Por favor, selecciona un cargo." }),
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
    <section className="bg-muted py-15 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <h1 className="text-4xl font-semibold lg:text-5xl">Ayúdanos a dirigir tu consulta</h1>
        <p className="text-muted-foreground mt-4 text-lg">Te ayudaremos a encontrar el plan y los precios adecuados para tu negocio.</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="grid grid-cols-2 lg:col-span-2 lg:block lg:space-y-12">
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h2 className="mb-3 text-lg font-semibold">Colabora</h2>
                <Link href="mailto:hola@iriarco.com" className="text-primary text-lg hover:underline">
                  hola@iriarco.com
                </Link>
                <p className="mt-3 text-sm">+593 99 999 9999</p>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold">Prensa</h3>
                <Link href="mailto:prensa@iriarco.com" className="text-primary text-lg hover:underline">
                  prensa@iriarco.com
                </Link>
                <p className="mt-3 text-sm">+593 99 999 9999</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="@container lg:col-span-3">
            <Card className="p-8 sm:p-12">
              <h3 className="text-xl font-semibold">Encuentra a la persona correcta</h3>
              <p className="mt-4 text-sm">¡Contacta a nuestro equipo de ventas! Estamos ansiosos por saber más sobre cómo planeas usar nuestra aplicación.</p>

              <div className="mt-12 space-y-6">
                <div className="grid gap-3 @md:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" {...register("name")} />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email de trabajo</Label>
                    <Input id="email" {...register("email")} />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="country">País/Región</Label>
                  <Select onValueChange={(value) => register("country").onChange({ target: { value } })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ecuador">Ecuador</SelectItem>
                      <SelectItem value="Otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                </div>
                <div className="grid gap-3 @md:grid-cols-2">
                  <div>
                    <Label htmlFor="website">Sitio web de la empresa</Label>
                    <Input id="website" {...register("website")} />
                    {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="job">Cargo</Label>
                    <Select onValueChange={(value) => register("job").onChange({ target: { value } })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un cargo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Gerencia">Gerencia</SelectItem>
                        <SelectItem value="Compras">Compras</SelectItem>
                        <SelectItem value="Técnico">Técnico</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.job && <p className="text-red-500 text-sm mt-1">{errors.job.message}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Mensaje</Label>
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