import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

export default function Brandbook() {
  const colors = [
    { name: 'Primary Orange', hex: '#f97316', rgb: '249, 115, 22', usage: 'Основной цвет бренда, кнопки, акценты' },
    { name: 'Amber', hex: '#f59e0b', rgb: '245, 158, 11', usage: 'Переходы, градиенты, hover-состояния' },
    { name: 'Yellow', hex: '#facc15', rgb: '250, 204, 21', usage: 'Светлые акценты, иконки, энергия' },
    { name: 'Deep Orange', hex: '#ea580c', rgb: '234, 88, 12', usage: 'Тени, глубина, контраст' },
    { name: 'Dark Slate', hex: '#0f172a', rgb: '15, 23, 42', usage: 'Фоны, текст заголовков' },
    { name: 'White', hex: '#ffffff', rgb: '255, 255, 255', usage: 'Текст на тёмном, карточки' },
  ];

  const gradients = [
    { name: 'Sunrise', css: 'from-orange-500 via-amber-500 to-yellow-400', usage: 'Кнопки, герои, яркие акценты' },
    { name: 'Deep Energy', css: 'from-orange-600 via-amber-400 to-yellow-300', usage: 'Фоны секций' },
    { name: 'Dark Glow', css: 'from-slate-950 via-slate-900 to-slate-950', usage: 'Тёмные секции' },
    { name: 'Soft Light', css: 'from-orange-500/20 via-amber-500/20 to-yellow-400/20', usage: 'Подложки, blur-эффекты' },
  ];

  const typography = [
    { name: 'Заголовок H1', class: 'text-6xl md:text-8xl font-black', example: 'ЯЗАРЯДКА' },
    { name: 'Заголовок H2', class: 'text-4xl md:text-5xl font-bold', example: 'Возможности' },
    { name: 'Заголовок H3', class: 'text-2xl md:text-3xl font-bold', example: 'Преимущества' },
    { name: 'Основной текст', class: 'text-lg md:text-xl', example: 'Твой персональный фитнес-тренер' },
    { name: 'Подзаголовки', class: 'text-base md:text-lg text-muted-foreground', example: 'Описание функции' },
    { name: 'Малый текст', class: 'text-sm text-muted-foreground', example: 'Дополнительная информация' },
  ];

  const spacing = [
    { size: '4px', px: 'p-1', usage: 'Минимальные отступы' },
    { size: '8px', px: 'p-2', usage: 'Малые отступы' },
    { size: '16px', px: 'p-4', usage: 'Базовые отступы' },
    { size: '24px', px: 'p-6', usage: 'Средние отступы' },
    { size: '32px', px: 'p-8', usage: 'Большие отступы' },
    { size: '48px', px: 'p-12', usage: 'Секции' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text">
              ЯЗАРЯДКА
            </div>
            <span className="text-white/40 text-sm">Брендбук</span>
          </div>
          <a href="/" className="text-white/60 hover:text-white transition-colors">
            <Icon name="X" size={24} />
          </a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Intro */}
        <section className="mb-20">
          <h1 className="text-6xl font-black text-white mb-6">Микробрендбук</h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Руководство по визуальному стилю ЯЗАРЯДКА — фитнес-приложения нового поколения. 
            Энергичный, молодёжный, мотивирующий.
          </p>
        </section>

        {/* Logo Variants */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Логотип</h2>
          <p className="text-white/60 mb-8">Основные варианты использования лого</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Основной */}
            <div className="bg-white rounded-2xl p-8 aspect-square flex flex-col items-center justify-center">
              <div className="text-6xl font-black text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text mb-4">
                ЯЗАРЯДКА
              </div>
              <p className="text-sm text-gray-600 font-medium">Основной вариант</p>
            </div>

            {/* Иконка */}
            <div className="bg-gradient-to-br from-orange-500 to-yellow-400 rounded-2xl p-8 aspect-square flex flex-col items-center justify-center">
              <div className="text-7xl font-black text-white mb-4">Я</div>
              <Icon name="Zap" className="w-12 h-12 text-white fill-white absolute" />
              <p className="text-sm text-white font-medium mt-8">Иконка приложения</p>
            </div>

            {/* На тёмном */}
            <div className="bg-slate-900 rounded-2xl p-8 aspect-square flex flex-col items-center justify-center">
              <div className="text-5xl font-black text-white mb-4">ЯЗАРЯДКА</div>
              <p className="text-sm text-white/60 font-medium">На тёмном фоне</p>
            </div>
          </div>

          <div className="mt-8 bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <Icon name="AlertCircle" size={20} className="text-orange-400" />
              Правила использования
            </h3>
            <ul className="text-white/70 space-y-2 text-sm">
              <li>• Минимальный размер логотипа: 32px по высоте</li>
              <li>• Свободное пространство вокруг: не менее высоты буквы «Я»</li>
              <li>• Не искажать пропорции, не поворачивать</li>
              <li>• Использовать только утверждённые цветовые варианты</li>
            </ul>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Цветовая палитра</h2>
          <p className="text-white/60 mb-8">Энергичные цвета утреннего солнца и движения</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div key={color.hex} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all">
                <div 
                  className="h-32 flex items-center justify-center"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="text-white font-bold text-lg drop-shadow-lg">{color.hex}</div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold mb-2">{color.name}</h3>
                  <p className="text-white/40 text-sm mb-2">RGB: {color.rgb}</p>
                  <p className="text-white/60 text-sm">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Градиенты</h2>
          <p className="text-white/60 mb-8">Динамичные переходы для создания энергии</p>
          
          <div className="space-y-4">
            {gradients.map((gradient) => (
              <div key={gradient.name} className="group">
                <div className={`h-32 rounded-xl bg-gradient-to-r ${gradient.css} flex items-center justify-between px-8 hover:scale-[1.02] transition-transform`}>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{gradient.name}</h3>
                    <p className="text-white/80 text-sm">{gradient.usage}</p>
                  </div>
                  <code className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg text-white/90 text-sm font-mono">
                    {gradient.css}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Типографика</h2>
          <p className="text-white/60 mb-8">Шрифтовая система для чёткой иерархии</p>
          
          <div className="space-y-8">
            {typography.map((typo) => (
              <div key={typo.name} className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-white/60 text-sm font-medium">{typo.name}</h3>
                  <code className="bg-black/30 px-3 py-1 rounded text-white/70 text-xs font-mono">
                    {typo.class}
                  </code>
                </div>
                <div className={`${typo.class} text-white`}>
                  {typo.example}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Отступы и интервалы</h2>
          <p className="text-white/60 mb-8">Система интервалов на базе 4px</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spacing.map((space) => (
              <div key={space.size} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-400" style={{ width: space.size, height: space.size }}></div>
                  <div>
                    <div className="text-white font-bold">{space.size}</div>
                    <code className="text-orange-400 text-sm">{space.px}</code>
                  </div>
                </div>
                <p className="text-white/60 text-sm">{space.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UI Components */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">UI компоненты</h2>
          <p className="text-white/60 mb-8">Стандартные элементы интерфейса</p>
          
          <div className="space-y-6">
            {/* Buttons */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-white font-bold mb-6">Кнопки</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:opacity-90">
                  Основная кнопка
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10">
                  Вторичная кнопка
                </Button>
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
                  Текстовая кнопка
                </Button>
              </div>
            </div>

            {/* Icons */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-white font-bold mb-6">Иконки и символы</h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Icon name="Zap" className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <span className="text-white/60 text-xs">Энергия</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icon name="Flame" className="w-8 h-8 text-orange-500" />
                  <span className="text-white/60 text-xs">Огонь</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icon name="Trophy" className="w-8 h-8 text-yellow-400" />
                  <span className="text-white/60 text-xs">Достижения</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icon name="Heart" className="w-8 h-8 text-orange-500" />
                  <span className="text-white/60 text-xs">Здоровье</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icon name="Target" className="w-8 h-8 text-orange-400" />
                  <span className="text-white/60 text-xs">Цели</span>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-white font-bold mb-6">Карточки</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-yellow-400/10 border border-orange-500/20 rounded-xl p-6 backdrop-blur-sm">
                  <Icon name="Zap" className="w-10 h-10 text-orange-400 mb-3" />
                  <h4 className="text-white font-bold mb-2">Заголовок карточки</h4>
                  <p className="text-white/70 text-sm">Описание функции или возможности</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-2xl">
                  <Icon name="Trophy" className="w-10 h-10 text-orange-500 mb-3" />
                  <h4 className="text-gray-900 font-bold mb-2">Светлая карточка</h4>
                  <p className="text-gray-600 text-sm">Для контрастных секций</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Voice */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Tone of Voice</h2>
          <p className="text-white/60 mb-8">Как говорит бренд ЯЗАРЯДКА</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-400/10 border border-orange-500/20 rounded-xl p-8">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Icon name="CheckCircle" className="text-green-400" />
                Мы такие
              </h3>
              <ul className="text-white/80 space-y-2">
                <li>✅ Энергичные и мотивирующие</li>
                <li>✅ Говорим на «ты», дружелюбно</li>
                <li>✅ Используем эмодзи для эмоций 💪🔥</li>
                <li>✅ Короткие, ясные фразы</li>
                <li>✅ Фокус на результате и действии</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Icon name="XCircle" className="text-red-400" />
                Мы не такие
              </h3>
              <ul className="text-white/80 space-y-2">
                <li>❌ Не формальные и занудные</li>
                <li>❌ Не медицинский язык</li>
                <li>❌ Не длинные инструкции</li>
                <li>❌ Не пугаем сложностью</li>
                <li>❌ Не говорим о проблемах</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-white font-bold mb-4">Примеры формулировок</h3>
            <div className="space-y-3 text-white/70">
              <div className="flex items-start gap-3">
                <Icon name="MessageCircle" className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-white">Хорошо:</strong> «Твоя цель на сегодня готова! Врываемся? 🔥»
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="MessageCircle" className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-white">Хорошо:</strong> «+500 калорий! Ты — огонь 💪»
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="MessageCircle" className="text-red-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong className="text-white">Плохо:</strong> «Ваша тренировочная программа активирована»
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download */}
        <section className="text-center bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-4">Готов запускать?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Используй этот брендбук для создания единого визуального языка во всех точках контакта с пользователем
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90">
              <Icon name="Download" className="mr-2" />
              Скачать ассеты
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Icon name="FileText" className="mr-2" />
              PDF версия
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10 text-center">
          <div className="flex items-center justify-center gap-6 text-white/40 text-sm">
            <a href="/" className="hover:text-white transition-colors">Главная</a>
            <a href="/logos" className="hover:text-white transition-colors">Логотипы</a>
            <span>ЯЗАРЯДКА © 2024</span>
          </div>
        </footer>

      </div>
    </div>
  );
}