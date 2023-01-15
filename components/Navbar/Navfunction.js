// import "./Navbar.scss"

const Navfunction = () => {
    var element = document.getElementById("NavigationBar");
    
    window.addEventListener("scroll", function(event){
      var scroll = this.scrollY;
      if(scroll > 0) {
        element.classList.remove("animatedNavBarpre");
        element.classList.add("animatedNavBarpost");
        // element.classList.toggle("animatedNavBarpost");
      }else{
        element.classList.remove("animatedNavBarpost");
        element.classList.add("animatedNavBarpre");
        // element.classList.toggle("animatedNavBarpre");
      }
    })
  };
export default Navfunction;