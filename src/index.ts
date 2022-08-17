
const prependButton = document.getElementById("prependButton") as HTMLButtonElement;

// your code here
prependButton!.addEventListener("click", function () {
    const toPrependInput = (document.getElementById("spacesNumber") as HTMLInputElement);
    const toPrependToInput = (document.getElementById("stringToPrepend") as HTMLInputElement);
    const numberInputArray = toPrependInput.value.split(", ")
    const stringInputArray = toPrependToInput.value.split(", ")

    console.log("Trigger working...")
    console.log("Starting Spaces Numbers: " + numberInputArray)
    console.log("Starting Strings: " + stringInputArray)
    let prependResult = prepend(numberInputArray, stringInputArray);
    console.log(prependResult)

});

function prepend<T>(spaces: T[], strings: T[]) {
    let numSpaces = spaces.map(str => {
        return Number(str);
    })

    let stringArray = strings.map(str => {
        return String(str);
    })

    let resultString = "";
    for (let i=0; i < stringArray.length; i++) {
        let inputString = stringArray[i]
        let inputSpaces = numSpaces[i]

        let spacesString: string = ""
        for (let i=0; i < inputSpaces; i++) {
            spacesString += " "
        }
        resultString = spacesString + inputString;
    }
    return resultString
}
