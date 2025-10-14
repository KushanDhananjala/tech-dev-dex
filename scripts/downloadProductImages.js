const https = require('https');
const fs = require('fs');
const path = require('path');

// Product image URLs from official sources
const productImages = {
  'corsair-k95-rgb-platinum-xt': {
    name: 'Corsair K95 RGB Platinum XT',
    url: 'https://www.corsair.com/cdn/shop/products/K95_RGB_PLATINUM_XT_01_900x900.png',
    filename: 'corsair-k95-rgb-platinum-xt.jpg'
  },
  'razer-blackwidow-v4-pro': {
    name: 'Razer BlackWidow V4 Pro',
    url: 'https://assets2.razerzone.com/images/pnx.assets/2c3c0a3b1c0a0a0a0a0a0a0a0a0a0a0a/razer-blackwidow-v4-pro-500x500.png',
    filename: 'razer-blackwidow-v4-pro.jpg'
  },
  'steelseries-apex-pro': {
    name: 'SteelSeries Apex Pro',
    url: 'https://steelseries.com/cdn/shop/products/apex-pro-01_900x900.png',
    filename: 'steelseries-apex-pro.jpg'
  },
  'logitech-g915-tkl': {
    name: 'Logitech G915 TKL',
    url: 'https://www.logitech.com/content/dam/logitech/en/products/keyboards/g915-tkl/gallery/g915-tkl-top-view-graphite.png',
    filename: 'logitech-g915-tkl.jpg'
  }
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        console.log(`Failed to download ${url}: ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`Error downloading ${url}: ${err.message}`);
      reject(err);
    });
  });
}

async function downloadAllImages() {
  const keyboardsDir = 'public/images/hardware/peripherals/real/keyboards/';
  
  // Ensure directory exists
  if (!fs.existsSync(keyboardsDir)) {
    fs.mkdirSync(keyboardsDir, { recursive: true });
  }
  
  console.log('Downloading gaming keyboard images...');
  
  for (const [key, product] of Object.entries(productImages)) {
    try {
      const filepath = path.join(keyboardsDir, product.filename);
      await downloadImage(product.url, filepath);
    } catch (error) {
      console.log(`Skipping ${product.name}: ${error.message}`);
    }
  }
  
  console.log('Download complete!');
}

downloadAllImages().catch(console.error);
