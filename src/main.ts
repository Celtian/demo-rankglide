import './style.css';

const year = new Date().getFullYear();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="sticky top-0 z-10 bg-slate-900 text-white shadow-md">
    <nav class="container py-4" aria-label="Main navigation">
      <a href="./" class="text-lg font-bold tracking-wide">Rankglide Demo</a>
    </nav>
  </header>
  <main class="container flex flex-1 items-center justify-center py-6 sm:py-10">
    <div class="relative aspect-video w-full max-w-7xl overflow-hidden rounded-lg bg-white shadow-xl">
      <iframe
        src="https://embed.rankglide.io/v1/visualization/x72OZuwGTAKjLF-qlVdn8g?aspectRatio=16:9"
        title="Beer Consumption per Capita"
        loading="lazy"
        referrerpolicy="origin"
        allowfullscreen
        class="absolute inset-0 h-full w-full border-0"
      ></iframe>
    </div>
  </main>
  <footer class="bg-slate-900 text-slate-200 shadow-md">
    <div class="container py-4 text-center text-sm">All rights reserved © ${year}</div>
  </footer>
`;
