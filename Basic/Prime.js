const prime=(nos)=>{
  if(nos===1||nos==0)
  {
    return false
  }
  else{
    for(i=2;i<nos/2;i++)
    {
        if(nos%i==0)
        {
           return false;
        }
    }
    return true
  }
}

console.log(prime(7)?'Prime':'Not Prime')