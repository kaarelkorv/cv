let photoBoxImages = document.querySelectorAll("[data-image]")

photoBoxImages.forEach(image => {

    image.addEventListener("mouseover", ()=>{
        let arrow = document.querySelector()
    })

    image.addEventListener("click", ()=>{
               let img = image.parentElement.childNodes[2].childNodes
                img.forEach(extra => {
                    extra.style.opacity = "1"
                    extra.style.zIndex = "3"
                    extra.style.filter = "grayscale(0)";
                    extra.style.filter = "grayscale(0)";
                })
    }) 

        let extras = image.parentElement.childNodes[2].childNodes
        extras.forEach(extra => {
            extra.addEventListener("click", (e)=>{
                extra.style.opacity = "0"
                extra.style.zIndex = "0"  
            })
            extra.addEventListener("pointerleave", (e)=>{
                extra.style.filter = "grayscale(1)";
            })
            extra.addEventListener("pointerenter", (e)=>{
                extra.style.filter = "grayscale(0)";
            })
        })
})