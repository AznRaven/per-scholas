let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let titleE = document.querySelector('#main-title')
  titleE.innerHTML = "Welcome To My Page - Dom Terreto"

  // Part 2
  document.body.style.backgroundColor = "grey"

  // Part 3
  document.querySelector("#favorite-things li:last-child").remove()

  // Part 4
  let specialTitle = document.querySelectorAll('.special-title')

  for(let i = 0; i < specialTitle.length; i++){
    console.dir(specialTitle[i])
    specialTitle[i].style.fontSize = "2rem"
  }

  // Part 5
  pastRace = document.querySelector('#past-races')
  
  for(let i = 0; i < pastRace.children.length; i++){
    pastRace.children[i].textContent == "Chicago" ? pastRace.children[i].remove() : console.log('no')
    
  }

  // Part 6
  pastRace.innerHTML += '<li>Saigon</li>'

  // Part 7
  adventures = document.querySelector('.main')

  var newD = document.createElement("div")
  newD.classList.add("blog-post")
  newD.classList.add("purple")
  var newH = document.createElement("h1")
  var newP = document.createElement("p")
  newH.innerHTML = "Saigon"
  newP.innerHTML = "I ATE SOME BOMB ASS PHO!"
  newD.appendChild(newH)
  newD.appendChild(newP)
  // console.dir(newD) 
  // console.log(adventures)
  adventures.innerHTML += newD.outerHTML

  // Part 8
  let quoteTitle = document.querySelector("#quote-title")
  quoteTitle.addEventListener("click", randomQuote)


  // Part 9
  let blogPosts = document.querySelectorAll(".blog-post")
  // console.log(blogPosts)
  blogPosts.forEach(function(post) {
    // console.log(post)
    post.addEventListener("mouseout", function() {
      console.log('purple')
      post.classList.toggle("red");
      post.classList.toggle("purple");
      
        // post.classList.toggle("purple")
        // post.className = ("blog-post purple")
        // post.style.backgroundColor = "rebeccapurple"

    })

    post.addEventListener("mouseenter", function() {
      console.log('red')
      post.classList.toggle("purple");
      post.classList.toggle("red");
      
        // post.classList.toggle("red")
        // post.className = ("blog-post red")
        // post.style.backgroundColor = "red"
    })

  });




});
