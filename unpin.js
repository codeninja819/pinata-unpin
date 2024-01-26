const axios = require('axios');
const path = require('path/');

require('dotenv').config();
(async () => {
  var config = {
    method: 'get',
    url: 'https://api.pinata.cloud/data/pinList?status=pinned&pinSizeMin=100',
    headers: {
      Authorization: `Bearer ${process.env.PINATA_API_JWT}`,
    },
  };

  const res = await axios(config);
  console.log('res.data :>> ', res.data);
  

  res.data.rows.forEach(async (item) => {
    var config = {
      method: 'delete',
      url: `https://api.pinata.cloud/pinning/unpin/${item.ipfs_pin_hash}`,
      headers: {
        Authorization: `Bearer ${process.env.PINATA_API_JWT}`,
      },
    };
    const res = await axios(config);
    console.log(res.data);
  });
})();
