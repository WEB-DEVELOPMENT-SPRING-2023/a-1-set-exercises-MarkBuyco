const sounds = ['Wah-Wah-Wah-Waaaaah!', 'What-are-those', 'Whip', 'Why-are-you-running?','Why-you-bully-me', 
'Wilhelm-Scream', 'Yeah-boy', 'Windows-Error', 'Windows-XP-Shutdown']

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
