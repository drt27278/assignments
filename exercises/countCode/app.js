function countCode(str){
    return str.match(/co.e/i).length;
  }
  console.log(countCode('Cosssdecode'));
  console.log(countCode('codexxcodex'));
  console.log(countCode('co#exxcosexxdco*e'));
  
  