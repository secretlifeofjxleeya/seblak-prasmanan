//toggle class active untuk bars
const navbarNav = document.querySelector('.navbar-nav');

//ketika bars diklik
document.querySelector('#bars').onclick = () => {
    navbarNav.classList.toggle('active');
};

//toggle class active untuk search-form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-btn').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};


//klik di luar element
const bars = document.querySelector('#bars');
const sb = document.querySelector('#search-btn');

document.addEventListener('click', function(e){
    if(!bars.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})