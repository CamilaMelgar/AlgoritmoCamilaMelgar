class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age
    }

}

let people = new Array(new Person("Gabriel", 29), new Person("Camila", 25), new Person("Pablo", 53), new Person("Veronica", 50));
let ul = document.getElementById("ul");

for(let i = 0; i < people.length; i++ )
{ 
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(people[i].name));
    ul.appendChild(li);     
} 


function start_test(){

    let name = document.getElementById("name").value;

    for(let i = 0; i < people.length; i++){
        
        if (people[i].name == name){
            alert("la edad de " + people[i].name + " es de " + people[i].age )
            break
        }
    }
}

