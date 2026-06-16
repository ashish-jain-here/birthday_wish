const CONFIG = {
    // The name of the birthday person
    name: "Astha",

    // Gender of the person: "Boy" or "Girl" (affects "Boy u = new Boy(...)" text)
    gender: "Girl",

    // Date of Birth (used for typing text and age increase condition)
    dob: {
        year: 2002,      // Birth year (e.g. 2002)
        month: 6,       // Birth month (1-12) -> 11 is November
        day: 16         // Birth day (1-31)
    },

    // The year of the birthday celebration (defaults to the current system year)
    celebrationYear: new Date().getFullYear(),

    // Name of the creator (displayed in the copyright footer)
    creator: "Ashish Jain ❤️",
    
    // Social media links for the creator
    socialLinks: {
        instagram: "https://www.instagram.com/ashish_jain_here",
        snapchat: "https://www.snapchat.com/add/ashishjainhere"
    }
};

// Helper array for month names
const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
