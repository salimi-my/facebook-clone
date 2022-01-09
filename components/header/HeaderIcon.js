function HeaderIcon({ path, active }) {
  return (
    <div className='pt-1'>
      <div
        className={`flex items-center cursor-pointer md:px-4 lg:px-7 xl:px-12 sm:h-12 rounded-xl group ${
          !active && 'md:hover:bg-gray-100 active:hover:bg-gray-200'
        }`}
      >
        <svg
          viewBox='0 0 28 28'
          className={`h-5 sm:h-7 mx-auto text-center ${
            active ? 'fill-blue-500' : 'fill-gray-500'
          }`}
        >
          {path}
        </svg>
      </div>
      {active && <hr className='border-t-[3px] border-blue-500' />}
    </div>
  );
}

export default HeaderIcon;
