function removeTransition(e) {
    if (e.propertyName !== "transform") return
    e.target.classList.remove("playing")
}
function playsSoundByKeyCode(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)
    if (!audio) return
    key.classList.add("playing")
    audio.curremtTime = 0
    audio.play()
}
function playSoundOnKeyDown(e) {
    console.log(e.keyCode)
    playsSoundByKeyCode(e.keyCode)
}
function playSoundOnPointer(e) {
    e.preventDefault()
    const keyCode = this.getAttribute("data-key")
    playsSoundByKeyCode(keyCode)
}
const keys = Array.from(document.querySelectorAll(".key"))
window.addEventListener("keydown", playSoundOnKeyDown)

keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition)
    key.addEventListener("click",playSoundOnPointer)
    key.addEventListener("touchstart",playSoundOnPointer, { passive:false})
})