console.log("Horray outside")

document.addEventListener('DOMContentLoaded', () =>{
    let navItems = document.querySelectorAll('.navItem');
    console.log(navItems);
    let currentUnderlinedItem = null;

    console.log("Horray inside")

    addUnderline(navItems[0]);
    currentUnderlinedItem = navItems[0];

    navItems.forEach(item =>{

        item.addEventListener('mouseover', () =>{
            item.style.cursor = 'pointer';

            //if the current item is focused do not apply the effects
            if(item === currentUnderlinedItem) return;

            item.style.color = 'white';
            item.style.transitionDuration = '0.2s';
        })
    
        item.addEventListener('mouseout', () =>{
            //if the current item is focused do not apply the effects
            if(item === currentUnderlinedItem) return;

            item.style.color = '#a0a0a0';
            item.style.transitionDuration = '0.2s';
        })

        item.addEventListener('click', () =>{
            
            if(currentUnderlinedItem !== item){
                removeUnderline(currentUnderlinedItem);
            }

            addUnderline(item);
        })

    })

    function addUnderline(item){
        item.style.textDecoration = 'underline';
        item.style.textDecorationColor = '#e64a19';
        item.style.textDecorationThickness = '3px';
        item.style.color = 'white';
        currentUnderlinedItem = item;
    }

    function removeUnderline(currentUnderlinedItem){
        currentUnderlinedItem.style.textDecoration = 'none';
        currentUnderlinedItem.style.color = '#a0a0a0';
    }
})