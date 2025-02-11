// cookieConsent.js
const CookieConsentBanner = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const cookieChoice = localStorage.getItem('cookieConsent');
        if (!cookieChoice) {
            setTimeout(() => setIsVisible(true), 1000);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        // Add your cookie activation code here
    };

    const declineCookies = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
        // Add your cookie deactivation code here
    };

    if (!isVisible) return null;

    return React.createElement(
        'div',
        {
            style: {
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                transform: `translateY(${isVisible ? '0' : '100%'})`,
                transition: 'transform 0.3s ease-in-out',
                zIndex: 1001
            }
        },
        [
            React.createElement(
                'p',
                {
                    style: {
                        margin: 0,
                        color: '#333',
                        paddingRight: '2rem',
                        fontSize: '1rem',
                        lineHeight: 1.6
                    }
                },
                'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.'
            ),
            React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        gap: '1rem'
                    }
                },
                [
                    React.createElement(
                        'button',
                        {
                            onClick: acceptCookies,
                            style: {
                                background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                                color: 'white',
                                padding: '0.75rem 1.5rem',
                                border: 'none',
                                borderRadius: '25px',
                                cursor: 'pointer',
                                fontWeight: 500,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            },
                            onMouseOver: (e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
                            },
                            onMouseOut: (e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }
                        },
                        'Accept'
                    ),
                    React.createElement(
                        'button',
                        {
                            onClick: declineCookies,
                            style: {
                                background: 'white',
                                color: '#333',
                                padding: '0.75rem 1.5rem',
                                border: '1px solid #ccc',
                                borderRadius: '25px',
                                cursor: 'pointer',
                                fontWeight: 500,
                                transition: 'background-color 0.2s'
                            },
                            onMouseOver: (e) => {
                                e.target.style.backgroundColor = '#f1f1f1';
                            },
                            onMouseOut: (e) => {
                                e.target.style.backgroundColor = 'white';
                            }
                        },
                        'Decline'
                    )
                ]
            )
        ]
    );
};