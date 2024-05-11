// Helpers functions
export const checkIfallImagesAreLoaded = (
  images: NodeListOf<HTMLImageElement>,
  callback: () => void,
) => {
  // loop through the images
  images.forEach((image) => {
    // Check if the image hasn't completed loading
    if (!image.complete) {
      // Add an event listener to the image
      image.addEventListener('load', () => {
        // Check if all the passed images completed loading
        if (Array.from(images).every((image) => image.complete)) {
            // Call the callback
            callback();
        }
      });
    }
  });
};
