const { expect } = require('chai');

function pair() {
    this.majorColor;
    this.minorColor;
    this.pairNo;
}
function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

    let arr = [];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            let p = new pair();
            p.majorColor = majorColors[i];
            p.minorColor = minorColors[j];
            p.pairNo = (i * 5) + j;
            arr.push(p);
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return arr;
}

result = print_color_map();
expect(result.length).equals(25);
expect(result[0].majorColor).equal('White');
console.log(result[0].majorColor);
