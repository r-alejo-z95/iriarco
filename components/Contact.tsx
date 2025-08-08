'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const contactFormSchema = z.object({
  name: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  phone: z.string().min(10, { message: "Por favor, introduce un número de teléfono válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar los términos para continuar.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Verificar que las variables de entorno estén configuradas
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS no está configurado correctamente');
      }

      // Preparar los parámetros del template
      const templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      };

      // Enviar email directamente desde el cliente
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus({ success: true, message: "¡Mensaje enviado con éxito!" });
      
      // Reset completo del formulario
      reset({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
      });

    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus({ 
        success: false, 
        message: "Hubo un error al enviar el mensaje. Comunícate directamente a galban@iriarco.com o al 098 449 1120" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-background py-15 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <h1 className="max-w-md text-balance text-5xl font-bold text-gray-900 md:text-6xl">Contáctanos</h1>
        <p className="text-gray-600 my-8 max-w-2xl text-balance text-xl leading-relaxed">Estamos aquí para responder a tus preguntas y ayudarte con tus proyectos eléctricos.</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="grid grid-cols-2 lg:col-span-2 lg:block lg:space-y-12">
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h2 className="mb-3 text-lg font-semibold">Consultas Generales</h2>
                <Link href="mailto:info@iriarco.com" className="text-primary text-lg hover:underline">
                  galban@iriarco.com
                </Link>
                <p className="mt-3 text-sm">098 449 1120</p>
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
                    <Input id="email" type="email" {...register("email")} />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">Número de teléfono</Label>
                    <Input id="phone" type="tel" {...register("phone")} />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2 block">Mensaje</Label>
                  <Textarea id="message" rows={3} {...register("message")} />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <div className="flex items-start space-x-2">
                  <Controller
                    name="consent"
                    control={control}
                    render={({ field }) => (
                      <Checkbox 
                        id="consent"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Acepto que mis datos sean utilizados únicamente para contactarme.
                  </label>
                </div>
                {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent.message}</p>}
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
                {submitStatus && (
                  <div className={`p-3 rounded-md mt-4 ${
                    submitStatus.success 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}
              </div>
            </Card>
          </form>
        </div>
      </div>
    </section>
  );
}