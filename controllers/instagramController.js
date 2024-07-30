const axios = require('axios');

const getInstagramPhotos = async (req, res) => {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,thumbnail_url,permalink&access_token=${accessToken}`;

  try {
    const response = await axios.get(url);
    const mediaData = response.data.data.filter(item => item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM');
    res.render('instagram', { mediaData });
  } catch (error) {
    console.error('Error fetching Instagram photos:', error);
    res.status(500).send('Server Error');
  }
};

module.exports = { getInstagramPhotos };
