
const prependButton = document.getElementById("prependButton") as HTMLButtonElement;


// your code here


// your code here
prependButton!.addEventListener("click", function () {
    const toPrependInput = (document.getElementById("spacesNumber") as HTMLInputElement);
    const toPrependToInput = (document.getElementById("stringToPrepend") as HTMLInputElement);
    const numberInputArray = toPrependInput!.value.split(", ");
    const stringInputArray = toPrependToInput!.value.split(", ");

    console.log("Trigger working...")
    console.log("Starting Spaces Numbers: " + numberInputArray)
    console.log("Starting Strings: " + stringInputArray)
    let prependResult = prepend(numberInputArray, stringInputArray);
    console.log(prependResult)

});

function prepend<T>(spaces: T[], strings: T[]) {

    let spacesString: String = ""
    for (let i=0; i < spaces[0]; i++) {
        spacesString = spacesString + " "
    }
    let resultString: T = spacesString + strings[0];

    return resultString
    
}

// function insertAtBeginning(spacesString: String, stringToPrepend: String) {
//     let resultString: String = spacesString + stringToPrepend
//     return resultString
// }