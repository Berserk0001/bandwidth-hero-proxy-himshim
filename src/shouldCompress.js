const MIN_COMPRESS_LENGTH = 1024; // Adjust the minimum compress length as desired
const MIN_TRANSPARENT_COMPRESS_LENGTH = MIN_COMPRESS_LENGTH * 10;

function shouldCompress(req) {
  const { originType, originSize, avif } = req.params;

  if (!originType.startsWith('image')) {
    return false;
  }
  if (originSize === 0) {
    return false;
  }
  if (avif && originSize < MIN_COMPRESS_LENGTH) {
    return false;
  }
  if (!avif && (originType.endsWith('png') || originType.endsWith('gif')) && originSize < MIN_TRANSPARENT_COMPRESS_LENGTH) {
    return false;
  }

  return true;
}

module.exports = shouldCompress;
