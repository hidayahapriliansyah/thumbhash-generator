const getDataUrlSize = (dataUrl: string): number => {
  const base64String = dataUrl.split(',')[1];
  const sizeInBytes = Math.ceil(base64String.length * 3 / 4);
  return sizeInBytes;
};

export default getDataUrlSize;