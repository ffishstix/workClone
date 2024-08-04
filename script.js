function pricing(){
    document.getElementById("myDropdown").classList.toggle("show");
    const button = document.getElementsByClassName("myDropdown");
    const default_pricing = "std";
    button.textContent = default_pricing;
    button.style.display = "block";

}   