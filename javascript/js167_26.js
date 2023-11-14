let obj = { 
    1: 125, 
    2: 225, 
    3: 128, 
    4: 356, 
    5: 145, 
    6: 281, 
    7: 452, 
  };
  
  let newArray = Object.entries(obj)
    .filter(([key, value]) => String(value).match(/^[12]/))
    .map(([key, value]) => value);
  
  console.log(newArray);