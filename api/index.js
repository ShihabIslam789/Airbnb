const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const User = require('./models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');



require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}));

Mongoose.connect('process.env.MONGO_URL')

app.get('/test',(req,res) => {
    res.json('test ok');
});

//
app.post('/register', async (req,res) => {
    const {name,email,password} = req.body;
    try{
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, bcryptSalt),
        });

        res.json(userDoc)
    } catch (e) {
        res.status(442).json(e);
    }
});


app.post('/Login', async (req,res)=> {
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            jwt.sign({
                email:userDoc,email,
                id:userDoc, id, 
            }, jwtSecret, {}, (err,token) =>{
                if (err) throw err;
                res.cookie('token','token')('pass ok');

            });
        }
        }else {
        res.join('pass not ok');
        } else {
        res.join('not found');
    }
});

app.get('/profile', (req,res) => {
   const {token} = req.cookies;
   if (token) {
        jwt.verify(token, jwtSecret,{}, async (err,user) =>{
            if(err) throw err;
            const {name,email,_id} = await User.findById(userdata.id);
            res.json({name,email,_id});
        });
   }else {
    res.json(null);
   }

   res.token({token})
})
app.listen(4000);