import "../../styles/threed-styles.css";
import { useCallback, useEffect } from "react";

const ThreeDEffect = ({ move }) => {
  const spansSlow = document.querySelectorAll(".spanSlow");
  const spansFast = document.querySelectorAll(".spanFast");

  const handleMove = useCallback(
    (xCoord) => {
      let normalizedPosition = xCoord[0] / (window.innerWidth / 2) - 1;
      let speedSlow = 150 * normalizedPosition;
      let speedFast = 100 * normalizedPosition;
      spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
      });
      spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`;
      });
    },
    [spansFast, spansSlow]
  );

  useEffect(() => {
    handleMove(move);
  }, [handleMove, move]);

  return (
    <div className="wrap">
      <div className="line">
        <div className="left">
          <div className="content">
            <span className="spanFast">aspiring</span>
          </div>
        </div>

        <div className="right">
          <div className="content">
            <span className="spanFast"> </span>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="left">
          <div className="content">
            <span className="spanSlow">web developer</span>
          </div>
        </div>

        <div className="right">
          <div className="content">
            <span className="spanSlow">web developer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDEffect;
