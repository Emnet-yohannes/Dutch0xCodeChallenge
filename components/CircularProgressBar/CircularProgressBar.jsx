const CircularProgressBar = ({ progress, size }) => {
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;
  
    return (
      <svg className={`w-${size} h-${size}`} viewBox={`0 0 ${size} ${size}`}>
        <circle className="text-gray-200" strokeWidth={strokeWidth} fill="transparent" r={radius} cx={size / 2} cy={size / 2} />
        <circle className="text-green-500 stroke-current" strokeWidth={strokeWidth} strokeLinecap="round" fill="transparent" r={radius} cx={size / 2} cy={size / 2} strokeDasharray={circumference} strokeDashoffset={offset} />
        {progress === 100 && (
          <path
            className="text-green-500 stroke-current fill-none stroke-8"
            d={`M${size / 2 - radius / 2},${size / 2} L${size / 2 - radius / 8},${size / 2 + radius / 4} L${size / 2 + radius / 2},${size / 2 - radius / 4}`}
          />
        )}
      </svg>
    );
  }
  export default CircularProgressBar