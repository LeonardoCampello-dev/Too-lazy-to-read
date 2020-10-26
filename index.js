const uterance = new SpeechSynthesisUtterance()

uterance.lang = 'pt-BR'

function speak() {
    speechSynthesis.speak(uterance)
}

function stop() {
    speechSynthesis.cancel()
}

function clear() {
    document.querySelector('.text-box').innerText = ''
}

function setText(event) {
    uterance.text = event.target.innerText
}

function setLang(event) {
    uterance.lang = event.target.innerText
}

