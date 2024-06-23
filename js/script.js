document.addEventListener('DOMContentLoaded', () =>{

    //add active navBar and content properties
    let navTabs = document.querySelectorAll('.navEl');
    let contents = document.querySelectorAll('.contentDiv');

    navTabs.forEach(tab =>{

        tab.addEventListener('click', () =>{

            //remove active class from all the tabs
            navTabs.forEach(t => {t.classList.remove('active')})
            tab.classList.add('active');

            const targetContent = tab.getAttribute('id');

            contents.forEach(this_content =>{
                if(targetContent === this_content.id){
                    this_content.classList.add('active');
                }
                else{
                    this_content.classList.remove('active');
                }
            })
        })
    })
})