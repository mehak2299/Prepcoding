const printPattern=(nos)=>
{
    for(let i=0;i<nos;i++)
    {
      for(let k=i;k<nos;k++)
      {
        process.stdout.write(" ")
      }
      for(let j=0;j<=i;j++)
      {
        process.stdout.write("*")

      }
      console.log()
    }
}
printPattern(4)