import { useEffect } from "react";
import gsap from "gsap";
import './App.css'

const Ornament = ({ icon }) => (
  <div className="ornament">
    <div className="rope"></div>
    <img src={icon} alt="ornament" />
  </div>
);

function App() {
  useEffect(() => {
    const ornamentsAni = () => {
      const ropes = document.querySelectorAll(".rope");

      ropes.forEach((rope, i) => {
        gsap.fromTo(
          rope,
          2,
          {
            height: 0,
          },
          {
            height: `random(300, 540)px`,
            ease: "elastic.out",
            delay: i * 0.2,
          }
        );
      });
    };

    const snowflakes = () => {
      const snowflakes = gsap.utils.toArray(".snowflake");

      snowflakes.forEach((flake, i) => {
        gsap.fromTo(
          flake,
          40,
          {
            y: -100,
            x: `random(1, 900)`,
            scale: `random(0.3, 0.6)`,
          },
          {
            y: 1200,
            x: `random(20, 880)`,
            rotation: `random(-180, 270)`,
            repeat: -1,
            ease: "power4.out",
            delay: i * 0.5,
            repeatRefresh: true,
          }
        );
      });
    };

    const mainTL = gsap.timeline();

    mainTL.add(snowflakes).add(ornamentsAni, "+=1");
  }, []);

  const ornaments = [
    "angel.svg",
    "bell.svg",
    "candy-cane.svg",
    "gingerbread-man.svg",
    "ornament.svg",
    "reindeer.svg",
    "santa-head.svg",
    "snowman.svg",
    "stocking.svg",
    "wreath.svg",
  ];

  const randomSort = ornaments.sort(() => Math.random() - 0.5);

  return (
    <div className="container" id="app">
      <div className="mask"></div>
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i} className="snowflake">
          <img
            src="https://www.sicontis.com/codepen/cpc-decorations/icons/snowflake.svg"
            alt="snowflake"
          />
        </div>
      ))}
      {randomSort.map((item, index) => (
        <Ornament
          key={index}
          icon={`https://www.sicontis.com/codepen/cpc-decorations/icons/${item}`}
        />
      ))}
      <div className="slogan">
        <h1 id="mc">Feliz Navidad</h1>
      </div>

      <div className="reindeer">
        <div className="head">
          <div className="eyes-and-nose"></div>
          <div className="antlers">
            <div className="outside-antler-trunk right">
              <div className="antler-branches right"></div>
            </div>
            <div className="outside-antler-trunk left">
              <div className="antler-branches left"></div>
            </div>
            <div className="inside-antler right"></div>
            <div className="inside-antler left"></div>
          </div>
        </div>
        <div className="tail"></div>
        <div className="legs">
          <div className="leg-rear-right"></div>
          <div className="leg-rear-left"></div>
          <div className="leg-front-right"></div>
          <div className="leg-front-left"></div>
        </div>
        <div className="ground"></div>
      </div>
    </div>
  );
}

export default App;