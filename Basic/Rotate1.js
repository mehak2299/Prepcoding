let n1 = 12345
k = 2
let count = 0;
let n=n1
//Count digits
while (n != 0) {
    rem = n % 10;
    count += 1
    n = Math.round(n / 10)
}
console.log("count", count)
k=k%10
if(k<0)
{
    k=k+count
}
let mul=1;
let div=1;

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
let q=Math.floor(n1/div);
let r=n1%div;
let ans=r*mul+q
console.log(ans)
