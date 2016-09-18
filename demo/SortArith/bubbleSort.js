/**
 * Created by Administrator on 2016/9/18.
 */
//第一种冒泡排序
function bubbleSort (arr) {
    console.time("排序一耗时");
    for (var i = 0,len = arr.length;i < len;i++) {
        for (var j = 0;j < len-1-i;j++) {
            // console.log("正在比较:"+arr[j]+"和"+arr[j+1])
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            // console.log(arr);
        }
    }
    console.timeEnd("排序一耗时");
    return arr;
}
var arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log("最终结果:"+bubbleSort(arr));

