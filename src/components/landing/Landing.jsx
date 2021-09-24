
function Landing({onNavClick}) {

  return (
    <div>
      <div onClick={() => onNavClick('classes')}>Classes</div>
      <div onClick={() => onNavClick('trophies')}>Trophies</div>
    </div>
  );
}

export default Landing;
