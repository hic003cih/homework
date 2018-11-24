export const isPalindromes = (str) => {

  let tranStr=str.toString().split('').reverse().join('');

  //tranStr=tranStr.reverse();

  //tranStr=tranStr.join();

  //for(let i = 0 ; i <= str.length ; i++){
      
  //}

  return str == tranStr ? true : false;

}