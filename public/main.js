let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) {
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

const pageTitleText = document.querySelector('.page-title').textContent;
const headerTitle = document.querySelector('.header-title');
const headingTitle = document.createElement('h1');
headingTitle.textContent = pageTitleText;
headerTitle.appendChild(headingTitle);

const contenth2 = document.querySelector('.details .page-title')
contenth2.innerHTML = `About ${contenth2.innerHTML}`;