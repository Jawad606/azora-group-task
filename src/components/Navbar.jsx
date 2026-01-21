import React, { useState, useEffect } from 'react';
import brandIcon from '../assets/brandIcon.svg';
import Button from './Button';
import USAFLAG from '../assets/usa.svg';
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {       
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'How it works', href: '#features' },
        { name: 'All apps', href: '#how-it-works' },
        { name: 'Pricing', href: '#testimonials' },
        { name: 'For Teams', href: '#pricing' },
        { name: 'Blog', href: '#pricing' },
        { name: 'Podcast', href: '#pricing' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center">
                {/* Left: Brand */}
                <div className="flex-initial">
                    <a href="#" className="flex items-center gap-2">
                        <img src={brandIcon} alt="Logo" className="h-10 w-auto" />
                    </a>
                </div>

                {/* Right: Navigation links + Try free button */}
                <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    | 
                    <img src={USAFLAG} alt="USA Flag" className="h-4 w-auto" />
                       <a
                            href={'#'}
                            className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                        >
                            Sign In
                        </a>
                    <Button variant="outline" className="px-4 py-1 text-sm rounded-md">
                        Try free
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden ml-auto">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-background/90 backdrop-blur-md px-6 py-4">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-2">
                            <img src={USAFLAG} alt="USA Flag" className="h-4 w-auto" />
                            <a
                                href={'#'}
                                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                            >
                                Sign In
                            </a>
                        </div>
                        <Button variant="outline" className="px-4 py-1 text-sm rounded-md w-fit">
                            Try free
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
