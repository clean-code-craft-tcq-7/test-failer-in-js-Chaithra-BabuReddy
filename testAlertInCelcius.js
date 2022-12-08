import { expect } from 'chai';
import { alertFailureCount, threshold, alertInCelcius, networkAlert } from './alerter.js';
let networkAlertStub = function (celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees from stub`);
    if (celcius < threshold) {
        return 200;
    } else {
        return 500;
    }
}

alertInCelcius(95, networkAlertStub);
expect(alertFailureCount).to.be.equals(0);
alertInCelcius(100, networkAlertStub);
expect(alertFailureCount).to.be.equals(1);
alertInCelcius(105, networkAlertStub);
expect(alertFailureCount).to.be.equals(2);
let result = networkAlert(35);
expect(result).to.be.equal(200);