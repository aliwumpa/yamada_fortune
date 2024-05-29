import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const images = [
  <img className="image-yamada" src="https://i.pinimg.com/736x/a9/d7/47/a9d747552aeda5b5b0d0cfa5834b6676.jpg" 
  alt="yamada anna image" width="600" height="600" />,
  <img className="image-yamada" src="https://i.pinimg.com/736x/6e/19/ab/6e19aba95e58ba57b2e7d3490780f9a3.jpg" 
  alt="yamada anna image" width="600" height="600" />,
  <img className="image-yamada" src="https://i.pinimg.com/originals/d9/ba/0b/d9ba0b2570cc9050e6ca744efc6023ed.jpg" 
  alt="yamada anna image" width="600" height="600" />,
  <img className="image-yamada" src="https://i.pinimg.com/736x/85/fe/c4/85fec471e4bdf0c599d9042d00362230.jpg" 
  alt="yamada anna image" width="600" height="600" />,
  <img className="image-yamada" src="https://i.pinimg.com/736x/29/76/5b/29765b41043b47e3c61db3ef7da77682.jpg" 
  alt="yamada anna image" width="600" height="600" />,
  <img className="image-yamada" src="https://i.pinimg.com/736x/20/38/1b/20381bf6416a153a45ca081632444559.jpg" 
  alt="yamada anna image" width="600" height="600" />,
  <img className="image-yamada" src="https://img.wattpad.com/209fb107edd1ce7b9d519a17dd2d0d41d9a6793b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f445f5133376730467872384570773d3d2d3936332e313738353637633938313261353333383730383637333635363338342e6a7067?s=fit&w=720&h=720" 
  alt="yamada anna image" width="600" height="600" />,
  <img className="image-yamada" src="https://i.pinimg.com/736x/a3/2b/5a/a32b5a9eaaba93797efe5255e5bb805d.jpg" 
  alt="yamada anna image" width="600" height="600" />,
  <img className="image-yamada" src="https://i.pinimg.com/originals/54/f0/c9/54f0c9ca012a0289c2d4f6c6e6f3c343.jpg" 
  alt="yamada anna image" width="600" height="600" />
];

const contents = [
  {
    heading: "Today's luck",
    luck: "Normal",
    description : "Reach for joy and all else will follow.",
    audio: "https://ami.animecharactersdatabase.com/audio/109617/1/109617-1-85.mp4",
    rarity: "normal"
  },
  {
    heading: "Today's luck",
    luck: "Rare",
    description : "Reach for joy and all else will follow.",
    audio: "https://ami.animecharactersdatabase.com/audio/109617/1/109617-1-85.mp4",
    rarity: "rare"
  },
  {
    heading: "Today's luck",
    luck: "Super Rare",
    description : "Reach for joy and all else will follow.",
    audio: "https://ami.animecharactersdatabase.com/audio/109617/1/109617-1-85.mp4",
    rarity: "super-rare"
  },
  {
    heading: "Today's luck",
    luck: "Special Super Rare",
    description : "Reach for joy and all else will follow.",
    audio: "https://ami.animecharactersdatabase.com/audio/109617/1/109617-1-85.mp4",
    rarity: "special-super-rare"
  },
  {
    heading: "Today's luck",
    luck: "Super Rare",
    description : "Reach for joy and all else will follow.",
    audio: "https://ami.animecharactersdatabase.com/audio/109617/1/109617-1-85.mp4",
    rarity: "super-rare"
  },
  {
    heading: "Today's luck",
    luck: "Normal",
    description : "Reach for joy and all else will follow.",
    audio: "https://ami.animecharactersdatabase.com/audio/109617/1/109617-1-85.mp4",
    rarity: "normal"
  },
  {
    heading: "Today's luck",
    luck: "Normal",
    description : "Yamada Anna will do anything for you.",
    audio: "https://ami.animecharactersdatabase.com/audio/109617/1/109617-1-85.mp4",
    rarity: "normal"
  },
  {
    heading: "Today's luck",
    luck: "Rare",
    description : "Yamada Anna will do anything for you.",
    audio: "https://ami.animecharactersdatabase.com/audio/109617/1/109617-1-85.mp4",
    rarity: "rare"
  },
  {
    heading: "Today's luck",
    luck: "Ultra Rare luck",
    description : "Yamada Anna will do anything for you.",
    audio: "https://ami.animecharactersdatabase.com/audio/109617/1/109617-1-85.mp4",
    rarity: "ultra-rare"
  },
]

const gridImage = (activeIndex) => {
  const imageElements = [];
  for (let i = 0; i < images.length; i++) {
    imageElements.push(
      <div className={`wrapper-yamada-image wrapper-yamada-image${i + 1} ${i === activeIndex ? 'active' : ''}`} key={i}>
        {images[i]}
      </div>
    );
  }
  return imageElements;
};

const modal = (activeModal) => {
	// const audioRef = useRef(null);

	// useEffect(() => {
	// 	if (audioRef.current && activeModal !== -1) {
	// 		audioRef.current.play();
	// 	}
	// }, [activeModal]);

  const modalElements = [];
  for (let i = 0; i < contents.length; i++) {
    modalElements.push(
      <div className={`wrapper-yamada-modal wrapper-yamada-modal${i + 1} ${i === activeModal ? 'show' : ''}`} key={i}>
        <div className={`modal-content ${contents[i].rarity}`}>
          {images[i]}
          <p>{contents[i].heading}</p>
          <h1>{contents[i].luck}</h1>
          <p>{contents[i].description}</p>
          <audio controls volume="0.1">
            <source src={contents[i].audio} type="audio/mp4"></source>
          </audio>
        </div>
      </div>
    )
  }

  return modalElements;
}

const Page = () => {
  const [activeModal, setActiveModal] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const getRandomIndex = (excludeIndex) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === excludeIndex); // Ensure a new random index different from the previous one
    return randomIndex;
  };

  const startGame = () => {
    let delay = 100; // Initial delay
    const totalDuration = 10000; // Total duration for the game to run (10 seconds)
    const incrementFactor = 1.1; // Factor by which the delay will increase
    let elapsed = 0;
    let currentIndex = -1;

    const animate = () => {
      const nextIndex = getRandomIndex(currentIndex);
      setActiveIndex(nextIndex);
      currentIndex = nextIndex;

      if (elapsed < totalDuration) {
        delay *= incrementFactor;
        elapsed += delay;
        const newTimeoutId = setTimeout(animate, delay);
        setTimeoutId(newTimeoutId);
      } else {
        setIsRunning(false); // Stop the game after totalDuration
        setActiveModal(currentIndex);
      }
    };

    animate();
  }

  useEffect(() => {
    if (isRunning) {
      startGame();
    } else if (timeoutId) {
      clearTimeout(timeoutId); // Clear any existing timeouts if the game is stopped
    }
    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, [isRunning]);

  return (
    <div className="wrapper-yamada">
      <h1>Pick Your Yamada Anna&apos;s Fortune</h1>
      <button className="button-yamada-start" type="button" onClick={() => setIsRunning(true)} disabled={isRunning}>
        Start Game
      </button>
      <div className="wrapper-yamada-image-container">
        {gridImage(activeIndex)}
      </div>
      {modal(activeModal)}
      <button className={`button-yamada-close ${activeModal !== -1 ? 'button-show' : ''}`} type="button" onClick={() => setActiveModal(-1)}>&#10006;</button>
    </div>
  )
}

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<Page />);