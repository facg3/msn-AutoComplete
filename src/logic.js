function checkAndFillter(value,data){
  let valueLowerCase = value.toLowerCase();
  return  data.reduce(function(acc,element){
    if(element.name.toLowerCase().startsWith(valueLowerCase))
      acc.push( element.name );
    return acc;
  },[]);
}
module.exports = checkAndFillter;
