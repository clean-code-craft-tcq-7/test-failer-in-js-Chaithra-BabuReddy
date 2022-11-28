const { expect } = require('chai');

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

    let arr = [];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            arr.push(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return arr;
}

result = print_color_map();
expect(result.length).equals(25);
result.forEach(element => {
    //split the row based on '|' and get the length of value of first column,which is indexOf firt pipe.
    let firstPipeIndex = element.split('|')[0].length;
    expect(firstPipeIndex).equals(3);
    let secondPipeIndex = element.split('|')[1].length;
    expect(secondPipeIndex).equals(8);
});
