const ApplicationModal = document.getElementById('applicationModal');
const viewModal = document.getElementById('viewModal');
const ApplicationForm = document.getElementById('addSuppliersForm');
const CloseBtnA = document.getElementById('closeBtnA');
const CloseBtnV = document.getElementById('closeBtnV');
const ViewBtn = document.querySelectorAll('.view-btn');

ViewBtn.forEach(button => {
    button.addEventListener('click', () => {
       viewModal.style.display ='block';
    });
});
CloseBtnV.addEventListener('click', () => {
    viewModal.style.display ='none';
});

function addModal(){
    ApplicationModal.style.display = 'block'
}
CloseBtnA.addEventListener('click', () =>{
    ApplicationModal.style.display = "none";
});

window.addEventListener('click', (e) =>{
    if(e.target === viewModal){
        viewModal.style.display ='none';
    }
    
    if(e.target === ApplicationModal){
        ApplicationModal.style.display ='none';
    }
} )
