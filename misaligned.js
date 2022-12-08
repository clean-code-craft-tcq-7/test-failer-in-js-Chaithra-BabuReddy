const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
const longestMajorColorLen=7;
export function createColorMap() {
    let arr = [];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            let a = formatColorMap(i * 5 + j + 1, majorColors[i], minorColors[j])
            arr.push(a);
        }
    }
    return arr;
}
export function formatColorMap(pairNo, majorColor, minorColor) {
    let str;
    str = (pairNo < 10) ? (pairNo + '  | ' + majorColor) : (pairNo + ' | ' + majorColor)
    for (let i = 0; i < longestMajorColorLen - majorColor.length; i++) {
        str = str + " ";
    }
    str = str + '| ' + minorColor;
    return str;
}

function print_color_map() {
    let colorMap = createColorMap();
    let refColorCodeManual = '';
    colorMap.forEach((formattedStr) => {
        refColorCodeManual = refColorCodeManual + formattedStr + '\n'
    })
    console.log(refColorCodeManual)
}
print_color_map();

