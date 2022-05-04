import AppButton from '../atomics/AppButton';

const AppCtaSection = () => (
  <section className="py-20 border-b border-light-gray">
    <div className="text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-black">
        WANT TO MEET?
      </h2>
      <p className="text-xs md:text-sm text-gray max-w-[260px] md:max-w-xs mx-auto mt-2">
        I am more than happy to meet you! You can contact me through any of my social media links and 
        I will most definetly answer. If you have any proyect ideas that you want to finally see come to life...maybe I'm the guy to help you out. 
      </p>
      <AppButton title="Say Hi.." href="/contact" color="primary" />
    </div>
  </section>
);

export default AppCtaSection;
