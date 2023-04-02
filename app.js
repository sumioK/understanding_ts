{
    // const person:{
    //   name: string;
    //   age: number;
    // } 
    var person = {
        name: 'yota',
        age: 30,
        hobbies: ['sports', 'Cooking'],
    };
    var favoriteActivities = void 0;
    favoriteActivities = ['sprots'];
    console.log(person.name);
    for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
        var hobby = _a[_i];
        console.log(hobby.toUpperCase());
    }
}
