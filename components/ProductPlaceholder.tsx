import React from 'react';
import { ChevronRight } from './Icons';

const ProductPlaceholder: React.FC = () => {
  const products = [
    { 
      id: 1, 
      name: "GILSON Pipetman L 微量吸管", 
      enName: "Pipetman L Variable Volume Pipette",
      price: "NT$ 6,199", 
      img: "https://images.unsplash.com/photo-1582719471384-15233e071a45?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 2, 
      name: "Eppendorf Research Plus 移液器", 
      enName: "Research Plus Adjustable Pipette",
      price: "NT$ 5,600", 
      img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 3, 
      name: "Thermo F1-ClipTip 鎖定式吸管", 
      enName: "F1-ClipTip System Pipettes",
      price: "NT$ 4,200", 
      img: "https://images.unsplash.com/photo-1581093458891-7f3d39521751?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 4, 
      name: "DLAB HiPette 全消毒吸管", 
      enName: "HiPette Autoclavable Pipette",
      price: "NT$ 1,600", 
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 5, 
      name: "微量吸管架 (6支裝)", 
      enName: "Linear Stand for Pipettes",
      price: "NT$ 1,200", 
      img: "https://images.unsplash.com/photo-1624960266812-e4614b85c709?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      id: 6, 
      name: "低殘留吸管尖 (Filter Tips)", 
      enName: "Low Retention Filter Tips",
      price: "NT$ 3,500", 
      img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400" 
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-800 border-l-4 border-teal-600 pl-3">
              熱銷推薦型號
          </h2>
          <div className="flex items-center gap-4 text-sm text-slate-500">
             <span className="cursor-pointer hover:text-teal-600">排序：熱門度</span>
             <div className="flex gap-1 border border-slate-200 rounded p-1">
                <div className="w-6 h-6 bg-slate-100 flex items-center justify-center rounded text-slate-600"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div>
             </div>
          </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 group hover:shadow-lg transition-all duration-300 border border-slate-100 rounded-xl relative">
            {/* Image Area */}
            <div className="aspect-[4/5] mb-4 overflow-hidden rounded-lg bg-slate-50 flex items-center justify-center relative">
                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="bg-white p-1.5 rounded-full shadow-sm text-slate-400 hover:text-red-500 cursor-pointer">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                     </div>
                </div>
                <img src={p.img} alt={p.name} className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            {/* Content */}
            <div className="text-center">
                <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-teal-600 transition-colors line-clamp-1">{p.name}</h3>
                <p className="text-xs text-slate-400 mb-3 font-light line-clamp-1">{p.enName}</p>
                
                <div className="flex items-center justify-center gap-2 mt-2">
                    <button className="text-xs border border-slate-200 rounded-full px-4 py-1.5 text-slate-500 hover:border-teal-600 hover:text-teal-600 transition-colors flex items-center gap-1">
                        詳細資訊 <ChevronRight className="w-3 h-3" />
                    </button>
                </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-400 hover:border-teal-600 hover:text-teal-600">&lt;</button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-teal-600 text-white">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:border-teal-600 hover:text-teal-600">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-600 hover:border-teal-600 hover:text-teal-600">3</button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 text-slate-400 hover:border-teal-600 hover:text-teal-600">&gt;</button>
      </div>
    </div>
  );
};

export default ProductPlaceholder;