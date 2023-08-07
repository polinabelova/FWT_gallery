import React from 'react'
import CreatableSelect from 'react-select/creatable';


export default function Select({ options, defaultValue, onChange, placeholder, theme }) {
  
  const lightStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: 'grey', ':active': { borderColor: 'black' },
      ':hover': { borderColor: 'black' },
      height: '45px',
      boxShadow: 'none',
      borderRadius: '8px',
      border: '1px solid',

    }),

    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: "black"
    }),

    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: 'black',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused && "black",
      ':active': { backgroundColor: 'black' },
      color: state.isFocused && "white"
    }),

    menu: (provided, state) => ({
      ...provided,
      backgroundColor: 'white'
    }),
  }

  const darkStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,

      ':active': { borderColor: 'white' },
      ':hover': { borderColor: 'white' },
      height: '45px',
      boxShadow: 'none',
      borderRadius: '8px',
      border: '-1px solid',
      backgroundColor: 'black',
      borderColor: 'white',

    }),

    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: "white"
    }),

    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: 'white',
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused && 'white',
      color: state.isFocused && 'black',
      color: 'white',
      ':hover': { color: 'black' },
      ':active': { backgroundColor: 'white' },

    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: 'black'
    }),
  }


  return (
    <CreatableSelect
      className='select'
      isClearable
      options={options}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      {...(theme === "light" ? { styles: lightStyles } : { styles: darkStyles })}

    />

  )
}

