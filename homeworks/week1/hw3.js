export const isPrime = (n) => {
  if(n===0 | n===1| n===null | n <0){
    return false;
  }else{
    if(n===2){
      return true;
    }else{
      for(i=2 ;i<n;i++){
        if(n % i === 0){
          return false;
        }
      }
        return true;
    }
  }
  
}