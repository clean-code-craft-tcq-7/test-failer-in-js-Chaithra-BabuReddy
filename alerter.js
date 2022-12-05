const { expect } = require('chai');

alertFailureCount = 0;
const threshold =37;

function networkAlert(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    if (celcius<) {
        return 200;
    } else {
        return 500;
    }
}

function alertInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkAlert(celcius);
    if (returnCode != 200) {
        // non-ok response is not an error! Issues happen in life!
        // let us keep a count of failures to report
        // However, this code doesn't count failures!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        alertFailureCount += 1;
    }
}
