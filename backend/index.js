const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const Doctor = require('./models/Doctor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

// Middleware
app.use(cors()); // Allow cross-origin requests from specified origin
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

// Database connection
const mongoUrl = "mongodb+srv://alirashidb38:2N7LeWts50XVNWPg@cluster0.70etjii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl, {
    useNewUrlParser:true
}).then(() => {
    console.log("Connected to database");
}).catch((e) => console.log(e));

// Register Route
app.post('/register', async (req,res) => {
    const {patientID,password} = req.body;
    try{
      const userDoc = await User.create({
        patientID,
        password: bcrypt.hashSync(password, salt),
      });
      res.json(userDoc);
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }
});

// Login route
app.post('/login', async (req,res) => {
    const {patientID,password} = req.body;
    const userDoc = await User.findOne({patientID});
    if (!userDoc) {
        return res.status(400).json('User not found');
    }
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({patientID, id: userDoc._id}, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id: userDoc._id,
          patientID,
        });
      });
    } else {
      res.status(400).json('Wrong credentials');
    }
});


app.post('/doctorregister', async (req,res) => {
    const {employeeID,password} = req.body;
    try{
      const doctorDoc = await Doctor.create({
        employeeID,
        password: bcrypt.hashSync(password, salt),
      });
      res.json(doctorDoc);
    } catch(e) {
      console.log(req.body)
      console.log(e);
      res.status(400).json(req);
    }
}
);


// Login route
app.post('/doctorlogin', async (req,res) => {
    console.log(req.body);
    const {employeeID,password} = req.body;
    const doctorDoc = await Doctor.findOne({employeeID});
    if (!doctorDoc) {
        return res.status(400).json('Doctor not found');
    }
    const passOk = bcrypt.compareSync(password, doctorDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({employeeID, id: doctorDoc._id}, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id: doctorDoc._id,
          employeeID,
        });
      });
    } else {
      res.status(400).json('Wrong credentials');
    }
});


// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        req.patientID = decoded.patientID;
        req.userId = decoded.id;
        next();
    });
}

// Protected route example
app.get('/profile', verifyToken, (req,res) => {
    // This route is protected, only accessible with a valid token
    res.json({ patientID: req.patientID, userId: req.userId });
});

// Logout route
app.post('/logout', (req,res) => {
    res.clearCookie('token').json({ message: 'Logged out successfully' });
});



// Start the server
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


