import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dragon-900 via-dragon-800 to-dragon-700 overflow-hidden">
      {/* Chinese temple background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&q=80)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-16 h-16 border-2 border-gold-500 rounded-full animate-float opacity-50" />
      <div
        className="absolute bottom-20 right-20 w-8 h-8 bg-crimson-500 rotate-45 animate-float opacity-60"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-elegant font-bold text-gold-400 hero-shadow mb-4">
            Школа Ушу
          </h1>
          <h2 className="text-2xl md:text-3xl font-chinese text-gold-300 hero-shadow mb-6">
            Древнее искусство современного мира
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Изучите традиционные техники боевых искусств в атмосфере настоящего
            Шаолиня. Развивайте тело, дух и разум под руководством опытных
            мастеров.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-dragon-900 font-semibold px-8 py-4 text-lg shadow-lg"
          >
            <Icon name="Zap" className="mr-2" />
            Бесплатное занятие
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-dragon-900 px-8 py-4 text-lg"
          >
            <Icon name="Phone" className="mr-2" />
            Связаться с нами
          </Button>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dragon-900 to-transparent" />
    </section>
  );
};

export default Hero;
