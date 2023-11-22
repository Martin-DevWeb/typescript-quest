# Briefing Typescript Quest

## Level 1

- There is 7 primitive data types in Typescript :

  - String
  - Number
  - Boolean
  - Null
  - Undefined
  - Symbol
  - Bigint

- To type an array, we have 2 syntax :

  - `type[]` (for instance : `let players: string[]`)
  - `Array<type>` (for instance : `let players: Array<string>`)

- The `any` type is a little bit special. You can assign it `any` value you want. It can contain a number, a string or a boolean. No typechecking errors. The default type for a variable is `any`.

- The parameters types and the return type of a function are easely added :

  - Parameters types : `function rpg(rpgName: string) { return rpgName.toUpperCase() }`
  - Return type : `function player(): string { return "Shadowheart" }`

## Level 2

- Classes are the fundamental entities used to create reusable components. Typescript classes adds types and visibility modifiers to Javascript classes, like object-oriented programming language JAVA. A class can include : a constructor, properties and methods.

- Constructors are the method that allow the creation of objects from classes. You can only include one constructor in a class.

- The class is like the blueprint for creating the object, while instances are the objects themselves (created from the blueprint). If we want to link it with the constructor, the constructor is a method that runs every time a new instance of the class is created.

- To check if an object is an instance of a define class we use : `instanceof`
  The syntax is = `objectName instanceof className`. It returns `true` or `false`.

- The `this` keyword refers to the object or class we use.

- A method in a class is a function property. Methods can use the type annotations. Inside a method body, it's mandatory to access fields and other methods with `this`.

- In typescript, the default visibility of all properties or methods in classes is `public`. But what does that mean ? The visibility is the scope of access. There is three types of visibility :
  - `public` : can be accessed from everywhere
  - `protected` : can be accessed only in their class or their subclasses
  - `private` : similar to protected, but prevents subclasses from accessing

## Level 3

- When we want everything to be properly organized and clean, we can use the `import` and `export` modules. Every file containing `import` or `export` is a module. We can use `export` with a class, a function or an interface.

- `export` is a keyword to make a module avalaible in another location.

- `import` is a keyword to reuse the component exported inside the module.

- We must use the `extends` keyword to allow a class to inherit from another class.

- We can use `super()` in the constructor of the child class to call the constructor of the parent class.

- If we want to use a method from the parent class in the child class we use `super.methodInParentClass()`.

- Polymorphism is when we have multiple classes that have the same method, but a different implementation of that same method. Polymorphism use inheritance to use the same method with a different implementation.
