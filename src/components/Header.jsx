function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-20 p-6 md:p-8">
            <div className="logo-container animate-fade-in">
                {/* Whale Tail Tuxedo Logo */}
                <div className="logo-icon">
                    <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                    >
                        {/* Tuxedo collar/bowtie */}
                        <path
                            d="M24 28L20 32L24 30L28 32L24 28Z"
                            fill="#e0e1dd"
                        />
                        <rect x="22" y="30" width="4" height="2" fill="#e0e1dd" rx="0.5" />

                        {/* Whale tail */}
                        <path
                            d="M24 8C20 8 16 12 14 18C12 24 14 28 24 28C34 28 36 24 34 18C32 12 28 8 24 8Z"
                            fill="#415a77"
                            opacity="0.9"
                        />
                        <path
                            d="M8 12C12 16 18 18 24 18C30 18 36 16 40 12C38 8 32 6 24 6C16 6 10 8 8 12Z"
                            fill="#778da9"
                        />
                        <path
                            d="M6 14C8 12 10 10 14 10"
                            stroke="#e0e1dd"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M42 14C40 12 38 10 34 10"
                            stroke="#e0e1dd"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <span className="logo-text hidden sm:block">WHALE MOB</span>
            </div>
        </header>
    )
}

export default Header
