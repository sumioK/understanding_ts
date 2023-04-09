{
  const userName = 'Max';
// userName = 'Maximilian'
  let age = 30
  age = 29
  // if(age >= 20){
  //   let isAdult = true
  // }
  // console.log(isAdult)

  // function add(a: number, b: number){
  //   let result;
  //   result = a + b;
  //   return result;
  // }

  const add = (a: number, b: number) =>  a + b

  const printOutput: (output: string|number ) => void = output => {
    console.log(output)
  }
  console.log(add(3, 5))
  
  const button = document.querySelector('button')
  if(button){
    button.addEventListener('click', event => {
      console.log(event)
    })
  }
}