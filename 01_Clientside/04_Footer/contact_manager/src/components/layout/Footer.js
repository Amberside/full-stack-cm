import React from 'react';

const Footer = () => {
// 2. Use JavaScript's date to create a data object
const date = new Date();
// 3. the return will use String.fromCharCode(169) to output the copyright symbol
// 4. date.getFullYear will output the current year. This will update the year for us.
  return (
    <div className='bg-danger p-2 my-3'>
      <p className='py-2 ml-3 text-white'>
        copyright { String.fromCharCode(169)}
        {' ' + date.getFullYear()} Websites 'r' us
      </p>
    </div>
  )
}
// 5. Done!

export default Footer