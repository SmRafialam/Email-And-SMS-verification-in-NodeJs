const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


const app = express()
dotenv.config()

// database connection
mongoose.connect(process.env.DB_URl, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log('Database connected successfully');
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is currently 🏃 on port ${process.env.PORT}`)
    })
})
.catch(err=> {
    console.log(err)
})


const oauth2Client = new OAuth2(
    "551848636049-h58f86a17c32bg71bouooaptug1g5ckv.apps.googleusercontent.com", 
    "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",
    "https://developers.google.com/oauthplayground" 
);

oauth2Client.setCredentials({
    refresh_token: "1//04tMksOjRrfeLCgYIARAAGAQSNwF-L9IryT36_oS-HkGiDRrpkxFi-CBxc7RKcuuWYwCukjzZi_GfKp-3Vf6uQ3edB8fljshsSR4"
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: "smrafialam007@gmail.com", 
         clientId: "551848636049-h58f86a17c32bg71bouooaptug1g5ckv.apps.googleusercontent.com",
         clientSecret: "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",
         refreshToken: "1//04tMksOjRrfeLCgYIARAAGAQSNwF-L9IryT36_oS-HkGiDRrpkxFi-CBxc7RKcuuWYwCukjzZi_GfKp-3Vf6uQ3edB8fljshsSR4",
         accessToken: "ya29.a0AeTM1ienbbnnodAFNmZrnJeZp7jhmBERFsorq6V4ME9QZjZtXOdjWqhxtNthtFo_JSLoxlduewpbmvEihutfpiEDULdzzaP_l73m0gCaGfI_EkpK-nSmfxW4Rhij6xnuZd1Urrn9g4Jvh_oubAlMUIc2aGZ2aCgYKAb0SARESFQHWtWOm_JFFmG50NluhKal9xESvxA0163"
    }
});

tls: {
    rejectUnauthorized: false
  }

const mailOptions = {
    from: "smrafialam007@gmail.com",
    to: "smrafialam@gmail.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>Hello THere!Is there anyone here?Say Something!!!!!!</b>"
};

smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
});

