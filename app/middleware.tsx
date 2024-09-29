import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const languageHeader = request.headers.get('Accept-Language');
  let language = 'en'; // Default language

  if (languageHeader) {
    const languages = languageHeader.split(',');
    const supportedLanguages = ['en', 'pt', 'es'];

    for (const lang of languages) {
      const langCode = lang.trim().split('-')[0];
      if (supportedLanguages.includes(langCode)) {
        language = langCode;
        break;
      }
    }
  }

  const response = NextResponse.next();
  response.cookies.set('lang', language, { path: '/' }); // Set the language cookie

  return response;
}

export const config = {
  matcher: ['/'], // Apply middleware to the root path or adjust as needed
};
