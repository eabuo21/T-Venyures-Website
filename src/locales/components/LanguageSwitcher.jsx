import React from "react";

const LangSw = () => {
    const changeLanguage = (lng) => {
        i18next.changeLanguage(lng)
    };

    return (
        <>
            <select >
                <option value="english" onClick={() => changeLanguage('en')}> English
            
                </option>
                <option value="french" onClick={() => changeLanguage('fr')}> French</option>
                
            </select>
                

          
           
        
        </>
    );


};
export default LangSw;