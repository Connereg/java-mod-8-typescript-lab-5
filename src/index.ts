// your code here
const toPrependInput = (document.getElementById("spacesNumber") as HTMLInputElement).value;
const toPrependToInput = (document.getElementById("stringToPrepend") as HTMLInputElement).value;
const prependButton = document.getElementById("prependButton") as HTMLButtonElement;

const numberInputArray = toPrependInput.split(", ");
const stringInputArray = toPrependToInput.split(", ");

// your code here
prependButton!.addEventListener("click", function () {
    console.log("Trigger working...")
    let prependResult = prepend(numberInputArray, stringInputArray);
    console.log(prependResult)

});

function prepend<T>(spaces: T[], strings: T[]) {
    let newArray = [...strings]
    
    for (let i = spaces.length - 1; i >= 0; i--) {
        insertAtBeginning(spaces[i], strings, newArray)
    }

    return newArray  
}

function insertAtBeginning<T>(spaces: T, strings: T[], newArray: T[]) {
    newArray = [spaces, ... strings]
    return newArray
}