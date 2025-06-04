import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Gmail SMTP 설정
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // Gmail 앱 비밀번호
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // 이메일 내용 설정
    const mailOptions = {
      from: `"포트폴리오 웹사이트" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: `[포트폴리오] 새로운 메시지: ${name}`,
      text: `
이름: ${name}
이메일: ${email}
메시지: ${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2563eb;">새로운 문의가 도착했습니다</h2>
  <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
    <p><strong>이름:</strong> ${name}</p>
    <p><strong>이메일:</strong> ${email}</p>
    <p><strong>메시지:</strong></p>
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
</div>
      `
    };

    // 이메일 전송
    const info = await transporter.sendMail(mailOptions);
    console.log('이메일 전송 성공:', info.messageId);

    return NextResponse.json(
      { message: '메시지가 성공적으로 전송되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('이메일 전송 오류:', error);
    return NextResponse.json(
      { message: '메시지 전송에 실패했습니다.' },
      { status: 500 }
    );
  }
} 