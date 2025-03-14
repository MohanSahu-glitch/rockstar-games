import { Dimension } from './types';
import fallback from '../src/assets/fallback.webp';

/**
 * Checks whether element type is a void function or not
 */
export const isVoidFunction = (input: unknown): input is () => void => {
  return typeof input === 'function';
};

/**
 * Adds dimensions required in the URL to fetch images.
 * Use this for optimizing API call performance
 */
export const getCroppedImageUrl = (
  url: string | null,
  dimension: Dimension,
) => {
  if (url === null) {
    return fallback;
  }
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return (
    url.slice(0, index) +
    `crop/${String(dimension.x)}/${String(dimension.y)}/` +
    url.slice(index)
  );
};
