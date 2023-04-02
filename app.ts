{
  type Combinable = number | string
  type conversionDescriptor = 'as-number'| 'as-text'

  function combine(
    input1: number | Combinable, 
    input2: number | Combinable, 
    resultConversion: conversionDescriptor,
    ){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || 
      resultConversion === 'as-number'){
    result = +input1 + +input2;
      return result
    }else{
      result = input1.toString() + input2.toString();
      return result;
    }
    return result;
  }

  const combinedAges = combine(30, 26, 'as-number');
  console.log(combinedAges)

  const combinedStringAges = combine('30', '26', 'as-number');
  console.log(combinedStringAges)

  const combinedNames = combine('Max', 'Anna', 'as-text')
  console.log(combinedNames)



}