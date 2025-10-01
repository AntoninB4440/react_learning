import iconUrl from "../assets/chef-claude-icon.png"

function Header(){


    return(
        <header className="headerContainer">
            <img className="headerIcon" src={iconUrl} alt="Chef Claude Icon" />
            <h1 className="headerTitle">Chef Claude</h1>
        </header>
    )

}

export default Header