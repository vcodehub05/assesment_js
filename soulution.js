//first question reverse string
function rev_string(str){
    let rev_ar=str.split(" ");
    rev_ar=rev_ar.reverse();
    return(rev_ar.join(" "))
}

console.log(rev_string("i am vivek"))

//second question perimeter of trianlgle
function perimeter_of_triangle(a,b,c){
    return a+b+c;
}
console.log(perimeter_of_triangle(4,6,7));




//third question factorial
function factorial(num){
    if (num==0)
    {
        return 1;
    }
    else
    {
        return(num*factorial(num-1));

    }
    
}
console.log(factorial(5));


//fourth question count the number of one
//first approch
function Count_one(arr)
{
l=arr.length;
t=arr.lastIndexOf(0);
return((l-t)-1);

}
console.log(Count_one(arr = [0,0,0,0,1,1,1,1,1,1,1]));

//second approch 

const arr=[0,0,0,1,1,1,1,1,1,1];
function Count_one(arr)
{
    l=arr.length;
    if(arr[0]==1){
      return arr.length;
       
    }
    if(arr[l-1]==0)
    {return 0;}
    let start=0;
    
   let end=l-1;
   while (start<=end){
 
        // Find the mid index
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===1) {
        if(arr[mid-1]===0){return (l-mid);}
        else{end=mid-1;}
         }
       else{
       if(arr[mid+1]===1){return (l-mid-1);}
       else{
       start=mid+1;
       }
       }
 
   }
  
    return 0;
}
console.log(Count_one(arr));
    

