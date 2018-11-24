export const add = (a, b) => {

  let temp1 = a.split('').reverse();
  let temp2 = b.split('').reverse();
  let sum=[];
  if(temp1.length>temp2.length){
    for(let i = 0; i < temp1.length; i++){

      sum[i] = (Number(temp1[i]) + Number(temp2[i]));
      console.log('sum[i]' + sum[i]);
      if(sum[i]>=10){
        sum[i+1] = 1;
        console.log('sum' + sum[i+1]);
      }
    }
  }


  return parseInt(a, 10) + parseInt(b, 10);
}