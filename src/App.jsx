import "./App.css";
import GlassCard from "./components/glassCard";
import { heroProjectImg } from "./data/hero-project-img";

function App() {
  return (
    <div className="
      h-lvh
      bg-black-100
      flex
      justify-center
      items-end">
      <div
        className="
          relative
          h-[370px] md:h-[750px]
          flex 
          flex-col 
          justify-between 
          items-center 
          ">
        
        <h1 className="text-center">
          i'm a <br /> <span>WEB DEVELOPER</span>
        </h1>

        <div 
          className="
            relative 
            w-[272px] md:w-[640px] lg:w-[790px] 
            h-[145px] md:h-[340px] lg:h-[400px]
            flex 
            items-center 
            justify-center">
          {heroProjectImg.map(({ id, img, alt }, index) => (
            <GlassCard key={id} index={index}>
              <img src={img} alt={alt} className="rounded-lg relative z-10 h-full w-full object-cover" />
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
