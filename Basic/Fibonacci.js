const fibonacci=(nos)=>{

    console.log(nos)
    let a=0;
    let b=1;
    // process.stdout.write(a.toString())
    // process.stdout.write(b.toString())


    for(let i=0;i<nos;i++)
    {
        let c=a+b;
        process.stdout.write(a.toString())
        a=b;
        b=c;
    }

}
fibonacci(5)