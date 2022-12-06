import * as colorMapFunc from './misaligned.js';
import { expect } from "chai";

let result = colorMapFunc.createColorMap();
expect(result.length).equals(25);
let refManual = colorMapFunc.formatColorMap(10, 'Red', 'Slate');
console.log(refManual);
expect(refManual).to.be.equals('10 | Red    | Slate');