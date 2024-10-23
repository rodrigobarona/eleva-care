const IMGIX_URL = process.env.NEXT_PUBLIC_IMGIX_URL;

export default function imgixLoader({ src, width, quality }) {
  // Check if the environment is not development (i.e., not localhost)
  if (process.env.NODE_ENV === 'development') {
    return src; // Return the raw image source URL for localhost (dev mode)
  }

  // Construct the Imgix URL in production
  const url = new URL(`${IMGIX_URL}${src}`);
  const params = url.searchParams;
  params.set('auto', params.getAll('auto').join(',') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());
  params.set('q', (quality || 50).toString());

  return url.href;
}
