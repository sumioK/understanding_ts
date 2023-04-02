{
  // const person:{
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   role:[number, string]
  // }  = {
  //   name: 'yota',
  //   age:30,
  //   hobbies: ['sports', 'Cooking'],
  //   role: [2, 'author'],
  // };

  const ADMIN = 0;
  const READ_ONLY = 1;
  const AUTHOR =2; 

  const person = {
    name: 'yota',
    age:30,
    hobbies: ['sports', 'Cooking'],
    role:2,
  };

  if(person.role === AUTHOR){
    console.log('READ ONLY USER')
  }
}