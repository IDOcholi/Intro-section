
const btn = document.querySelector('.toggle-Btn');
const close_btn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const nestedList = element.querySelector('.nested-list');
const upArrow = element.querySelector('.up-arrow');
const downArrow = element.querySelector('.down-arrow');


btn.addEventListener ('click',() => {
    sidebar.classList.add('show-sidebar');
});

close_btn.addEventListener('click',() => {
    sidebar.classList.remove('show-sidebar');
});


nestedLinks.forEach(link => {
    link.addEventListener('click',(e)=> {
        let element = e.currentTarget;
       
        if (nestedList.classList.contains('show-nested-list')){
            upArrow.classList.add('hide-arrow');
            downArrow.classList.remove('hide-arrow');
            nestedList.classList.remove('show-nested-list');
        }
        else
        {
            upArrow.classList.remove('hide-arrow');
            downArrow.classList.add('hide-arrow');
            nestedList.classList.add('show-nested-list');
        }

    })
})
