import {showErrorInputs} from "../views/showErrorInputs";


const regExpDic = {
    title: /[a-z\d .,:!?*$]{3}/ig,
    description: /[a-z\d .,:!?*$]{10}/ig,
};

export function validate(input) {
    const attrInput = input.getAttribute('data-required');
    if (!attrInput) return true;

    const isValidInput = regExpDic[attrInput].test(input.value);
        if (!isValidInput) showErrorInputs(attrInput)
    return isValidInput;

}


