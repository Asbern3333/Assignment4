// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()

// Array of predefined poster objects
let ii=document.getElementById("poster-image")
    let tt=document.getElementById("poster-title")
    let qq=document.getElementById("poster-quote")
    ii.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s'
    
  qq.value="quote";
  tt.value="title";
const posters = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s',
      title: 'Poster 4',
      quote: 'Quote 4',
    },
    {
      image: 'https://i.pinimg.com/originals/3d/61/73/3d6173df3343d11273deab8e842c0f4b.jpg',
      title: 'Poster 5',
      quote: 'Quote 5',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1z3Nmzsk_fDBn84ZFlNJYigwwuyg419aYnDLwbG4CQ&s',
      title: 'Poster 6',
      quote: 'Quote 6',
    },
    {
      image: ii,
      title: tt.value,
      quote: qq.value,
    }
    // Add more poster objects as needed
  ];

   //Event listener for randomize button
  // TODO: Add an event listener to the randomizeButton that calls a function when clicked
  var random=document.querySelector("#randomize");
  random.addEventListener("click",generateRandomPoster);
  // Event listener for submit button
  var evensubmit=document.querySelector("#submit")
  // TODO: Add an event listener to the submitButton that calls a function when clicked
  evensubmit.addEventListener("click",updatePoster)
  let image1=document.getElementById("poster-image")
    let title1=document.getElementById("poster-title")
    let quote1=document.getElementById("poster-quote")
    title1.innerHTML=posters[posters.length-1].title;
    quote1.innerHTML=posters[posters.length-1].quote;
  // Function to generate a random poster
  function generateRandomPoster() {
    // TODO: Generate a random index within the range of the posters array length
    let index=Math.floor(Math.random()*3);
    // TODO: Retrieve the random poster object from the posters array
    console.log(index)
    
    
    for (i in posters) {
    if(index==i)
    {image1.src=posters[i].image;
    title1.innerHTML=posters[i].title;
    quote1.innerHTML=posters[i].quote;
    }
  }
    // TODO: Call the function to update the DOM with the values from the random poster object
  }
  const input=document.querySelector("#poster-form-quote")
  const fquote=document.getElementById("poster-quote")  
  const input1=document.querySelector("#poster-form-author")
  const ftitle=document.getElementById("poster-title") 
 input.addEventListener("input",generateCustomPoster)
 evensubmit.addEventListener("click",updatePoster)
 
 // Function to generate a custom poster
  function generateCustomPoster(event) {
  //event.preventDefault();
  //let quote1=document.getElementById("poster-quote");
  //quote1.innerHTML=event.target.value;
  ftitle.textContent = event;
  tt.value=ftitle.textContent;
  // TODO: Retrieve the entered quote and author from the input fields
  
    // TODO: Create a custom poster object with the entered values
  
    // TODO: Call the function to update the DOM with the values from the custom poster object
  }
  function generateCustomPoster1(event1) {
    //event.preventDefault();
    //let quote1=document.getElementById("poster-quote");
    //quote1.innerHTML=event.target.value;
    
    fquote.textContent =event1;
qq.value=fquote.textContent;
  }  
  // Function to update the poster content in the DOM
  function updatePoster(title12, quote12) {
  
    title12=fquote
    quote12=fquote.textContent

    // TODO: Update the DOM with the values provided for the poster image, title, and quote

    generateCustomPoster(input.value);
    generateCustomPoster1(input1.value);

  //generateCustomPoster1(quote12);}
  // event 1 = first input field, event 2 = second input  field
  // let userInut = event.target.value

  posters[posters.length-1].quote=fquote.textContent;
  posters[posters.length-1].title=ftitle.textContent;
  
  }