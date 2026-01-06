// import { NextResponse } from "next/server";

// // Access the same token store
// const tokenStore = global.tokenStore || new Map();

// export async function GET(request: Request) {
//   return verifyToken(request);
// }

// export async function POST(request: Request) {
//   return verifyToken(request);
// }

// async function verifyToken(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     let token = searchParams.get("token");
//     let email = searchParams.get("email");

//     // If not in URL, try to get from body (for POST)
//     if ((!token || !email) && request.method === "POST") {
//       const body = await request.json();
//       token = body.token;
//       email = body.email;
//     }

//     if (!token || !email) {
//       return NextResponse.json(
//         { message: "Token and email are required" },
//         { status: 400 }
//       );
//     }

//     // Check if token exists
//     const tokenData = tokenStore.get(token);

//     if (!tokenData) {
//       return NextResponse.json(
//         { 
//           message: "Invalid or expired token",
//           error: "This link is invalid or has already been used"
//         },
//         { status: 400 }
//       );
//     }

//     // Verify email matches
//     if (tokenData.email !== email) {
//       return NextResponse.json(
//         { 
//           message: "Email mismatch",
//           error: "This link was not generated for this email address"
//         },
//         { status: 400 }
//       );
//     }

//     // Check expiration
//     if (Date.now() > tokenData.expiresAt) {
//       tokenStore.delete(token);
//       return NextResponse.json(
//         { 
//           message: "Link has expired",
//           error: "This early access link has expired. Please request a new one."
//         },
//         { status: 400 }
//       );
//     }

//     // Token is valid - delete it (one-time use)
//     tokenStore.delete(token);

//     return NextResponse.json(
//       { 
//         message: "Token verified successfully",
//         email: tokenData.email,
//         verified: true
//       },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("Token verification error:", error);

//     return NextResponse.json(
//       { 
//         message: "Verification failed",
//         error: error.message || "An unknown error occurred"
//       },
//       { status: 500 }
//     );
//   }
// }

