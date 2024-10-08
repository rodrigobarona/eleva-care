const IMGIX_URL = process.env.NEXT_PUBLIC_IMGIX_URL;

export default function imgixLoader({ src, width, quality = 75 }) {
  const url = new URL(`${IMGIX_URL}${src}`);
  const params = url.searchParams;

  // Ensure quality is a valid number before using it
  if (quality !== undefined) {
    params.set('q', quality.toString());
  }

  params.set('auto', params.getAll('auto').join(',') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());
  return url.href;
}
