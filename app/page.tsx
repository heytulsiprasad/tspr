import { Playfair_Display } from "next/font/google";
import clsx from "clsx";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "italic",
});

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative flex-1">
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-[48px] p-8"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/sunset.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1
          className={clsx(
            "absolute bottom-10 left-10 drop-shadow-lg z-10",
            "font-bold text-white italic",
            playfair.className
          )}
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Imagination takes you everywhere!
        </h1>
      </div>
      <footer className="h-12 flex items-center justify-center mb-4">
        <h2>Made with ❤️</h2>
      </footer>
    </main>
  );
};

export default Home;
