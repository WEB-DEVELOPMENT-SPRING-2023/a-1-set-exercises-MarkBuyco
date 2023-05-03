//This is exactly as the last exercise javascript code, copy and pasted.
const sounds = ['Ah-ha', 'Back-of-the-net', 'Bang-out-of-order', 'Dan','Email-of-the-evening', 
'Hello-partridge', 'I-ate-a-scotch-egg', 'Im-confused', 'You-win']

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

//Except, I added a function, to get the element in the text area and make it output a text to speech feature.
function textspeak(){
    var text = document.getElementById("text").value;
    responsiveVoice.speak(text);
}
