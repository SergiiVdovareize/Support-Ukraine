(()=>{
    const CARD_NUMBER = '1234 5678 3456 7895';
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
