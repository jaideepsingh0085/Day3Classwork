import "./Style/Header.css"

function Header() {
    return (
        <div className="navbar">
            <div className="nav-left-area">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
                <h2>GeekFoods</h2>
            </div>
            <div className="nav-mid-area">
                <a className="home" href="#">Home</a>
                <a href="#">Quote</a>
                <a href="#">Restaurants</a>
                <a href="#">Foods</a>
                <a href="#">Contact</a>
            </div>
            <div className="nav-right-area">
                <button>Get Started</button>
            </div>
        </div>
    )
}
export default Header;