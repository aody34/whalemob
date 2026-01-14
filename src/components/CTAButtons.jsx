function CTAButtons() {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-fade-in-delay-2">
            {/* Buy $MOB Button */}
            <a
                href="#"
                className="btn-primary animate-pulse-glow"
                onClick={(e) => {
                    e.preventDefault()
                    // TODO: Add buy link (e.g., Raydium, Jupiter)
                    alert('Buy link coming soon!')
                }}
            >
                Buy $MOB
            </a>

            {/* Join the Family Button */}
            <a
                href="#"
                className="btn-outline"
                onClick={(e) => {
                    e.preventDefault()
                    // TODO: Add community link (e.g., Telegram, Discord)
                    alert('Community link coming soon!')
                }}
            >
                Join the Family
            </a>
        </div>
    )
}

export default CTAButtons
