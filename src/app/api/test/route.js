import { Resend } from 'resend';

export async function POST(req) {
    const resend = new Resend('re_YzKcEsW2_HmsrKjDsf2yhs6bVZchEazEX');

    const data = await req.json();

    console.log(data);

    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: data.email,
      subject: data.subject,
      html: data.content//`${data.subtitle}\n\n${data.content}`
    });

    return Response.json("hello");
}