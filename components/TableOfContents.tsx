import React, { useState, useEffect } from 'react';
import { TocItem } from '../types';
import { Menu } from './Icons';

interface TableOfContentsProps {
  items: TocItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="hidden lg:block sticky top-24 self-start w-64 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 mb-4 text-slate-800 font-bold pb-2 border-b border-slate-100">
        <Menu className="w-4 h-4" />
        <span>文章目錄</span>
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                activeId === item.id
                  ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;