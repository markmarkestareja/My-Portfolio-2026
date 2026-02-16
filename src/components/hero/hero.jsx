import GlassCard from "../../components/glassCard";
import { heroProjectImg } from "../../data/hero-project-img";

function HeroSection() {
  return (
    <section className="
      h-lvh
      bg-black-100
      flex
      justify-center
      items-end
      pb-0 md:pb-0 lg:pb-0">
      <div
        className="
          relative
          h-[370px] md:h-[750px]
          flex 
          flex-col 
          justify-center 
          items-center 
          gap-20
          ">
        
        <h1 className="text-center">
          i'm a <br /> <span>WEB DEVELOPER</span>
        </h1>

        <div 
          className="
            absolute 
            bottom-[-200px]
            w-[272px] md:w-[640px]
            h-[145px] md:h-[340px]
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
    </section>
  );
}

export default HeroSection;