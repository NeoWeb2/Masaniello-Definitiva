import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, date, time, people, comments } = body

    // Validar campos requeridos
    if (!name || !phone || !email || !date || !time || !people) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Formatear la fecha
    const formattedDate = new Date(date).toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    // Crear el contenido del email
    const emailContent = `
      Nueva Reserva - Restaurante Masaniello
      
      DATOS DEL CLIENTE:
      • Nombre: ${name}
      • Teléfono: ${phone}
      • Email: ${email}
      
      DETALLES DE LA RESERVA:
      • Fecha: ${formattedDate}
      • Hora: ${time}
      • Número de personas: ${people}
      
      ${comments ? `COMENTARIOS:\n${comments}` : ''}
      
      ---
      Esta reserva fue enviada desde el formulario web de Masaniello Barcelona.
      Fecha de solicitud: ${new Date().toLocaleString('es-ES')}
    `

    // Si tienes configurado Resend u otro servicio de email, úsalo aquí
    // Por ahora, simularemos el envío exitoso
    
    // Ejemplo con fetch a un servicio de email (descomenta si tienes configurado):
    /*
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'reservas@masaniello.com',
        to: ['masaniellobarcelona@gmail.com'],
        subject: `Nueva Reserva - ${name} - ${formattedDate} ${time}`,
        text: emailContent,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error('Error al enviar el email')
    }
    */

    // Log para desarrollo (en producción esto se enviaría por email)
    console.log('Nueva reserva recibida:', {
      name,
      phone,
      email,
      date: formattedDate,
      time,
      people,
      comments,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Reserva enviada correctamente' 
    })

  } catch (error) {
    console.error('Error procesando reserva:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
