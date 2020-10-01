require("dotenv").config();

const SECRET = process.env.SECRET_KEY || 'test';

export default SECRET;