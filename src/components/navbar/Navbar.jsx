import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Avatar from "C:/Users/MSC/Downloads/abd.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

export const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon className="icon" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon
                            className="icon"
                            onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <img src={Avatar} alt="avatar" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
