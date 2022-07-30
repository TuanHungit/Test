// abc12345as
// 

function reverseString2(str) {
    const tempArr = str.split("");
    let r = str.length - 1;
    let l = 0;
    while (l < r) {
        if (!isNaN(+str[l])) {
            l++;
        } else if (!isNaN(+str[r])) {
            r--;
        } else {
            swap(tempArr, l , r);
            l++;
            r--;
        }
    }
    return tempArr.join("");
}
function swap(arr, l, r) {
    const temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
} 

console.log(reverseString2("abc12345asd789w"));