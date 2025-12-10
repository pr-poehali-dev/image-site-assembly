import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-500 to-green-400">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='10' y='30' font-size='40' opacity='0.3'%3E🏀%3C/text%3E%3Ctext x='60' y='70' font-size='30' opacity='0.3'%3E⚽%3C/text%3E%3Ctext x='20' y='80' font-size='25' opacity='0.3'%3E🏋️%3C/text%3E%3Ctext x='70' y='40' font-size='35' opacity='0.3'%3E🎾%3C/text%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <div className="text-white space-y-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
              🚀 Стартап №1 в категории здоровья
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              ЯЗАРЯДКА
            </h1>
            
            <p className="text-2xl md:text-3xl font-bold leading-snug">
              Заряди страну, семью, себя!
            </p>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              Мобильное приложение для детских спортивных тренировок с геймификацией, 
              системой наград и благотворительностью
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-white/90 text-lg px-10 py-7 rounded-2xl shadow-2xl font-bold transition-all hover:scale-105"
              >
                <Icon name="Apple" className="mr-2" size={24} />
                App Store
              </Button>
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-10 py-7 rounded-2xl shadow-2xl font-bold transition-all hover:scale-105"
              >
                <Icon name="Play" className="mr-2" size={24} />
                Google Play
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-4xl font-black">200K+</div>
                <div className="text-white/80">Пользователей</div>
              </div>
              <div>
                <div className="text-4xl font-black">4.9★</div>
                <div className="text-white/80">Рейтинг в сторах</div>
              </div>
              <div>
                <div className="text-4xl font-black">1M+</div>
                <div className="text-white/80">Тренировок выполнено</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[9/19] max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-black/80">
                
                <div className="absolute top-0 left-0 right-0 h-8 bg-green-600 flex items-center justify-between px-6 text-white text-xs font-semibold">
                  <span>11:22</span>
                  <div className="flex gap-1 items-center">
                    <Icon name="Signal" size={12} />
                    <Icon name="Wifi" size={12} />
                    <Icon name="Battery" size={12} />
                  </div>
                </div>

                <div className="pt-8 pb-20">
                  <div className="bg-gradient-to-br from-green-500 to-green-400 px-6 py-6 rounded-b-3xl mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                          👧
                        </div>
                        <div className="text-white">
                          <div className="font-bold">Катенька</div>
                          <div className="text-sm opacity-90">Масленникова</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-white rounded-full px-3 py-1 flex items-center gap-1 text-sm font-bold">
                          ❤️ 105
                        </div>
                        <div className="bg-white rounded-full px-3 py-1 flex items-center gap-1 text-sm font-bold">
                          ⚡ 15
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-2xl flex items-center justify-between px-6 transition-all">
                      <span className="text-lg">СДЕЛАТЬ ЗАРЯДКУ</span>
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Icon name="Play" className="fill-white text-white ml-1" size={20} />
                      </div>
                    </button>
                  </div>

                  <div className="px-4 space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">Копилка</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-green-400 to-green-300 rounded-2xl p-4">
                          <div className="text-2xl mb-2">❤️</div>
                          <div className="font-bold text-gray-900 text-sm">В копилке сердец</div>
                          <div className="text-xs text-gray-700">320 сердец</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-400 to-green-300 rounded-2xl p-4">
                          <div className="text-2xl mb-2">⚡</div>
                          <div className="font-bold text-gray-900 text-sm">В копилке молний</div>
                          <div className="text-xs text-gray-700">7 молний</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">Вознаграждение</h3>
                      <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-2xl text-sm transition-all">
                        ВЫБРАТЬ ВОЗНАГРАЖДЕНИЕ
                      </button>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Тут ты можешь выбрать, на что потратить заработанные Сердца и Молнии
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-4 flex items-center gap-3">
                      <div className="text-3xl">🛼</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-green-600">Ролики</span>
                          <span className="text-xs text-gray-500">105 / 1000 ❤️</span>
                        </div>
                        <div className="text-xs font-bold text-gray-900">TECH TEAM AXOR</div>
                        <div className="text-xs text-gray-500">спортивные, экстрим</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 px-4 py-3 flex items-center justify-around rounded-t-3xl">
                  <Icon name="Home" className="text-gray-500" size={22} />
                  <div className="bg-white rounded-full px-5 py-2 flex items-center gap-2">
                    <Icon name="Users" size={18} />
                    <span className="text-sm font-bold">Награда</span>
                  </div>
                  <Icon name="Dumbbell" className="text-gray-500" size={22} />
                  <Icon name="Settings" className="text-gray-500" size={22} />
                  <Icon name="Grid3x3" className="text-gray-500" size={22} />
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-300/30 rounded-full blur-3xl" />
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-green-400/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Как это работает?
            </h2>
            <p className="text-xl text-gray-600">
              Простая система тренировок для детей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative">
              <div className="aspect-[9/19] max-w-xs mx-auto">
                <img 
                  src="https://cdn.poehali.dev/files/Enter.jpg" 
                  alt="Стартовый экран"
                  className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-black"
                />
              </div>
              <div className="text-center mt-6">
                <div className="text-6xl font-black text-green-500 mb-2">01</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Запусти приложение</h3>
                <p className="text-gray-600">Простой и понятный интерфейс для детей</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[9/19] max-w-xs mx-auto">
                <img 
                  src="https://cdn.poehali.dev/files/Instruction.png" 
                  alt="Инструкция"
                  className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-black"
                />
              </div>
              <div className="text-center mt-6">
                <div className="text-6xl font-black text-green-500 mb-2">02</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Следуй инструкциям</h3>
                <p className="text-gray-600">Пошаговое руководство перед началом</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[9/19] max-w-xs mx-auto">
                <img 
                  src="https://cdn.poehali.dev/files/Video 4.png" 
                  alt="Тренировка"
                  className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-black"
                />
              </div>
              <div className="text-center mt-6">
                <div className="text-6xl font-black text-green-500 mb-2">03</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Тренируйся</h3>
                <p className="text-gray-600">Выполняй упражнения и получай награды</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-4">
            Ключевые возможности
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Всё для мотивации и здоровья ребёнка
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '❤️', title: 'Система сердец', desc: 'Получай сердца за выполненные тренировки' },
              { icon: '⚡', title: 'Молнии-бонусы', desc: 'Дополнительные награды за особые достижения' },
              { icon: '🎁', title: 'Вознаграждения', desc: 'Обменивай сердца на реальные призы' },
              { icon: '🏆', title: 'Достижения', desc: 'Соревнуйся с друзьями и получай медали' },
              { icon: '💚', title: 'Благотворительность', desc: 'Помогай другим через добрые дела' },
              { icon: '📊', title: 'Аналитика', desc: 'Отслеживай прогресс и статистику' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gradient-to-br from-green-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Присоединяйся к движению! 🚀
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Более 200 000 семей уже используют ЯЗАРЯДКА для здоровья своих детей
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-white/90 text-lg px-10 py-7 rounded-2xl shadow-2xl font-bold transition-all hover:scale-105"
            >
              <Icon name="Apple" className="mr-2" size={24} />
              Скачать для iOS
            </Button>
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-10 py-7 rounded-2xl shadow-2xl font-bold transition-all hover:scale-105"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Скачать для Android
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-white/90">
            <div>
              <div className="text-3xl font-black mb-1">200K+</div>
              <div className="text-sm">Активных пользователей</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-1">4.9★</div>
              <div className="text-sm">Средний рейтинг</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-1">1M+</div>
              <div className="text-sm">Выполнено тренировок</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-1">50K+</div>
              <div className="text-sm">Выдано наград</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-4">
            Отзывы родителей 💬
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Что говорят наши пользователи
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Елена М.', text: 'Дочка теперь сама просит сделать зарядку! Приложение супер мотивирует 💪', avatar: '👩' },
              { name: 'Андрей С.', text: 'Отличная идея с наградами. Сын в восторге от системы сердец!', avatar: '👨' },
              { name: 'Ольга К.', text: 'Наконец-то ребёнок занимается спортом регулярно. Спасибо!', avatar: '👩‍🦰' }
            ].map((review, idx) => (
              <div key={idx} className="bg-green-50 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{review.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
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

      <footer className="relative py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-black mb-4">ЯЗАРЯДКА</h3>
              <p className="text-gray-400 text-sm">
                Мобильное приложение для детских спортивных тренировок
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Следи за нами</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Youtube" size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>ЯЗАРЯДКА © 2024 • Заряди страну, семью, себя!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
