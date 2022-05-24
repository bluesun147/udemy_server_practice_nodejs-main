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

    connection.release();

    return postListResult;
}