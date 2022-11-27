const { expect } = require('chai');

let alertFailureCount = 0;

function networkAlertStub(celcius,isSuccess) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    if (isSuccess) {
        return 200;
    } else {
        return 500;
    }
}

/**  parameters farenheit takes numbers to be converted, isSuccess takes boolen to alert success or failure */
function alertInCelcius(farenheit,isSuccess) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkAlertStub(celcius, isSuccess);
    if (returnCode != 200) {
        // non-ok response is not an error! Issues happen in life!
        // let us keep a count of failures to report
        // However, this code doesn't count failures!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        alertFailureCount += 1;
    }
}

alertInCelcius(400.5,true);
expect(alertFailureCount).equals(0);
alertInCelcius(303.6,false);
expect(alertFailureCount).equals(1);
alertInCelcius(200.6, true);
expect(alertFailureCount).equals(1);
console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');
