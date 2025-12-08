import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Успешно! 🎉",
        description: "Вы подписались на обновления ЯЗАРЯДКА",
      });
      setEmail('');
    }
  };

  const features = [
    {
      icon: 'Zap',
      title: 'Персональные программы',
      description: 'Тренировки подстраиваются под твой уровень и цели'
    },
    {
      icon: 'Trophy',
      title: 'Игровая мотивация',
      description: 'Получай награды и достижения за прогресс'
    },
    {
      icon: 'Users',
      title: 'Комьюнити',
      description: 'Занимайся вместе с друзьями и соревнуйся'
    },
    {
      icon: 'BarChart3',
      title: 'Умная аналитика',
      description: 'Отслеживай прогресс в режиме реального времени'
    },
    {
      icon: 'Heart',
      title: 'Забота о здоровье',
      description: 'Контроль пульса и калорий с ИИ-рекомендациями'
    },
    {
      icon: 'Timer',
      title: 'Быстрые тренировки',
      description: 'От 5 до 60 минут под любое расписание'
    }
  ];

  const screenshots = [
    { 
      id: 1, 
      alt: 'Главный экран приложения',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=800&fit=crop',
      title: 'Дашборд'
    },
    { 
      id: 2, 
      alt: 'Тренировка в процессе',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=800&fit=crop',
      title: 'Тренировки'
    },
    { 
      id: 3, 
      alt: 'Статистика прогресса',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=800&fit=crop',
      title: 'Статистика'
    }
  ];

  const pricingPlans = [
    {
      name: 'Базовый',
      price: '0',
      period: 'навсегда',
      description: 'Для начинающих спортсменов',
      features: [
        'Доступ к базовым тренировкам',
        'Трекер активности',
        'Календарь тренировок',
        'Сообщество пользователей'
      ],
      icon: 'Dumbbell',
      popular: false
    },
    {
      name: 'Про',
      price: '499',
      period: 'в месяц',
      description: 'Для серьезных атлетов',
      features: [
        'Все из Базового плана',
        'Персональные программы тренировок',
        'ИИ-рекомендации питания',
        'Видео-инструкции HD',
        'Аналитика прогресса',
        'Приоритетная поддержка'
      ],
      icon: 'Flame',
      popular: true
    },
    {
      name: 'Элитный',
      price: '1999',
      period: 'в месяц',
      description: 'Максимум возможностей',
      features: [
        'Все из Про плана',
        'Персональный тренер онлайн',
        'Индивидуальный план питания',
        'Видеозвонки с тренером 2 раза/неделю',
        'Эксклюзивные тренировки',
        'Доступ к закрытым мероприятиям'
      ],
      icon: 'Crown',
      popular: false
    }
  ];

  const reviews = [
    {
      name: 'Анна Иванова',
      rating: 5,
      text: 'Сбросила 8 кг за 2 месяца! Приложение просто огонь 🔥',
      avatar: '👩'
    },
    {
      name: 'Дмитрий Петров',
      rating: 5,
      text: 'Наконец-то нашел мотивацию тренироваться регулярно. Рекомендую!',
      avatar: '👨'
    },
    {
      name: 'Мария Сидорова',
      rating: 5,
      text: 'Лучшее фитнес-приложение! Простое, красивое и эффективное',
      avatar: '👩‍🦰'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in text-left">
              <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text">
                ЯЗАРЯДКА
              </h1>
              <p className="text-xl md:text-3xl text-muted-foreground mb-6 max-w-3xl">
                Твой персональный фитнес-тренер в кармане! 💪
              </p>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
                Преврати тренировки в увлекательную игру. Достигай целей быстрее с ИИ-поддержкой
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 shadow-2xl"
                >
                  <Icon name="Apple" className="mr-2" size={24} />
                  App Store
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10 transition-all hover:scale-105 shadow-xl"
                >
                  <Icon name="Play" className="mr-2" size={24} />
                  Google Play
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Star" className="text-accent" size={20} />
                  <span>4.9 рейтинг</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Download" className="text-secondary" size={20} />
                  <span>500K+ загрузок</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={20} />
                  <span>200K+ пользователей</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/30 to-secondary/30 p-1 shadow-2xl hover:shadow-primary/50 transition-all duration-500">
                <div className="relative aspect-video bg-black/90 rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop"
                  >
                    <source src="https://player.vimeo.com/external/464764510.hd.mp4?s=84e2e8f3e88c7f0f4d8e64f5ae1e6e2f&profile_id=174" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon name="Play" className="text-white ml-1" size={40} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-white text-sm font-semibold">Смотри, как это работает</p>
                      <p className="text-white/70 text-xs">Демо тренировки от профи</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            </div>
          </div>
          

        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Почему <span className="gradient-text">ЯЗАРЯДКА</span>?
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Всё, что нужно для достижения твоих фитнес-целей
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Приложение в действии
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Интуитивный интерфейс для максимальных результатов
          </p>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {screenshots.map((screenshot, index) => (
                <div 
                  key={screenshot.id}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-2 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30">
                    <div className="relative h-full rounded-2xl overflow-hidden bg-black">
                      <img 
                        src={screenshot.image} 
                        alt={screenshot.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="text-white font-bold text-xl mb-2">{screenshot.title}</h4>
                        <p className="text-white/80 text-sm">{screenshot.alt}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2">
                        <Icon name="Smartphone" className="text-white" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Выбери свой план
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Начни бесплатно или выбери премиум для максимума результатов
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative bg-card/50 backdrop-blur border-border transition-all hover:scale-105 hover:shadow-2xl animate-fade-in ${
                  plan.popular ? 'border-2 border-primary shadow-xl shadow-primary/20 md:-mt-4 md:scale-105' : 'hover:border-primary'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    🔥 Популярный
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={plan.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black gradient-text">{plan.price}</span>
                      <span className="text-2xl font-bold text-muted-foreground">₽</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.period}</p>
                  </div>
                  <Button 
                    className={`w-full mb-6 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                    size="lg"
                  >
                    {plan.price === '0' ? 'Начать бесплатно' : 'Выбрать план'}
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Что говорят пользователи
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Тысячи довольных спортсменов уже с нами
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur border-border hover:border-secondary transition-all hover:scale-105 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{review.avatar}</div>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Начни путь к лучшей версии себя
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Подпишись на новости и получи бонус при скачивании! 🎁
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-12">
            <Input
              type="email"
              placeholder="Введи свой email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-6 text-lg bg-card/50 backdrop-blur border-border"
              required
            />
            <Button 
              type="submit"
              size="lg"
              className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105"
            >
              Подписаться
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 shadow-2xl"
            >
              <Icon name="Apple" className="mr-2" size={24} />
              Скачать в App Store
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10 transition-all hover:scale-105"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Скачать в Google Play
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-black gradient-text mb-4">ЯЗАРЯДКА</h3>
              <p className="text-muted-foreground">
                Персональный фитнес-тренер в твоем кармане
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>support@yazaryadka.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:border-primary transition-all">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:border-primary transition-all">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:border-primary transition-all">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:border-primary transition-all">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 ЯЗАРЯДКА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}