const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
]


var resultCats = new Array;


for (var i = 0; i < 14; i++)
{
    if (cats[i].adoptionStatus == 'available')
    {
	resultCats.push(cats[i].name);
    }
}

//9 total cats were adopted! 
//There names are Charlie, Coco, Luna, Milo, Leo, Willow, Max, Cleo, and Daisy



//Questions below

/*
1. What is javascript? How does an interpreted programming language differ from a compiled language?

JavaScript is a lightweight programming language that adds dynamic interactions to web pages, applications, servers, games, and more. An interpreted programming language differs from a compiled language because an interpreted language is a language that is interpreted by the machine without needing to be run through a compiler. An interpreted language’s instructions are not directly executed by a target machine, but are instead read and executed by an interpreter. A compiled language is run through a compiler and becomes indecipherable to humans once it has been compiled. The compiled code is then fed directly to the target machine and run.

2. What is the difference between var, let, and const when declaring variables?

Var is a global and/or function scoped variable, and it is a redeclarable variable. Let is only a block-scoped variable, and it is redeclarable as well. Const is also an only block-scoped variable, but it is not redeclarable. 

3. What are anonymous functions? Higher order functions?

Anonymous functions are functions without a name. Higher order functions are functions that return a function or take in other functions as arguments.

4. Define objects in JavaScript and how they are different from objects in more traditional OOP languages.

An object in JavaScript is a non primitive data type that has its own properties, events, and methods. Unlike objects in other OOP languages, JavaScript objects do not have to be previously declared in a certain way to be employed as a variable/collection of variables. In C++, you must declare the object, its variables, and its functions (as well as define them) before you can employ it in use.

*/