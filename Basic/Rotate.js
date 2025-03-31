let n=27391;
let k=2;
let temp=n;
let count=0;
while(temp>0)
{
    count++;
    temp=Math.floor(temp/10)
}
k=k%count
if(k<0)
{
    k=k+count
}
let div=1;
let mul=1;
for(let i=1;i<=count;i++)
{
    if(i<=k)
    {
        div=div*10;
    }
    else{
        mul=mul*10;
    }
}
let q=Math.floor(n/div);
let r=n%div;
let ans=r*mul+q
console.log(ans)

