'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, BarChart3, CalendarClock, Crown, Flame, Gamepad2, Moon, Shield, ShoppingBag, Skull, Sun, Sword, Trophy, Users, Zap } from 'lucide-react'

const stats = [
  { label: 'Players Online', value: '128 / 250', sub: 'Live server population', icon: Users, accent: 'text-sky-400' },
  { label: 'Server FPS', value: '198 FPS', sub: 'High performance', icon: BarChart3, accent: 'text-orange-500' },
  { label: 'Next Wipe', value: '18 Days', sub: 'Season 6 countdown', icon: CalendarClock, accent: 'text-cyan-300' },
  { label: 'Active Events', value: '3 Live', sub: 'Cargo • Boss • Raid', icon: Flame, accent: 'text-red-500' },
]

const features = [
  { title: 'Legendary Weapons', desc: 'Custom weapon progression with mythic power tiers.', icon: Sword },
  { title: 'Gold Scrap Economy', desc: 'A premium PVE+ economy layer built around progression.', icon: Crown },
  { title: 'World Bosses', desc: 'Fight brutal bosses and claim rare seasonal rewards.', icon: Skull },
  { title: 'Raidable Bases', desc: 'Dynamic AI bases with escalating loot and challenge levels.', icon: Shield },
  { title: 'Legendary Armor', desc: 'Unlock elite armor sets and dominate the world safely.', icon: Trophy },
  { title: 'Live Dashboard', desc: 'Track players, server health, wipes, events, and rankings.', icon: Activity },
]

export default function Home() {
  const [mode, setMode] = useState<'night' | 'day'>('night')
  const isDay = mode === 'day'

  const theme = useMemo(() => ({
    page: isDay ? 'bg-[#f7f8fb] text-slate-950' : 'bg-[#030407] text-white',
    panel: isDay
      ? 'border-white/70 bg-white/60 shadow-[0_28px_90px_rgba(15,23,42,.12)]'
      : 'border-white/10 bg-black/36 shadow-[0_28px_90px_rgba(0,0,0,.55)]',
    muted: isDay ? 'text-slate-600' : 'text-white/62',
    heroBg: isDay
      ? 'bg-[radial-gradient(circle_at_73%_38%,rgba(255,106,0,.20),transparent_33%),linear-gradient(90deg,rgba(255,255,255,.96)_0%,rgba(255,255,255,.70)_46%,rgba(255,255,255,.48)_100%)]'
      : 'bg-[radial-gradient(circle_at_74%_38%,rgba(255,72,0,.38),transparent_34%),radial-gradient(circle_at_20%_30%,rgba(0,0,0,.88),transparent_44%),linear-gradient(90deg,#040507_0%,rgba(4,5,7,.88)_45%,rgba(4,5,7,.56)_100%)]'
  }), [isDay])

  return (
    <main className={`min-h-screen overflow-hidden transition-colors duration-700 ${theme.page}`}>
      <div className="pointer-events-none fixed inset-0">
        <div className={isDay ? 'absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,106,0,.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,.14),transparent_30%)]' : 'absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,70,0,.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(255,0,0,.10),transparent_30%)]'} />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-[1580px] px-5 py-5 lg:px-8">
        <nav className={`sticky top-4 z-40 mb-6 flex items-center justify-between rounded-[2rem] border px-5 py-4 backdrop-blur-2xl ${theme.panel}`}>
          <div className="flex items-center gap-3">
            <div className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-transparent shadow-[0_0_35px_rgba(255,76,16,.35)]">
              <Image src="/phoenix-v2.png" alt="Speranza Phoenix" fill className="object-contain p-1 drop-shadow-[0_0_18px_rgba(255,91,18,.85)]" priority />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight md:text-3xl">SPERANZA</div>
              <div className="text-xs font-black tracking-[.42em] text-orange-500">RUST SERVER</div>
            </div>
          </div>

         <div className="hidden items-center gap-2 text-sm font-bold uppercase lg:flex">
  {['Home', 'Dashboard', 'Store', 'Seasons', 'Leaderboards', 'Discord'].map((item) => (
    <button
      key={item}
      className={`group relative overflow-hidden rounded-2xl border px-4 py-3 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 ${
        item === 'Home'
          ? 'border-orange-400/30 bg-orange-500/10 text-orange-500 shadow-[0_0_28px_rgba(255,120,40,.16)]'
          : isDay
            ? 'border-black/5 bg-white/45 text-slate-700 hover:text-orange-500'
            : 'border-white/10 bg-white/5 text-white/80 hover:text-orange-400'
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,.16),transparent_42%,rgba(255,255,255,.06))] opacity-0 transition duration-300 group-hover:opacity-100" />
      <span className="relative">{item}</span>
    </button>
  ))}
</div>

          <div className="flex items-center gap-3">
            <button onClick={() => setMode(isDay ? 'night' : 'day')} className={`flex h-12 items-center gap-2 rounded-2xl border px-4 text-sm font-black backdrop-blur-xl transition ${theme.panel}`}>
              {isDay ? <Sun className="h-4 w-4 text-orange-500" /> : <Moon className="h-4 w-4 text-orange-300" />}
              <span className="hidden sm:inline">{isDay ? 'Day Mode' : 'Night Mode'}</span>
            </button>
            <button className="rounded-2xl border border-orange-500/40 bg-orange-600/20 px-5 py-3 text-sm font-black text-orange-100 shadow-[0_0_35px_rgba(255,88,20,.24)] backdrop-blur-xl transition hover:bg-orange-600/30">Join Discord</button>
          </div>
        </nav>

        <section className={`relative overflow-hidden rounded-[2.5rem] border backdrop-blur-2xl ${theme.panel}`}>
          <div className={`absolute inset-0 ${theme.heroBg}`} />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_70%_100%,rgba(255,60,0,.26),transparent_40%)]" />
          <motion.div animate={{ opacity: [0.25, 0.65, 0.25], scale: [1, 1.06, 1] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-16 top-24 h-[600px] w-[600px] rounded-full bg-orange-600/20 blur-3xl" />

          <div className="relative grid min-h-[780px] items-center gap-8 px-8 py-12 lg:grid-cols-[.85fr_1.15fr] lg:px-16">
            <div className="z-10 max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-orange-500/35 bg-orange-500/10 px-5 py-3 text-sm font-black text-orange-400 backdrop-blur-xl"><Flame className="h-4 w-4" /> #1 RUST EXPERIENCE</div>
                <h1 className="font-black leading-[.82] tracking-tight text-[clamp(4rem,8vw,9rem)] drop-shadow-[0_12px_30px_rgba(0,0,0,.45)]">SPERANZA</h1>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-[3px] w-20 bg-orange-600" />
                  <div className="text-3xl font-black tracking-[.42em] text-orange-500">RUST SERVER</div>
                  <div className="h-[3px] flex-1 bg-orange-600" />
                </div>
                <p className={`mt-8 text-2xl font-bold uppercase tracking-wide ${isDay ? 'text-slate-800' : 'text-white/90'}`}>The Ultimate Rust Survival Experience</p>
                <p className={`mt-4 max-w-xl text-lg leading-8 ${theme.muted}`}>Speranza 10X PVE+ with Legendary Weapons, Gold Scrap, Bosses, Raidable Bases, and Legendary Armor.</p>
              </motion.div>

             <div className="mt-8 flex flex-col gap-4 sm:flex-row">

  <button className={`group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.16)_0%,rgba(255,255,255,.03)_100%)] px-9 py-5 text-xl font-bold backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,.45),inset_0_1px_1px_rgba(255,255,255,.22),0_0_35px_rgba(255,110,40,.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(255,120,40,.28),inset_0_1px_2px_rgba(255,255,255,.28)] ${isDay ? 'text-orange-500' : 'text-white'}`}>

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.22),transparent_38%)]"></div>

    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.16),transparent)]"></div>

    <span className="relative flex items-center gap-3">
      <Zap className="h-5 w-5 text-orange-400 drop-shadow-[0_0_12px_rgba(255,120,40,.8)]" />
      JOIN SERVER
    </span>
  </button>

  <button className={`group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.08)_0%,rgba(255,255,255,.02)_100%)] px-9 py-5 text-lg font-bold backdrop-blur-3xl shadow-[0_18px_55px_rgba(0,0,0,.38),inset_0_1px_1px_rgba(255,255,255,.12)] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 ${isDay ? 'text-orange-500' : 'text-white'}`}>

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.14),transparent_40%)]"></div>

    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.10),transparent)]"></div>

    <span className="relative">
      VIEW FEATURES
    </span>
  </button>

</div>
              <div className={`mt-8 rounded-3xl border p-5 backdrop-blur-2xl ${theme.panel}`}>
                <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Server Status: <span className="text-emerald-500">Online</span></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-4"><Users className="h-10 w-10 text-white/50" /><div><div className={`text-xs uppercase ${theme.muted}`}>Players Online</div><div className="text-3xl font-black">128 <span className={theme.muted}>/ 250</span></div></div></div>
                  <div className="flex items-center gap-4"><BarChart3 className="h-10 w-10 text-orange-500" /><div><div className={`text-xs uppercase ${theme.muted}`}>Server FPS</div><div className="text-3xl font-black text-orange-500">198 FPS</div></div></div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex min-h-[620px] items-center justify-center">
              <motion.div animate={{ y: [0, -16, 0], scale: [1, 1.025, 1] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} className="relative h-[560px] w-[560px] xl:h-[690px] xl:w-[690px]">
                <div className="absolute inset-0 rounded-full bg-orange-600/20 blur-3xl" />
                <Image src="/phoenix-v2.png" alt="Speranza Phoenix" fill className="object-contain drop-shadow-[0_0_80px_rgba(255,76,16,.78)]" priority />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => { const Icon = stat.icon; return (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .08, duration: .45 }} className={`rounded-3xl border p-5 backdrop-blur-2xl ${theme.panel}`}>
              <div className="flex items-start justify-between"><div><div className={`text-xs font-bold uppercase tracking-wider ${theme.muted}`}>{stat.label}</div><div className="mt-3 text-3xl font-black">{stat.value}</div><div className="mt-2 text-sm font-semibold text-emerald-500">{stat.sub}</div></div><div className={`rounded-2xl bg-orange-500/10 p-3 ${stat.accent}`}><Icon className="h-6 w-6" /></div></div>
            </motion.div>
          )})}
        </section>
<section id="dashboard" className="mt-10">
  <div className="mb-6">
    <div className="text-sm font-black uppercase tracking-[.35em] text-orange-500">
      Live Control Center
    </div>
    <h2 className="mt-2 text-4xl font-black">Server Dashboard</h2>
  </div>

  <div className="grid gap-5 xl:grid-cols-[1.2fr_.8fr]">
    <div className={`rounded-[2rem] border p-6 backdrop-blur-2xl ${theme.panel}`}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black">Live Server Pulse</h3>
          <p className={`mt-1 ${theme.muted}`}>Real-time overview of Speranza activity.</p>
        </div>
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-black text-emerald-500">
          ONLINE
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['CPU Load', '42%', 'Stable'],
          ['Memory', '68%', 'Healthy'],
          ['Ping', '38ms', 'Excellent'],
        ].map(([label, value, status]) => (
          <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <div className={`text-xs font-bold uppercase ${theme.muted}`}>{label}</div>
            <div className="mt-3 text-4xl font-black text-orange-500">{value}</div>
            <div className="mt-2 text-sm font-bold text-emerald-500">{status}</div>
          </div>
        ))}
      </div>
    </div>

    <div className={`rounded-[2rem] border p-6 backdrop-blur-2xl ${theme.panel}`}>
      <h3 className="text-2xl font-black">Top Activity</h3>

      <div className="mt-5 space-y-4">
        {[
          ['Most Active Player', 'RagnarX', '12h 44m today'],
          ['Top Clan', 'Phoenix Order', '18 members online'],
          ['Current Event', 'World Boss', 'Live now'],
        ].map(([title, value, sub]) => (
          <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <div className={`text-xs font-bold uppercase ${theme.muted}`}>{title}</div>
            <div className="mt-1 text-xl font-black">{value}</div>
            <div className="text-sm font-bold text-orange-500">{sub}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
        <section className="py-10">
          <div className="mb-6"><div className="text-sm font-black uppercase tracking-[.35em] text-orange-500">Speranza Systems</div><h2 className="mt-2 text-4xl font-black">Legendary Features</h2></div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => { const Icon = feature.icon; return (
              <motion.div key={feature.title} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} className={`group relative overflow-hidden rounded-[2rem] border p-6 backdrop-blur-2xl ${theme.panel}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-violet-500/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-start gap-4"><div className="rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-3 text-white shadow-[0_0_36px_rgba(255,86,18,.32)]"><Icon className="h-6 w-6" /></div><div><h3 className="text-xl font-black">{feature.title}</h3><p className={`mt-2 leading-7 ${theme.muted}`}>{feature.desc}</p></div></div>
              </motion.div>
            )})}
          </div>
        </section>
      </div>
    </main>
  )
}
