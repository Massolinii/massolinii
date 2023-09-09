export default function Home() {
  return (
    <main className="grid grid-cols-3 h-screen w-full">
      <div className="about-section home-section border border-space">1</div>
      <div className="grid grid-rows-2">
        <div className="eye-section home-section border border-space">2</div>
        <div className="contact-section home-section border border-space">
          3
        </div>
      </div>
      <div className="project-section home-section border border-space">4</div>
    </main>
  );
}
