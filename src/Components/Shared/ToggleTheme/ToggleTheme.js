import React, { useState } from 'react';
import lightMode from "../../../Assets/light-mode.png";
import darkMode from "../../../Assets/dark-mode.png";

const ToggleTheme = () => {
    // const { user, theme, setTheme } = useContext(AuthContext);
    const [theme, setTheme] = useState(false);
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme(true)
        }
        else if (!e.target.checked) {
            setTheme(false)
        }
    }
    return (
        <div className="form-control lg:mr-3">
            <label className="label cursor-pointer flex justify-end">
                {
                    theme ? <img src={darkMode} className="label-text w-7 mr-1" alt='/mode'></img>
                        : <img src={lightMode} className="label-text w-7 mr-1" alt='/mode'></img>
                }
                <input onChange={handleToggle} type="checkbox" className="toggle toggle-secondary" />
            </label>
        </div>
    );
};

export default ToggleTheme;