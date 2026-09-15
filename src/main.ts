import './style.css';

const year = new Date().getFullYear();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="sticky top-0 z-10 border-b border-[#382d23] bg-[#0b0e16]/95 shadow-lg backdrop-blur">
    <nav class="container max-w-5xl py-4" aria-label="Main navigation">
      <a href="./" class="text-lg font-bold tracking-wide text-[#f6f1e9]">Rankglide Demo</a>
    </nav>
  </header>
  <main class="container flex flex-1 items-center justify-center bg-[radial-gradient(circle_at_center,_#2a241f_0%,_#191b23_48%,_#0f1422_100%)] py-8 sm:py-12">
    <div class="relative aspect-video w-full max-w-5xl overflow-hidden rounded-lg bg-[#171a22] shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-[#493522]">
      <iframe
        src="https://embed.rankglide.io/v1/visualization/x72OZuwGTAKjLF-qlVdn8g?aspectRatio=16:9"
        title="Beer Consumption per Capita"
        loading="lazy"
        referrerpolicy="origin"
        scrolling="no"
        allowfullscreen
        class="absolute inset-0 h-full w-full border-0"
      ></iframe>
    </div>
  </main>
  <footer class="border-t border-[#382d23] bg-[#0b0e16] text-[#d8d1c7] shadow-lg">
    <div class="container max-w-5xl py-4 text-center text-sm">All rights reserved © ${year}</div>
  </footer>
`;
