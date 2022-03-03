// let n = 10 

// if (n > 5) {
//     throw new Error('N is Greater Than 5')
// }

// let n = 56

// if (n > 50) {
//     throw new RangeError('The Number is Too Long')
// }


// function changeToInt(v) {
//     let result = Number.parseInt(v)
//     if (!result) {
//         return 'Please Provide a value which is able to convert in Integer'
//     } 
//     return result
// }

// let result = changeToInt('85.96')
// console.log(result)

// function makeWords(text) {
//     try {
//         let str = text.trim()
//         let words = str.split(' ')
//         return words
//     } catch (e) {
//         // console.log(e.message)
//         console.log('Please Provide a Valid Text')

//     }
//     // let str = text.trim()
//     // let words = str.split(' ')

//     // return words
// }

// let words = makeWords(86)
// console.log(words)

// class CustomError extends Error {
//     constructor(msg) {
//         super(msg)

//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this, CustomError)
//         }
//     }
// }

// try {
//     console.log('I am Line 1')
//     throw new CustomError('I am Your Error')
//     console.log('I am Line 2')
//     console.log('I am Line 3')
// } catch (e) {
//     console.dir(e)
//     console.log('This is a Custom Error Message')
// } finally {
//     console.log('I am Finally Block')
// }


/*
let range = {
    from: 1,
    to: 5,
  
    // for await..of calls this method once in the very beginning
    [Symbol.asyncIterator]() { // (1)
      // ...it returns the iterator object:
      // onward, for await..of works only with that object, asking it for next values
      return {
        current: this.from,
        last: this.to,
  
        // next() is called on each iteration by the for..of loop
        async next() { // (2)
          // it should return the value as an object {done:.., value :...}
          // (automatically wrapped into a promise by async)
  
          // can use await inside, do async stuff:
          await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  (async () => {
  
    for await (let value of range) { // (4)
      console.log(value); // 1,2,3,4,5
    }
  
  })()


  */


function createStore() {

    const tables = {
        customer: {
            1: {
                name: 'John'
            },
            2: {
                name: 'Mattias'
            },
            3: {
                name: 'Kim'
            },
        },
        food: {
            1: ['cake', 'waffle'],
            2: ['coffee'],
            3: ['apple', 'carrot'],
        }
    }

    return {
        get: (table, id) => delay(50).then(() => tables[table][id])
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


const store = createStore()

// const customers = {
//     [Symbol.iterator]: function () {
//         let i = 0
//         return {
//             next: async function () {
//                 i++
//                 const customer = await store.get('customer', i)

//                 if (!customer) {
//                     return {
//                         done: true
//                     }
//                 }

//                 customer.foods = await store.get('food', i)
//                 return {
//                     value: customer,
//                     done: false
//                 }
//             }
//         }
//     }
// }

const customers = {
    [Symbol.iterator]: async function* () {
        let i = 0
        while (true) {
            const customer = await store.get('customer', i++)
            if (!customer) return
            customer.foods = await store.get('food', i)
            yield customer
        }
    }
}

async function test() {
    let iterate = customers[Symbol.iterator]()
    let c1 = await iterate.next()
    console.log(c1)
    // for await (let customer of customers) {
    //     console.log(customer)
    // }
}

test()

// ;
// (async () => {
//     for await (let customer of customers) {
//         console.log(customer)
//     }
// })()