let n=1440;
for(let i=2;i*i<=n;i++)
{
  while(n%i==0)
  {
    console.log(i)
    n=Math.round(n/i)
  }
}