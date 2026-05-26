import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PrimaryCTA, SectionLabel, FinalCTA } from "@/components/Shared";
import { AnimatedSection } from "@/components/AnimatedSection";
import { staggerContainer, staggerItem, slideFromLeft, slideFromRight } from "@/components/animations";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About XStakUp — Engineering the Future of Digital Enterprise" },
      { name: "description", content: "XStakUp is a team of engineers, architects, and strategists building the technical infrastructure that powers market-leading businesses. Part of the FTRX Group." },
      { property: "og:title", content: "About XStakUp — Engineering for Scale" },
      { property: "og:description", content: "Dedicated engineering partners specializing in fintech, AI, and scalable cloud architecture." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { i: "✦", t: "Excellence", d: "We don't ship 'good enough.' We ship elite." },
  { i: "◇", t: "Transparency", d: "Open communication and clear technical roadmaps at every sprint." },
  { i: "⬡", t: "Ownership", d: "We treat your product like it's our own internal infrastructure." },
  { i: "⟁", t: "Innovation", d: "Constantly evolving our stack — AI, Blockchain, Edge — to keep you ahead." },
];

const differentiators = [
  { t: "Client-First Architecture", d: "Your business goals dictate our technical stack. We build for your specific scale, not ours." },
  { t: "Uncompromising Security", d: "From fintech gateways to Web3 dApps, security isn't a feature — it's the foundation of every line of code we ship." },
  { t: "99.9% Engineering Rigor", d: "We utilize DevSecOps and automated QA pipelines to ensure your system remains stable and high-performing 24/7." },
];

const leaders = [
  { name: "Glory Umukoro", role: "Founder & CEO", bio: "Vision-led founder driving XStakUp's growth and engineering culture across Africa and global markets." },
  { name: "[Placeholder]", role: "Creative Director", bio: "Leads the design language and product experience across all XStakUp deployments." },
  { name: "[Placeholder]", role: "Operations & Growth", bio: "Architects the operational backbone that keeps every client deployment on time and on budget." },
  { name: "[Placeholder]", role: "Engineering Lead", bio: "Heads the technical architecture practice across fintech, AI, and Web3 verticals." },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-quantum/30 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionLabel>About XStakUp</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto"
          >
            Engineering the Future of{" "}
            <span className="text-gradient-quantum">Digital Commerce</span> and Enterprise.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            We are a team of dedicated engineers, architects, and strategists
            committed to building the robust infrastructure that powers
            market-leading businesses across Africa and beyond.
          </motion.p>
        </div>
      </section>

      {/* NARRATIVE */}
      <AnimatedSection>
        <section className="py-24 bg-[color:var(--void-section)] border-y border-border">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                We bridge the gap between ambition and infrastructure.
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  XStakUp was founded on a simple premise: businesses deserve
                  better than "off-the-shelf" solutions. We saw the gap between
                  ambitious product ideas and the technical infrastructure
                  required to sustain them.
                </p>
                <p>
                  Today, we bridge that gap. As the engineering engine within the{" "}
                  <span className="text-foreground font-medium">FTRX Group</span>{" "}
                  ecosystem, we bring specialized expertise in fintech, AI, and
                  scalable cloud architecture to every client partner.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 rounded-2xl glass overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.svg
                    viewBox="0 0 200 200"
                    className="w-3/4 h-3/4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#00D1FF" />
                        <stop offset="100%" stopColor="#1E2BFF" />
                      </linearGradient>
                    </defs>
                    {[20, 40, 60, 80].map(r => (
                      <polygon
                        key={r}
                        points={`100,${100 - r} ${100 + r * 0.866},${100 + r * 0.5} ${100 - r * 0.866},${100 + r * 0.5}`}
                        fill="none"
                        stroke="url(#grad)"
                        strokeOpacity={0.4 + r / 200}
                      />
                    ))}
                    <motion.circle
                      cx="100" cy="100" r="4" fill="#00D1FF"
                      animate={{ r: [4, 6, 4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* MISSION / VISION */}
      <AnimatedSection>
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel>The Blueprint</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Mission & Vision</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                { t: "Our Mission", d: "To provide world-class technical infrastructure and engineering expertise that empowers businesses to scale without limits." },
                { t: "Our Vision", d: "To be the most trusted global engineering partner for high-scale digital platforms, setting the standard for uptime, security, and innovation." },
              ].map((c) => (
                <motion.div
                  key={c.t}
                  variants={staggerItem}
                  className="relative rounded-2xl p-10 glass"
                  style={{ borderColor: "rgba(0, 209, 255, 0.4)" }}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-signal">{c.t}</div>
                  <p className="mt-5 text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                    {c.d}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* WHY PARTNERS CHOOSE US */}
      <AnimatedSection>
        <section className="py-24 bg-[color:var(--void-section)] border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl mb-14">
              <SectionLabel>The XStakUp Difference</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Why partners choose us.</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.t}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="relative rounded-xl glass p-8 transition-shadow hover:shadow-glow"
                >
                  <div className="font-mono text-xs text-signal">0{i + 1}</div>
                  <h3 className="mt-4 text-2xl font-semibold">{d.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{d.d}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* VALUES */}
      <AnimatedSection>
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel>Our DNA</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Core Values</h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {values.map((v) => (
                <motion.div
                  key={v.t}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: "rgba(0, 209, 255, 0.4)" }}
                  className="rounded-xl glass p-6 transition-colors"
                >
                  <div className="font-mono text-3xl text-signal">{v.i}</div>
                  <h3 className="mt-4 text-lg font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* LEADERSHIP */}
      <AnimatedSection>
        <section className="py-24 bg-[color:var(--void-section)] border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel>The Architects</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                Led by Visionaries. Driven by Engineers.
              </h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {leaders.map((l, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  className="group rounded-xl glass overflow-hidden transition-shadow hover:shadow-quantum"
                >
                  <motion.div
                    className="aspect-[4/5] relative overflow-hidden"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(180deg, #1E2BFF, #0F1A7A)"
                          : i === 1
                          ? "linear-gradient(180deg, #7A5CFF, #0F1A7A)"
                          : i === 2
                          ? "linear-gradient(180deg, #00D1FF, #0F1A7A)"
                          : "linear-gradient(180deg, #1E2BFF, #0A0B10)",
                    }}
                  >
                    <div className="absolute inset-0 grid-pattern opacity-25" />
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 flex items-center justify-center text-6xl font-mono text-white/80"
                    >
                      {l.name.charAt(0)}
                    </motion.div>
                  </motion.div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground">{l.name}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-signal">{l.role}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{l.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* GLOBAL FOOTPRINT */}
      <AnimatedSection>
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <SectionLabel>Global Footprint</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Headquartered in Lagos. Engineering for the World.
            </h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto mt-12 max-w-3xl aspect-[2/1]"
            >
              <div className="absolute inset-0 rounded-2xl glass overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <motion.svg
                  viewBox="0 0 600 300"
                  className="absolute inset-0 w-full h-full"
                  animate={{ rotate: [0, 1, 0, -1, 0] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                >
                  {[
                    "M80,120 Q120,80 180,100 T280,140 Q300,180 260,210 T160,200 Q100,180 80,120",
                    "M320,90 Q380,70 440,100 T520,140 Q510,200 450,210 T350,180 Q310,140 320,90",
                  ].map((d, i) => (
                    <path key={i} d={d} fill="#1E2BFF" fillOpacity="0.15" stroke="#1E2BFF" strokeOpacity="0.4" />
                  ))}
                  <circle cx="200" cy="170" r="6" fill="#00D1FF">
                    <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="170" r="3" fill="#fff" />
                  <text x="210" y="168" fill="#F9FAFB" fontSize="11" fontFamily="monospace">LAGOS</text>
                  {[[120, 100], [280, 140], [380, 110], [460, 160], [500, 200]].map(([x, y], i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="3" fill="#7A5CFF" />
                      <line x1="200" y1="170" x2={x} y2={y} stroke="#00D1FF" strokeOpacity="0.2" strokeDasharray="2 3" />
                    </g>
                  ))}
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      <FinalCTA />
    </>
  );
}
