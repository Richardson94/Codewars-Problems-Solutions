//# String cleaning
function stringClean(s){
  if(s==null|| s.length==0)
  {
      return '';
  }
  else{
      var newString='';
      for(let i=0; i<s.length;i++){
          if(s[i].charCodeAt(0)<48 || s[i].charCodeAt(0)>57){
              newString=newString+s[i];
          }
         
         
      }
      return newString;
     
  }
}

console.log(stringClean("A1 A1! AAA   3J4K5L@!!!"));