import "./App.css";
import GlassCard from "./components/glassCard";
import { heroProjectImg } from "./data/hero-project-img";

function App() {
  return (
    <div className="border 
                    h-auto 
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    bg-black-100">
      <h1 className="text-center">
        i'm a <br /> <span>WEB DEVELOPER</span>
      </h1>

      <div>
        {heroProjectImg.map(({ id, img, alt}) =>(
          <GlassCard key={id}>
            <img 
              src={img} 
              alt={alt}
              className="rounded-lg relative" />
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

export default App;
