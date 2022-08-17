// your code here
const toPrependInput = (document.getElementById("spacesNumber") as HTMLInputElement);
const toPrependToInput = (document.getElementById("stringToPrepend") as HTMLInputElement);
const prependButton = document.getElementById("prependButton") as HTMLButtonElement;

const numberInputArray = toPrependInput!.value.split(", ");
const stringInputArray = toPrependToInput!.value.split(", ");

// your code here
prependButton!.addEventListener("click", function () {
    console.log("Trigger working...")
    console.log(numberInputArray)
    console.log(stringInputArray)
    let prependResult = prepend(numberInputArray, stringInputArray);
    console.log(prependResult)

});

function prepend<T>(spaces: T[], strings: T[]) {
    let newArray = [...strings]
    
    for (let i = spaces.length - 1; i >= 0; i--) {
        console.log(insertAtBeginning(spaces[i], strings, newArray))
        
    }

    return newArray  
}

function insertAtBeginning<T>(spaces: T, strings: T[], newArray: T[]) {
    newArray = [spaces, ... strings]
    return newArray
}