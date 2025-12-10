import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';

export default function Index() {
  const features = [
    {
      icon: 'Activity',
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-500 to-green-400 relative overflow-hidden">
      <Navigation />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full">
          <div className="relative aspect-[9/19] max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-600 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-black">
              
              <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 backdrop-blur-sm flex items-center justify-between px-6 text-white text-xs">
                <span className="font-semibold">11:22</span>
                <div className="flex gap-1">
                  <Icon name="Wifi" size={14} />
                  <Icon name="Battery" size={14} />
                </div>
              </div>

              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='10' y='30' font-size='40' fill='white' opacity='0.3'%3E🏀%3C/text%3E%3Ctext x='60' y='70' font-size='30' fill='white' opacity='0.3'%3E⚽%3C/text%3E%3Ctext x='20' y='80' font-size='25' fill='white' opacity='0.3'%3E🏋️%3C/text%3E%3Ctext x='70' y='40' font-size='35' fill='white' opacity='0.3'%3E🎾%3C/text%3E%3C/svg%3E")
                  `,
                  backgroundSize: '200px 200px',
                  backgroundRepeat: 'repeat'
                }}
              />

              <div className="relative h-full flex flex-col items-center justify-center px-8 text-center">
                
                <div className="mb-8">
                  <h1 className="text-6xl font-black text-white tracking-tight mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    ЯЗАРЯДКА
                  </h1>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-xl ml-auto -mt-8 mr-4">
                    AI
                  </div>
                </div>

                <p className="text-xl text-white/95 font-medium mb-12">
                  Заряди страну, семью, себя!
                </p>

                <div className="mt-auto mb-16">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white text-xl font-bold px-16 py-6 rounded-2xl shadow-2xl transition-all hover:scale-105"
                  >
                    НАЧАТЬ
                  </Button>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-300/30 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-green-400/30 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4">
            Возможности приложения
          </h2>
          <p className="text-xl text-white/80 text-center mb-12">
            Всё для твоих спортивных целей 🎯
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Начни тренироваться прямо сейчас! 💪
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Скачай приложение и получи первую неделю премиум-доступа бесплатно
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-white/90 text-lg px-8 py-6 rounded-2xl shadow-2xl transition-all hover:scale-105 font-bold"
            >
              <Icon name="Apple" className="mr-2" size={24} />
              App Store
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 text-lg px-8 py-6 rounded-2xl shadow-2xl transition-all hover:scale-105 font-bold"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Google Play
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 justify-center text-white/90">
            <div className="flex items-center gap-2">
              <Icon name="Star" className="text-yellow-300 fill-yellow-300" size={20} />
              <span className="font-semibold">4.9 рейтинг</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Download" className="text-white" size={20} />
              <span className="font-semibold">500K+ загрузок</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" className="text-white" size={20} />
              <span className="font-semibold">200K+ активных</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4">
            Что говорят пользователи 💬
          </h2>
          <p className="text-xl text-white/80 text-center mb-12">
            Более 200 000 довольных спортсменов
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Анна', text: 'Сбросила 8 кг за 2 месяца! Огонь 🔥', avatar: '👩' },
              { name: 'Дмитрий', text: 'Наконец-то регулярные тренировки!', avatar: '👨' },
              { name: 'Мария', text: 'Лучшее фитнес-приложение!', avatar: '👩‍🦰' }
            ].map((review, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">{review.avatar}</div>
                  <div>
                    <div className="font-bold text-green-700">{review.name}</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={14} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative py-8 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-white/70">
          <p>ЯЗАРЯДКА © 2024 • Заряди страну, семью, себя!</p>
        </div>
      </footer>
    </div>
  );
}
