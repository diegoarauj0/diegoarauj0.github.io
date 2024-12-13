document.querySelectorAll(".effect3D")?.forEach((element) => {
    if (typeof(element) !== "object") { return }
    element.style.transform = "rotateY(360deg) rotateX(360deg)"
    element.parentElement.addEventListener("mousemove", (event) => {
        document.body.style.backgroundColor = "red"
        const width = element.parentElement.clientWidth
        const height = element.parentElement.clientHeight

        const layerX = event.layerX - (width / 2)
        const layerY = event.layerY - (height / 2)

        element.style.transform = `rotateX(${layerY < 0?360 - layerY*-1:layerY}deg) rotateY(${360 + layerX*-1}deg)`
        element.style.transition = "none"
        element.childNodes.forEach((element) => {
            if (element.tagName === "P") {
                element.style.textShadow = `${layerX / 4}px ${layerY / 4}px 1px #00000070`
                return
            }
            element.style.boxShadow = `${layerX / 4}px ${layerY / 4}px 1px 1px #00000070`
        })
    })

    element.parentElement.addEventListener("mouseleave", () => {
        element.style.transition = "0.5s"
        element.style.transform = "rotateY(360deg) rotateX(360deg)"
        element.childNodes.forEach((element) => {
            element.style.textShadow = "none"
            element.style.boxShadow = "none"
        })
    })
})