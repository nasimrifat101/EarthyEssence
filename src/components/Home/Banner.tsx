import circle from "../../assets/core/BANNERCIR.svg";
import plant from "../../assets/images/pngwing.com (1).png";

const Banner = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto relative">
      <div className="space-y-5 pt-20">
        <p className="text-9xl font-bold">Nurture</p>
        <p className="text-9xl font-bold">
        Your Space 
        </p>
        <p className="text-9xl font-bold">
        With  <span className="hover-stroke">Nature’s Finest</span>
        </p>
        <p className="text-9xl font-bold">Healthy Plants</p>
        <p className="text-3xl pt-10 ">
        Revolutionizing Plant Shopping for a Greener Tomorrow
        </p>
      </div>
      <div>
        <div
          className="absolute top-20 -right-10 animate-spin-slow "
          style={{ willChange: "transform" }}
        >
          <img src={circle} alt="logo" className="w-[600px]" />
        </div>
        <div className="absolute top-0 right-0">
          <img src={plant} alt="plant" className="w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
