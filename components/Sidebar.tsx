import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from './Icons';

interface Category {
  name: string;
  count?: number;
  subCategories?: string[];
  isOpen?: boolean;
}

const Sidebar: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "基礎實驗器材",
      isOpen: true,
      subCategories: [
        "燒杯/量杯/燒瓶",
        "玻璃耗材",
        "塑膠耗材",
        "量瓶",
        "三角燒瓶",
        "液體處理/微量吸管", // Active target
        "過濾/離心/試管",
        "攪拌/加熱/溫控",
      ]
    },
    { name: "微生物/分生/生化", count: 120 },
    { name: "容器/瓶罐", count: 85 },
    { name: "濾紙/試紙", count: 45 },
    { name: "液體處理設備", count: 32 },
    { name: "測量儀器", count: 64 },
    { name: "實驗室硬體設備", count: 15 },
    { name: "個人防護用品", count: 28 },
    { name: "Hario 生活科學", count: 12 },
    { name: "優惠出清區", count: 5 },
  ]);

  const toggleCategory = (index: number) => {
    const newCategories = [...categories];
    newCategories[index].isOpen = !newCategories[index].isOpen;
    setCategories(newCategories);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
        <h3 className="font-bold text-teal-700">產品分類</h3>
        <span className="text-xs text-slate-400">Categories</span>
      </div>
      <div className="space-y-1">
        {categories.map((cat, idx) => (
          <div key={idx} className="border-b border-slate-100 last:border-0">
            <button 
              onClick={() => toggleCategory(idx)}
              className="w-full flex items-center justify-between py-3 text-sm text-slate-600 hover:text-teal-600 transition-colors text-left"
            >
              <span className={cat.isOpen ? "font-bold text-teal-700" : ""}>{cat.name}</span>
              {cat.subCategories ? (
                cat.isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />
              ) : (
                <span className="text-xs text-slate-300">+</span>
              )}
            </button>
            
            {cat.isOpen && cat.subCategories && (
              <ul className="bg-slate-50 rounded-lg mb-2 overflow-hidden">
                {cat.subCategories.map((sub, subIdx) => (
                  <li key={subIdx}>
                    <a 
                      href="#" 
                      className={`block px-4 py-2 text-xs border-l-2 ${
                        sub.includes("微量吸管") 
                          ? "border-teal-500 text-teal-700 bg-teal-50 font-bold" 
                          : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      - {sub}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8">
         <h3 className="font-bold text-teal-700 mb-4 pb-2 border-b border-slate-200">品牌專區</h3>
         <div className="space-y-2 text-sm text-slate-500">
            <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"/>
                GILSON (12)
            </label>
            <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"/>
                EPPENDORF (8)
            </label>
            <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"/>
                THERMO (5)
            </label>
            <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"/>
                DLAB (15)
            </label>
         </div>
      </div>
    </div>
  );
};

export default Sidebar;