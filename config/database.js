const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'database-1.cvibq9icf6cu.ap-northeast-2.rds.amazonaws.com', // rds 엔드포인트
    user: 'admin', // rds 유저이름
    port: '3306',
    password: 'bluesun147', // rds 비번
    database: 'haechanDB' // db 스키마
});

module.exports = {
    pool: pool
};