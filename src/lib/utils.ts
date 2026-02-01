import { FileType, GameInstallment, ResourceType } from '../types/upload';

const buildBlobUriPath = (
  fileType: FileType,
  resourceType: ResourceType,
  key: string,
  game?: GameInstallment,
) => {
  // K.K. Slider song audio file
  if (fileType === 'audio' && resourceType === 'song') {
    return `audio/kk/${key}`;
  }

  // Hourly BGM audio file
  if (fileType === 'audio' && resourceType === 'hourly_bgm') {
    return `audio/hourly/${game}/${key}`;
  }

  // Full size image file
  if (fileType === 'images') {
    return `images/${resourceType}/${key}`;
  }

  // Icon image file
  if (fileType === 'icons') {
    return `icons/${resourceType}/${key}`;
  }

  throw new Error('Invalid combination of fileType and resourceType');
};

const getCoverImageUriFromAudioUri = (
  audioUri: string,
  resourceType: ResourceType,
) => {
  if (resourceType === 'hourly_bgm') {
    // TODO: Find a game logo to use as album cover art
  }
  const parts = audioUri.split('/');
  const audioStrIndex = parts.indexOf('audio');
  const fileNameStr = parts[parts.length - 1].split('.')[0];
  if (audioStrIndex === -1 || audioStrIndex + 2 >= parts.length) {
    throw new Error('Invalid audio URI format');
  }

  const coverImageUri = `images/song/${fileNameStr}.png`;
  return coverImageUri;
};

export { buildBlobUriPath, getCoverImageUriFromAudioUri };
