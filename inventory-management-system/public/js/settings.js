const LogoutModal = document.getElementById('LogoutModal');
const ProfileModal = document.getElementById('ProfileModal');
const ProfileForm = document.getElementById('ProfileForm');
const CloseBtnP = document.getElementById('closeBtnP');
const CloseBtnV = document.getElementById('closeBtnV');
const ViewBtn = document.querySelectorAll('.view-btn');
const EditBtn = document.getElementById('editBtn');
const LogoutBtn = document.getElementById('logoutBtn');
const ViewModal = document.getElementById('viewModal');
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => { 

    sidebar.classList.toggle("active");
});
ViewBtn.forEach(button => {
    button.addEventListener('click', () => {
       viewModal.style.display ='block';
    }); 
});
EditBtn.addEventListener('click', () => {
    ProfileModal.style.display = "block";
});
LogoutBtn.addEventListener('click', () =>{
    LogoutModal.style.display ="block"
});

CloseBtnV.addEventListener('click', () => { //Close btn for view modal
    viewModal.style.display ='none';
});

CloseBtnP.addEventListener('click', () =>{ //Close btn for Profile editing
    ProfileModal.style.display = "none";
});

function Logout(){
    window.location.href = "sigin.html"
}
function Return(){
    LogoutModal.style.display = "none"
}
window.addEventListener('click', (e) =>{
    if(e.target === viewModal){
        viewModal.style.display ='none';
    }
    
    if(e.target === ProfileModal){
        ProfileModal.style.display ='none';
    }
} )
