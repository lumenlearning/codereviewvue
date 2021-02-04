// creates local copies of InVision DSM data
// and generates Sass files: _color-lists.scss and _color-variations.scss
// to run, use the following command from the CLI:
// `npm run update-tokens`
require('dotenv').config();
const fs = require('fs');
const download = require('download');

download(
  'https://projects.invisionapp.com/dsm-export/lumen-learning/lumen-learning/_style-params.scss?key=' +
    process.env.INVISION_KEY,
).then((data) => {
  fs.writeFileSync('./src/assets/scss/_dsm-tokens.scss', data);
});
