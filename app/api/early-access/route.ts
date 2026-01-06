// import { NextResponse } from "next/server";
// import sgMail from "@sendgrid/mail";
// import crypto from "crypto";

// const LINK_EXPIRATION_HOURS = 48;

// // In-memory token storage (consider using a database for production)
// const tokenStore = global.tokenStore || new Map();
// if (!global.tokenStore) {
//   global.tokenStore = tokenStore;
// }

// // Auto-cleanup expired tokens every hour
// if (!global.cleanupInterval) {
//   global.cleanupInterval = setInterval(() => {
//     const now = Date.now();
//     for (const [token, data] of tokenStore.entries()) {
//       if (data.expiresAt < now) {
//         tokenStore.delete(token);
//       }
//     }
//   }, 60 * 60 * 1000); // Run every hour
// }

// export async function POST(request: Request) {
//   try {
//     const { email, name } = await request.json();

//     if (!email || !name) {
//       return NextResponse.json(
//         { message: "Email and name are required" },
//         { status: 400 }
//       );
//     }

//     const sendGridApiKey = process.env.SENDGRID_API_KEY;
//     const sendGridFromEmail = process.env.SENDGRID_FROM_EMAIL || "noreply@metawurks.com";
//     const signupUrl = process.env.NEXT_PUBLIC_SIGNUP_URL;

//     if (!sendGridApiKey) {
//       return NextResponse.json(
//         { 
//           message: "SendGrid API key is not configured",
//           error: "Please set SENDGRID_API_KEY environment variable" 
//         },
//         { status: 500 }
//       );
//     }

//     if (!signupUrl) {
//       return NextResponse.json(
//         { 
//           message: "Signup URL is not configured",
//           error: "Please set NEXT_PUBLIC_SIGNUP_URL environment variable" 
//         },
//         { status: 500 }
//       );
//     }

//     // Generate secure token
//     const token = crypto.randomBytes(32).toString('hex');
//     const expiresAt = Date.now() + (LINK_EXPIRATION_HOURS * 60 * 60 * 1000);

//     // Store token
//     tokenStore.set(token, {
//       email,
//       expiresAt,
//     });

//     // Build magic link
//     const magicLink = `${signupUrl}?token=${token}&email=${encodeURIComponent(email)}`;

//     sgMail.setApiKey(sendGridApiKey);

//     const emailContent = {
//       to: email,
//       from: sendGridFromEmail,
//       subject: "Your Early Access to MetaWurks",
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <div style="background: linear-gradient(135deg, #3b82f6, #1e40af); padding: 40px; text-align: center;">
//             <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to MetaWurks</h1>
//           </div>
//           <div style="padding: 40px; background-color: #f9fafb;">
//             <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//               <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6;">
//                 Hi ${name},
//               </p>
//               <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #374151;">
//                 Thank you for requesting early access to MetaWurks! We're excited to have you join us.
//               </p>
//               <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #374151;">
//                 Click the button below to create your account. This link will expire in 48 hours.
//               </p>
//               <div style="text-align: center; margin: 30px 0;">
//                 <a href="${magicLink}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
//                   Get Started
//                 </a>
//               </div>
//               <p style="margin: 30px 0 10px 0; font-size: 14px; color: #6b7280;">
//                 Or copy and paste this link into your browser:
//               </p>
//               <p style="margin: 0; font-size: 12px; color: #9ca3af; word-break: break-all;">
//                 ${magicLink}
//               </p>
//               <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
//                 <p style="margin: 0; font-size: 14px; color: #6b7280;">
//                   <strong>Security Notice:</strong> This link is unique to your email and can only be used once. It will expire in 48 hours.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div style="background-color: #f3f4f6; padding: 20px; text-align: center;">
//             <p style="color: #6b7280; font-size: 14px; margin: 0;">
//               This email was sent from MetaWurks Early Access
//             </p>
//             <p style="color: #9ca3af; font-size: 12px; margin: 10px 0 0 0;">
//               If you didn't request early access, you can safely ignore this email.
//             </p>
//           </div>
//         </div>
//       `,
//       text: `
// Hi ${name},

// Thank you for requesting early access to MetaWurks!

// Click the link below to create your account (expires in 48 hours):
// ${magicLink}

// If you didn't request early access, you can safely ignore this email.

// ---
// MetaWurks Early Access
//       `,
//     };

//     await sgMail.send(emailContent);

//     return NextResponse.json(
//       { 
//         message: "Early access link sent successfully",
//         expiresIn: `${LINK_EXPIRATION_HOURS} hours`
//       },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("Early access request error:", error);

//     let errorMessage = "Failed to process early access request";
//     let errorDetails = "An unknown error occurred";

//     if (error.response) {
//       const sgError = error.response.body;
      
//       if (sgError.errors && sgError.errors.length > 0) {
//         errorDetails = sgError.errors[0].message;
        
//         if (errorDetails.includes("API key")) {
//           errorMessage = "Invalid or expired SendGrid API key";
//         } else if (errorDetails.includes("not verified")) {
//           errorMessage = "Sender email address is not verified in SendGrid";
//         }
//       }
//     } else if (error.message) {
//       errorDetails = error.message;
//     }

//     return NextResponse.json(
//       { message: errorMessage, error: errorDetails },
//       { status: 500 }
//     );
//   }
// }

