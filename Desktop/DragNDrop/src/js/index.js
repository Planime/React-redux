import ui from './config/ui'
import '../css/style.css'
import { validate } from "./helpers/validate";

const {inputTitle, inputDescription, form} = ui;

const inputs = [inputTitle, inputDescription];


//events

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = inputs.every(input => {
        const isValidInput = validate(input);

        return isValidInput
    });

    if (!isValid) {
        return
    }


});

