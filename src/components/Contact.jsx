import React from "react";
import { openingHours, socials } from "/constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut',

        })

        timeline.from(titleSplit.words, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.02,
        })
        .from('#contact h3 , #contact p', {
            yPercent: 100,
            opacity: 0,
            stagger: 0.02,
        }, '+=0.5')
        .to('#f-right-leaf', {
            y: -50,
            ease: 'power1.inOut',
        }, '+=1')
        .to('#f-left-leaf', {
            y: 50,
            ease: 'power1.inOut',
        }, '<')


    }, []);


    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

            <div className="content">
                <h2>Where you can find us</h2>

                <div>
                    <h3>Visit Our Bar</h3>
                    <p>
                        456, Raq Blvd. #404, Los Angeles, CA 90220
                    </p>

                    <div>
                        <h3>Contact us</h3>
                        <p>
                            Email: info@ourbar.com
                            <br />
                            Phone: (123) 456-78909</p>
                    </div>
                    <h3>Open Every day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>{time.day} :{time.time}</p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>

            </div>

        </footer>

    )
}

export default Contact;