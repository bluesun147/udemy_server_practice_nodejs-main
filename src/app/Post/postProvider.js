const {pool} = require("../../../config/database");
const postDao = require("./postDao");

exports.retrieveUserPosts = async function(userIdx) {
    const connection = await pool.getConnection(async (conn) => conn);
    const userPostsResult = await postDao.selectUserPosts(connection, userIdx);

    connection.release();

    return userPostsResult;
}

// 게시물 정보 조회
exports.retrievePostList = async function(userIdx) {
    const connection = await pool.getConnection(async (conn) => conn);
    const postListResult = await postDao.selectPosts(connection, userIdx);

    for (post of postListResult) { // 반복문 통해 뽑아와서 post 변수에 할당
        const postIdx = post.postIdx; // 게시물 사진 하나하나 조회
        const postImgResult = await postDao.selectPostImgs(connection, postIdx);
        post.imgs = postImgResult; // imgs 속성 넣기
    }

    connection.release();

    return postListResult;
}