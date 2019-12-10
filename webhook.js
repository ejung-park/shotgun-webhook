const fetch = require('node-fetch');

const headers = {
  "accept": "application/json",
  "content-type": "application/json; charset=utf-8",
  "x-sg-signature": "sha1=f96723683ae91d3347d57827867ded7425b2db95",
  "x-sg-webhook-id": "4d548e39-f7ad-42cf-91df-29ef430e01e4",
  "x-sg-delivery-id": "fa1c6641-46f0-4304-ad46-0b671a6f54a0",
  "x-sg-event-batch-id": "49598489001917805627563987691110856662646952884824965490",
  "x-sg-event-batch-size": "3",
  "x-sg-webhook-site-url": "https://mazingaweb.shotgunstudio.com/",
  "x-sg-event-batch-index": "1"
};

//https://yoursite.shotgunstudio.com/api/v1/webhook/deliveries/{record_uuid}
fetch('https://mazingaweb.shotgunstudio.com/api/v1/webhook/deliveries/4d548e39-f7ad-42cf-91df-29ef430e01e4',
{
  method: 'GET',
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});