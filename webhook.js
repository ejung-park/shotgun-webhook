const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer some_token_to_sign_payload'

};

//https://yoursite.shotgunstudio.com/api/v1/webhook/deliveries/{record_uuid}
fetch('https://mazingaweb.shotgunstudio.com/api/v1/webhook/hooks/468003',
{
  method: 'GET',
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});