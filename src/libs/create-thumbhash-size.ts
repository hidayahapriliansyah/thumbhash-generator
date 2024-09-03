const createThumbhashSize = (maxPixel: number, imgWidth: number, imgHeight: number) => {
  let width, height;

  if (imgWidth > imgHeight) {
    const ratio = imgHeight / imgWidth;
    width = maxPixel;
    height = Math.round(maxPixel * ratio);
  } else {
    const ratio = imgWidth / imgHeight;
    height = maxPixel;
    width = Math.round(maxPixel * ratio);
  }

  return { width, height };
};

export default createThumbhashSize;
