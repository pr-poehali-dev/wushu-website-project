import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PricingPlans = () => {
  const plans = [
    {
      name: "Ученик",
      price: "3 000",
      period: "4 занятия",
      description: "Идеально для начинающих",
      features: [
        "Базовые техники",
        "Групповые занятия",
        "Консультация тренера",
        "Доступ к залу",
      ],
      icon: "User",
      popular: false,
    },
    {
      name: "Воин",
      price: "5 500",
      period: "8 занятий",
      description: "Для серьёзных занятий",
      features: [
        "Продвинутые техники",
        "Малые группы",
        "Персональная программа",
        "Спарринги",
        "Доступ к библиотеке",
      ],
      icon: "Sword",
      popular: true,
    },
    {
      name: "Мастер",
      price: "9 500",
      period: "16 занятий",
      description: "Путь к совершенству",
      features: [
        "Мастер-классы",
        "Индивидуальные тренировки",
        "Работа с оружием",
        "Медитативные практики",
        "Участие в соревнованиях",
      ],
      icon: "Crown",
      popular: false,
    },
    {
      name: "Безлимит",
      price: "12 000",
      period: "месяц",
      description: "Полное погружение",
      features: [
        "Неограниченные занятия",
        "Все направления ушу",
        "Персональный наставник",
        "Семинары мастеров",
        "Участие в турнирах",
        "Церемонии посвящения",
      ],
      icon: "Infinity",
      popular: false,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-dragon-900 to-dragon-800 chinese-pattern">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-gold-400 mb-4">
            Тарифные планы
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Выберите путь, который подходит именно вам. Каждый план открывает
            новые горизонты мастерства.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-dragon-800/50 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? "border-gold-500 shadow-gold-500/20 shadow-xl"
                  : "border-gold-600/30 hover:border-gold-500/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-dragon-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                  <Icon
                    name={plan.icon as any}
                    size={24}
                    className="text-dragon-900"
                  />
                </div>
                <CardTitle className="text-2xl font-elegant text-gold-400">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gold-400">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">₽/{plan.period}</span>
                </div>

                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-gold-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-dragon-900"
                      : "bg-dragon-700 border border-gold-600/30 text-gold-400 hover:bg-dragon-600"
                  } font-semibold`}
                >
                  Выбрать план
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
