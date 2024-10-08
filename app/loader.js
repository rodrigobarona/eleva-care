export default function imgixLoader({ src, width, quality = 75 }) { // Set default quality
  const url = new URL(`https://eleva-care-preview.imgix.net${src}`);
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
