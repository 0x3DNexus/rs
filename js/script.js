document.addEventListener('DOMContentLoaded', async () =>{
    // let navItems = document.querySelectorAll('.navItem');
    // let itemFocus = true;
    // let currentUnderlinedItem = null;

    // addUnderline(navItems[0]);
    // currentUnderlinedItem = navItems[0];

    // navItems.forEach(item =>{

    //     item.addEventListener('mouseover', () =>{
    //         item.style.cursor = 'pointer';

    //         //if the current item is focused do not apply the effects
    //         if(item === currentUnderlinedItem) return;

    //         item.style.color = 'white';
    //         item.style.transitionDuration = '0.2s';
    //     })
    
    //     item.addEventListener('mouseout', () =>{
    //         //if the current item is focused do not apply the effects
    //         if(item === currentUnderlinedItem) return;

    //         item.style.color = '#a0a0a0';
    //         item.style.transitionDuration = '0.2s';
    //     })

    //     item.addEventListener('click', () =>{
            
    //         if(currentUnderlinedItem !== item){
    //             removeUnderline(currentUnderlinedItem);
    //         }

    //         addUnderline(item);
    //     })

    // })

    // function addUnderline(item){
    //     item.style.textDecoration = 'underline';
    //     item.style.textDecorationColor = '#e64a19';
    //     item.style.textDecorationThickness = '3px';
    //     item.style.color = 'white';
    //     currentUnderlinedItem = item;
    // }

    // function removeUnderline(currentUnderlinedItem){
    //     currentUnderlinedItem.style.textDecoration = 'none';
    //     currentUnderlinedItem.style.color = '#a0a0a0';
    // }


    //overView Page Content Logic

    // let innerBarWidth = window.getComputedStyle(document.querySelector('#okay')).width;
    // innerBarWidth = parseInt(innerBarWidth) - 30;
    // let percentage = document.querySelector('#spanOkay');

    // percentage.style.left = innerBarWidth + 'px';

    // let placeholder = document.querySelector('.navPlaceholder');
    let response = await fetch('navbar.html');
    console.log(response);
    // placeholder.innerHTML = nav;
    const data = await response.text(); // Extract the text content from the response
    document.querySelector('.navPlaceholder').innerHTML = data;
    console.log('data Upadted')
})