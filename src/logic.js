function checkAndFillter(value,data){
  data.filter(function(i){
    if(i.name.includes(value)){
      return i.name ;
    }
  });
}

module.exports = checkAndFillter;
