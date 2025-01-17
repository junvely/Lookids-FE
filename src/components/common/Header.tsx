import React from 'react';
import { useLocation } from 'react-router-dom';
import { getHeaderTitle } from '../../utils/getHeaderTitle';
import { IoAddOutline } from 'react-icons/io5';

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className='h-[80px] flex justify-between items-center px-6'>
      <h1 className='text-2xl font-bold font-inter'>
        {getHeaderTitle(location.pathname)}
      </h1>
      <button className='w-7 h-7 flex-all-center border border-black rounded-md'>
        <IoAddOutline />
      </button>
    </header>
  );
};

export default Header;
