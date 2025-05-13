import { NextResponse } from "next/server";

export function GET() {
  const content = `
User-agent: *
Disallow:

Sitemap: https://jellymofii.github.io/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
