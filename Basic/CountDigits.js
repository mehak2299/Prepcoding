const noOfDigits=(nos)=>{
    s=0
 for(let i=nos;i>0;i=Math.floor(i/10))
 {
    r=i%10
    // console.log(r)
    s++;
 }
 console.log("Sum of digits : ",s)
}
noOfDigits(12345)