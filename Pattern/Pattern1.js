const printPattern=(nos)=>{
for(let i=0;i<nos;i++)
{
    for(let j=0;j<=i;j++)
    {
        process.stdout.write('*')
    }
    console.log("")

}
}

printPattern(4)