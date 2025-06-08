const placeholderBrokenImage = import.meta.glob('../assets/images/no-image-placeholder.svg', {eager: true});
const allProjectGalleryImages = import.meta.glob('../assets/images/projects/**/gallery/**/*.{png,jpg,jpeg,webp}', {eager: true});
const allProjectHeaderImages = import.meta.glob('../assets/images/projects/**/header/**/*.{png,jpg,jpeg,webp}', {eager: true});

/**
 *
 * @param {Record<string, unknown>} allProjectImages
 * @param {string} fullPath
 * @param {string} projectFolderName
 * @param {string} imageName
 * @returns {string}
 * @private
 */
function _getImage(allProjectImages, fullPath, projectFolderName, imageName){
  if (allProjectImages[fullPath]) {
    return allProjectImages[fullPath].default;

  }else{
    console.warn(`Imagen no encontrada en ${projectFolderName}: ${imageName} | La ruta ${fullPath} no existe.}`);
    return placeholderBrokenImage['../assets/images/no-image-placeholder.svg'].default;
  }
}


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

  return _getImage(allProjectGalleryImages, fullPath, projectFolderName, imageName)
}

/**
 * Get URL of image from project folder (only to header image)
 *
 * @param projectFolderName
 * @param imageName
 * @param isThumbnail
 * @returns {string}
 */
function getHeaderImageURL(projectFolderName, imageName, isThumbnail = false) {
  let fullPath;

  if (isThumbnail) {
    fullPath = `../assets/images/projects/${projectFolderName}/header/thumbnail/${imageName}`;
  } else {
    fullPath = `../assets/images/projects/${projectFolderName}/header/${imageName}`;
  }

  return _getImage(allProjectHeaderImages, fullPath, projectFolderName, imageName)
}

export { getGalleryImageURL, getHeaderImageURL };