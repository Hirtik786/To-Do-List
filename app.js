var main = document.getElementById("main")

var heading = document.createElement("h3")
heading.setAttribute("id", "heading")
main.appendChild(heading)
heading.innerHTML = "To-Do-List"

var section1 = document.createElement("div")
main.appendChild(section1)
section1.setAttribute("id", "section")

var input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("placeholder", "Type Something")
input.setAttribute("class", "input")
section1.appendChild(input)

var plusbutton = document.createElement("button")
plusbutton.setAttribute("onclick", "Add()")
plusbutton.setAttribute("id", "plusbutton")
section1.appendChild(plusbutton)
var plusimg = document.createElement("img")
plusimg.setAttribute("src", "./img/plus.png")
plusimg.setAttribute("id", "plusimg")
plusbutton.appendChild(plusimg)

var message = document.createElement("p")
main.appendChild(message)
message.setAttribute("id", "message")

var ul = document.createElement("ul")
main.appendChild(ul)

function Add() {
    if (input.value === "" || input.value === " ") {
        message.innerHTML = "type something......."
        message.style.color = "red"

        message.style.visibility = "visible"

        input.value = ""
        setTimeout(function () {
            message.style.visibility = "hidden"
        }, 2000)
    } else {
        message.innerHTML = "Success"
        message.style.color = "green"
        message.style.visibility = "visible"


        setTimeout(function () {
            message.style.visibility = "hidden"
        }, 2000)


        var li = document.createElement("li")
        ul.appendChild(li)
        // li.innerHTML = input.value
        li.setAttribute("Id", input.value)
        li.setAttribute("class", "list")

        var div = document.createElement("div")
        div.setAttribute("id", "div")
        li.appendChild(div)
        div.innerHTML = input.value

        var div1 = document.createElement("div")
        li.appendChild(div1)
        div1.setAttribute("id", "div1")

        editbutton = document.createElement("button")
        editbutton.setAttribute("id", "editbutton")
        // li.appendChild(editbutton)
        var editimg = document.createElement("img")
        editimg.setAttribute("id", "editimg")
        editimg.setAttribute("src", "./img/edit.png")
        editbutton.appendChild(editimg)

        removebutton = document.createElement("button")
        removebutton.setAttribute("id", "removebutton")
        // li.appendChild(removebutton)
        var removeimg = document.createElement("img")
        removeimg.setAttribute("id", "removeimg")
        removeimg.setAttribute("src", "./img/remove.png")
        removebutton.appendChild(removeimg)

        div1.appendChild(editbutton)
        div1.appendChild(removebutton)


        editbutton.addEventListener("click", function () {
            var pro = prompt("Update the value", li.id)
            if (pro !== "" && pro !== null) {
                var divedit = document.createElement("div")
                divedit.innerHTML = pro
                divedit.setAttribute("id", "divedit")
                li.innerHTML = ""
                li.appendChild(divedit)
                // li.innerHTML = pro
                li.appendChild(div1)
                li.setAttribute("id", pro)
            }
        })

        removebutton.addEventListener("click", function () {
            div1.parentNode.remove()
        })



        input.value = ""
    }
}
