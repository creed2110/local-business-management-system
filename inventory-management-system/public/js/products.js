const applicationModal = document.getElementById('application-modal');
const AddBtn = document.getElementById('add-btn');
const CloseBtn = document.getElementById('close-btn');
const ViewBtn = document.getElementById('view-btn');
const ViewModal = document.getElementById('ViewModal')
const CloseBtnV = document.getElementById('CloseBtnV')


// modal Activation for Creating Products
AddBtn.addEventListener('click',() => {
    applicationModal.style.display="block";
});
//closing modal through button
CloseBtn.addEventListener('click', () =>{
    applicationModal.style.display ='none';
});
//closing modal for viewing products
CloseBtnV.addEventListener('click', () =>{
    ViewModal.style.display= "none";
})
//Modal Activation for Viewing Products
ViewBtn.addEventListener('click',() => {
    ViewModal.style.display = "block";
});
// When user clicks anywhere ouside of the modal it closes
window.onclick=function(event){
    if(event.target == applicationModal){
        applicationModal.style.display ="none"
    }
}

