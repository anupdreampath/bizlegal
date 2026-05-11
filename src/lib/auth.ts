import { SignJWT, jwtVerify } from "jose";

const COOKIE_NAME = "biz_admin_session";
const ALG = "HS256";

function secretKey() {
  return new TextEncoder().encode(
    process.env.AUTH_SECRET || "dev-secret-change-me",
  );
}

export async function signSession(email: string) {
  return new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey());
}

export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey());
    return payload as { email: string; role: string };
  } catch {
    return null;
  }
}

export const SESSION_COOKIE = COOKIE_NAME;
