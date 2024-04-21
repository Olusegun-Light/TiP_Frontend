import React from "react";
import { SelectInputProps } from "./SelectInput.types";
import styles from "@/styles/inputs/selectInput.module.css";

const SelectInput = ({
  label,
  name,
  optionsData,
  placeholder,
  ...props
}: SelectInputProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="text-sm md:text-base capitalize text-[rgba(27,27,27,1)]"
      >
        {label}
      </label>
      <div className="bg-white flex rounded-lg h-[60px] border-2 border-athsSpecial mt-1 mb-5">
        <select
          {...props}
          name={name}
          className={`bg-white flex-grow h-full px-4 border-none rounded-lg focus:outline-none focus:ring-0 placeholder:text-[#575757] placeholder:text-[16px] w-full text-sm md:text-base ${styles.customSelect}`}
        >
          <option value="">{placeholder}</option>
          {optionsData}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;