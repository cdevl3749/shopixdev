"use client";

import React from "react";
import Cookies from "js-cookie";

const CookieConsentBanner: React.FC<{}> = () => {
    const [cookieConsent, setCookieConsent] = React.useState<string | null>(null);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [cookieTypes, setCookieTypes] = React.useState<{
        [key: string]: boolean;
    }>({
        necessary: false,
        analytics: false,
        marketing: false,
    });

    React.useEffect(() => {
        const consent = Cookies.get("cookieConsent");
        const preferences = getCookiePreferences();

        if (consent === "denied") {
            setCookieConsent("denied");
            setCookieTypes({
                necessary: false,
                analytics: false,
                marketing: false,
            });
        } else if (preferences) {
            // Check if all cookie types are disabled
            const allDisabled = Object.values(preferences).every(value => !value);
            if (allDisabled) {
                setCookieConsent("refuser");
            } else {
                setCookieConsent("accepter");
            }
        } else {
            setCookieConsent("consentement");
        }
    }, []);

    const handleAccept = () => {
        Cookies.set("cookieConsent", "accepter");
        setCookieConsent("accepter");

        console.log("User consent accepted");
        console.log("User-Agent:", window.navigator.userAgent);
        console.log("User-Agent:", window.navigator.language);

         // Log user information from cookies
         console.log("User information from cookies:", Cookies.get("userPreferences"));
         console.log("Session ID:", Cookies.get("sessionId"));
    };

    const handleDeny = () => {
        Cookies.set("cookieConsent", "refuser");
        setCookieConsent("refuser");

        // Clear the cookiePreferences cookie
        Cookies.remove("cookiePreferences");

        // Reset the cookieTypes state
        setCookieTypes({
            necessary: false,
            analytics: false,
            marketing: false,
        });
    };

    const handleManage = () => {
        setShowModal(true);
    };

    const handleCookieTypeChange = (type: string) => {
        setCookieTypes(prevState => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };

    const handleSavePreferences = () => {
        const preferences = JSON.stringify(cookieTypes);
        Cookies.set("cookiePreferences", preferences);
        
        // Check if all cookie types are disabled
        const allDisabled = Object.values(cookieTypes).every(value => !value);
        if (allDisabled) {
            Cookies.set("cookieConsent", "refuser");
            setCookieConsent("refuser");
        } else {
            Cookies.set("cookieConsent", "accepter");
            setCookieConsent("accepter");
        }

        setShowModal(false);
    };

    const getCookiePreferences = () => {
        const preferencesStr = Cookies.get("cookiePreferences");
        if (preferencesStr) {
            const preferences = JSON.parse(preferencesStr);
            return preferences;
        }
        return null;
    };

    if (cookieConsent === "accepter") {
        return null;
    } else if (cookieConsent === "refuser") {
        return null;
    }
    
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
            <p>Ce site Web utilise des cookies pour améliorer votre expérience.</p>
            <div className="mt-4">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-mr-2"
                    onClick={handleAccept}
                >
                    Accepter
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-mr-2"
                    onClick={handleDeny}
                >
                    Refuser
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-mr-2"
                    onClick={handleManage}
                >
                    Gérer
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">
                        Gérer les préférences de cookies
                    </h2>
                    <div>
                        <div className="flex items-center mb-2">
                            <input type="checkbox"
                            id="necessary"
                            checked={cookieTypes.necessary} 
                            onChange={() => handleCookieTypeChange("necessary")}
                            className="mr-2"
                        />
                        <label
                        htmlFor="necessary" 
                        className="text-blue-500 hover:underline cursor-pointer"
                        >
                            Cookies Nécessaires
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input 
                        type="checkbox"
                        id="analytics"
                        checked={cookieTypes.analytics}
                        onChange={() => handleCookieTypeChange("analytics")}
                        className="mr-2"
                        />
                        <label
                        htmlFor="analytics"
                        className="text-blue-500 hover:underline cursor-pointer"
                        >
                            Cookies d'analyse
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input 
                        type="checkbox"
                        id="marketing"
                        checked={cookieTypes.marketing}
                        onChange={() => handleCookieTypeChange("marketing")}
                        className="mr-2"
                        />
                    <label
                    htmlFor="marketing"
                    className="text-blue-500 hover:underline cursor-pointer"
                    >
                        Cookies de marketing
                    </label>
                </div>
                <div className="flex justify-end mt-4">
                    <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-mr-2"
                    onClick={handleSavePreferences}
                    >
                        Enregistrer les préférences
                    </button>
                <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-mr-2"
                onClick={() => setShowModal(false)}
                >
                    Fermer
                </button>
                </div>
            </div>
        </div>
    </div>
    )}
    </div>
    );
};

export default CookieConsentBanner;
