import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


const CustomDropdown = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(value || []);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setRotationAngle(rotationAngle + 180); 
  };

  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.includes(option);
    let newSelectedOptions;

    if (isSelected) {
      newSelectedOptions = selectedOptions.filter((item) => item !== option);
    } else {
      newSelectedOptions = [...selectedOptions, option];
    }

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  return (
    <div className="custom-dropdown z-50 text-sm">
      <div className="dropdown-header flex gap-12" onClick={handleToggle}>
        {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Sector of Expertise"}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`dropdown-icon  ${isOpen ? " rotated" : ""}`}
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option}
              className={`dropdown-option ${
                selectedOptions.includes(option) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
