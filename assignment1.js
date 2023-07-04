function ispositive (num) {
      if(num>0) {
      return "is positive number" ;
      }
      else if (num<0) {
        return "is negative number";
      }
        else if (num==0){
            return "Given number is zero";
        }
    };
console.log(ispositive(3))
console.log(ispositive(4))
console.log(ispositive(0))

// 2
const findlargenum = (arr)=>
{
    let largestno= arr[0];

    for (let i = 0; i<arr.length;i++ )
    {
        if(arr[i]>largestno)
        {
            largestno = arr[i];
        }
    }
    return largestno;
}

const arr = new Array(1,2,3,15,6);
console.log(arr)
const largestno = findlargenum(arr);
console.log(largestno);


//3

var obj = {
    radius: 2,
    height : 0,
    area: function()
    {
        const pi = Math.PI;
        return pi* Math.pow(obj.radius,2)*obj.height;
    }
    
};
// obj.radius = 4;
obj.height = 2;
const cylinder = obj.area();
console.log("area is"+cylinder );

//4
//  the output is undefined , because  function or variable should use before console.


