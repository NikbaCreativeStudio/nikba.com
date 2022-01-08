import React, { useState } from "react";
import Particles from "react-tsparticles";

import './Particles.css';

export const ParticleComponent = () => {

    const [show, setShow] = useState(false)

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 10)

        return () => clearTimeout(timeout)

    }, [show])

    if (!show) return null

    return (
        <Particles
            id="tsparticles"
            options={{

                fpsLimit: 60,
                interactivity: {
                    detect_on: "window",
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        onHover: {
                            enable: true,
                            mode: ["bubble", "connect"],
                        },
                        onDiv: [
                            {
                                enable: true,
                                selectors: ".logo",
                                mode: "bounce",
                                type: "circle"
                            }
                        ],
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 250,
                            duration: 2,
                            opacity: 0.5,
                            size: 3,
                            speed: 1,
                            color: {
                                value: '#ffffff'
                            }
                        },
                        connect: {
                            distance: 70,
                            lineLinked: {
                                distance: 210,
                                opacity: 0.05,
                            },
                            radius: 220,
                            speed: 1,
                            opacity: 0.05,
                            color: {
                                value: '#ffffff'
                            },
                            enable: true,
                            rotate: {
                                direction: "clockwise",
                                random: false,
                                value: 0
                            }
                        }
                    }
                },
                particles: {
                    color: {
                        value: "#ffffff"
                    },
                    move: {
                        direction: "none",
                        bounce: false,
                        enable: true,
                        outMode: "out",
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 700
                        },
                        value: 220
                    },
                    opacity: {
                        value: 0
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 3
                        },
                        value: 5
                    }
                },
                retina_detect: true,
            }}
        />
    )
}
