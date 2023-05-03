//Identical to the first bank, except, new set of sounds.
const sounds = ['Censor-beep', 'Fart', 'Bass', 'Knife-stab','Mario-grabish', 
'Men-Laughing', 'SHEESH', 'Sinister-laugh', '2-hours-later']

sounds.forEach (sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons')
    .appendChild(btn) 
})

function textspeak(){
    var text = document.getElementById("text").value;
    responsiveVoice.speak(text);
}
