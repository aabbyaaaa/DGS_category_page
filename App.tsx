import React from 'react';
import { SectionId, FAQItem, TocItem } from './types';
import TableOfContents from './components/TableOfContents';
import ProductPlaceholder from './components/ProductPlaceholder';
import SchemaOrg from './components/SchemaOrg';
import Sidebar from './components/Sidebar';
import { 
  Microscope, 
  FlaskConical, 
  HelpCircle,
  Search,
  ShoppingCart,
  User,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
  Info
} from './components/Icons';

const tocItems: TocItem[] = [
  { id: SectionId.WHAT_IS, title: '什麼是微量吸管？' },
  { id: SectionId.USAGE, title: '微量吸管用途' },
  { id: SectionId.FAQ, title: '常見問答 (FAQ)' },
];

const faqs: FAQItem[] = [
  {
    question: "微量吸管多久需要校正一次？",
    answer: "根據 ISO 8655 標準，建議至少每年校正一次。若使用頻率極高（每天使用）或處理腐蝕性/揮發性液體，建議每 3-6 個月進行校正。定期校正能確保實驗數據的準確性與再現性。"
  },
  {
    question: "如何正確清潔與滅菌微量吸管？",
    answer: "大多數專業微量吸管的下半部（Tip holder/Ejector）可進行高溫高壓滅菌（Autoclave, 121°C, 20分鐘, 1 atm）。滅菌前請務必參閱原廠說明書，確認該型號是否支援整支滅菌。清潔時建議使用 70% 乙醇擦拭表面。"
  },
  {
    question: "P20, P200, P1000 規格代表什麼？如何挑選？",
    answer: "規格代表最大量程。P20 (2-20µL)、P200 (20-200µL)、P1000 (100-1000µL)。挑選原則為「目標體積應落在量程的 35%-100% 之間」。例如吸取 100µL，使用 P200 會比 P1000 更準確。"
  },
  {
    question: "吸取黏稠液體（如甘油）有什麼技巧？",
    answer: "建議使用「反向移液法 (Reverse Pipetting)」。操作方式為：壓二檔吸液（吸入量會多於設定值），壓一檔排液（排出設定量，吸管尖內會有殘留）。此法能有效減少氣泡產生並提升黏稠液體的轉移精準度。"
  }
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-600 bg-white">
      <SchemaOrg faqs={faqs} />
      
      {/* === Header Area (Dogger Style) === */}
      <header className="w-full">
        {/* Top Thin Bar */}
        <div className="bg-slate-50 border-b border-slate-200 py-1 text-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-8">
             <div className="flex items-center gap-4 text-slate-500">
                <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> 02-2684-1142</span>
                <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> doggerco@ms42.hinet.net</span>
             </div>
             <div className="flex items-center gap-4 text-slate-500">
                <span className="flex items-center gap-1 cursor-pointer hover:text-teal-600"><User className="w-3 h-3" /> 會員中心 (登入)</span>
                <span className="flex items-center gap-1 cursor-pointer hover:text-teal-600"><ShoppingCart className="w-3 h-3" /> 購物車 (0)</span>
                <span className="cursor-pointer hover:text-teal-600">詢價單</span>
             </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="border-b border-slate-200 py-4 sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 min-w-[200px]">
               <div className="w-10 h-10 bg-teal-600 rounded flex items-center justify-center text-white font-bold text-xl">D</div>
               <div className="flex flex-col">
                  <span className="font-bold text-teal-600 text-xl leading-none tracking-wider">德記儀器</span>
                  <span className="text-slate-400 font-bold text-sm tracking-widest">DOGGER</span>
               </div>
            </div>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
               <a href="#" className="text-teal-600 font-bold border-b-2 border-teal-600 pb-1">產品分類</a>
               <a href="#" className="hover:text-teal-600 transition-colors">品牌專區</a>
               <a href="#" className="hover:text-teal-600 transition-colors">電子型錄</a>
               <a href="#" className="hover:text-teal-600 transition-colors">最新消息</a>
               <a href="#" className="hover:text-teal-600 transition-colors">服務中心</a>
            </nav>

            {/* Search */}
            <div className="relative w-full md:w-72">
               <input 
                 type="text" 
                 placeholder="請輸入關鍵字..." 
                 className="w-full bg-slate-100 border-none rounded-full pl-4 pr-10 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
               />
               <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      </header>

      {/* === Main Content Layout === */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Breadcrumbs */}
        <nav className="flex text-xs text-slate-500 mb-6">
          <ol className="flex items-center space-x-2">
            <li><a href="#" className="hover:text-teal-600">首頁</a></li>
            <li><ChevronRight className="w-3 h-3 text-slate-300" /></li>
            <li><a href="#" className="hover:text-teal-600">基礎實驗器材</a></li>
            <li><ChevronRight className="w-3 h-3 text-slate-300" /></li>
            <li><a href="#" className="hover:text-teal-600">液體處理</a></li>
            <li><ChevronRight className="w-3 h-3 text-slate-300" /></li>
            <li className="text-teal-600 font-bold">微量吸管 (Micropipette)</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              <Sidebar />
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="lg:col-span-9 min-w-0">
            
            {/* === 方案 A：極簡專業風 (Minimalist) === */}
            <div className="mb-12 relative group">
                {/* Label for Demo */}
                <div className="absolute -top-6 left-0 text-[10px] text-teal-600 font-mono tracking-widest bg-teal-50 px-2 py-0.5 rounded">方案 A (極簡風)</div>
                
                <div className="pt-4 pb-8 border-b border-slate-100 relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl">
                        <div className="flex items-center gap-2 mb-3 text-teal-600 font-bold text-xs tracking-wide uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                            <span>Product Overview</span>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-800 mb-6 inline-block border-b-2 border-teal-500 pb-2">
                            微量吸管 / 移液槍 (Micropipettes)
                        </h1>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
                            專為實驗室設計的精密液體處理工具。我們提供 Gilson, Eppendorf, Thermo 等國際大廠品牌，涵蓋單爪、多爪與電動微量吸管，滿足 PCR、細胞培養與分析化學的高精度需求。
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                             <span className="hover:text-teal-600 cursor-pointer">#ISO 8655標準</span>
                             <span className="text-slate-300">|</span>
                             <span className="hover:text-teal-600 cursor-pointer">#維修校正</span>
                             <span className="text-slate-300">|</span>
                             <span className="hover:text-teal-600 cursor-pointer">#吸管尖耗材</span>
                        </div>
                    </div>
                    {/* Decorative Icon: Rotate 30deg, W-40 H-40, stroke 1, moved right */}
                    <div className="absolute -right-12 -bottom-6 pointer-events-none select-none">
                         <FlaskConical className="w-40 h-40 text-slate-100 rotate-[30deg]" strokeWidth={1} />
                    </div>
                </div>
            </div>

            {/* === 方案 B：科技漸層風 (Tech Gradient) === */}
            <div className="mb-12 relative">
                {/* Label for Demo */}
                <div className="absolute -top-6 left-0 text-[10px] text-blue-600 font-mono tracking-widest bg-blue-50 px-2 py-0.5 rounded">方案 B (科技漸層)</div>

                <div className="bg-gradient-to-r from-slate-50 to-white p-8 rounded-lg border-l-4 border-teal-600 relative overflow-hidden">
                    <div className="relative z-10">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                            微量吸管 / 移液槍
                        </h1>
                        <p className="text-slate-600 max-w-2xl leading-relaxed text-sm mb-6">
                             提供 Gilson, Eppendorf, Thermo 等國際大廠品牌。全系列產品皆符合 ISO 8655 標準，並提供完整的維修校正服務，滿足您對實驗精準度的嚴苛要求。
                        </p>
                        <div className="flex gap-3">
                           <button className="text-xs font-bold text-white bg-teal-600 px-4 py-2 rounded hover:bg-teal-700 transition-colors">
                              查看所有型號
                           </button>
                           <button className="text-xs font-bold text-teal-600 border border-teal-600 px-4 py-2 rounded hover:bg-teal-50 transition-colors">
                              下載選購指南
                           </button>
                        </div>
                    </div>
                     {/* Decorative Icon: Slightly different position for variety, but same props */}
                    <div className="absolute -right-10 -bottom-8 pointer-events-none select-none">
                         <FlaskConical className="w-40 h-40 text-teal-50/60 rotate-[30deg]" strokeWidth={1} />
                    </div>
                </div>
            </div>

            {/* === 方案 C：資訊卡片風 (Info Card) === */}
            <div className="mb-12 relative">
                {/* Label for Demo */}
                <div className="absolute -top-6 left-0 text-[10px] text-slate-500 font-mono tracking-widest bg-slate-100 px-2 py-0.5 rounded">方案 C (資訊卡片)</div>

                <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3 text-slate-400 font-medium text-xs">
                                <Info className="w-4 h-4" />
                                <span>CATEGORY OVERVIEW</span>
                            </div>
                            <h1 className="text-2xl font-bold text-slate-800 mb-3">
                                微量吸管 (Micropipettes)
                            </h1>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                精密液體處理的核心工具。涵蓋單爪、多爪與電動系列，適用於分生實驗與化學分析。
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">Gilson</span>
                                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">Eppendorf</span>
                                <span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">Thermo</span>
                            </div>
                        </div>
                        {/* Right Side Stats/Links */}
                        <div className="md:w-1/3 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6 flex flex-col justify-center">
                            <div className="mb-3">
                                <span className="text-xs text-slate-400 block mb-1">現有型號</span>
                                <span className="text-xl font-bold text-teal-600">42+ Items</span>
                            </div>
                            <div>
                                <span className="text-xs text-slate-400 block mb-1">服務支援</span>
                                <span className="text-sm font-medium text-slate-700">原廠維修 / 年度校正</span>
                            </div>
                        </div>
                    </div>
                    {/* Decorative Icon */}
                    <div className="absolute -right-8 -bottom-12 pointer-events-none select-none opacity-50">
                         <FlaskConical className="w-40 h-40 text-slate-200 rotate-[30deg]" strokeWidth={1} />
                    </div>
                </div>
            </div>

            {/* Product Grid Area (Content Middle) */}
            <ProductPlaceholder />

            {/* === SEO Content Section (The 3 Bottom Blocks) === */}
            <div className="mt-16 border-t border-slate-200 pt-12">
                
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-slate-800">微量吸管選購與使用指南</h2>
                    <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Knowledge Base</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 relative">
                   {/* Internal TOC */}
                   <div className="hidden xl:block w-64 flex-shrink-0 order-2">
                      <TableOfContents items={tocItems} />
                   </div>

                   {/* Article Content */}
                   <div className="flex-1 min-w-0 order-1 prose prose-slate max-w-none">
                      
                      {/* 2. 什麼是微量吸管 (What is) */}
                      <section id={SectionId.WHAT_IS} className="scroll-mt-32 mb-14">
                        <h3 className="flex items-center gap-3 text-xl font-bold text-teal-700 mb-4 pb-2 border-b border-slate-100">
                            <Microscope className="w-6 h-6" /> 什麼是微量吸管？
                        </h3>
                        <div className="bg-slate-50 border-l-4 border-teal-500 pl-6 py-4 mb-6 rounded-r-lg">
                            <p className="text-slate-700 mb-0 leading-relaxed">
                                <strong>微量吸管 (Micropipette)</strong>，又稱移液槍或微量分注器，是生物科技、化學分析與醫學檢驗實驗室中不可或缺的精密儀器。其主要功能是利用<strong>空氣置換原理 (Air Displacement)</strong> 或<strong>正壓置換原理 (Positive Displacement)</strong>，精確且重複地轉移微量液體（通常範圍為 0.1µL 至 10mL）。
                            </p>
                        </div>
                        <p className="text-slate-600 mb-4">
                            微量吸管的準確度 (Accuracy) 與精密度 (Precision) 直接決定了實驗數據的可靠性。根據操作方式與構造，主要可分為以下兩類：
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                             <li className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                <strong className="block text-teal-700 mb-2 text-lg">手動微量吸管 (Manual)</strong>
                                <span className="text-sm text-slate-600">利用拇指按壓活塞進行操作。構造簡單、耐用且價格實惠，適合大多數例行性實驗與教學使用。</span>
                             </li>
                             <li className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                <strong className="block text-teal-700 mb-2 text-lg">電動微量吸管 (Electronic)</strong>
                                <span className="text-sm text-slate-600">由微電腦馬達控制活塞運動。具備自動分注、混勻等模式，能大幅降低人為誤差與 RSI (重複性勞損) 風險，適合高通量實驗。</span>
                             </li>
                        </ul>
                      </section>

                      {/* 3. 微量吸管用途 (Usage) */}
                      <section id={SectionId.USAGE} className="scroll-mt-32 mb-14">
                         <h3 className="flex items-center gap-3 text-xl font-bold text-teal-700 mb-4 pb-2 border-b border-slate-100">
                            <FlaskConical className="w-6 h-6" /> 微量吸管用途
                        </h3>
                        <p className="mb-6 text-slate-600">
                            微量吸管廣泛應用於各類科學研究領域，只要涉及液體的定量轉移，幾乎都會使用到它。以下為三個主要應用場景：
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6">
                            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:border-teal-300 transition-colors group">
                                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">1</div>
                                <h4 className="font-bold text-slate-900 mb-2">分子生物學</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    用於 DNA/RNA 萃取、PCR 反應液配置、電泳上樣等。這些實驗對體積精準度要求極高，通常使用 P2, P10, P20 等小量程吸管。
                                </p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:border-teal-300 transition-colors group">
                                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">2</div>
                                <h4 className="font-bold text-slate-900 mb-2">細胞與微生物培養</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    在無菌操作台內添加培養基、抗生素或分裝細胞懸浮液。此用途常需配合無菌吸管尖 (Filter Tips) 以防止汙染。
                                </p>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:border-teal-300 transition-colors group">
                                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">3</div>
                                <h4 className="font-bold text-slate-900 mb-2">藥物開發與分析</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    ELISA 免疫分析、標準品序列稀釋。多爪微量吸管 (8-channel / 12-channel) 在此領域非常重要，可大幅提升 96 孔盤的操作效率。
                                </p>
                            </div>
                        </div>
                      </section>

                      {/* 4. 常見問題 (FAQ) */}
                      <section id={SectionId.FAQ} className="scroll-mt-32">
                        <h3 className="flex items-center gap-3 text-xl font-bold text-teal-700 mb-6 pb-2 border-b border-slate-100">
                            <HelpCircle className="w-6 h-6" /> 微量吸管常見問答 (FAQ)
                        </h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-bold cursor-pointer p-5 text-slate-800 hover:bg-slate-50 select-none">
                                            <div className="flex items-start gap-3">
                                                <span className="text-teal-600 bg-teal-50 w-6 h-6 rounded flex items-center justify-center text-xs flex-shrink-0 mt-0.5">Q</span>
                                                <span>{faq.question}</span>
                                            </div>
                                            <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
                                        </summary>
                                        <div className="text-slate-600 px-5 pb-5 pl-[3.25rem] leading-relaxed text-sm bg-slate-50/30 border-t border-slate-100">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </div>
                            ))}
                        </div>
                      </section>

                   </div>
                </div>
            </div>

          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 mt-12 pt-12 pb-6 text-sm text-slate-600">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
                <h4 className="font-bold text-slate-800 mb-4">關於德記</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-teal-600">公司簡介</a></li>
                    <li><a href="#" className="hover:text-teal-600">聯絡我們</a></li>
                    <li><a href="#" className="hover:text-teal-600">隱私權政策</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-slate-800 mb-4">產品服務</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-teal-600">維修校正</a></li>
                    <li><a href="#" className="hover:text-teal-600">電子型錄下載</a></li>
                    <li><a href="#" className="hover:text-teal-600">詢價車</a></li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-slate-800 mb-4">聯絡資訊</h4>
                <ul className="space-y-2">
                    <li>電話：02-2684-1142</li>
                    <li>傳真：02-2684-1143</li>
                    <li>地址：新北市樹林區中正路</li>
                    <li>信箱：doggerco@ms42.hinet.net</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-slate-800 mb-4">營業時間</h4>
                <p>週一至週五 08:30 - 17:30</p>
                <p className="mt-2 text-xs text-slate-400">國定假日休息</p>
            </div>
         </div>
         <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-400 border-t border-slate-200 pt-6">
            Copyright © 2024 德記儀器有限公司 All Rights Reserved.
         </div>
      </footer>
    </div>
  );
}