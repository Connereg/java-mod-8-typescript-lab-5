
const prependButton = document.getElementById("prependButton") as HTMLButtonElement;

// your code here
prependButton!.addEventListener("click", function () {
    const toPrependInput = (document.getElementById("spacesNumber") as HTMLInputElement);
    const toPrependToInput = (document.getElementById("stringToPrepend") as HTMLInputElement);
    const numberInputArray = toPrependInput!
    const stringInputArray = toPrependToInput!

    console.log("Trigger working...")
    console.log("Starting Spaces Numbers: " + numberInputArray)
    console.log("Starting Strings: " + stringInputArray)
    let prependResult = prepend(numberInputArray, stringInputArray);
    console.log(prependResult)

});

function prepend<T>(spaces: T[], strings: T[]) {

    let spacesString: string = ""
    for (let i=0; i < spaces[0]; i++) {
        spacesString = spacesString + " "
    }
    let resultString: string = spacesString + strings[0];

    return resultString
}
