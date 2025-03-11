import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface GenderInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSelectGender: (value: string) => void;
  selectedGender: string | null; // Pass the selected gender
}

const options = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

const GenderInput: React.FC<GenderInputProps> = ({ onSelectGender, selectedGender, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  useEffect(() => {
    if (selectedGender) {
      setSelectedValue(selectedGender); // Set the selected gender when the component mounts
    }
  }, [selectedGender]);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onSelectGender(value); // Pass the selected value back to the form
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 border border-[#D1D1D1] rounded-md cursor-pointer"
      >
        <span className={selectedValue ? 'text-gray' : 'text-gray'}>
          {selectedValue ? selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1) : 'Select gender'}
        </span>
        <FaChevronDown  className='text-gray'/>
      </div>
      {isOpen && (
        <ul className="absolute z-10 text-gray-700 w-full bg-white border border-[#D1D1D1] rounded-md mt-2 shadow-md">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenderInput;
