function CTAButtons() {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-fade-in-delay-2">
            {/* Buy $MOB Button */}
            <a
                href="https://pump.fun/coin/3Cp1LQSqat9aseuWpyiSkkXiUGfpjPQn579Xc64Gpump"
                className="btn-primary animate-pulse-glow"
                target="_blank"
                rel="noopener noreferrer"
            >
                Buy $MOB
            </a>

            {/* Join the Family Button */}
            <a
                href="https://twitter.com/i/communities/2011336044575105404"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
            >
                Join the Family
            </a>
        </div>
    )
}

export default CTAButtons
