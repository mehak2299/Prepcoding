const Reverse=(nos)=>{
    rev=0;
   for(let i=nos;i>0;i=Math.floor(i/10))
   {
     rem=i%10;
     rev=rev*10+rem;
   }
   console.log("rev",rev)
}

Reverse(12345);