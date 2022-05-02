window.onscroll = function () {

    if (window.scrollY > 100) {

        document.getElementById('header').classList.add('header-scroll');
        document.getElementById('header').style.marginTop = "-50px";
        document.getElementById('navbar-main').style.height = "80px"
    } else {
        document.getElementById('header').classList.remove('header-scroll');
        document.getElementById('header').style.marginTop = "0";
        document.getElementById('navbar-main').style.height = "100px";
    }
};

document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
};

document.getElementById("switchButton").onclick = function(){
    document.getElementById("myBody").classList.toggle("dark");
}
