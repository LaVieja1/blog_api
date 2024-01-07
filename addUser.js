const User = require("./models/User");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
mongoose.set("strictQuery", false)
const bcrypt = require('bcryptjs')

//database connection
const mongoDB = process.env.MONGODB_URL

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}

async function userCreate(userName, password) {
    bcrypt.hash(password, 10, async (err, hashedPassword) => {
        if (err) {
            return console.log('Cannot encrypt');
        }

        const userDetail = new User({
            userName: userName,
            password: hashedPassword
        });
        const user = new User(userDetail);
        await user.save();
    });

    console.log('User added');
}

userCreate('s@gmail.com', "123456");

