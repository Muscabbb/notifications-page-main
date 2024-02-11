//calling out the elements
const sender = document.querySelectorAll(".sender");

sender.forEach((el,ind) =>{
    el.addEventListener('click',(e)=>{
        showDetails(ind)
    })
})



function showDetails(index){
    document.querySelectorAll(".more-details")[index].classList.toggle("hide-det")
}