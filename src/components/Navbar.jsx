import React from "react";
import { navLinks } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: 'bottom top',
            }
        })

        navTween.fromTo('nav', {
            backgroundColor: 'transparent',
        },
            {
                backgroundColor: '#00000050',
                backgroundFilter: 'blur(10px)',
                duration: 1,
                ease: "power1.inOut",

            })
    }, []);

    return (
        <nav>

            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Velvet Pour Logo" />
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {navLinks.map((nav) => (
                        <li key={nav.id} className="text-[18px] font-medium cursor-pointer">
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;