import { useState } from 'react';
import style from "./dropdown.module.scss";

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedFlavor, setSelectedFlavor] = useState('Switch Flavor');
    const [options, setOptions] = useState(props.options || [
'Red Ryder Punch',
    ]);
    console.log("options", options);
    // const options = [
    //     'Red Ryder Punch',
    //     'Orange Drizzle',
    //     'Tropical Thrill',
    //     'Og Luck',
    //     'Bodacious Berry'
    // ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (flavor) => {
        props?.onChange(flavor);
        setSelectedFlavor(flavor);
        toggleDropdown();
    };

    return (
        <div className={`${style.dropdownContainer} `}>
            <div className={`${style.dropdownHeader} ${style.darkMode}`} onClick={toggleDropdown}>
                {selectedFlavor?.label || props?.currenLabel}
                <span className={`${isOpen ? `${style.arrowOpen} ${style.darkMode}` : `${style.arrowClose} ${style.darkMode}`}`} />
            </div>
            {isOpen && (
                <div className={`${style.dropdownList} ${style.darkMode}`}>
                    {options.map((flavor, index) => (
                        <div
                            key={index}
                            className={style.dropdownItem}
                            onClick={() => handleOptionClick(flavor)}
                        >
                            {flavor?.label}
                        </div>
                    ))}
                </div>
            )}

            <style jsx>{`
        
      `}</style>
        </div>
    );
}
