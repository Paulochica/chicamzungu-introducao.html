
import React, { useState, useMemo } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Search, 
  MessageSquare, 
  Menu,
  X,
  ChevronRight,
  ShoppingBasket,
  Plus,
  Clock,
  ArrowRight,
  Package,
  Sparkles,
  Store
} from 'lucide-react';
import { CATEGORIES } from './constants';
import { Product } from './types';

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=60&w=600";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = useMemo(() => {
    return CATEGORIES.map(category => ({
      ...category,
      products: category.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.products.length > 0);
  }, [searchTerm]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    setActiveCategory(id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-100">
      {/* Top Banner Informative */}
      <div className="bg-[#1e293b] text-amber-400 py-2.5 text-[10px] md:text-xs text-center font-bold tracking-[0.2em] uppercase border-b border-white/5 relative z-[60]">
        MZUNGU COMERCIAL • Variedade com Economia • Morrumbala
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-[#8b5e34] p-2 rounded-lg text-white shadow-md group-hover:scale-105 transition-transform">
              <Store size={24} />
            </div>
            <div>
              <h1 className="text-xl font-black text-[#1e293b] leading-none tracking-tighter">MZUNGU COMERCIAL</h1>
              <div className="flex flex-col">
                <div className="h-[2px] w-full bg-amber-400 mt-1"></div>
                <span className="text-[9px] font-bold text-[#8b5e34] uppercase tracking-widest mt-0.5">Variedade com Economia</span>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-sm font-bold text-slate-600 hover:text-[#8b5e34] transition-colors uppercase tracking-widest">Início</button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`text-sm font-bold transition-colors uppercase tracking-widest ${
                  activeCategory === cat.id ? 'text-[#8b5e34] border-b-2 border-amber-400 pb-1' : 'text-slate-600 hover:text-[#8b5e34]'
                }`}
              >
                {cat.title}
              </button>
            ))}
            <a 
              href="https://wa.me/258861660402" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e293b] hover:bg-[#334155] text-white px-6 py-2.5 rounded-lg flex items-center space-x-2 font-bold shadow-lg transition-all active:scale-95"
            >
              <MessageSquare size={18} className="text-amber-400" />
              <span className="text-sm uppercase tracking-wider">WhatsApp</span>
            </a>
          </nav>

          <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-white pt-24 px-6 overflow-y-auto">
          <button className="absolute top-6 right-6 p-2 text-slate-400" onClick={() => setIsMenuOpen(false)}><X size={32}/></button>
          <div className="flex flex-col space-y-6">
            <div className="border-b border-slate-100 pb-4">
               <h2 className="text-sm font-black text-[#8b5e34] uppercase tracking-[0.2em] mb-4">Categorias</h2>
               <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false);}} className="text-3xl font-black text-slate-900 text-left block w-full mb-4">Início</button>
               {CATEGORIES.map(cat => (
                 <button
                   key={cat.id}
                   onClick={() => scrollToSection(cat.id)}
                   className="text-3xl font-black text-slate-400 text-left hover:text-[#8b5e34] block w-full mb-4 transition-colors uppercase italic"
                 >
                   {cat.title}
                 </button>
               ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Inspired by Store Front Image */}
      <section id="hero" className="relative pt-20 pb-24 md:pt-32 md:pb-48 px-4 overflow-hidden min-h-[600px] flex items-center">
        {/* Decorative elements representing the wood and stone of the shop */}
        <div className="absolute inset-0 bg-[#f1f5f9]">
            <div className="absolute top-0 w-full h-32 bg-[#8b5e34] opacity-10"></div>
            <div className="absolute bottom-0 w-full h-1/2 bg-slate-200/50"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl text-center space-y-12 relative z-10">
          <div className="flex flex-col items-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur text-[#1e293b] px-6 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-2 border border-slate-200 shadow-xl">
              <MapPin size={14} className="text-[#8b5e34]" />
              <span>Moçambique • Zambézia • Morrumbala</span>
            </div>
            
            <div className="relative inline-block py-10 px-8 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/60 shadow-2xl">
                <h2 className="text-5xl md:text-[7rem] font-black text-[#1e293b] leading-[0.8] tracking-tighter uppercase italic">
                    MZUNGU <br/> <span className="text-[#8b5e34]">COMERCIAL</span>
                </h2>
                <div className="mt-8 h-[6px] w-3/4 mx-auto bg-amber-400 shadow-sm rounded-full"></div>
                <p className="mt-6 text-2xl md:text-4xl font-black text-[#b45309] italic tracking-tight uppercase">
                    Variedade com Economia
                </p>
            </div>
          </div>
          
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#8b5e34] transition-colors">
                <Search size={28} />
            </div>
            <input 
              type="text" 
              placeholder="Pesquisar arroz, bebidas, baldes..." 
              className="w-full pl-16 pr-8 py-7 rounded-2xl bg-white border-2 border-transparent text-slate-900 shadow-2xl focus:border-[#8b5e34] outline-none transition-all text-xl font-bold placeholder:text-slate-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <main className="container mx-auto px-4 py-20 flex-grow">
        {filteredCategories.length > 0 ? (
          <div className="space-y-32">
            {filteredCategories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-32">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                  <div className="flex items-center space-x-5">
                    <div className="bg-[#1e293b] text-amber-400 p-5 rounded-2xl shadow-2xl">
                      {category.icon}
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-5xl font-black text-[#1e293b] tracking-tighter uppercase italic leading-none">{category.title}</h3>
                        <p className="text-xs font-black text-amber-600 uppercase tracking-widest mt-2">Qualidade Mzungu</p>
                    </div>
                  </div>
                  <div className="h-[2px] flex-grow bg-slate-200 hidden md:block mx-10"></div>
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] bg-white border border-slate-200 px-6 py-2.5 rounded-xl shadow-sm">
                    {category.products.length} Disponíveis
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                  {category.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="text-center py-40 bg-white rounded-[3rem] shadow-inner border border-slate-100 relative">
            <div className="bg-slate-50 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <Search className="w-12 h-12 text-slate-200" />
            </div>
            <h3 className="text-3xl font-black text-[#1e293b] uppercase italic tracking-tight">Sem Stock Encontrado</h3>
            <p className="text-slate-500 mt-4 max-w-md mx-auto font-medium">Não encontramos "{searchTerm}". Verifique o nome ou veja as categorias no menu.</p>
            <button 
                onClick={() => setSearchTerm('')} 
                className="mt-10 bg-[#1e293b] text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#8b5e34] transition-all flex items-center gap-3 mx-auto shadow-2xl active:scale-95"
            >
                Limpar pesquisa <ArrowRight size={20} className="text-amber-400"/>
            </button>
          </div>
        )}
      </main>

      {/* Footer (Simplified from previous) */}
      <footer className="bg-[#1e293b] text-slate-400 py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2 space-y-10">
              <div className="flex items-center space-x-4">
                <div className="bg-[#8b5e34] p-3 rounded-xl text-white shadow-xl">
                  <Store size={32} />
                </div>
                <div>
                    <h4 className="text-white font-black text-4xl tracking-tighter uppercase italic leading-none">MZUNGU COMERCIAL</h4>
                    <div className="h-1.5 w-full bg-amber-400 mt-2"></div>
                </div>
              </div>
              <p className="text-xl leading-relaxed max-w-md font-medium text-slate-400 italic">
                A modernidade do comércio em Morrumbala. Comprometidos com a variedade e os preços baixos na Zambézia.
              </p>
              <div className="flex flex-wrap gap-5 pt-4">
                <a href="tel:+258861660402" className="flex items-center gap-4 bg-slate-900/50 border border-slate-800 px-8 py-5 rounded-2xl hover:border-amber-400 transition-all group shadow-2xl">
                    <Phone className="text-amber-400 group-hover:scale-125 transition-transform" size={24}/>
                    <span className="text-white font-black text-lg tracking-tight">+258 86 166 0402</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-white font-black text-sm uppercase tracking-[0.3em] italic">Links Oficiais</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li><a href="https://www.ine.gov.mz" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-4 group">
                    <ChevronRight size={16} className="text-amber-400 group-hover:translate-x-2 transition-transform"/> INE Moçambique
                </a></li>
                <li><a href="https://www.bancomoc.mz" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-4 group">
                    <ChevronRight size={16} className="text-amber-400 group-hover:translate-x-2 transition-transform"/> Banco de Moçambique
                </a></li>
              </ul>
            </div>

            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 shadow-inner">
              <h4 className="text-white font-black text-sm uppercase tracking-[0.3em] italic mb-8">Atendimento</h4>
              <div className="space-y-6 text-sm font-bold">
                <div className="flex justify-between items-center">
                    <span className="text-slate-500 italic">Seg — Sex</span>
                    <span className="text-amber-400 font-black">07:00 – 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-slate-500 italic">Sábado</span>
                    <span className="text-amber-400 font-black">07:00 – 15:00</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-6">
                    <span className="text-slate-600 font-black uppercase tracking-widest text-[10px]">Domingo</span>
                    <span className="text-red-500/80 font-black uppercase tracking-widest text-[10px]">Descanso</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] uppercase font-black tracking-[0.5em] text-slate-600">
             <span>&copy; {new Date().getFullYear()} MZUNGU COMERCIAL</span>
             <span className="text-amber-900/40 hidden md:block">•</span>
             <span className="text-[#8b5e34]">Variedade com Economia</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ProductCard: React.FC<{product: Product}> = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-700 flex flex-col h-full border-b-[6px] border-b-amber-400">
      <div className="relative aspect-square overflow-hidden bg-slate-50 p-6">
        {!imageLoaded && !hasError && (
          <div className="absolute inset-6 bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center">
             <Package className="text-slate-200" size={48} />
          </div>
        )}
        
        <img 
          src={hasError ? PLACEHOLDER_IMAGE : product.imageUrl} 
          alt={product.name} 
          onLoad={() => setImageLoaded(true)}
          onError={() => {
              setHasError(true);
              setImageLoaded(true);
          }}
          className={`w-full h-full object-cover rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        <div className="absolute top-10 left-10">
            <span className="bg-[#1e293b] text-amber-400 text-[9px] font-black px-4 py-2 rounded-lg uppercase tracking-[0.3em] shadow-2xl">
                Destaque
            </span>
        </div>
      </div>
      
      <div className="px-10 pb-10 pt-4 flex flex-col flex-grow text-center">
        <h4 className="font-black text-[#1e293b] text-2xl tracking-tighter uppercase italic mb-2 truncate">
          {product.name}
        </h4>
        <p className="text-[11px] text-slate-400 font-black mb-8 tracking-[0.2em] uppercase italic border-b border-amber-400/20 pb-2 inline-block mx-auto">{product.unit}</p>
        
        <div className="mt-auto space-y-8">
            <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-[#8b5e34] uppercase tracking-[0.3em] mb-2">Preço MZN</span>
                <span className="text-4xl font-black text-[#1e293b] tracking-tighter leading-none">
                    {product.price.toLocaleString()}
                </span>
            </div>
            
            <button 
                onClick={() => window.open(`https://wa.me/258861660402?text=Olá Mzungu Comercial! Desejo comprar: ${product.name} (${product.unit})`, '_blank')}
                className="w-full bg-[#1e293b] text-white py-5 rounded-xl font-black text-[12px] uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-2xl hover:bg-[#8b5e34] transition-all active:scale-95 group-hover:translate-y-[-4px]"
            >
                <MessageSquare size={18} className="text-amber-400" />
                Comprar
            </button>
        </div>
      </div>
    </div>
  );
};

export default App;
