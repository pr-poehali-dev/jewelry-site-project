import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const collections = [
    {
      id: 1,
      name: "КОЛЬЦО CHAOS",
      price: "4 500 ₽",
      image: "https://cdn.poehali.dev/projects/ba3f271d-37f2-492b-aa9a-24bb7ae2734e/files/420015af-b760-4b9d-b46d-1a6b7b3d57d2.jpg"
    },
    {
      id: 2,
      name: "ЦЕПЬ RIOT",
      price: "8 900 ₽",
      image: "https://cdn.poehali.dev/projects/ba3f271d-37f2-492b-aa9a-24bb7ae2734e/files/293876dd-844b-432d-bdbd-83995120fe72.jpg"
    },
    {
      id: 3,
      name: "СЕРЬГИ VOID",
      price: "3 200 ₽",
      image: "https://cdn.poehali.dev/projects/ba3f271d-37f2-492b-aa9a-24bb7ae2734e/files/cbb53b30-8185-4722-bff6-b19df7ad7cb0.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">UNDERGROUND</h1>
          <div className="flex gap-6 items-center">
            <a href="#collection" className="hidden md:block text-sm hover:text-secondary transition-colors">
              КОЛЛЕКЦИЯ
            </a>
            <a href="#about" className="hidden md:block text-sm hover:text-secondary transition-colors">
              О НАС
            </a>
            <a href="#contact" className="text-sm hover:text-secondary transition-colors">
              КОНТАКТЫ
            </a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center noise-bg pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold mb-6 text-grunge animate-fade-in">
            УКРАШЕНИЯ<br />БЕЗ ПРАВИЛ
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Каждое изделие — это протест против массового производства.<br />
            Создано вручную для тех, кто не боится выделяться.
          </p>
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-none border-2 border-secondary"
          >
            СМОТРЕТЬ КОЛЛЕКЦИЮ
          </Button>
        </div>
      </section>

      <section id="collection" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-6xl font-bold text-center mb-16 text-grunge">
            НАША КОЛЛЕКЦИЯ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((item) => (
              <Card 
                key={item.id}
                className="group relative overflow-hidden bg-background border-2 border-border hover:border-secondary transition-all duration-300 rounded-none"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-card">
                  <h4 className="text-2xl font-bold mb-2">{item.name}</h4>
                  <p className="text-secondary text-xl font-semibold mb-4">{item.price}</p>
                  <Button 
                    variant="outline" 
                    className="w-full rounded-none border-2 hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  >
                    ПОДРОБНЕЕ
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 noise-bg relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-bold mb-8 text-grunge">
              НЕ БРЕНД.<br />ФИЛОСОФИЯ.
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="border-l-4 border-secondary pl-6">
                Мы не делаем украшения для витрин. Каждое изделие — это история, рассказанная металлом и текстурой.
              </p>
              <p className="border-l-4 border-accent pl-6">
                Забудьте о стандартах. Здесь нет места идеальным формам и глянцевым поверхностям. 
                Только грубость, честность и характер.
              </p>
              <p className="border-l-4 border-secondary pl-6">
                Наши украшения носят те, кто не боится быть собой. Те, кто ценит индивидуальность 
                и отвергает массовое производство.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-6xl font-bold mb-12 text-grunge">
            ОСТАВАЙТЕСЬ НА СВЯЗИ
          </h3>
          <div className="flex justify-center gap-8 mb-8">
            <a 
              href="#" 
              className="w-16 h-16 flex items-center justify-center border-2 border-border hover:border-secondary transition-colors group"
            >
              <Icon name="Instagram" size={32} className="group-hover:text-secondary transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-16 h-16 flex items-center justify-center border-2 border-border hover:border-secondary transition-colors group"
            >
              <Icon name="Send" size={32} className="group-hover:text-secondary transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-16 h-16 flex items-center justify-center border-2 border-border hover:border-secondary transition-colors group"
            >
              <Icon name="Mail" size={32} className="group-hover:text-secondary transition-colors" />
            </a>
          </div>
          <p className="text-muted-foreground">
            Пишите нам в Instagram или Telegram<br />
            Мы не кусаемся. Ну, почти.
          </p>
        </div>
      </section>

      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 UNDERGROUND. Все права защищены, но нам плевать на копирайт.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
