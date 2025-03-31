let n=24;
let n2=36;
let a=n;
let b=n2;

while(a%b!=0)
{
  let rem=a%b;
  a=b;
  b=rem;
}
let gcd=b;
let lcm=(n*n2)/gcd
console.log(gcd,lcm)