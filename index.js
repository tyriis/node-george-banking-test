var ErsteBankClient = require('erste-bank-client');

var from = new Date();
from.setDate(from.getDay()-10);
var to = new Date();
var ebc = new ErsteBankClient({
    username: '12345678',
    password: 'my_secret_pass',
    iban: 'ATxxxxxxxxxxxxx',
    account_id: '' // provide to save one additional call 
});
ebc.access_token().then(function() {
  ebc.getDataExport(from, to)
    .then(function(result) {
      console.log(result);
    })

});
