function checkAndFillter(value,data){
  let valueLowerCase = value.toLowerCase();
  return  data.reduce(function(acc,element){
    if(element[8].toLowerCase().startsWith(valueLowerCase))
      acc.push(element[8]);
    return acc;
  },[]);
}

function longAndatt(value, data){
    let valueLowerCase = value.toLowerCase();
    return  data.reduce(function(acc,element){
      if(element[8].toLowerCase()=== valueLowerCase)
        acc.push(Number(element[12]), Number(element[13]));
      return acc;
    },[]);
}
module.exports = {
  checkAndFillter,
  longAndatt
}
