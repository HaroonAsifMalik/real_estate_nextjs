"use client"; // because we are using useEffect or useState

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { signOut, useSession, getProvider } from "next_auth/react";

const Nav = () => {
    const isUserLogin = false;
    // const { data: session } = useSession();
    const [providers, setproviders] = useState(null);
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
                <Link href="/Home" className="black_btn">HOME</Link>
                <Link href="/About" className="black_btn">ABOUT</Link>
                <Link href="/gallery" className="black_btn">GALLERY</Link>
                <Link href="/amentities" className="black_btn">AMENITIES</Link>
                <Link href="/inventory" className="black_btn">INVENTORY</Link>
                <Link href="/contact" className="black_btn">CONTACT</Link>
            </div>

            {/* Sign In/Sign Out */}
            <div className="hidden sm:flex items-center space-x-4">
                {isUserLogin ? (
                    <button
                        type="button"
                        // onClick={signOut}
                        className="outline_btn"
                    >
                        Sign Out
                    </button>
                ) : (
                    <button
                        type="button"
                        // onClick={signOut}
                        className="outline_btn"
                    >
                        Sign In
                    </button>
                )}
            </div>
            
            {/* Mobile Menu Button */}
            <button
                className="sm:hidden flex items-center space-x-2"
                onClick={toggleMenu}
            >
                <span className="material-icons">menu</span>
                {/* Replace with your mobile menu icon */}
            </button>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 bottom-0 left-0 bg-white shadow-lg z-50 flex flex-col items-center py-4 space-y-4 sm:hidden">
                    <Link href="/Home" className="black_btn">HOME</Link>
                    <Link href="/About" className="black_btn">ABOUT</Link>
                    <Link href="/gallery" className="black_btn">GALLERY</Link>
                    <Link href="/amentities" className="black_btn">AMENITIES</Link>
                    <Link href="/inventory" className="black_btn">INVENTORY</Link>
                    <Link href="/contact" className="black_btn">CONTACT</Link>
                    {isUserLogin ? (
                        <button
                            type="button"
                            // onClick={signOut}
                            className="outline_btn"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <button
                            type="button"
                            // onClick={signOut}
                            className="outline_btn"
                        >
                            Sign In
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Nav;
