require('dotenv').config();
const AWS = require('aws-sdk');
const DynamoDB = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.createBook = async (event, context) => {
    const bookBody = JSON.parse(event.body);

    const createBooks = {
        id: context.awsRequestId,
        name: bookBody.name,
        author: bookBody.author
    };

    DynamoDB.put({
        TableName: tableName,
        Item: createBooks
    }).promise()
        .then(res => {
            return res({
                statusCode: 201,
                message: JSON.stringify('The book created successfully!!!')
            });
        }).catch(err => {
            return err({
                statusCode: err.statusCode,
                message: JSON.stringify(err)
            });
        }); 
}