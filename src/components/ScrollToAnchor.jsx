import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const { pathname, hash, key } = useLocation();
    const lastHash = useRef('');

    useEffect(() => {
        if (hash === '') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                lastHash.current = hash;
            }
        }
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToAnchor;
