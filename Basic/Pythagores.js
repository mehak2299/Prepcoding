let a=3
let b=5
let c=4
let ans;
max=Math.max(a,b,c)
console.log(max)
if(a==max)
{
     ans=(a*a==(b*b+c*c))
}
else if(b==max)
{
    ans=(b*b==(a*a+c*c))

}
else{
    ans=(c*c==(b*b+a*a))

}
console.log(ans)