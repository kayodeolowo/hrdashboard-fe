"use client";

import React, { useState, useEffect, forwardRef } from 'react';
import { Dropdown } from "flowbite-react";


interface DropdownProps {
  label: string;
  options: { label: string; value: string }[]; // Use any for both label and value
  onSelect: (value: string) => void; // Use any for selected value
  selectedValue: string | null;
  error?: string; // To display error message
  placeholder?: string;
}

const DropDownComp = forwardRef<HTMLDivElement, DropdownProps>(
  ({ label, options, onSelect, selectedValue, error, placeholder = 'Select an option' }, ref) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(selectedValue);

    // Update when selectedValue prop changes
    useEffect(() => {
      setSelectedOption(selectedValue);
    }, [selectedValue]);

    const handleSelect = (value: string) => {
      setSelectedOption(value);
      onSelect(value);
    };

    return (
      <div className="relative border border-gray rounded-md py-1  px-4" ref={ref}>
        <label className="block text-sm font-semibold mb-1">{label}</label>
        <Dropdown
          label={selectedOption ? options.find(opt => opt.value === selectedOption)?.label : placeholder}
          inline
          className="w-full  " // Ensure it fills available width
          
        >
          {/* This wrapper ensures max height and scrolling */}
          <div className="overflow-y-auto max-h-[10rem] ">
            {options.map((option) => (
              <Dropdown.Item
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="hover:bg-secondarypurple  hover:text-white"
              >
                {option.label}
              </Dropdown.Item>
            ))}
          </div>
        </Dropdown>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

DropDownComp.displayName = 'DropDownComp';
export default DropDownComp;
