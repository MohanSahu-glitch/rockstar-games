/**
 * Checks whether element type is a void function or not
 */
export const isVoidFunction = (input: unknown): input is () => void => {
  return typeof input === 'function';
};
