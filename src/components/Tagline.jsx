export default function Tagline() {
  return (
    <section className="px-8 py-16 mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-start">

        {/* Left — tagline */}
        <div className="lg:w-[55%]">
          <p className="text-[clamp(26px,3.2vw,44px)] font-medium leading-[1.2] tracking-[-0.025em] text-[#0a0c0d]">
            Designing experiences that solves real problems.
          </p>
        </div>

        {/* Right — tech stack using the actual Container.png from Figma */}
        <div className="lg:w-[45%] lg:pl-20">
          <p className="text-sm text-[#4a5565] mb-5">My tech stack</p>
          <img
            src="/Container.png"
            alt="Tech stack — Figma, Adobe XD, Framer, Notion, GitHub, ChatGPT, Framer"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  )
}
