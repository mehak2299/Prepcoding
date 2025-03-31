let n=15234
let p=1
let s=0;
while(n>0)
{
   
    rem=n%10
    console.log(rem)
    s=s+Math.pow(10,rem-1)*p
    console.log(s)
    n=Math.floor(n/10)
    p++
}