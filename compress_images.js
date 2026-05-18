const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'src', 'images');

async function processImages() {
  console.log('Starting compression...');
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    
    // Check if it's a file
    if (!fs.statSync(filePath).isFile()) continue;

    const ext = path.extname(file).toLowerCase();
    
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      const stat = fs.statSync(filePath);
      // Only process files larger than 500KB
      if (stat.size > 500 * 1024) {
        console.log(`Compressing ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)...`);
        const tempPath = filePath + '.tmp' + ext;
        
        try {
          await sharp(filePath)
            .resize({ width: 1920, withoutEnlargement: true })
            .jpeg({ quality: 75, force: ext === '.jpg' || ext === '.jpeg' })
            .png({ quality: 75, compressionLevel: 8, force: ext === '.png' })
            .webp({ quality: 75, force: ext === '.webp' })
            .toFile(tempPath);
            
          fs.unlinkSync(filePath);
          fs.renameSync(tempPath, filePath);
        } catch (err) {
          console.error(`Error processing ${file}:`, err.message);
        }
      }
    }
  }
  console.log('Compression complete!');
}

processImages();
