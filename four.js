let option = document.querySelectorAll(".option")



const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")


let score = document.getElementById("score")

const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")



option.forEach(Element => {
    Element.addEventListener("click", () => {
        if (Element == a) {
            a.style.backgroundColor = "green"
       
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"
        }
        else if (Element == b) {
            b.style.backgroundColor = "red"
            
            a.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"
        }
        else if (Element == c) {
            c.style.backgroundColor = "red"
            

            b.style.display = "none"
            a.style.display = "none"
            d.style.display = "none"
        }
        else if (Element == d) {
            d.style.backgroundColor = "red"
         

            b.style.display = "none"
            c.style.display = "none"
            a.style.display = "none"
        }
    })
})






