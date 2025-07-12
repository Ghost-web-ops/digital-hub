// src/app/page.tsx
import Image from 'next/image';

// يمكنك تغيير هذه البيانات ببياناتك الشخصية
const links = [
  { title: 'My Portfolio Website', url: 'https://ghost-web-ops.github.io/' },
  { title: 'GitHub Profile', url: 'https://github.com/Ghost-web-ops' },
  { title: 'LinkedIn Profile', url: 'www.linkedin.com/in/omar-yasser-017995344' },
  { title: 'Follow me on X (Twitter)', url: 'https://x.com/OmarYas4649763' },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-900 text-white p-4">
      <div className="flex w-full max-w-lg flex-col items-center gap-6 rounded-2xl bg-slate-800/80 p-8 shadow-lg backdrop-blur-sm">
        
        {/* الصورة الشخصية */}
        <Image
          src="https://i.ibb.co/PGbRP02P/1739318797084.jpg" 
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-4xl border-4 border-slate-700 object-cover shadow-md"
          priority // لتحميل أسرع
        />

        {/* الاسم والنبذة */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-cyan-300">Omar Yasser</h1>
          <p className="mt-2 text-slate-400">
            A passionate full-stack developer creating modern web experiences.
          </p>
        </div>

        {/* قائمة الروابط */}
        <div className="flex w-full flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg bg-cyan-500/10 p-4 text-center font-semibold text-cyan-300 transition-transform duration-300 hover:scale-105 hover:bg-cyan-500/20"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}