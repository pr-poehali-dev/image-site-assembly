import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';

export default function Logos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-8">
      <Navigation />
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          Варианты логотипа ЯЗАРЯДКА
        </h1>
        <p className="text-gray-400 text-center mb-16">Молния · Я · Энергия · Утро · Юность · Масштаб</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Вариант 1: Молния через Я */}
          <div className="bg-white rounded-3xl p-12 flex flex-col items-center justify-center aspect-square relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
            <div className="relative">
              <div className="text-9xl font-black text-transparent bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 bg-clip-text">
                Я
              </div>
              <Icon name="Zap" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-yellow-400 fill-yellow-400 animate-pulse" />
            </div>
            <p className="mt-6 text-sm text-gray-600 font-medium">Молния сквозь Я</p>
          </div>

          {/* Вариант 2: Я с энергией */}
          <div className="bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 rounded-3xl p-12 flex flex-col items-center justify-center aspect-square relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300">
            <div className="relative">
              <div className="text-9xl font-black text-white drop-shadow-2xl">
                Я
              </div>
              <div className="absolute inset-0 blur-2xl bg-white opacity-30 animate-pulse"></div>
            </div>
            <p className="mt-6 text-sm text-white font-medium">Утренняя энергия</p>
          </div>

          {/* Вариант 3: Минимализм */}
          <div className="bg-white rounded-3xl p-12 flex flex-col items-center justify-center aspect-square relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
            <div className="relative">
              <div className="text-8xl font-black">
                <span className="text-orange-500">Я</span>
                <span className="text-yellow-400">⚡</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 font-medium">Простота и сила</p>
          </div>

          {/* Вариант 4: Круговая энергия */}
          <div className="bg-slate-900 rounded-3xl p-12 flex flex-col items-center justify-center aspect-square relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300">
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 blur-3xl opacity-50 animate-pulse"></div>
            </div>
            <div className="relative text-9xl font-black text-white">
              Я
            </div>
            <p className="mt-6 text-sm text-white font-medium relative">Масштаб и сияние</p>
          </div>

          {/* Вариант 5: Восход солнца */}
          <div className="bg-gradient-to-t from-orange-600 via-amber-400 to-yellow-300 rounded-3xl p-12 flex flex-col items-center justify-center aspect-square relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-orange-700/50 to-transparent"></div>
            <div className="relative">
              <div className="text-9xl font-black text-white drop-shadow-lg">
                Я
              </div>
              <Icon name="Zap" className="absolute -top-4 -right-4 w-12 h-12 text-white fill-white opacity-80" />
            </div>
            <p className="mt-6 text-sm text-white font-semibold relative">Утренний рассвет</p>
          </div>

          {/* Вариант 6: Неоновая молодость */}
          <div className="bg-black rounded-3xl p-12 flex flex-col items-center justify-center aspect-square relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 border-2 border-orange-500">
            <div className="relative">
              <div className="text-9xl font-black text-orange-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.8)] animate-pulse">
                Я
              </div>
              <div className="absolute -inset-4 border-4 border-yellow-400 rounded-lg opacity-50 animate-ping"></div>
            </div>
            <p className="mt-6 text-sm text-orange-400 font-medium">Неоновая энергия</p>
          </div>

        </div>

        {/* Типографские варианты */}
        <div className="mt-16 space-y-8">
          <div className="bg-white rounded-3xl p-16 text-center hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
            <div className="text-7xl md:text-8xl font-black">
              <span className="text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text">
                ЯЗАРЯДКА
              </span>
            </div>
            <p className="mt-4 text-gray-600 font-medium">Полный логотип с градиентом</p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 rounded-3xl p-16 text-center hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300">
            <div className="text-7xl md:text-8xl font-black text-white drop-shadow-2xl">
              ЯЗАРЯДКА
            </div>
            <p className="mt-4 text-white/90 font-medium">Энергичный градиент</p>
          </div>

          <div className="bg-black rounded-3xl p-16 text-center hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 border-2 border-orange-500">
            <div className="text-7xl md:text-8xl font-black text-orange-500 drop-shadow-[0_0_40px_rgba(249,115,22,0.8)]">
              ЯЗАРЯДКА
            </div>
            <p className="mt-4 text-orange-400 font-medium">Неоновое свечение</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
          >
            <Icon name="ArrowLeft" size={20} />
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
}