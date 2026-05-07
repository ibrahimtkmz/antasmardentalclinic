'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';

const clinicVideos = [
  { src: '/1.mp4', label: 'Clinic Tour Video 1' },
  { src: '/2.mp4', label: 'Clinic Tour Video 2' },
  { src: '/3.mp4', label: 'Clinic Tour Video 3' },
  { src: '/anasayfa-video1.mp4', label: 'Homepage Video 1' },
  { src: '/anasayfa-video2.mp4', label: 'Homepage Video 2' },
];

export default function WhyClinicSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const { t } = useLanguage();

  return (
    <>
      <section
        id="why-us"
        className="grid overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="p-8 md:p-12">
          <p className="text-2xl font-semibold text-[#555]">{t.why}</p>
          <h2 className="text-5xl font-black leading-none text-[#222]">{t.clinic}</h2>
          <p className="mt-6 text-[15px] leading-7 text-[#666]">
            Anastamar Dental Clinic is a modern dental destination in Istanbul, offering advanced smile design, implants, veneers and aesthetic dentistry solutions for international patients. Our mission is to combine expert care, precision technology and a comfortable clinical journey that helps every patient smile with confidence.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-[#666]">
            With personalized treatment planning, multilingual support and a highly experienced team, Anastamar Dental Clinic focuses on reliable results, transparent communication and a truly premium treatment experience from start to finish.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#ececec] pt-8">
            <div>
              <div className="text-4xl font-black text-[#222]">11 +</div>
              <div className="mt-2 text-sm text-[#7b7b7b]">{t.expYears}</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#222]">10547 +</div>
              <div className="mt-2 text-sm text-[#7b7b7b]">Hollywood Smile</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#222]">15246 +</div>
              <div className="mt-2 text-sm text-[#7b7b7b]">{t.happyPatients}</div>
            </div>
          </div>

          <button className="mt-8 font-semibold text-[#109f93]">{t.learnMore}</button>
        </div>

        <div className="grid grid-cols-2 gap-3 bg-[linear-gradient(180deg,#f8f8f8,#ebebeb)] p-4 sm:grid-cols-2 lg:grid-cols-2">
          {clinicVideos.map((video) => (
            <button
              key={video.src}
              type="button"
              onClick={() => setActiveVideo(video.src)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/80 bg-black shadow-lg transition hover:scale-[1.01]"
            >
              <video src={video.src} muted playsInline className="h-full w-full object-cover opacity-85 transition group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                <span className="rounded-full border border-white/60 bg-black/35 px-4 py-2 text-sm font-semibold text-white">
                  {t.playVideo}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10">
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-bold text-black"
            onClick={() => setActiveVideo(null)}
          >
            {t.close}
          </button>
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <video key={activeVideo} src={activeVideo} controls autoPlay className="h-auto w-full" />
          </div>
        </div>
      )}
    </>
  );
}
