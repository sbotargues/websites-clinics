import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const autoReply: Record<string, { subject: string; body: string }> = {
  es: {
    subject: "Hemos recibido tu mensaje — Webs Clínicas",
    body: "¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos en menos de 24 horas.",
  },
  en: {
    subject: "We received your message — Webs Clínicas",
    body: "Thanks for reaching out! We've received your message and will get back to you within 24 hours.",
  },
  fr: {
    subject: "Nous avons reçu votre message — Webs Clínicas",
    body: "Merci de nous avoir contactés ! Nous avons reçu votre message et vous répondrons dans les 24 heures.",
  },
  de: {
    subject: "Wir haben Ihre Nachricht erhalten — Webs Clínicas",
    body: "Vielen Dank für Ihre Nachricht! Wir haben sie erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.",
  },
  it: {
    subject: "Abbiamo ricevuto il tuo messaggio — Webs Clínicas",
    body: "Grazie per averci contattato! Abbiamo ricevuto il tuo messaggio e ti risponderemo entro 24 ore.",
  },
  pt: {
    subject: "Recebemos a sua mensagem — Webs Clínicas",
    body: "Obrigado por nos contactar! Recebemos a sua mensagem e responderemos em menos de 24 horas.",
  },
  ca: {
    subject: "Hem rebut el teu missatge — Webs Clínicas",
    body: "Gràcies per contactar-nos! Hem rebut el teu missatge i et respondrem en menys de 24 hores.",
  },
  ru: {
    subject: "Мы получили ваше сообщение — Webs Clínicas",
    body: "Спасибо за обращение! Мы получили ваше сообщение и ответим в течение 24 часов.",
  },
  nl: {
    subject: "We hebben uw bericht ontvangen — Webs Clínicas",
    body: "Bedankt voor uw bericht! We hebben het ontvangen en reageren binnen 24 uur.",
  },
  ka: {
    subject: "თქვენი შეტყობინება მიღებულია — Webs Clínicas",
    body: "მადლობა მოწერისთვის! თქვენი შეტყობინება მიღებულია და 24 საათში გიპასუხებთ.",
  },
};

export async function POST(req: NextRequest) {
  try {
    const { email, message, locale } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Notify you
    await resend.emails.send({
      from: "Webs Clínicas <noreply@websclinicas.com>",
      to: "sbotargues@gmail.com",
      subject: `Nuevo contacto: ${email}`,
      text: `Email: ${email}\nIdioma: ${locale ?? "es"}\n\nMensaje:\n${message}`,
    });

    // Auto-reply to client
    const reply = autoReply[locale ?? "es"] ?? autoReply.es!;
    await resend.emails.send({
      from: "Webs Clínicas <noreply@websclinicas.com>",
      to: email,
      subject: reply.subject,
      text: reply.body,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
