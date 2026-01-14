function Hero() {
    return (
        <div className="text-center mb-12 animate-fade-in">
            {/* Main Title */}
            <h1
                className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-white mb-6"
                style={{
                    textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '0.15em'
                }}
            >
                WHALE MOB
            </h1>

            {/* Subtitle */}
            <p
                className="font-serif text-lg sm:text-xl md:text-2xl text-gray-300 italic animate-fade-in-delay"
                style={{
                    textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '0.05em'
                }}
            >
                An offer the market can't refuse.
            </p>
        </div>
    )
}

export default Hero
