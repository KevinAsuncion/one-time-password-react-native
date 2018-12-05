const twilio = require('twilio');

const accountSid = "AC8062ad623a1814373fd75bb16c609534";
const authToken = "5d120fa467e60be2142e9ffb8df783b6";

module.exports = new twilio.Twilio(accountSid, authToken);