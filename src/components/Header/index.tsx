import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Select from 'react-select'

const Header = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: state.isSelected ? "rgba(1, 27, 51, 0.70)" : "#fff",
      width: '156px',
      height: ' 46px',
      backgroundColor: state.isSelected ? "#3D79EF" : "#eee",
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "#011b33715384616",
      padding: "10px",
      borderRadius: '10px',
      border: "0.5px solid rgba(1, 27, 51, 0.18)",
      boxShadow: "none",
      width: '156px',
      height: ' 46px'
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "rgba(1, 27, 51, 0.70)" }),
  };


  return (
    <div className='header'>
      <img src="./icons/logo.svg" alt="logo" />


      <div className='header-right'>

        <div className='header-select'>
          <Select options={options}
            classNamePrefix="header-select"
            placeholder="Categoty"
            styles={customStyles}
          />
          <Select options={options}
            classNamePrefix="minimum price"
            styles={customStyles}
          />
          <Select options={options}
            classNamePrefix="maximum price"
            styles={customStyles}
          />
          <input className='header-input'
            placeholder="location" type="text" />
        </div>

        <div className="header-btn">
          <button className='button'>Search</button>
          <Link className='button' href="/">login</Link>
        </div>
      </div>
    </div>
  )
}

export default Header