import React, { useState } from "react";
import "../App.css";
import logo from './logo192.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaFacebook, FaHome } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";


function Menu() {

    const [menuBars, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menuBars);
    };

    const data = [
        { title: "Başlık" },
        { title: "Başlık" },
        { title: "Başlık" },
        { title: "Başlık" },
        { title: "Başlık" },
        { title: "Başlık" },
        { title: "Başlık" },
        { title: "Başlık" },
        { title: "Başlık" },
    ];

    return (
        <>
            <div className="menu" style={menuBars ? { width: "150px" } : { width: "70px" }}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="bars" onClick={toggleMenu}>
                    <FaBarsStaggered />
                </div>
                <div className="social_media">
                    <FaFacebook />
                    <AiFillTwitterCircle />
                    <AiFillInstagram />
                </div>
            </div>

            <div className="safe_area" style={menuBars ? { transform: "translateX(0)" } : { transform: "translateX(-100%)" }}>
                <div className="safe_body">
                    {data.map((item, index) => (
                        <div key={index} className="safe_card">
                            <div className="safe_card_icon">
                                <FaHome />
                            </div>
                            <div className="safe_card_body">
                                <div className="safe_card_title">{item.title}</div>
                                <div className="safe_card_next">
                                    Devamını Gör &nbsp;&nbsp; <GrLinkNext />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Menu;