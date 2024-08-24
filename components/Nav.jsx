"use client";

import Logo from "@components/Logo/Logo";
import NavigationLinks from "@components/Link/Link";
import Button from "@components/Button/Button";

import { useState } from "react";

const Nav = () => {
    const isUserLogin = false;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const links = [
        { href: "home", label: "HOME" },
        { href: "about", label: "ABOUT" },
        { href: "gallery", label: "GALLERY" },
        { href: "amentities", label: "AMENITIES" },
        { href: "inventory", label: "INVENTORY" },
        { href: "contact", label: "CONTACT" },
    ];

    return (
        <nav className="flex items-center justify-between w-full py-5 px-4 sm:px-6 lg:px-8 sticky top-0 bg-primary-orange-50 z-20 bg-transparent">
            {/* Logo */}
            <Logo src="/assets/images/logo.svg" alt="Logo" text="Promptopia" />

            {/* Desktop Navigation */}
            <div className="hidden sm:flex flex-grow justify-center space-x-4">
                <NavigationLinks links={links} linkClass="home_btn" />
            </div>

            {/* Sign In/Sign Out */}
            <div className="hidden sm:flex items-center space-x-4">
                <Button
                    href={isUserLogin ? undefined : "/login"}
                    onClick={isUserLogin ? () => console.log('Sign out') : undefined} // Replace with signOut function
                    className="outline_home_btn"
                >
                    {isUserLogin ? "Sign Out" : "Sign In"}
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button onClick={toggleMenu} className="sm:hidden flex items-center space-x-2">
                <span className="material-icons">menu</span>
            </Button>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 bottom-0 left-0 bg-white shadow-lg z-50 flex flex-col items-center py-4 space-y-4 sm:hidden">
                    <NavigationLinks links={links} linkClass="black_btn" onLinkClick={toggleMenu}/>
                    <Button
                        href={isUserLogin ? undefined : "/login"}
                        onClick={isUserLogin ? () => console.log('Sign out') : undefined} // Replace with signOut function
                        className="outline_home_btn">
                        {isUserLogin ? "Sign Out" : "Sign In"}
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Nav;
