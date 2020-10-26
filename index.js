const uterance = new SpeechSynthesisUtterance()

uterance.lang = 'pt-BR'

function speak() {
    speechSynthesis.speak(uterance)
}

function stop() {
    speechSynthesis.cancel()
}

function setText(event) {
    uterance.text = event.target.innerText
}

