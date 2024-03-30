import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

export default function Header() {
	const [isInputFocused, setInputFocused] = useState(false);
	return (
		<header className=" main-sections header flex items-center gap-[4em] ml-9">
			<div className="logo">
				<a
					href="https://rawg.io/"
					className="logo tracking-[.3em]  text-white text-[18px] font-extrabold"
				>
					RAWG
				</a>
			</div>
			<nav className="nav-section flex items-center ">
				<div className="navbar items-center group rounded-full ">
					<MagnifyingGlassIcon
						className={`w-5 h-5 absolute mt-[15.2px] ml-3 text-[grey] transition-colors duration-200 ease-in-out group-hover:text-black pointer-events-none ${
							isInputFocused ? 'text-black' : ''
						}`}
					/>
					<input
						type="text"
						placeholder="Search any game"
						className={`nav-input w-[88em] h-12 rounded-full text-[15px] pl-[40px] bg-[#3B3B3B] hover:bg-white transition-bg duration-200 ease-in-out focus:outline-none ${
							isInputFocused ? 'bg-white' : ''
						}`}
						onFocus={() => setInputFocused(true)}
						onBlur={() => setInputFocused(false)}
					/>
				</div>
			</nav>
			<div className="nav-buttons flex justify-between items-center gap-[3em] text-white">
				<a
					className="hover:border-b-[3px] transition-all ease-in-out duration-90"
					href=""
				>
					LOG IN
				</a>
				<a
					className="hover:border-b-[3px] transition-all ease-in-out duration-90"
					href=""
				>
					SIGN UP
				</a>
				<a
					className="hover:border-b-[3px] transition-all ease-in-out duration-90"
					href=""
				>
					API
				</a>
				<a href="">
					<EllipsisHorizontalIcon className="w-5 h-5" />
				</a>
			</div>
		</header>
	);
}
