const Arrow = ({ firstColor, secondColor, fillPercentage }) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "1",
        bottom: "2.5em",
        right: "0",
      }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1200"
        height="10em"
        width="10em"
      >
        <g>
          <defs>
            <linearGradient id={"half"} x1="50%" y1="0%" x2="50%" y2="100%">
              <stop id="top" offset="0%" stopColor={firstColor} />
              <stop id="top" offset={fillPercentage} stopColor={firstColor} />
              <stop
                id="bottom"
                offset={fillPercentage}
                stopColor={secondColor}
              />
            </linearGradient>
          </defs>

          <path
            fill={`url(#half)`}
            d="M348.298,978.23c176.228-84.92,321.218-205.298,428.732-370.681
    		c64.22-98.786,104.149-211.464,118.011-328.471c4.064-34.298,8.456-68.635,12.786-103.856
    		c-36.691,18.552-71.153,36.504-106.137,53.37c-11.671,5.627-24.506,10.945-37.131,11.836c-0.359,0.025-0.72,0.043-1.08,0.053
    		c-18.812,0.52-30.954-22.631-19.131-37.272c0.841-1.041,1.763-1.981,2.784-2.797c53.489-42.726,108.207-83.922,162.806-125.246
    		c53.974-40.85,102.105-31.818,136.855,26.006c7.719,12.845,15.207,26.86,18.265,41.297c13.566,64.046,25.811,128.38,37.8,192.746
    		c3.829,20.553,0.947,38.522-21.367,46.13c-53.915,18.379-68.369-92.342-76.252-125.012c-2.968-12.302-9.983-26.975-12.147-39.68
    		c-2.947-17.307,4.401,385.764-315.753,655.592c-125.276,118.429-276.259,191.146-436.626,246.357
    		c-38.406,13.221-99.959,30.982-100.109,30.994c-60.361,4.797-47.694-34.522-31.355-43.892
    		C167.487,1072.304,281.54,1010.398,348.298,978.23z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Arrow;