const fs = require('fs');
const { encrypt, decrypt } = require('./encryption');

class SecureEnclave {
    constructor(filePath = 'secure-data.json') {
        this.filePath = filePath;
    }

    storeData(data) {
        const { encrypted, iv } = encrypt(data);
        const payload = { encrypted, iv };
        fs.writeFileSync(this.filePath, JSON.stringify(payload)); // Save to a file
        console.log('Data securely stored in file.');
    }

    retrieveData() {
        if (!fs.existsSync(this.filePath)) throw new Error('No data file found.');
        const payload = JSON.parse(fs.readFileSync(this.filePath, 'utf-8')); // Read from the file
        const decrypted = decrypt(payload.encrypted, payload.iv);
        return decrypted;
    }
}

module.exports = SecureEnclave;
