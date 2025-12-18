import Hero from "./Hero/Hero";
import DailyMeals from "./Meals/DailyMeals";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Reviews from "./Reviews/Reviews";
import CTA from "./CTA/CTA";

const HomePage = () => {
  return (
    <div className="bg-base-100">
      <Hero></Hero>
      <DailyMeals></DailyMeals>
      <WhyChooseUs></WhyChooseUs>
      <Reviews></Reviews>
      <CTA></CTA>
    </div>
  );
};

export default HomePage;
