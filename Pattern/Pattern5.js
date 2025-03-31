let nos=5;
let st=1;
let sp=parseInt(nos/2);
for(let i=1;i<=nos;i++)
{
    for(let j=1;j<=sp;j++)
    {
        process.stdout.write(" ");
    }
    for(let k=1;k<=st;k++)
    {
        process.stdout.write("*")
    }
    if(i<=nos/2)
    {
        sp--;
        st+=2;
    }
    else{
        sp++;
        st-=2;
    }
console.log("")
}