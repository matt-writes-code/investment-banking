import React from 'react';
import useDarkMode from 'use-dark-mode';

const DarkMode = () => {
    const darkMode = useDarkMode(false);
    return (
        <div>
            <button onClick={darkMode.toggle}>☼</button>
        </div>
    )
}

export default DarkMode;