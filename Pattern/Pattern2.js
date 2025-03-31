const printPattern=(nos)=>{
    for(let i=0;i<nos;i++)
    {
        for(let j=i;j<nos;j++)
        {
            process.stdout.write('*')
        }
        console.log("")
    
    }
    }
    
    printPattern(4)