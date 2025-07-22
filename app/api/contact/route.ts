import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  country: z.string().nonempty(),
  website: z.string().url().optional().or(z.literal('')),
  job: z.string().nonempty(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = contactFormSchema.parse(body);

    // Aquí podrías añadir lógica adicional, como guardar en una base de datos
    // o enviar el email desde el servidor si no quisieras hacerlo desde el cliente.

    return NextResponse.json({ message: "Datos recibidos y validados correctamente." }, { status: 200 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: "Error interno del servidor." }, { status: 500 });
  }
}
