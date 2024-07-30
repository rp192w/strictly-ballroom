const axios = require('axios');

const getInstagramPhotos = async (req, res) => {
  const accessToken = 'IGQWRPc2FmRUEzQ2FaLWg5cnFrVTd6bHB3UHVCREhpbWZAVUVR4RHVwX01nSW1FWC1zeWxBVFRhMVE0RUpEUDZAmdEN2Rzk2a3lJU3VFU0pFdlN6NXFmdUU4Rk5NdXljaUpaUkpHM0RMS2JwUS1CeE1VWFVvS0RZATlkZD'; // Replace with your actual long-lived access token
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
