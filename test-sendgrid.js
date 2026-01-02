// Test SendGrid Configuration
import sgMail from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY;
const from = process.env.SENDGRID_FROM_EMAIL;
const to = process.env.EMAIL_TO;

console.log('Testing SendGrid Configuration...\n');
console.log('API Key:', apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT SET');
console.log('FROM:', from);
console.log('TO:', to);
console.log('\n---\n');

if (!apiKey || !from || !to) {
  console.error('❌ Missing required environment variables!');
  process.exit(1);
}

sgMail.setApiKey(apiKey);

const msg = {
  to: to,
  from: from,
  subject: 'SendGrid Test Email - MetaWurks',
  text: 'This is a test email from your MetaWurks contact form.',
  html: '<strong>This is a test email from your MetaWurks contact form.</strong>',
};

console.log('Sending test email...\n');

sgMail
  .send(msg)
  .then(() => {
    console.log('✅ SUCCESS! Email sent successfully!');
    console.log(`\nCheck the inbox of: ${to}`);
    console.log('Also check spam/junk folder if not in inbox.');
  })
  .catch((error) => {
    console.error('❌ ERROR sending email:\n');
    
    if (error.response) {
      console.error('Status:', error.response.statusCode);
      console.error('Body:', JSON.stringify(error.response.body, null, 2));
      
      const errors = error.response.body.errors || [];
      errors.forEach(err => {
        console.error('\nError:', err.message);
        
        if (err.message.includes('not verified')) {
          console.error('\n⚠️  SOLUTION: Verify the sender email in SendGrid Dashboard');
          console.error('Go to: https://app.sendgrid.com/settings/sender_auth/senders');
        }
        if (err.message.includes('API key')) {
          console.error('\n⚠️  SOLUTION: Check your API key is correct');
        }
      });
    } else {
      console.error(error.message || error);
    }
  });

