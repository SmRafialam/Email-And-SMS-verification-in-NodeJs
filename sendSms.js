const twilio = require('twilio');
// const dotenv = require("dotenv");

// const app = express()
// dotenv.config()

// app.listen(process.env.PORT || 5000, () => {
//   console.log(`Server is currently 🏃 on port ${process.env.PORT}`)
// });

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Account SID from www.twilio.com/console
const authToken = 'your_auth_token'; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from Node',
    to: '+12345678901', // Text this number
    from: '+12345678901', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));



client.calls
  .create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: '+14155551212',
    from: '+15017250604',
  })
  .then(call => console.log(call.sid));


  client
  .calls('CA42ed11f93dc08b952027ffbc406d0868')
  .fetch()
  .then(call => console.log(call.to));



client.calls.each(call => console.log(call.direction));