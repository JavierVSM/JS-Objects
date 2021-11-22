let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printOne (arr){
  for(let i of arr){
    console.log("Name: "+ i.name+ ", Cohort: "+i.cohort);
  }
}

printOne (students)

//  ------ Challenge 2 ------
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 
function printTwo (x) {
  for (let value in x) {
  console.log(value);
  let index=0; 
    for (let int of x[value]){
      let completeName= int.first_name+int.last_name;
      index= index+1;
      console.log(index+" - "+int.last_name+", "+int.first_name+" - "+ completeName.length)
    }
  }
}

printTwo (users)