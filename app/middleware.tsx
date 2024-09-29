import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  // Get the 'Accept-Language' header from the request
  const languageHeader = request.headers.get('Accept-Language');
  
  // Default language
  let language = 'en'; // Fallback to English

  if (languageHeader) {
    // Split the header to get the preferred language
    const languages = languageHeader.split(',');
    // Check for supported languages
    const supportedLanguages = ['en', 'pt', 'es'];
    
    // Find the first supported language
    for (const lang of languages) {
      const langCode = lang.trim().split('-')[0]; // Get the language code (e.g., 'en' from 'en-US')
      if (supportedLanguages.includes(langCode)) {
        language = langCode;
        break;
      }
    }
  }

  // Set the language in a cookie or as a URL parameter
  const response = NextResponse.next();
  response.cookies.set('lang', language, { path: '/' }); // Set the language cookie

  return response;
}

// Specify the paths where the middleware should run
export const config = {
  matcher: ['/'], // Apply middleware to the root path or adjust as needed
};
