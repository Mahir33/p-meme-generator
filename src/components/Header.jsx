import TrollFace from "../assets/TrollFace.ico";

function Header() {
  return (
    <header>
      <img className="troll-ico" src={TrollFace} alt="Troll face icon" />
      <h1>Meme Generator</h1>
    </header>
  );
}

export default Header;
