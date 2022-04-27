/**
 * TODO list:
 * 1. validate card numbers in html and js
 * 2. validate private link
 * 3. validate mono link
 * 4. validate revolute link
 * 4. validate fallback link
 */

(()=>{
    const CARD_NUMBER = '1234 5678 3456 7891';
    let resetId

    const copyNumber = (block) => {
        clearTimeout(resetId);
        block.classList.add('copied')
        navigator.clipboard.writeText(CARD_NUMBER.replaceAll(/\s/g, ""))
        resetId = setTimeout(() => {
            resetCopy(block)
        }, 10000)
    }

    const resetCopy = (block) => {
        block.classList.remove('copied')
    }

    const initCopy = () => {
        const block = document.getElementById('card-number-block')
        block.onclick = () => {
            copyNumber(block)
        }
    }

    initCopy()
})()
