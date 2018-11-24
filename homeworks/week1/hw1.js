export const stars = (n) => {
  let arr=[];
  temp = '*';
  arr[0] = temp;
  for(let i=1; i<n; i++){
    arr[i] = temp + '*';
    temp = arr[i];
  }
  return arr;
}