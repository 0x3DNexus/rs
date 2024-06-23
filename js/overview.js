document.addEventListener('DOMContentLoaded', async () =>{

    let response = await fetch('navbar.html');
    console.log(response);
    const data = await response.text(); // Extract the text content from the response
    document.querySelector('.navPlaceholder').innerHTML = data;
    console.log('data Upadted');

    const navBarScript = document.createElement('script');
    navBarScript.src = './js/navScript.js'
    document.body.appendChild(navBarScript);
})