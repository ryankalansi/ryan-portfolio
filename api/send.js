import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Ganti jika domain sudah diverifikasi di Resend
      to: "kalansiryan@gmail.com",
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #10b981;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend Server Error:", error);
    return res.status(500).json({ message: error.message });
  }
}
