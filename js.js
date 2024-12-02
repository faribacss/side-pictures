const panels = document.querySelectorAll('.panel');


// ba estefade az "forEche" dakhel har kodom az class ha loop mishe ke betonim be harkodomeshon addEventListener ezafe konim.
panels.forEach(panel => {
    panel.addEventListener('click', function(){
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

// panels.forEach(panel => {
//     panel.addEventListener('click', function(){
//         panel.classList.toggle("active");
//     })
// })