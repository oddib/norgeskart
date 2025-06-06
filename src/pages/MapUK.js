import { useState, useEffect } from "react";
import { ReactComponent as Map } from "../assets/norway.svg";
import { ReactComponent as GithubIcon } from "../assets/github-mark-white.svg";
import { ReactComponent as DownloadIcon } from "../assets/download.svg";
import { ReactComponent as ResetIcon } from "../assets/delete.svg";
import { ReactComponent as InfoIcon } from "../assets/info.svg";
import "../styles/MapUK.css";
import { ReactComponent as CloseIcon } from "../assets/close-black.svg";

function MapUK() {
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [countyScores, setCountyScores] = useState(() => {
    const savedScores = localStorage.getItem("countyScores");
    return savedScores ? JSON.parse(savedScores) : {};
  });
  const [footnoteOpen, setFootnoteOpen] = useState(false);

  /**
   * Colour map and calculate total level when countyScores change
   */
  useEffect(() => {
    Object.keys(countyScores).forEach((county) => {
      const element = document.querySelector(`[name="${county}"]`);
      if (element) {
        element.style.fill = getColorByLevel(countyScores[county]);
      }
    });
    const totalLevel = Object.values(countyScores).reduce(
      (acc, curr) => acc + curr,
      0,
    );
    const levelElement = document.getElementById("level");
    levelElement.textContent = `Norge Level ${totalLevel}`;
  }, [countyScores]);

  const getColorByLevel = (level) => {
    switch (level) {
      case 5:
        return "#FF7E7E"; // Lived
      case 4:
        return "#FFB57E"; // Stayed
      case 3:
        return "#FFE57E"; // Visited
      case 2:
        return "#A8FFBE"; // Stopped
      case 1:
        return "#88AEFF"; // Passed
      default:
        return "white"; // Never been
    }
  };

  const adjustCardPosition = (x, y) => {
    const cardWidth = 225; // Prevent card from going off screen
    const cardHeight = 330;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    let adjustedX = x;
    let adjustedY = y;

    if (x + cardWidth > viewportWidth) {
      adjustedX = viewportWidth - cardWidth - 10;
    }
    if (y + cardHeight > viewportHeight) {
      adjustedY = viewportHeight - cardHeight;
    }

    setCardPosition({ x: adjustedX, y: adjustedY });
  };

  const countyClick = (e) => {
    const target = e.target;
    if (target.tagName === "path" && target.hasAttribute("name")) {
      const countyName = target.getAttribute("name");
      const { clientX: x, clientY: y } = e;
      setSelectedCounty(countyName);
      adjustCardPosition(x, y);
    } else {
      setSelectedCounty(null);
    }
  };

  const countyHover = (e) => {
    const target = e.target;
    if (target.tagName === "path" && target.hasAttribute("name")) {
      const countyName = target.getAttribute("name");
      const tooltip = document.createElement("div");
      tooltip.className = "map-tooltip radius tooltip";
      tooltip.textContent = countyName;
      document.body.appendChild(tooltip);

      const updateTooltipPosition = (event) => {
        const { clientX: x, clientY: y } = event;
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let adjustedX = x + 10;
        let adjustedY = y + 10;

        if (adjustedX + tooltipWidth > viewportWidth) {
          adjustedX = x - tooltipWidth - 10;
        }
        if (adjustedY + tooltipHeight > viewportHeight) {
          adjustedY = y - tooltipHeight - 10;
        }

        tooltip.style.left = `${adjustedX}px`;
        tooltip.style.top = `${adjustedY}px`;
      };

      updateTooltipPosition(e);

      target.addEventListener("mousemove", updateTooltipPosition);
      target.addEventListener(
        "mouseleave",
        () => {
          document.body.removeChild(tooltip);
          target.removeEventListener("mousemove", updateTooltipPosition);
        },
        { once: true },
      );
    }
  };

  const levelClick = (level) => {
    const updatedScores = { ...countyScores, [selectedCounty]: level };
    setCountyScores(updatedScores);
    localStorage.setItem("countyScores", JSON.stringify(updatedScores)); // Save to localStorage
    setSelectedCounty(null); // Close card upon selection
  };

  const reset = () => {
    const resetScores = { ...countyScores };
    Object.keys(resetScores).forEach((county) => {
      resetScores[county] = 0;
    });
    setCountyScores(resetScores); // Trigger recolour to white
    localStorage.setItem("countyScores", JSON.stringify(resetScores)); // Save to localStorage
  };

  const download = () => {
    const svgElement = document.getElementById("map");
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "map.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {selectedCounty && (
        <CountyCard
          countyName={selectedCounty}
          position={cardPosition}
          levelClick={levelClick}
        />
      )}
      <span className="buttons radius">
        <button className="button-tooltip" onClick={reset}>
          <ResetIcon aria-label="Reset map" />
          <span className="button-tooltip-text radius tooltip">Reset</span>
        </button>
        <button className="button-tooltip" onClick={download}>
          <DownloadIcon aria-label="Last ned kart" />
          <span className="button-tooltip-text radius tooltip">Download</span>
        </button>
        <button
          className="button-tooltip"
          onClick={() =>
            window.open(
              "https://github.com/smstone0/smstone0.github.io",
              "_blank",
            )
          }
        >
          <GithubIcon aria-label="Visit Github" />
          <span className="button-tooltip-text radius tooltip">GitHub</span>
        </button>
      </span>
      {footnoteOpen ? (
        <div id="footnote" onMouseLeave={() => setFootnoteOpen(false)}>
          <div className="footnote-container radius">
            <div id="footnote-row">
              <p>Visualise your UK travel and share with friends and family!</p>
              <CloseIcon
                id="close-icon"
                onClick={() => setFootnoteOpen(false)}
              />
            </div>
            Concept inspired by
            <a
              href="https://lab.magiconch.com/china-ex/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              China-ex{" "}
            </a>
            &
            <a
              href="https://tenpages.github.io/us-level/eu.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              US-level/eu
            </a>
            , credit to
            <a
              href="https://www.mapchart.net/uk.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              MapChart
            </a>
          </div>
        </div>
      ) : (
        <div id="footnote" onMouseEnter={() => setFootnoteOpen(true)}>
          <InfoIcon />
        </div>
      )}
      <Map onClick={countyClick} onMouseOver={countyHover} />
    </div>
  );
}

function CountyCard({ countyName, position, levelClick }) {
  const { x, y } = position;
  return (
    <div
      className="county-card radius"
      onClick={(e) => e.stopPropagation()}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <p id="county-name">{countyName}</p>
      <div id="card-options">
        <p id="lived" onClick={() => levelClick(5)}>
          Bodd her
        </p>
        <p id="stayed" onClick={() => levelClick(4)}>
          Overnattet her
        </p>
        <p id="visited" onClick={() => levelClick(3)}>
          Besøkt her
        </p>
        <p id="stopped" onClick={() => levelClick(2)}>
          Stoppet her
        </p>
        <p id="passed" onClick={() => levelClick(1)}>
          Passert her
        </p>
        <p id="never-been" onClick={() => levelClick(0)}>
          Aldri vert her
        </p>
      </div>
    </div>
  );
}

export default MapUK;
