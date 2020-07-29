import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './index.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="JhonFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                New Video
            </Button>
        </nav>
    )
}

export default Menu;