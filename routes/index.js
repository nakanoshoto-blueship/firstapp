const express = require('express');
const router = express.Router();

//サーバーサイドの処理を読み込み
const allPosts = require('../controllers/posts/allPosts');

//リクエストに対する実行処理を定義
router.get('/posts', allPosts);     

module.exports = router;