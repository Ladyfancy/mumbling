function accum(str) 
{
  var res = [];
  for(var i = 0; i < str.length; i++) 
  {
    var row = '';
    for(var ir = 0; ir < i + 1; ir ++) {
      row += ir===0 ? str[i].toUpperCase() : str[i].toLowerCase();      
    }
    res.push(row);
  }
  return res.join('-');
}