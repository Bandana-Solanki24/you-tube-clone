import { useSelector } from "react-redux"
import icons from "../assets/images/icons"

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    return (
        <div className="shadow-lg w-auto p-5">
            <h1 className="font-bold">{isMenuOpen && "Subscriptions"}</h1>
            <ul>
                <li className="flex gap-4 mb-3">
                    <img src={icons.Home} alt="home" />
                    {isMenuOpen && "Home"}
                </li>
                <li className="flex gap-4 mb-3">
                    <img src={icons.Subscription} alt="home" />
                    {isMenuOpen && "Home"}
                </li>
                <li className="flex gap-4 mb-3">
                    <img src={icons.Shorts} alt="home" />
                    {isMenuOpen && "Home"}
                </li>
                <li className="flex gap-4 mb-3">
                    <img src={icons.Home} alt="home" />
                    {isMenuOpen && "Home"}
                </li>
            </ul>
            {/* <h1 className="font-bold pt-2">{isMenuOpen && "Watch Later"}</h1>
            <ul>
                <li className="flex gap-4 mb-3"> <img src={icons.Home} alt="home" /> Home</li>
                <li className="flex gap-4 mb-3"><img src={icons.Home} alt="home" /> Shorts</li>
                <li className="flex gap-4 mb-3"><img src={icons.Home} alt="home" /> Subscriptions</li>
                <li className="flex gap-4 mb-3"><img src={icons.Home} alt="home" /> History</li>
                <li className="flex gap-4 mb-3"><img src={icons.Home} alt="home" /> Playlists</li>
            </ul> */}

        </div>
    )
}

export default Sidebar
