const uterance = new SpeechSynthesisUtterance()

uterance.lang = 'pt-BR'

function speak() {
    speechSynthesis.speak(uterance)
}

function stop() {
    speechSynthesis.cancel()
}

function clearText() {
    const textBox = document.querySelector('.text-box')

    textBox.innerText = ''
}

function setText(e) {
    uterance.text = e.target.innerText
}

function setLanguage(e) {
    const { value } = e.target
    
    uterance.lang = value
}

