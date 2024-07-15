import { useState } from "react";
import ImageIcon from "../assets/Image_Icon.png";
import memesDB from "../db/memesDB";

function Meme() {
  const [userInput, setUserInput] = useState({
    topText: "",
    bottomText: "",
  });

  const [url, setUrl] = useState("");

  //   function handleChange(e) {
  //     setUserInput({ topText: e.target.value, bottomText: e.target.value });
  //   }

  function handleClick(e) {
    e.preventDefault();

    const randomMeme =
      memesDB.data.memes[Math.floor(Math.random() * memesDB.data.memes.length)];
    const randomUrl = randomMeme.url;
    setUrl(randomUrl);
  }

  return (
    <>
      <form action="" className="meme-form">
        <div className="meme-form--elements">
          <div className="meme-form--element">
            <label htmlFor="top-text">Top text</label>
            <input
              // onChange={handleChange}
              type="text"
              name="top-text"
              id="top-text"
            />
          </div>
          <div className="meme-form--element">
            <label htmlFor="bottom-text">Bottom text</label>
            <input
              // onChange={handleChange}
              type="text"
              name="bottom-text"
              id="bottom-text"
            />
          </div>
        </div>
        <button type="submit" onClick={handleClick}>
          Get a new meme image
          <img
            className="meme-form--image-icon"
            src={ImageIcon}
            alt="New image icon"
          />
        </button>
      </form>
      <img src={url} alt="" />
    </>
  );
}

export default Meme;
