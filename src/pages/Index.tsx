import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const collections = [
    {
      id: 1,
      name: "Кольцо Луна",
      price: "4 500 ₽",
      image: "https://cdn.poehali.dev/projects/ba3f271d-37f2-492b-aa9a-24bb7ae2734e/files/4b6cc4ee-8cd5-4db7-bded-f8f513aa146a.jpg"
    },
    {
      id: 2,
      name: "Серьги Перламутр",
      price: "3 200 ₽",
      image: "https://cdn.poehali.dev/projects/ba3f271d-37f2-492b-aa9a-24bb7ae2734e/files/a3499390-b9a0-410f-9332-4061dace1734.jpg"
    },
    {
      id: 3,
      name: "Колье Принцесса",
      price: "8 900 ₽",
      image: "https://cdn.poehali.dev/projects/ba3f271d-37f2-492b-aa9a-24bb7ae2734e/files/ea053663-7a3c-495b-aeb8-5a2d70cc5c98.jpg"
    }
  ];

  const values = [
    {
      icon: "Sparkles",
      title: "Уникальность",
      description: "Каждое изделие создается с душой"
    },
    {
      icon: "Heart",
      title: "Ручная работа",
      description: "Мастерство в каждой детали"
    },
    {
      icon: "Crown",
      title: "Для смелых",
      description: "Украшения для тех, кто выделяется"
    }
  ];

  const reviews = [
    {
      name: "Анна",
      text: "Невероятно нежные украшения! Качество на высоте",
      rating: 5
    },
    {
      name: "Мария",
      text: "Получила кольцо — в восторге! Спасибо за красоту",
      rating: 5
    },
    {
      name: "София",
      text: "Уникальный стиль, который сложно найти. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-normal tracking-widest text-primary-foreground">PRINCESS VANDAL</h1>
          <div className="flex gap-6 items-center">
            <a href="#collection" className="hidden md:block text-sm hover:text-secondary transition-colors">
              Коллекция
            </a>
            <a href="#about" className="hidden md:block text-sm hover:text-secondary transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-sm hover:text-secondary transition-colors">
              Контакты
            </a>
            <Button size="icon" variant="ghost">
              <Icon name="ShoppingBag" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-normal tracking-wider leading-tight">
              PRINCESS<br />VANDAL
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Ювелирная информация дополненная самовыражением и индивидуальностью. Наша коллекция создана для тех, кто ценит свою уникальность. Каждое украшение — это способ выразить себя и свой характер.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8"
            >
              Смотреть коллекцию
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/files/dc8b6b64-4aa2-4328-b2a6-b13dcba7bf91.png"
              alt="Princess Vandal"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
                  <Icon name={value.icon} size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-normal">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-normal text-center mb-16 tracking-wider">
            ТОП СЕЗОНА
          </h3>
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden soft-shadow hover-lift bg-white border-none">
              <div className="grid md:grid-cols-2 gap-0">
                <img 
                  src={collections[0].image} 
                  alt={collections[0].name}
                  className="w-full h-full object-cover"
                />
                <div className="p-8 flex flex-col justify-center">
                  <h4 className="text-3xl font-normal mb-4">{collections[0].name}</h4>
                  <p className="text-muted-foreground mb-6">
                    Изящное кольцо в форме луны, символизирующее женственность и загадочность
                  </p>
                  <p className="text-2xl text-secondary font-semibold mb-6">{collections[0].price}</p>
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full">
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="collection" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-normal text-center mb-16 tracking-wider">
            КОЛЛЕКЦИЯ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {collections.map((item) => (
              <Card 
                key={item.id}
                className="group overflow-hidden bg-white border-none soft-shadow hover-lift"
              >
                <div className="aspect-square overflow-hidden bg-accent/20">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-normal mb-2">{item.name}</h4>
                  <p className="text-secondary text-lg font-semibold">{item.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-4xl md:text-5xl font-normal mb-8 tracking-wider">
              О НАС
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Princess Vandal — это бренд украшений для тех, кто не боится быть собой. 
              Мы создаем уникальные изделия, которые подчеркивают индивидуальность и характер. 
              Каждое украшение — это маленький протест против стандартов и рамок.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-normal text-center mb-16 tracking-wider">
            ОТЗЫВЫ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 bg-white border-none soft-shadow text-center space-y-4">
                <div className="flex justify-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{review.text}"</p>
                <p className="font-semibold">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-normal mb-12 tracking-wider">
            КОНТАКТЫ
          </h3>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="w-14 h-14 flex items-center justify-center rounded-full bg-primary hover:bg-primary/80 transition-colors group"
            >
              <Icon name="Instagram" size={24} className="text-primary-foreground" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 flex items-center justify-center rounded-full bg-primary hover:bg-primary/80 transition-colors group"
            >
              <Icon name="Send" size={24} className="text-primary-foreground" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 flex items-center justify-center rounded-full bg-primary hover:bg-primary/80 transition-colors group"
            >
              <Icon name="Mail" size={24} className="text-primary-foreground" />
            </a>
          </div>
          <p className="text-muted-foreground">
            Свяжитесь с нами в Instagram или Telegram
          </p>
        </div>
      </section>

      <footer className="py-8 border-t border-border bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Princess Vandal. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
