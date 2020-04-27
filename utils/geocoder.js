const NodeGeacoder = require('node-geocoder');

const options = {
 provider: process.env.MAPQUEST_PROVIDER,
 httpsAdapter: 'https',
 apiKey: process.env.MAPQUEST_API_KEY,
 formatter: null
}

const geocoder = NodeGeacoder(options);
module.exports = geocoder;