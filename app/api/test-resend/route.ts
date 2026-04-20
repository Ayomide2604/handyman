import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    console.log('Testing Resend API...');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('API Key length:', process.env.RESEND_API_KEY?.length);
    
    // Test with a simple email
    const { data, error } = await resend.emails.send({
      from: 'Handyman Pro Plus <noreply@handymanplusservices.com>',
      to: ['homerepair@handymanplusservices.com'],
      subject: 'Test Email - Resend Configuration',
      html: '<p>This is a test email to verify Resend is working correctly.</p>',
    });

    if (error) {
      console.error('Resend test error:', error);
      return NextResponse.json(
        { error: 'Resend test failed', details: error },
        { status: 500 }
      );
    }

    console.log('Resend test success:', data);
    return NextResponse.json(
      { message: 'Resend test successful', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Test API error:', error);
    return NextResponse.json(
      { error: 'Test failed', details: error },
      { status: 500 }
    );
  }
}
