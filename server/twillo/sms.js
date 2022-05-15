const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.sendMessage = (message) => {
    client.messages
        .create({
            body: message + "% is the precentage rooms",
            from: '+19788783518',
            to: '+972549303109'
        })
        .then(message => message)
        .catch(err => err)
}


