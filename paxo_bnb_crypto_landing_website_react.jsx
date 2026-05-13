export default function PaxoBNBWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-yellow-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-black to-orange-500/10"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full border border-yellow-500 text-yellow-400 text-sm mb-6">
              Powered By Blockchain Technology
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              PAXO <span className="text-yellow-400">BNB</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Smart earning platform with referral system, daily rewards, matrix income and blockchain powered automation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-yellow-500/30 transition-all">
                Join Now
              </button>

              <button className="border border-yellow-500 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-500/10 transition-all">
                Whitepaper
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl shadow-yellow-500/30">
              <div className="absolute inset-4 rounded-full border border-white/20"></div>
              <div className="text-center">
                <div className="text-6xl font-black">P</div>
                <div className="text-2xl font-bold mt-2">PAXO BNB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            Our <span className="text-yellow-400">Features</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Modern blockchain ecosystem with powerful earning tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Daily Rewards',
              desc: 'Track daily rewards and earning growth automatically.'
            },
            {
              title: 'Referral System',
              desc: 'Grow your network with smart referral structure.'
            },
            {
              title: 'Secure Wallet',
              desc: 'BEP20 wallet integration with secure transactions.'
            },
            {
              title: 'Matrix Income',
              desc: 'Automated matrix based reward distribution.'
            },
            {
              title: 'Rank Upgrade',
              desc: 'Unlock rewards and higher earning levels.'
            },
            {
              title: 'Fast Withdraw',
              desc: 'Quick and transparent withdrawal system.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-400 transition-all hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500 flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>

              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-y border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-black text-yellow-400">500+</div>
            <div className="text-gray-300 mt-2">Team Members</div>
          </div>

          <div>
            <div className="text-5xl font-black text-yellow-400">24/7</div>
            <div className="text-gray-300 mt-2">Support System</div>
          </div>

          <div>
            <div className="text-5xl font-black text-yellow-400">100%</div>
            <div className="text-gray-300 mt-2">Blockchain Based</div>
          </div>

          <div>
            <div className="text-5xl font-black text-yellow-400">Secure</div>
            <div className="text-gray-300 mt-2">Smart Contract</div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">
            Launch <span className="text-yellow-400">Roadmap</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            'Website Launch',
            'App Development',
            'Blockchain Integration',
            'Global Expansion'
          ].map((step, index) => (
            <div
              key={index}
              className="border border-yellow-500/20 rounded-3xl p-8 bg-white/5 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-500 text-black font-black flex items-center justify-center mx-auto mb-6 text-2xl">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 rounded-[40px] p-12 text-center text-black shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready To Join PAXO BNB?
          </h2>

          <p className="text-xl mb-8 opacity-80">
            Start your blockchain journey with modern smart earning technology.
          </p>

          <button className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-500/20 py-8 text-center text-gray-400">
        <p>© 2026 PAXO BNB. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
