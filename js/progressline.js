let progressBar = document.querySelector('.js-progress-line')

document.onscroll = function(){
    let progressLine = window.scrollY / (document.body.clientHeight - window.innerHeight) * 100
    //let bodyHeight = document.body.clientHeight // высота body
    //let windowHeight = window.innerHeight  //высота wiewport

    progressBar.style.width = progressLine + '%'
}