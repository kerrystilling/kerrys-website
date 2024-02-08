module.exports = {
    url: process.env.URL || "http://localhost:8080",
    domain: "https://kerrystilling.com",
    name: "Kerry Stilling",

    twitterHandle: "@kerrystilling",
    twitterLink: "https://twitter.com/kerrystilling",
    githubLink: "https://github.com/kerrystilling",
    linkedinLink: "https://www.linkedin.com/in/kerrystilling/",

    salesLink: "/request-demo/",
    salesText: "Get a demo",

    signupLink: "/signup/",
    signupText: "Try for free",

    loginLink: "/login/",
    loginText: "Login",

    // Current year
    currentYear() {
        const today = new Date();
        return today.getFullYear();
    }
};