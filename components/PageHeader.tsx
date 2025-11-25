
import React from 'react';
import { ChevronRight, FlaskConical, Ruler, CheckCircle2, Info, Microscope } from './Icons';

// ----------------------------------------------------------------------
// Option A: 無縫融合型 (Seamless / Native)
// 特點：白底、深青色豎線裝飾、極簡麵包屑
// ----------------------------------------------------------------------
const VariantA: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="flex text-xs text-slate-500 mb-4">
          <ol className="flex items-center space-x-2">
            <li><a href="#" className="hover:text-teal-700 transition-colors">首頁</a></li>
            <li><ChevronRight className="w-3 h-3 text-slate-300" /></li>
            <li><a href="#" className="hover:text-teal-700 transition-colors">基礎實驗器材</a></li>
            <li><ChevronRight className="w-3 h-3 text-slate-300" /></li>
            <li><a href="#" className="hover:text-teal-700 transition-colors">液體處理</a></li>
            <li><ChevronRight className="w-3 h-3 text-slate-300" /></li>
            <li className="text-teal-800 font-bold">微量吸管</li>
          </ol>
        </nav>

        {/* Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-start gap-4">
                {/* Vertical Deep Teal Line Accent */}
                <div className="w-1.5 h-16 bg-[#0e7490] rounded-sm mt-1 flex-shrink-0"></div>
                <div>
                    <h1 className="text-3xl font-bold text-[#0f172a] mb-3 tracking-tight">
                        微量吸管 / 移液槍 <span className="text-xl text-slate-400 font-normal ml-2">Micropipettes</span>
                    </h1>
                    <p className="text-slate-600 leading-relaxed text-sm max-w-2xl">
                        專為實驗室設計的精密液體處理工具。提供 Gilson, Eppendorf, Thermo 等國際大廠品牌，涵蓋單爪、多爪與電動微量吸管，滿足 PCR、細胞培養與分析化學的高精度需求。
                    </p>
                </div>
            </div>
          </div>
          
          {/* Right Side Tags */}
          <div className="flex gap-2 pb-1">
             <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium">
                <CheckCircle2 className="w-3 h-3 text-teal-600" /> ISO 8655
             </span>
             <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium">
                <CheckCircle2 className="w-3 h-3 text-teal-600" /> 原廠保固
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Option B: 輕柔背景區塊型 (Soft Box / Knowledge Base)
// 特點：淡灰背景、明確的上下邊界、像是一個「專題介紹」
// ----------------------------------------------------------------------
const VariantB: React.FC = () => {
  return (
    <div className="w-full bg-[#f8fafc] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Info Area */}
            <div className="flex-1">
                {/* Breadcrumb inside */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">
                    <span className="text-teal-600">實驗室指南</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>液體處理</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
                    微量吸管系列
                </h1>
                
                <p className="text-slate-600 mb-6 leading-7 border-l-4 border-teal-200 pl-4">
                    微量吸管是現代生物實驗室的基石。無論是<strong>空氣置換式</strong>或是<strong>正壓式</strong>，我們提供最完整的移液解決方案，確保您的每一次分注都精準無誤。
                </p>

                <div className="flex flex-wrap gap-2">
                    <a href="#" className="text-xs font-bold text-teal-700 bg-white border border-teal-200 px-3 py-1.5 rounded-full hover:bg-teal-50 transition-colors">
                        #單爪吸管
                    </a>
                    <a href="#" className="text-xs font-bold text-teal-700 bg-white border border-teal-200 px-3 py-1.5 rounded-full hover:bg-teal-50 transition-colors">
                        #多爪 (8/12 Channel)
                    </a>
                    <a href="#" className="text-xs font-bold text-teal-700 bg-white border border-teal-200 px-3 py-1.5 rounded-full hover:bg-teal-50 transition-colors">
                        #電動移液器
                    </a>
                </div>
            </div>

            {/* Right Decorative Area (Simulated Stats/Features) */}
            <div className="hidden md:flex gap-4 lg:w-1/3">
                <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                    <Ruler className="w-8 h-8 text-teal-500 mb-2" />
                    <span className="text-lg font-bold text-slate-800">0.1µL</span>
                    <span className="text-xs text-slate-400">最小量程</span>
                </div>
                <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                    <Info className="w-8 h-8 text-teal-500 mb-2" />
                    <span className="text-lg font-bold text-slate-800">1年</span>
                    <span className="text-xs text-slate-400">校正保固</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Option C: 科研科技型 (Scientific / Tech)
// 特點：網格背景、深色調標題區、科技感圖示背景
// ----------------------------------------------------------------------
const VariantC: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 relative overflow-hidden">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
                 backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
             }}>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800/80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
            {/* Dark Mode Breadcrumb */}
            <nav className="flex text-xs text-slate-400 mb-6">
                <ol className="flex items-center space-x-2">
                    <li><a href="#" className="hover:text-white transition-colors">首頁</a></li>
                    <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
                    <li><a href="#" className="hover:text-white transition-colors">基礎實驗器材</a></li>
                    <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
                    <li className="text-teal-400 font-bold">微量吸管</li>
                </ol>
            </nav>

            <div className="flex justify-between items-end">
                <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="bg-teal-500 w-2 h-8 rounded-sm"></span>
                        Micropipettes <span className="font-light text-slate-400">| 微量吸管</span>
                    </h1>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 pl-5 border-l border-slate-700">
                        精準是科學的靈魂。探索我們為生命科學量身打造的移液工具系列，從經典的手動款式到符合人體工學的電動系統，全方位滿足您對實驗再現性的嚴苛要求。
                    </p>
                    <div className="pl-5 flex gap-6 text-slate-400 text-xs font-mono">
                        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div> High Precision
                        </span>
                        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div> Ergonomic Design
                        </span>
                        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div> Autoclavable
                        </span>
                    </div>
                </div>

                {/* Decorative Icon Background */}
                <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                    <Microscope className="w-64 h-64 text-teal-400" strokeWidth={1} />
                </div>
            </div>
        </div>
    </div>
  );
};


// ----------------------------------------------------------------------
// Main Export for Demo
// ----------------------------------------------------------------------
const PageHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 mb-8">
       {/* Label A */}
       <div className="relative group">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 text-white text-[10px] px-3 py-1 rounded-full z-20 shadow-lg">
            方案 A：無縫融合風格 (Clean & Native)
         </div>
         <div className="border border-dashed border-slate-300">
            <VariantA />
         </div>
       </div>
       
       {/* Label B */}
       <div className="relative group">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 text-white text-[10px] px-3 py-1 rounded-full z-20 shadow-lg">
            方案 B：知識專區風格 (Soft Box)
         </div>
         <div className="border border-dashed border-slate-300">
            <VariantB />
         </div>
       </div>

       {/* Label C */}
       <div className="relative group">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 text-white text-[10px] px-3 py-1 rounded-full z-20 shadow-lg">
            方案 C：科研科技風格 (Dark Tech)
         </div>
         <div className="border border-dashed border-slate-300 bg-slate-900">
            <VariantC />
         </div>
       </div>
    </div>
  );
};

export default PageHeader;
