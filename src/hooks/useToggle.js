import { useState } from 'react';

const useToggle = (initial=false) => {
    const [isActive, setIsActive] = useState(initial);
    const toggleButton = () => setIsActive(active => !active);
    return [ isActive, toggleButton ];
}

export default useToggle;