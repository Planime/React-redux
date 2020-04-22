import ui from '../config/ui'

const {errorMsgs} = ui

export function showErrorInputs(attr) {

    errorMsgs.forEach(el => {
        console.log(el.dataset.error, attr)
        if (el.dataset.error === attr) el.classList.add('js-opacity-1')
    })
}