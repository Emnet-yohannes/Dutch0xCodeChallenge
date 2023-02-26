
import Image from 'next/image'
const SearchBar = () => (
<div className="flex items-center justify-center w-[100%] h-[36px] py-[6px] bg-black rounded-lg">
  <form method="GET" className='w-[100%] rounded-2xl'>
    <div className="relative text-gray-600  focus-within:text-gray-400 w-full ">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline ">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0565 14.9167L9.38979 10.25C8.97312 10.5833 8.49396 10.8472 7.95229 11.0417C7.41062 11.2361 6.83424 11.3333 6.22312 11.3333C4.70924 11.3333 3.42812 10.8092 2.37979 9.76083C1.3309 8.71194 0.806458 7.43056 0.806458 5.91667C0.806458 4.40278 1.3309 3.12139 2.37979 2.0725C3.42812 1.02417 4.70924 0.5 6.22312 0.5C7.73701 0.5 9.0184 1.02417 10.0673 2.0725C11.1156 3.12139 11.6398 4.40278 11.6398 5.91667C11.6398 6.52778 11.5426 7.10417 11.3481 7.64583C11.1537 8.1875 10.8898 8.66667 10.5565 9.08333L15.244 13.7708C15.3967 13.9236 15.4731 14.1111 15.4731 14.3333C15.4731 14.5556 15.3898 14.75 15.2231 14.9167C15.0703 15.0694 14.8759 15.1458 14.6398 15.1458C14.4037 15.1458 14.2092 15.0694 14.0565 14.9167ZM6.22312 9.66667C7.26479 9.66667 8.15035 9.30222 8.87979 8.57333C9.60868 7.84389 9.97312 6.95833 9.97312 5.91667C9.97312 4.875 9.60868 3.98944 8.87979 3.26C8.15035 2.53111 7.26479 2.16667 6.22312 2.16667C5.18146 2.16667 4.2959 2.53111 3.56646 3.26C2.83757 3.98944 2.47312 4.875 2.47312 5.91667C2.47312 6.95833 2.83757 7.84389 3.56646 8.57333C4.2959 9.30222 5.18146 9.66667 6.22312 9.66667Z" fill="black" fill-opacity="0.5"/>
</svg>

          </button>
      </span>
      <input type="search" name="q" className="border-[1px]  w-full h-[45px] py-[4px] text-sm text-[#fff] bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Find Holders" />
    </div>
  </form>
</div>
  );
  
  export default SearchBar;