import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const LocationMap = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-dragon-800 to-dragon-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-gold-400 mb-4">
            Наше расположение
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Найдите путь к храму знаний в самом сердце города
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <Card className="bg-dragon-800/50 border-gold-600/30">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-dragon-600 to-dragon-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Map placeholder */}
                <div
                  className="w-full h-full bg-cover bg-center opacity-70"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&q=80)",
                  }}
                />
                <div className="absolute inset-0 bg-dragon-900/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Icon
                      name="MapPin"
                      size={48}
                      className="text-gold-400 mx-auto mb-2"
                    />
                    <p className="text-gold-300 font-semibold">
                      Интерактивная карта
                    </p>
                    <p className="text-gray-400 text-sm">
                      Нажмите, чтобы открыть в картах
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Details */}
          <div className="space-y-6">
            <Card className="bg-dragon-800/50 border-gold-600/30">
              <CardHeader>
                <CardTitle className="text-gold-400 flex items-center">
                  <Icon name="MapPin" className="mr-2" />
                  Адрес зала
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-2">
                  г. Москва, ул. Восточная, д. 15
                </p>
                <p className="text-gray-400 text-sm">
                  Метро "Сокольники", 3 минуты пешком
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dragon-800/50 border-gold-600/30">
              <CardHeader>
                <CardTitle className="text-gold-400 flex items-center">
                  <Icon name="Clock" className="mr-2" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Понедельник - Пятница</span>
                  <span>07:00 - 22:00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Суббота - Воскресенье</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className="pt-2 border-t border-gold-600/20">
                  <p className="text-gold-400 text-sm font-semibold">
                    🥋 Групповые занятия: 18:00, 19:30, 21:00
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dragon-800/50 border-gold-600/30">
              <CardHeader>
                <CardTitle className="text-gold-400 flex items-center">
                  <Icon name="Car" className="mr-2" />
                  Как добраться
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Train"
                    size={20}
                    className="text-gold-500 mt-0.5"
                  />
                  <div>
                    <p className="text-gray-300 font-medium">На метро</p>
                    <p className="text-gray-400 text-sm">
                      Станция "Сокольники", выход №2
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Car" size={20} className="text-gold-500 mt-0.5" />
                  <div>
                    <p className="text-gray-300 font-medium">На автомобиле</p>
                    <p className="text-gray-400 text-sm">
                      Бесплатная парковка рядом с залом
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
