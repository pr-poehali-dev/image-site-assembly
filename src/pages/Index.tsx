import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
      <Navigation />
      
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: [`0px 0px`, `200px 200px`],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='10' y='30' font-size='40' opacity='0.3'%3E🏀%3C/text%3E%3Ctext x='60' y='70' font-size='30' opacity='0.3'%3E⚽%3C/text%3E%3Ctext x='20' y='80' font-size='25' opacity='0.3'%3E🏋️%3C/text%3E%3Ctext x='70' y='40' font-size='35' opacity='0.3'%3E🎾%3C/text%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              🚀 Стартап №1 в категории здоровья
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-black leading-tight flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              ЯЗАРЯДКА
              <motion.span 
                className="text-3xl md:text-4xl bg-white text-blue-600 px-3 py-1 rounded-xl font-black"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                AI
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl font-bold leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Заряди страну, семью, себя!
            </motion.p>
            
            <motion.p 
              className="text-xl text-white/90 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Мобильное приложение для детских спортивных тренировок с геймификацией, 
              системой наград и благотворительностью
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-white/90 text-lg px-10 py-7 rounded-2xl shadow-2xl font-bold transition-all hover:scale-105"
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
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { value: '200K+', label: 'Пользователей' },
                { value: '4.9★', label: 'Рейтинг в сторах' },
                { value: '1M+', label: 'Тренировок выполнено' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                >
                  <div className="text-4xl font-black">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            <div className="relative aspect-[9/19] max-w-sm mx-auto">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-black/80"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                
                <div className="absolute top-0 left-0 right-0 h-8 bg-blue-600 flex items-center justify-between px-6 text-white text-xs font-semibold">
                  <span>11:22</span>
                  <div className="flex gap-1 items-center">
                    <Icon name="Signal" size={12} />
                    <Icon name="Wifi" size={12} />
                    <Icon name="Battery" size={12} />
                  </div>
                </div>

                <div className="pt-8 pb-20">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 px-6 py-6 rounded-b-3xl mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                          👧
                        </motion.div>
                        <div className="text-white">
                          <div className="font-bold">Катенька</div>
                          <div className="text-sm opacity-90">Масленникова</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <motion.div 
                          className="bg-white rounded-full px-3 py-1 flex items-center gap-1 text-sm font-bold"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                        >
                          ❤️ 105
                        </motion.div>
                        <motion.div 
                          className="bg-white rounded-full px-3 py-1 flex items-center gap-1 text-sm font-bold"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, delay: 0.5 }}
                        >
                          ⚡ 15
                        </motion.div>
                      </div>
                    </div>
                    
                    <motion.button 
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-2xl flex items-center justify-between px-6 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-lg">СДЕЛАТЬ ЗАРЯДКУ</span>
                      <motion.div 
                        className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon name="Play" className="fill-white text-white ml-1" size={20} />
                      </motion.div>
                    </motion.button>
                  </div>

                  <div className="px-4 space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">Копилка</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <motion.div 
                          className="bg-gradient-to-br from-cyan-400 to-cyan-300 rounded-2xl p-4"
                          whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                          <div className="text-2xl mb-2">❤️</div>
                          <div className="font-bold text-gray-900 text-sm">В копилке сердец</div>
                          <div className="text-xs text-gray-700">320 сердец</div>
                        </motion.div>
                        <motion.div 
                          className="bg-gradient-to-br from-cyan-400 to-cyan-300 rounded-2xl p-4"
                          whileHover={{ scale: 1.05, rotate: -2 }}
                        >
                          <div className="text-2xl mb-2">⚡</div>
                          <div className="font-bold text-gray-900 text-sm">В копилке молний</div>
                          <div className="text-xs text-gray-700">7 молний</div>
                        </motion.div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">Вознаграждение</h3>
                      <motion.button 
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-2xl text-sm transition-all"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        ВЫБРАТЬ ВОЗНАГРАЖДЕНИЕ
                      </motion.button>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Тут ты можешь выбрать, на что потратить заработанные Сердца и Молнии
                      </p>
                    </div>

                    <motion.div 
                      className="bg-blue-50 rounded-2xl p-4 flex items-center gap-3"
                      whileHover={{ scale: 1.03, x: 5 }}
                    >
                      <div className="text-3xl">🛼</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-blue-600">Ролики</span>
                          <span className="text-xs text-gray-500">105 / 1000 ❤️</span>
                        </div>
                        <div className="text-xs font-bold text-gray-900">TECH TEAM AXOR</div>
                        <div className="text-xs text-gray-500">спортивные, экстрим</div>
                      </div>
                    </motion.div>
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
              </motion.div>

              <motion.div 
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-300/30 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -top-8 -left-8 w-40 h-40 bg-cyan-400/30 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Как это работает?
            </h2>
            <p className="text-xl text-gray-600">
              Простая система тренировок для детей
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { img: 'https://cdn.poehali.dev/files/Enter.jpg', num: '01', title: 'Запусти приложение', desc: 'Простой и понятный интерфейс для детей' },
              { img: 'https://cdn.poehali.dev/files/Instruction.png', num: '02', title: 'Следуй инструкциям', desc: 'Пошаговое руководство перед началом' },
              { img: 'https://cdn.poehali.dev/files/Video 4.png', num: '03', title: 'Тренируйся', desc: 'Выполняй упражнения и получай награды' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <motion.div 
                  className="aspect-[9/19] max-w-xs mx-auto"
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-black"
                  />
                </motion.div>
                <motion.div 
                  className="text-center mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.3 }}
                >
                  <div className="text-6xl font-black text-green-500 mb-2">{step.num}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ключевые возможности
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Всё для мотивации и здоровья ребёнка
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '❤️', title: 'Система сердец', desc: 'Получай сердца за выполненные тренировки' },
              { icon: '⚡', title: 'Молнии-бонусы', desc: 'Дополнительные награды за особые достижения' },
              { icon: '🎁', title: 'Вознаграждения', desc: 'Обменивай сердца на реальные призы' },
              { icon: '🏆', title: 'Достижения', desc: 'Соревнуйся с друзьями и получай медали' },
              { icon: '💚', title: 'Благотворительность', desc: 'Помогай другим через добрые дела' },
              { icon: '📊', title: 'Аналитика', desc: 'Отслеживай прогресс и статистику' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: idx * 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-500 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Присоединяйся к движению! 🚀
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Более 200 000 семей уже используют ЯЗАРЯДКА для здоровья своих детей
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-white/90 text-lg px-10 py-7 rounded-2xl shadow-2xl font-bold transition-all hover:scale-105"
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
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-12 text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              { value: '200K+', label: 'Активных пользователей' },
              { value: '4.9★', label: 'Средний рейтинг' },
              { value: '1M+', label: 'Выполнено тренировок' },
              { value: '50K+', label: 'Выдано наград' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-gray-900 text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Отзывы родителей 💬
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Что говорят наши пользователи
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Елена М.', text: 'Дочка теперь сама просит сделать зарядку! Приложение супер мотивирует 💪', avatar: '👩' },
              { name: 'Андрей С.', text: 'Отличная идея с наградами. Сын в восторге от системы сердец!', avatar: '👨' },
              { name: 'Ольга К.', text: 'Наконец-то ребёнок занимается спортом регулярно. Спасибо!', avatar: '👩‍🦰' }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                className="bg-blue-50 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="text-4xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, delay: idx * 0.5 }}
                  >
                    {review.avatar}
                  </motion.div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                ЯЗАРЯДКА
                <span className="text-base bg-gradient-to-r from-cyan-400 to-blue-300 text-gray-900 px-2 py-1 rounded-lg">AI</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Мобильное приложение для детских спортивных тренировок
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold mb-4">Следи за нами</h4>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Youtube'].map((social, idx) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Icon name={social as any} size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p className="flex items-center justify-center gap-2">
              ЯЗАРЯДКА
              <span className="bg-gradient-to-r from-green-400 to-green-300 text-gray-900 px-2 py-0.5 rounded text-xs font-bold">AI</span>
              © 2024 • Заряди страну, семью, себя!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}