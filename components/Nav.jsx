"use client";

import Logo from "@components/Logo/Logo";
import NavigationLinks from "@components/Link/Link";
import Button from "@components/Button/Button";
import { useSession, signIn, signOut } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { signOut, useSession, getProvider } from "next_auth/react";

const Nav = () => {
    // const { data: session } = useSession();

    const isUserLogin = true;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // useEffect(() => {
    //     const setProviders = async () => {
    //         const response = await getProvider();
    //         setproviders(response);
    //     };
    //     setProviders();
    // }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between w-full mb-16 pt-3 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/assets/images/logo.svg"
                    className="object-contain"
                    width={30}
                    height={30}
                    alt="Logo"
                />
                <p className="text-xl font-semibold">Promptopia</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex flex-grow justify-center space-x-4">
                <Link href="/Home" className="home_btn">HOME</Link>
                <Link href="/About" className="home_btn">ABOUT</Link>
                <Link href="/gallery" className="home_btn">GALLERY</Link>
                <Link href="/amentities" className="home_btn">AMENITIES</Link>
                <Link href="/inventory" className="home_btn">INVENTORY</Link>
                <Link href="/contact" className="home_btn">CONTACT</Link>
            </div>

            {/* Sign In/Sign Out */}
            <div className="hidden sm:flex items-center space-x-4">
                <Button
                    href={!isUserLogin ? "/login" : undefined}
                    onClick={isUserLogin ? () => signOut() : undefined}
                    className="outline_home_btn"
                >
                    {isUserLogin ? "Sign Out" : "Sign In"}
                </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
                onClick={toggleMenu}
                className="sm:hidden flex items-center space-x-2"
            >
                <span className="material-icons">menu</span>
                {/* Replace with your mobile menu icon */}
            </Button>
            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 bottom-0 left-0 bg-white shadow-lg z-50 flex flex-col items-center py-4 space-y-4 sm:hidden">
                    <NavigationLinks
                        links={links}
                        linkClass="black_btn"
                        onLinkClick={toggleMenu}
                    />
                    <Button
                        href={!isUserLogin ? "/login" : undefined}
                        onClick={isUserLogin ? () => signOut() : undefined}
                        className="outline_home_btn"
                    >
                        {isUserLogin ? "Sign Out" : "Sign In"}
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Nav;
