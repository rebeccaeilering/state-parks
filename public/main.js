let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let link = item.getAttribute('href')
        let target = document.querySelector(link)
        target.scrollIntoView({
            behavior: 'smooth'
        })
        history.pushState(null, null, link)
        e.preventDefault()
    })
}
