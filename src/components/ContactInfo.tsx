import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Звоните с 9:00 до 21:00",
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: "+7 (915) 987-65-43",
      description: "Быстрые ответы 24/7",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@wushu-moscow.ru",
      description: "Подробные консультации",
    },
    {
      icon: "Instagram",
      title: "Instagram",
      value: "@wushu_moscow",
      description: "Следите за новостями",
    },
  ];

  const socialLinks = [
    { icon: "Youtube", name: "YouTube", url: "#" },
    { icon: "Instagram", name: "Instagram", url: "#" },
    { icon: "MessageCircle", name: "Telegram", url: "#" },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-dragon-700 to-dragon-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-gold-400 mb-4">
            Связаться с нами
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Начните свой путь в мир ушу уже сегодня. Мы ответим на все ваши
            вопросы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="bg-dragon-800/50 border-gold-600/30 hover:border-gold-500/50 transition-colors cursor-pointer group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon
                        name={contact.icon as any}
                        size={20}
                        className="text-dragon-900"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-gold-400 text-lg">
                        {contact.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white font-semibold mb-1">
                    {contact.value}
                  </p>
                  <CardDescription className="text-gray-400">
                    {contact.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-gold-500/20 to-crimson-500/20 border-gold-500/50 h-full">
              <CardHeader>
                <CardTitle className="text-gold-400 text-xl text-center">
                  Запишитесь на пробное занятие
                </CardTitle>
                <CardDescription className="text-center text-gray-300">
                  Первое занятие совершенно бесплатно
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-gold-400">0 ₽</div>
                  <p className="text-gray-300 text-sm">
                    Включает экипировку и консультацию мастера
                  </p>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-dragon-900 font-semibold"
                >
                  <Icon name="Calendar" className="mr-2" />
                  Записаться сейчас
                </Button>

                <div className="pt-4 border-t border-gold-600/20">
                  <p className="text-center text-gold-400 font-medium mb-3">
                    Мы в социальных сетях
                  </p>
                  <div className="flex justify-center space-x-3">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="border-gold-600/30 text-gold-400 hover:bg-gold-400 hover:text-dragon-900"
                      >
                        <Icon name={social.icon as any} size={16} />
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <Card className="bg-dragon-800/30 border-gold-600/20">
          <CardContent className="py-8">
            <div className="text-center">
              <h3 className="text-2xl font-elegant text-gold-400 mb-4">
                🏮 Мастер Ли Вэй Фэн 🏮
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Главный инструктор школы, 8-й дан, 25 лет преподавания.
                Выпускник монастыря Шаолинь, чемпион Китая по традиционному ушу.
                Под его руководством более 500 учеников достигли высоких
                результатов.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactInfo;
