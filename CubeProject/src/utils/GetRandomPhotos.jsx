export const getRandomPhotos = (photosArray, count) => {
  const shuffled = photosArray.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
