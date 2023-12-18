export const getThumbnail = (url: string) => {
  const parts = url.split('/');

  // get the filename
  const fileName = parts.pop();
  const segments = fileName?.split('.');
  const fileExtension = segments?.pop();

  const fileNameWithoutExtension = segments?.join('.');
  return `${parts.join('/')}/${fileNameWithoutExtension}m.${fileExtension}`;
};
