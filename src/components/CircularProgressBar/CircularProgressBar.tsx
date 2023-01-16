import "./CircularProgressBar.css";

interface IProps {
  percentage: number;
  text: string;
}

const sqSize = 50;
const strokeWidth = 4;
const radius = (sqSize - strokeWidth) / 2;
const viewBox = `0 0 ${sqSize} ${sqSize}`;
const dashArray = radius * Math.PI * 2;

const CircularProgressBar = ({ percentage, text }: IProps) => {
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress stroke-orange-500"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 o'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className="text-lg font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
