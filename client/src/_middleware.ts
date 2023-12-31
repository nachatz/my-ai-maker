import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface AuthResponse {
  data?: {
    auth: boolean;
  };
}

export default async function middleware(req: NextRequest) {
  try {
    const url = req.nextUrl.clone() as URL;
    const params = new URLSearchParams();
    params.set("callbackUrl", url.toString());
    url.search = params.toString();
    url.pathname = `/auth/login`;

    const response = await fetch(`${url.origin}/api/authSSR`, {
      headers: req.headers,
    });

    if (!response.ok) {
      url.pathname = `/`;
      return NextResponse.redirect(url);
    }

    const responseData = (await response.json()) as AuthResponse;
    const auth = responseData.data?.auth;

    if (auth !== undefined) {
      return !auth ? NextResponse.redirect(url) : NextResponse.next();
    } else return NextResponse.error();
  } catch (error) {
    return NextResponse.error();
  }
}

export const config = {
  matcher: ["/models", "/creation"],
};
