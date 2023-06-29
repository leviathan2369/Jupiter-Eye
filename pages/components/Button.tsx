interface Props {
	title: string;
	onClick?: () => void;
	width?: string;
	loading?: boolean;
	padding?: string;
	noIcon?: boolean;
  }

  function Button({ title, onClick, width ,loading, padding, noIcon }: Props) {
	return (
	  <button
		className={`ease group relative z-30 box-border inline-flex buttonBox ${padding} cursor-pointer items-center justify-center overflow-hidden rounded bg-violet-500 bg-gradient-to-r  from-pink-200 to-pink-700  px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none`}
		onClick={onClick}
	  >

<span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-violet-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-violet-700"></span>


		<span className="relative z-20 flex items-center font-semibold">
		  {noIcon && (
			<svg
			  className="relative mr-2 h-5 w-5 flex-shrink-0 font-agdasima text-white"
			  fill="none"
			  stroke="currentColor"
			  viewBox="0 0 24 24"
			  xmlns="http://www.w3.org/2000/svg"
			>
			  <path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M13 10V3L4 14h7v7l9-11h-7z"
			  ></path>
			</svg>
		  )}
		  {loading ? "Loading..." : title}
		</span>
	  </button>
	);
  }

  export default Button;