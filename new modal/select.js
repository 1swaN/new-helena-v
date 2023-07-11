const defaultSelect = () =>{
    const element = document.querySelector('.language-select')
    const choices = new Choices(element, {
        searchEnabled: false,
    })
}

defaultSelect()