import { StylesConfig } from "react-select";

interface Option {
  value: string;
  label: string;
}

export const customStyles: StylesConfig<Option, false> = {
  option: (provided, state) => {
    const backgroundColor = state.isFocused ? "#e0e0e0" : "inherit";
    const color = state.isFocused ? "black" : "inherit";

    return {
      ...provided,
      backgroundColor,
      color,
      cursor: "pointer",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    };
  },
  singleValue: (provided) => ({
    ...provided,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  }),
  control: (provided, state) => {
    const borderColor = state.isFocused ? "black" : "#e0e0e0";

    return {
      ...provided,
      borderColor,
      "&:hover": {
        borderColor: "black",
        borderWidth: 1,
      },
      cursor: "pointer",
      boxShadow: "none",
    };
  },
  indicatorsContainer: (provided) => ({
    ...provided,
    "&:hover": {
      cursor: "pointer",
    },
  }),
};
