const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const postService = require("./postService");
const postProvider = require("./postProvider");

/*
    API No. 3.1
    API Name: 게시물 조회 API
    [GET] /posts?userIdx=
*/
exports.getPosts = async function(req, res) {
    /*
        Query String: userIdx
    */
    const userIdx = req.query.userIdx;

    // validation
    if(!userIdx) {
        return res.send(errResponse(baseResponse.USER_USERIDX_EMPTY));
    }
    if (userIdx <= 0) {
        return res.send(errResponse(baseResponse.USER_USERIDX_LENGTH));
    }

    const postListResult = await postProvider.retrievePostLists(userIdx);

    return res.send(response(baseResponse.SUCCESS, postListResult));
}

/*
    API No. 3.2
    API Name: 게시물 생성 API
    [POST] /posts
*/
exports.postPosts = async function(req, res) {
    /*
        Body: userIdx, content, postImgUrls
    */
    const { userIdx, content, postImgUrls } = req.body;


    if (!userIdx) {
        return res.send(errResponse(baseResponse.USER_USERIDX_EMPTY));
    } else if (postImgUrls.length <= 0) {
        return res.send(errResponse(baseResponse.POST_POSTIMGURLS_EMPTY));
    }

    if (userIdx <= 0) {
        return res.send(errResponse(baseResponse.USER_USERIDX_LENGTH));
    } else if (content.length > 450) {
        return res.send(errResponse(baseResponse.POST_CONTENT_LENGTH));
    }

    const createPostResponse = await postService.createPost(
        userIdx,
        content,
        postImgUrls
    );

    return res.send(createPostResponse);
}

/*
    API No. 3.3
    API Name: 게시물 수정 API
    [PATCH] /posts/:postIdx
*/
exports.patchPost = async function(req, res) {
    /*
    Body: content
    path cariables: postIdx
    */
   const postIdx = req.params.postIdx;
}