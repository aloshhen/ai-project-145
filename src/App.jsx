import { useState } from 'react'
import { Shield, Trophy, Users, Zap, ChevronRight, ChevronLeft, Star, Target, Calendar, Download, Youtube, ExternalLink, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  const [currentHero, setCurrentHero] = useState(0)
  const [hoveredHero, setHoveredHero] = useState(null)

  const heroes = [
    {
      name: 'Pudge',
      role: 'Strength',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
      stats: { strength: 25, agility: 14, intelligence: 14 },
      ability: 'Meat Hook'
    },
    {
      name: 'Invoker',
      role: 'Intelligence',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80',
      stats: { strength: 17, agility: 14, intelligence: 27 },
      ability: 'Invoke'
    },
    {
      name: 'Anti-Mage',
      role: 'Agility',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
      stats: { strength: 21, agility: 24, intelligence: 12 },
      ability: 'Blink'
    },
    {
      name: 'Crystal Maiden',
      role: 'Intelligence',
      image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&q=80',
      stats: { strength: 16, agility: 16, intelligence: 21 },
      ability: 'Freezing Field'
    }
  ]

  const tournaments = [
    {
      title: 'The International 2024',
      date: '15-25 октября',
      prize: '$40,000,000',
      image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&q=80'
    },
    {
      title: 'DreamLeague Season 22',
      date: '1-10 декабря',
      prize: '$1,000,000',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80'
    },
    {
      title: 'ESL One Berlin',
      date: '20-28 ноября',
      prize: '$500,000',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80'
    }
  ]

  const nextHero = () => {
    setCurrentHero((prev) => (prev + 1) % heroes.length)
  }

  const prevHero = () => {
    setCurrentHero((prev) => (prev - 1 + heroes.length) % heroes.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-2xl z-50 border-b border-red-900/30">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-10 h-10 text-red-600" />
            <span className="text-3xl font-black text-white tracking-tighter">DOTA 2</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#heroes" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Герои</a>
            <a href="#tournaments" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Турниры</a>
            <a href="#guide" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Гайды</a>
            <a href="#subscribe" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Подписка</a>
          </div>
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-600/50 flex items-center gap-2">
            <Download className="w-5 h-5" />
            Скачать Dota 2
          </button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80" 
            alt="Dota 2" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-blue-950/90 to-slate-950" />
        </div>
        <div className="relative z-10 container mx-auto text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tighter">
              DOTA <span className="text-red-600">2</span>
            </h1>
            <p className="text-3xl md:text-4xl text-red-500 mb-8 font-bold tracking-tight">
              Каждая битва — это история
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Присоединяйся к миллионам игроков по всему миру. Выбери своего героя, создай стратегию и докажи своё превосходство на полях сражений Dota 2
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-red-600/50 flex items-center justify-center gap-3">
                Начать играть
                <ChevronRight className="w-6 h-6" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all backdrop-blur-xl border-2 border-red-600/50 hover:border-red-500 flex items-center justify-center gap-3">
                <Youtube className="w-6 h-6" />
                Смотреть трейлер
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-blue-950/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto border border-red-600/30">
                <Users className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-5xl font-black text-white mb-2">11M+</h3>
              <p className="text-gray-400 text-lg">Активных игроков</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto border border-red-600/30">
                <Shield className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-5xl font-black text-white mb-2">123</h3>
              <p className="text-gray-400 text-lg">Уникальных героев</p>
            </div>
            <div className="text-center">
              <div className="bg-red-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto border border-red-600/30">
                <Trophy className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-5xl font-black text-white mb-2">$300M+</h3>
              <p className="text-gray-400 text-lg">Призовой фонд</p>
            </div>
          </div>
        </div>
      </section>

      {/* HEROES SLIDER */}
      <section id="heroes" className="py-24 px-6 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-white text-center mb-4 tracking-tighter">
            Топ <span className="text-red-600">Герои</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">Выбери своего чемпиона и покори поле боя</p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 rounded-3xl overflow-hidden border-2 border-red-900/30">
              <img 
                src={heroes[currentHero].image} 
                alt={heroes[currentHero].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <span className="text-yellow-500 font-bold text-lg">{heroes[currentHero].role}</span>
                </div>
                <h3 className="text-5xl font-black text-white mb-4 tracking-tight">{heroes[currentHero].name}</h3>
                <p className="text-gray-300 text-lg mb-6">Способность: {heroes[currentHero].ability}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-red-900/30 backdrop-blur-xl rounded-xl p-4 border border-red-600/30">
                    <p className="text-gray-400 text-sm mb-1">Сила</p>
                    <p className="text-2xl font-bold text-white">{heroes[currentHero].stats.strength}</p>
                  </div>
                  <div className="bg-green-900/30 backdrop-blur-xl rounded-xl p-4 border border-green-600/30">
                    <p className="text-gray-400 text-sm mb-1">Ловкость</p>
                    <p className="text-2xl font-bold text-white">{heroes[currentHero].stats.agility}</p>
                  </div>
                  <div className="bg-blue-900/30 backdrop-blur-xl rounded-xl p-4 border border-blue-600/30">
                    <p className="text-gray-400 text-sm mb-1">Интеллект</p>
                    <p className="text-2xl font-bold text-white">{heroes[currentHero].stats.intelligence}</p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={prevHero}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-950/80 backdrop-blur-xl hover:bg-red-600/80 text-white p-4 rounded-full transition-all transform hover:scale-110 border border-red-600/30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextHero}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-950/80 backdrop-blur-xl hover:bg-red-600/80 text-white p-4 rounded-full transition-all transform hover:scale-110 border border-red-600/30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-3 mt-8">
              {heroes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHero(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentHero ? 'bg-red-600 w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-950/20">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-white text-center mb-16 tracking-tighter">
            Почему <span className="text-red-600">Dota 2?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-3xl border-2 border-red-900/30 hover:border-red-600/50 transition-all transform hover:scale-105 backdrop-blur-xl">
              <div className="bg-red-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border border-red-600/30">
                <Zap className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Динамичный геймплей</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Каждая игра уникальна. Бесконечные комбинации героев и стратегий создают неповторимый опыт в каждом матче
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-3xl border-2 border-red-900/30 hover:border-red-600/50 transition-all transform hover:scale-105 backdrop-blur-xl">
              <div className="bg-red-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border border-red-600/30">
                <Target className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Киберспорт</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Участвуй в крупнейших турнирах мира с призовыми фондами в миллионы долларов. Стань профессионалом
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 rounded-3xl border-2 border-red-900/30 hover:border-red-600/50 transition-all transform hover:scale-105 backdrop-blur-xl">
              <div className="bg-red-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border border-red-600/30">
                <Users className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Глобальное сообщество</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Присоединяйся к миллионам игроков по всему миру. Находи друзей, создавай команды, побеждай вместе
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section id="tournaments" className="py-24 px-6 bg-gradient-to-b from-blue-950/20 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black text-white text-center mb-4 tracking-tighter">
            Турниры <span className="text-red-600">2024</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">Следи за крупнейшими соревнованиями</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl border-2 border-red-900/30 hover:border-red-600/50 transition-all transform hover:scale-105">
                <div className="relative h-64">
                  <img 
                    src={tournament.image} 
                    alt={tournament.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-red-500" />
                    <span className="text-red-500 font-bold">{tournament.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tournament.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-black text-red-500">{tournament.prize}</p>
                    <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section id="guide" className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-950/20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-10 rounded-3xl border-2 border-red-900/30 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-white mb-6 tracking-tighter">
              Как начать <span className="text-red-600">играть?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Скачай Steam</h3>
                  <p className="text-gray-400">Dota 2 доступна бесплатно на платформе Steam. Создай аккаунт и установи клиент</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Пройди обучение</h3>
                  <p className="text-gray-400">Встроенный туториал познакомит тебя с основами игры, героями и механиками</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Выбери героя</h3>
                  <p className="text-gray-400">Изучи характеристики 123 уникальных героев и найди своего фаворита</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Начни побеждать</h3>
                  <p className="text-gray-400">Играй с друзьями или в одиночку, повышай ранг и становись легендой</p>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-600/50 w-full flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Скачать Dota 2 бесплатно
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="subscribe" className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-6xl font-black text-white mb-6 tracking-tighter">
            Будь в <span className="text-red-600">курсе</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Подпишись на рассылку и получай новости об обновлениях, турнирах и эксклюзивных предложениях
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="email" 
                placeholder="Твой email"
                className="w-full bg-slate-900/80 border-2 border-red-900/30 focus:border-red-600/50 rounded-xl px-12 py-4 text-white placeholder-gray-500 outline-none transition-all backdrop-blur-xl"
              />
            </div>
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-600/50">
              Подписаться
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t-2 border-red-900/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-black text-white tracking-tighter">DOTA 2</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            © 2024 Valve Corporation. Dota и Dota 2 являются зарегистрированными торговыми марками Valve Corporation
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App