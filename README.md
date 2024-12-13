# Code challenge - Ismael Ponce

> **Note**: This `.env` file is only included for practice purposes in this exercise. **In real projects**, you should never push `.env` files to public or private repositories, as they often contain sensitive information (such as API keys, database credentials, etc.). Instead, use tools like `.gitignore` to prevent these files from being pushed to GitHub.

## How to run this project?

run

```bash
npm install

```

and then

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result of the challenge.

## Code challenge questions:

#### 1. What's a closure? Where in the code is there a closure?

A closure is a way to encapsulate variables or functions that can only be accessed from their scope and they remember the saved or modified values ​​even after they have been called.

Example:

```
function createCounter() {
  let count = 0;  // Variable in the outer scope
  return {
    increment: function() {  // Closure that increments `count`
      count++;
    },
    getCount: function() {  // Closure that returns the value of `count`
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();  // Increment the count
counter.increment();  // Increment again
console.log(counter.getCount());  // Outputs: 2
```

#### 2. Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?

We can have side effects, for example when we pass parameters by reference like objects and we modify them within the function, this affects the original value, this is not expected and can be avoided by passing copies with techniques like deep clone
