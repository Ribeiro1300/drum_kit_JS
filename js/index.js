var n_buttons = document.querySelectorAll(".drum").length
for (var i = 0; i<n_buttons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var bntTxt = this.innerHTML
        
        makeSound(bntTxt)
        bntAnimation(bntTxt)
        
    })
}

for (var i = 0;i<n_buttons;i++)
{
    document.addEventListener("keydown", function(event)
    {
        makeSound(event.key)
        bntAnimation(event.key)
    })
}

function makeSound(key)
{
    switch (key)
        {
            case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break

            case "a":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break

            case "s":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break

            case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break

            case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break

            case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break

            case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break

            default: console.log(bntTxt)
        }
}

function bntAnimation(keyPressed)
{
    var activeBnt = document.querySelector("."+keyPressed)
    activeBnt.classList.add("pressed")
    setTimeout(function()
    {
        activeBnt.classList.remove("pressed")
    }, 100)
}