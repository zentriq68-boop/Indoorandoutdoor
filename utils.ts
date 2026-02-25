/**
 * Encodes an image path for use in an img src attribute.
 * It encodes each segment of the path using encodeURIComponent while preserving the forward slashes.
 */
export const getEncodedImagePath = (path: string): string => {
  if (!path) return '';
  return path
    .split('/')
    .map(segment => encodeURIComponent(segment))
    .join('/');
};
