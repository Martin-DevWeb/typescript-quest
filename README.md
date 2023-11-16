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
