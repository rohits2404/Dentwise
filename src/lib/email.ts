import emailjs from "@emailjs/browser";

interface AppointmentEmailData {
    userEmail: string;
    doctorName: string;
    appointmentDate: string;
    appointmentTime: string;
    appointmentType: string;
    duration: string;
    price: string;
}

export async function sendAppointmentConfirmationEmail({
    userEmail,
    doctorName,
    appointmentDate,
    appointmentTime,
    appointmentType,
    duration,
    price,
}: AppointmentEmailData) {
    const templateParams = {
        userEmail,
        doctorName,
        appointmentDate,
        appointmentTime,
        appointmentType,
        duration,
        price,
        appointmentUrl: `${process.env.NEXT_PUBLIC_APP_URL}/appointments`,
    };

    const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
    );

    return response;
}
