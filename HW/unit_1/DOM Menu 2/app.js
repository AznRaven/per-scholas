// Menu data structure
// Task 3.0
var menuLinks = [
    {text: 'about', href: '#'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  // Task 1.0
  let mainEl = document.querySelector('main')
  
  // Task 1.1
  mainEl.style.backgroundColor = 'var(--main-bg)'
  
  // Task 1.2
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
  
  // Task 1.3
  mainEl.classList.add('flex-ctr')
  
  // Task 2.0
  let topMenuEl = document.querySelector('#top-menu')
  
  // Task 2.1
  topMenuEl.style.height = "100%"
  
  // Task 2.2
  topMenuEl.classList.add('flex-around')
  
  // Task 2.3
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
  
  // Task 3.1
  // console.log(menuLinks)
  for(let i = 0; i < menuLinks.length; i++){
      // console.log(menuLinks[i].text)
      let link = menuLinks[i]
      let a = document.createElement("a")
      // topMenuEl.innerHTML += link.text
      a.setAttribute("href", link.href)
      a.innerHTML = link.text
      topMenuEl.appendChild(a)
  }
  // console.log(topMenuEl)
  
  // Task 4.0
  let subMenuEl = document.querySelector('#sub-menu')
  
  // Task 4.1
  subMenuEl.style.height = '100%'
  
  // Task 4.2
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
  
  // Task 4.3
  subMenuEl.classList.add('flex-around')
  
  // Task 4.4
  subMenuEl.style.position = "absolute"
  
  // Task 4.5
  subMenuEl.style.top = "0"
  
  // Task 5.1
  let topMenuLinks = document.querySelectorAll('a')
  console.log(topMenuLinks)
  var showingSubMenu = false
  
  // Task 5.2
  topMenuEl.addEventListener('click', handleClick)
  
  function handleClick(e) {
    e.preventDefault()
    if(e.target.tagName == 'A') {
      console.log(e.target.innerText) 
    } else {
      return
    }
    // console.log(e.target.classList.contains('active'))
  
    // Task 5.3
    //1-4
    // console.log(e.target.classList.contains('active'))
    if(e.target.classList.contains('active')) {
      e.target.classList.remove('active')
      showingSubMenu = false
      subMenuEl.style.top = 0
      return
    }
    // Task 5.4
    topMenuLinks.forEach(x => x.classList.remove('active')) 

    // Task 5.5
    e.target.classList.add('active')
    // console.log(e.target)

    // Task 5.6
    menuLinks.forEach(x => {
      if(e.target.text == x.text) {
        if(x.hasOwnProperty('subLinks')){
          showingSubMenu = true
          linkCopy = x
        }else{
        showingSubMenu = false
        // Task 6.4
        mainEl.innerHTML = '<h1>about</h1>'
        // if(e.target.innerHTML == 'about'){
          
        // }
        }
        }
    })  

    // Task 5.7
    if(showingSubMenu){
      buildSubMenu(linkCopy)
      subMenuEl.style.top = '100%'
    } else{
      subMenuEl.style.top = '0'
    } 

    
    
    
  } // close handleClick
  // Task 5.8
  function buildSubMenu(x) {
    subMenuEl.innerHTML = ''
    x.subLinks.forEach((y) => {
      let a = document.createElement('a')
      a.setAttribute("href", y.href)
      a.innerHTML = y.text
      subMenuEl.appendChild(a)
    })
  }
  
  // Task 6.0
 subMenuEl.addEventListener('click', subMenu)

  function subMenu(e) {
    e.preventDefault()
    if(e.target.tagName == 'A') {
      console.log(e.target.innerText) 
    } else {
      return
    }
    // Task 6.1
    showingSubMenu = false
    subMenuEl.style.top = '0'

    // Task 6.2
    topMenuLinks.forEach(x => x.classList.remove('active')) 
    
    // Task 6.3
    // mainEl.innerHTML = e.target.innerHTML 
    mainEl.innerHTML = `<h1>${e.target.innerText}</h1>`

    // Task 6.4
    // mainEl.innerHTML = e.target.innerHTML 

  } // subMenu event listener 

  

