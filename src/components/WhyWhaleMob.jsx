import whaleMafiaImage from '../assets/whale_mafia.jpg'

function WhyWhaleMob() {
    return (
        <section className="why-section">
            <div className="why-container">
                {/* Left Column - Text Content */}
                <div className="why-text">
                    <h2 className="why-heading">Why Whale Mob?</h2>

                    <p className="why-body">
                        Whale Mob ($MOB) is more than a memecoin; it is a coordinated syndicate.
                        By combining the raw power of market whales with a disciplined, family-first
                        narrative, we create a project built for long-term dominance. With premium
                        branding, a stealth-launch foundation, and a community that moves as one,
                        $MOB is positioned to lead the deep.
                    </p>

                    <ul className="why-features">
                        <li className="why-feature-item">
                            <span className="feature-icon">✓</span>
                            <span>Anti-Jeet Coordination</span>
                        </li>
                        <li className="why-feature-item">
                            <span className="feature-icon">✓</span>
                            <span>Community Driven Syndicate</span>
                        </li>
                        <li className="why-feature-item">
                            <span className="feature-icon">✓</span>
                            <span>Elite Tier Branding</span>
                        </li>
                    </ul>
                </div>

                {/* Right Column - Image */}
                <div className="why-image-container">
                    <img
                        src={whaleMafiaImage}
                        alt="Whale Mob Syndicate"
                        className="why-image"
                    />
                </div>
            </div>
        </section>
    )
}

export default WhyWhaleMob
