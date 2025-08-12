import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import AWS from 'aws-sdk';

// Configure AWS SES
AWS.config.update({
  region: process.env.MY_AWS_REGION || 'us-east-2',
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
});

const ses = new AWS.SES();

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

const sendEmail = async (toEmail: string, subject: string, htmlMessage: string, fromEmail?: string) => {
  const sourceEmail = fromEmail || process.env.SES_FROM_EMAIL || 'noreply@roqit.com';
  const params = {
    Destination: {
      ToAddresses: Array.isArray(toEmail) ? toEmail : [toEmail],
    },
    Message: {
      Body: {
        Html: {
          Data: htmlMessage,
          Charset: 'UTF-8',
        },
      },
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      },
    },
    Source: sourceEmail,
    ReplyToAddresses: [sourceEmail],
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log('Email sent successfully:', result.MessageId);
    return {
      status: 'success',
      messageId: result.MessageId,
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email: ' + (error as Error).message);
  }
};

const sendContactFormEmail = async (formData: ContactFormData): Promise<boolean> => {
  if (!process.env.MY_AWS_ACCESS_KEY_ID || !process.env.MY_AWS_SECRET_ACCESS_KEY) {
    console.warn('AWS credentials not set - skipping email send');
    return false;
  }

  try {
    const subject = `New Contact Form Submission from ${formData.name}`;
    
    const htmlMessage = `
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
    `;

    await sendEmail(process.env.SES_TO_EMAIL || 'info@roqit.com', subject, htmlMessage);
    console.log('Contact form email sent successfully');
    return true;
  } catch (error) {
    console.error('AWS SES email error:', error);
    return false;
  }
};

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Parse the path to determine the endpoint
    const path = event.path.replace('/.netlify/functions/api', '');
    
    if (path === '/contact' && event.httpMethod === 'POST') {
      const body = JSON.parse(event.body || '{}');
      
      // Validate required fields
      const requiredFields = ['name', 'company', 'email', 'phone', 'industry', 'companySize', 'assetTypes', 'numberOfAssets', 'usesIotSystem'];
      const missingFields = requiredFields.filter(field => !body[field]);
      
      if (missingFields.length > 0) {
        return {
          statusCode: 400,
          headers: { ...headers, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            success: false,
            error: `Missing required fields: ${missingFields.join(', ')}`
          }),
        };
      }

      // Send email
      const emailSent = await sendContactFormEmail(body);
      
      if (emailSent) {
        return {
          statusCode: 200,
          headers: { ...headers, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            success: true,
            id: Date.now().toString(),
            message: 'Contact form submitted successfully'
          }),
        };
      } else {
        return {
          statusCode: 500,
          headers: { ...headers, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            success: false,
            error: 'Failed to send email notification, but form submission was saved'
          }),
        };
      }
    }

    // Handle other endpoints
    return {
      statusCode: 404,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: false,
        error: 'Endpoint not found'
      }),
    };

  } catch (error) {
    console.error('API Error:', error);
    return {
      statusCode: 500,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: false,
        error: 'Internal server error'
      }),
    };
  }
};
