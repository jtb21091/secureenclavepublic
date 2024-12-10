const SecureEnclave = require('./enclave');

function main() {
    console.log("Starting Secure Enclave Simulation...");

    // Create an instance of SecureEnclave
    const enclave = new SecureEnclave();

    // Store some sensitive data
    const sensitiveData = "This is highly sensitive information.";
    enclave.storeData(sensitiveData); // This will create secure-data.json

    // Retrieve the stored data
    const retrievedData = enclave.retrieveData();
    console.log("Retrieved Data:", retrievedData);

    // Verify the retrieved data matches the original
    if (retrievedData === sensitiveData) {
        console.log("Secure Enclave is working as expected!");
    } else {
        console.error("Data mismatch! Something went wrong.");
    }
}

// Run the main function
main();
