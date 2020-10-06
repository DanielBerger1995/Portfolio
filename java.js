const about = document.getElementById("aboutme-slide");
const contact = document.getElementById("contact-slide");
const work = document.getElementById("work-slide");
const text = document.getElementById("text-slide");

function aboutMe() {

    about.classList.toggle("mystyle");
    contact.classList.remove("mystyle");
    work.classList.remove("mystyle");
    text.classList.toggle("textslide")

}

function myContact() {

    contact.classList.toggle("mystyle");
    about.classList.remove("mystyle");
    work.classList.remove("mystyle");
    text.classList.remove("textslide")

}

function myWork() {

    work.classList.toggle("mystyle");
    about.classList.remove("mystyle");
    contact.classList.remove("mystyle");
    text.classList.remove("textslide")

}

function graphicDes() {
    let slideIn = document.getElementById("slide")
    slideIn.classList.toggle("workslide");
}

function uDes() {
    let slideIn = document.getElementById("uSlide")
    slideIn.classList.toggle("workslide");
}

function webDes() {
    let slideIn = document.getElementById("webSlide")
    slideIn.classList.toggle("workslide");
}

function artDes() {
    let slideIn = document.getElementById("artSlide")
    slideIn.classList.toggle("workslide");
}
