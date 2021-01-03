// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

var Posts;

exports.createPost = (event, context) => {
    const parseBody = JSON.stringify(event.body);

    const createPost = {
        name: parseBody.name,
        email: parseBody.email,
        phone: parseBody.phone
    };

    Posts = createPost;

    console.log("Name: " + createPost.name);
    console.log("Name: " + createPost.email);
    console.log("Name: " + createPost.phone);

    response = {
        'statusCode': 200,
        'body': JSON.stringify({
            message: 'Post successfully created!!!'
        })
    };
    return response;
}


