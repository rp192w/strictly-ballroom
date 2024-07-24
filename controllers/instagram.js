const express = require('express');
const axios = require('axios');
const router = express.Router();

const INSTAGRAM_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';

router.get('/instagram', async (req, res) => {
  try {
    const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
    const media = response.data.data;
    res.json(media);
  } catch (error) {
    console.error('Error fetching Instagram feed:', error);
    res.status(500).json({ error: 'Failed to fetch Instagram feed' });
  }
});

module.exports = router;
