let n =15234
let p=1;
let ans=0
while(n>0)
{ 
    rem=n%10;
    ans=ans+p*Math.pow(10,rem-1)
    n=Math.floor(n/10);
    p=p+1
}
console.log("ans",ans)
