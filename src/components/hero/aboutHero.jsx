import BlurText from "../BlurText";

function AboutHero() {
  return (
    <section className="h-auto bg-black-200 flex flex-col gap-6 md:gap-13.5">
      <div className="md:w-3/4 xl:w-1/2 flex flex-col gap-4">
        <p>
          <BlurText 
            text="ABOUT ME"
            delay={200}
            animateBy="words"
            direction="top"
            className="block"
          />
        </p>
        <h2>
          <BlurText 
            text="CONTINUOUSLY CRAFTING CODE & CREATIVITY"
            delay={200}
            animateBy="words"
            direction="top"
            className="block"
          />
        </h2>
      </div>
      <p>
        
        <BlurText 
            text="I'm Mark Estareja, an aspiring web developer and graphic designer passionate about building user-focused digital experiences. I specialize in web development, UI/UX design, and graphics for online platforms and businesses. With hands-on experience in both front-end and back-end development, I create solutions that are not only functional but visually engaging."
            delay={50}
            animateBy="words"
            direction="top"
            className="block"
          />
      </p>
    </section>
  );
}

export default AboutHero;
