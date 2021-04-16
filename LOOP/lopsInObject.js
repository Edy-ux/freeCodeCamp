const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
}

// ou 

function makeList(arr) {
    "use strict";
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
   
    return failureItems;
}
const failuresList = makeList(result.failure)
console.log(failuresList)


function makeList(arr) {
    // Only change code below this line
    const failureItems = []
    for (let elem of arr) {
        const li = `
                    <li class="text-warning">${elem}</li>
                  `
        failureItems.push(li)
    }
    console.log(failureItems)
        // Only change code above this line
    return failureItems;
}
const failuresList = makeList(result.failure);