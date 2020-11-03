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

const pageTitle = document.querySelector('.page-title');
if (pageTitle) {
  const pageTitleText = pageTitle.textContent;
  const headerTitle = document.querySelector('.header-title');
  const headingTitle = document.createElement('h1');
  headingTitle.textContent = pageTitleText;
  headerTitle.appendChild(headingTitle);
}

const contenth2 = document.querySelector('.details .page-title')
if (contenth2) {
  const h2title = contenth2.innerHTML
  contenth2.innerHTML = `About ${h2title}`;
}

const siteActivities = document.querySelector('.site-activities')
if (siteActivities) {
  const activitiesString = siteActivities.textContent;
  const activitiesArray = activitiesString.split(', ');
  const listElement = document.createElement('ul');
  const listContainer = document.querySelector('.activities-list');
  listContainer.appendChild(listElement);
  for (let i = 0; i < activitiesArray.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = activitiesArray[i];
    listElement.appendChild(listItem);
  }

  document.addEventListener("DOMContentLoaded", function(){
    var elem = document.querySelector('.site-activities');
    elem.parentNode.removeChild(elem);
  });
}