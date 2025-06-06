const allProjectGalleryImages = import.meta.glob('../assets/images/projects/**/gallery/**/*.{png,jpg,jpeg,webp}', {eager: true});
const placeholderBrokenImage = import.meta.glob('../assets/images/no-image-placeholder.svg', {eager: true});

/**
 * Get URL of image from project folder (only to gallery image)
 *
 * @param {string} projectFolderName
 * @param {string} imageName - Name of image file with extension
 * @param {boolean} [isThumbnail=false] - If true, get thumbnail image. Default is false.
 * @returns {string}
 */
function getGalleryImageURL(projectFolderName, imageName, isThumbnail = false) {
  let fullPath;

  if (isThumbnail) {
    fullPath = `../assets/images/projects/${projectFolderName}/gallery/thumbnail/${imageName}`;
  } else {
    fullPath = `../assets/images/projects/${projectFolderName}/gallery/${imageName}`;
  }

  if (allProjectGalleryImages[fullPath]) {
    return allProjectGalleryImages[fullPath].default;
  }

  console.warn(`Imagen no encontrada en ${projectFolderName}: ${imageName}`);
  return placeholderBrokenImage['../assets/images/no-image-placeholder.svg'].default;
}

export { getGalleryImageURL };