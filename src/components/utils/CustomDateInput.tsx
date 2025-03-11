import React from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerFieldProps {
  name: string;
  placeholder: string;
  control: any;
  required?: boolean;
  className?: string;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  name,
  placeholder,
  control,
  required = false,
  className = ''
}) => {
  return (
    <div className="w-full mt-1.5">
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field: { onChange, value, ref } }) => (
          <div className="relative border rounded-lg  text-whiteshade outline-none p-2 bg-inherit focus:border-yellow   focus:bg-inherit border-gray w-full">
            <DatePicker
              selected={value ? new Date(value) : null}
              onChange={(date) => onChange(date)}
              placeholderText={placeholder}
              className="  text-whiteshade w-full bg-inherit focus:outline-none"
              dateFormat="MM/dd/yyyy"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              ref={ref}
            />
            {!value && (
              <div className="absolute left-2 text-whiteshade  top-1/2 transform -translate-y-1/2 pointer-events-none ">
                {placeholder} {required}
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};



export default DatePickerField;