import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';

const AnimatedLayout = ({ children }) => {
    const layoutRef = useRef();
    const location = useLocation(); // Obtém informações da rota atual

    useEffect(() => {
        const element = layoutRef.current;

        // Animação de entrada
        gsap.fromTo(
            element,
            { x: '-100%', opacity: 0 },
            { x: '0%', opacity: 1, duration: 1.3, ease: 'power2.out' }
        );
    }, [location.pathname]); // Monitora mudanças de rota

    return (
        <div ref={layoutRef} style={{ overflow: 'hidden' }}>
            {children}
        </div>
    );
};

export default AnimatedLayout;
