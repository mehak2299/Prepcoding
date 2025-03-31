// for(let i=0;i<=5;i++)
// {
//     for(let j=1;j<=i;j++)
//         {
//             process.stdout.write("\t")
//         }
//     for(let j=5;j>=i;j--)
//     {
//         process.stdout.write("*\t")
//     }
   
//     console.log("")
// }
let sp=0;
let st=5;
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=sp;j++)
    {
        process.stdout.write("\t")
    }
    for(let j=1;j<=st;j++)
    {
        process.stdout.write("*\t")

    }
    sp++;
    st--;
    console.log('')
}

