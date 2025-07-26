import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const posts = [
  { id: 1, badge: 'XDCWEEKLY', title: 'XDC Weekly July 6–12, 2025' },
  { id: 2, badge: 'XDCWEEKLY', title: 'XDC Weekly June 22–28, 2025' },
  { id: 3, badge: 'XDCWEEKLY', title: 'XDC Weekly June 1–7, 2025' },
  { id: 4, badge: 'Blockchain Learning', title: 'Blockchain Learning Series' },
  { id: 5, badge: 'XDCWEEKLY', title: 'XDC Weekly May 25–31, 2025' },
];

export default function WhatsHappening() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () =>
    setIndex((i) => Math.min(i + 1, posts.length - 3));

  return (
    <section className="bg-white text-slate-900 w-full px-6 py-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">What’s Happening</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={prev}
              disabled={index === 0}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-50"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={index === posts.length - 3}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-50"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Track with 3 visible cards */}
        <div className="overflow-hidden">
          <div
            className="flex space-x-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * (320 + 24)}px)` }}
          >
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex-shrink-0 w-[300px] h-[240px] bg-slate-50 rounded-xl shadow-md flex flex-col justify-between p-5"
              >
                <div>
                  <span className="text-xs font-bold uppercase text-slate-500">
                    {post.badge}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-slate-900 leading-tight">
                    {post.title}
                  </h3>
                </div>
                <a
                  href="#"
                  className="text-sm font-semibold text-slate-700 hover:text-slate-900 group"
                >
                  → READ NOW
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 border-b border-slate-700"></span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}