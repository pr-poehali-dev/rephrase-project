import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const articles = [
    {
      id: 1,
      title: "Трейдер на Polymarket зарабатывает $130k за месяц",
      description: "Анализ успешной стратегии трейдера, который заходит в сделки в последние секунды, когда исход уже понятен",
      image: "https://cdn.poehali.dev/projects/f73098f1-4c09-42fa-ad1c-a6b07e36dea5/files/46a48955-4849-4cd0-a0e5-a5752ac7e890.jpg",
      category: "Трейдинг",
      date: "25 ноября 2025",
      readTime: "5 мин"
    },
    {
      id: 2,
      title: "Bitcoin-кит продал последние 2499 BTC",
      description: "Олдовый холдер времён Сатоши Накамото продал свои последние биткоины после 15 лет хранения",
      image: "https://cdn.poehali.dev/projects/f73098f1-4c09-42fa-ad1c-a6b07e36dea5/files/46a48955-4849-4cd0-a0e5-a5752ac7e890.jpg",
      category: "Криптовалюты",
      date: "25 ноября 2025",
      readTime: "4 мин"
    },
    {
      id: 3,
      title: "Безопасность P2P обмена: полный гайд",
      description: "Текущие риски обмена на биржевых и P2P платформах и как обезопасить себя от блокировок",
      image: "https://cdn.poehali.dev/projects/f73098f1-4c09-42fa-ad1c-a6b07e36dea5/files/eb48abd5-0e4c-4b2e-bfd7-65872ed93006.jpg",
      category: "Безопасность",
      date: "24 ноября 2025",
      readTime: "7 мин"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="BookOpen" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TechBlog
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Статьи
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Подписаться
            </Button>
          </nav>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-2 text-sm">
              🚀 Новое в мире технологий
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Современный блог о технологиях
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Актуальные новости криптовалют, блокчейна, трейдинга и технологий. 
              Глубокая аналитика и эксклюзивные материалы каждый день.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105">
                <Icon name="TrendingUp" className="mr-2" size={20} />
                Читать статьи
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 transition-all hover:scale-105">
                <Icon name="Bell" className="mr-2" size={20} />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Последние статьи</h2>
              <p className="text-muted-foreground">Самые актуальные материалы и аналитика</p>
            </div>
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              Все статьи
              <Icon name="ArrowRight" size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={article.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2">
              Показать еще
              <Icon name="ChevronDown" className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Mail" className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-4">Подпишитесь на рассылку</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Получайте лучшие статьи прямо на почту. Без спама, только качественный контент.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-white"
              />
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity whitespace-nowrap px-8">
                Подписаться
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Уже подписались 2,847 читателей
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">TechBlog</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Современный блог о технологиях, криптовалютах и трейдинге
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Трейдинг</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Криптовалюты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аналитика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 TechBlog. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
