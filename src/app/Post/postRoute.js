module.exports = function(app) {
    const post = require('./postController');

    // 3.1 게시물 리스트 조회 API
    app.get('/posts', post.getPosts);

    // 3.2 게시물 생성
    app.post('/posts', post.postPosts);

    // 게시물 수정 api
    app.patch('/posts/:postIdx', post.patchPost);

    // 게시물 삭제
    app.patch('/posts/:postIdx/status', post.patchPostStatus);
}