let myData = document.getElementById("myData");
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

myData.innerHTML = nums;

for (var i = 0; i < nums.length; i++) {
    //let item = nums[i];

    if (nums[i] / 3) {
        myData.innerHTML = "beep";
        console.log(nums[i]);
    }
}
