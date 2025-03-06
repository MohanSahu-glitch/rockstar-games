import { Dimension } from './types';

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
export const getCroppedImageUrl = (url: string, dimension: Dimension) => {
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return (
    url.slice(0, index) +
    `crop/${String(dimension.x)}/${String(dimension.y)}/` +
    url.slice(index)
  );
};
