# DSA-Practice

## We are using
- Typescript
- Nodemon
- Prettier

## Installation steps
- Install https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode extention
- run `npm i`
- run `npm run dev`

## How to write code in this repo
- Create a folder in `src` folder for which you are refering leetcode questions like neetcode, grind75
- Create your folder in that folder like `mitul`
- Create `index.ts` file for testing the functionality and other.
- Create a method like `mitulTests` which will be imported into `index.ts` of neetcode
- `src\neetcode\mitul\index.ts` will only contain `mitul` related tests and functions
- `src\neetcode\index.ts` will contain all developers main functions only(`deepTests`), don't add direct function like `containsDuplicate` to this file.
- `util` folder will contain some common code like data structure (`stack, linkedlist, queue`)
- Raise PR first to be reviewed by other dev and after approval you can merge it to main

Happy coding;;;
