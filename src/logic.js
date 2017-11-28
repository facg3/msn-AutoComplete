function checkAndFillter(value,data){

  let valueLowerCase = value.toLowerCase();
  return  data.reduce(function(acc,element){
    if(element.name.includes(valueLowerCase) || element.name.includes(value) )
      acc.push( element.name );
    return acc;
  },[]);
}

module.exports = checkAndFillter;
