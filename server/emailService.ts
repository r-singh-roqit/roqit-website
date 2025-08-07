import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  website?: string | null;
  industry: string;
  companySize: string;
  assetTypes: string;
  numberOfAssets: string;
  usesIotSystem: string;
}

export async function sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const emailContent = {
      to: 'info@roqit.com',
      from: 'noreply@roqit.com', // This should be a verified sender domain
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { background: white; margin: 15px 0; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; }
            .label { font-weight: 600; color: #1f2937; margin-bottom: 5px; }
            .value { color: #4b5563; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-top: 20px; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Contact Form Submission</h1>
              <p>ROQIT Fleet Management Platform</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${formData.name}</div>
              </div>
              
              <div class="field">
                <div class="label">🏢 Company:</div>
                <div class="value">${formData.company}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${formData.email}</div>
              </div>
              
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value">${formData.phone}</div>
              </div>
              
              ${formData.website ? `<div class="field">
                <div class="label">🌐 Website:</div>
                <div class="value">${formData.website}</div>
              </div>` : ''}
              
              <div class="field">
                <div class="label">🏭 Industry:</div>
                <div class="value">${formData.industry}</div>
              </div>
              
              <div class="field">
                <div class="label">📊 Company Size:</div>
                <div class="value">${formData.companySize}</div>
              </div>
              
              <div class="field">
                <div class="label">🚛 Asset Types:</div>
                <div class="value">${formData.assetTypes}</div>
              </div>
              
              <div class="field">
                <div class="label">📈 Number of Assets:</div>
                <div class="value">${formData.numberOfAssets}</div>
              </div>
              
              <div class="field">
                <div class="label">🔧 Uses IoT/Fleet Management System:</div>
                <div class="value">${formData.usesIotSystem}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the ROQIT website contact form.</p>
                <p>Please respond to the customer at: ${formData.email}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission - ROQIT

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.website ? `Website: ${formData.website}` : ''}
Industry: ${formData.industry}
Company Size: ${formData.companySize}
Asset Types: ${formData.assetTypes}
Number of Assets: ${formData.numberOfAssets}
Uses IoT/Fleet Management System: ${formData.usesIotSystem}

Please respond to the customer at: ${formData.email}
      `
    };

    await mailService.send(emailContent);
    console.log('Contact form email sent successfully to info@roqit.com');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}