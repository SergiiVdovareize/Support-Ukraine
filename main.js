(()=>{
    const CARD_NUMBER = '1234 5678 3456 7895';
    const initCopy = () => {
        const block = document.getElementById('card-number-block')
        block.onclick = () => {
            console.log('clicked')
            navigator.clipboard.writeText(CARD_NUMBER.replaceAll(/\s/g, ""))
            block.classList.add('copied')
        }

    }

    initCopy()
})()
