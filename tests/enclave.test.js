const SecureEnclave = require('../src/enclave');

test('SecureEnclave stores and retrieves data securely', () => {
    const enclave = new SecureEnclave();
    const data = 'Sensitive Data';
    enclave.storeData(data);

    expect(enclave.retrieveData()).toBe(data);
});
