/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
      },
      textShadow: {},
      height: {
        header: "var(--height-header)",
      },
      colors: {
        "border-contact": "rgb(255 255 255 / 24%)",
        "bg-slide": "rgba(217, 217, 217, 0.70)",
        shadow:
          "0px 2.724018096923828px 2.1792144775390625px 0px rgba(77, 77, 79, 0.02), 0px 6.546194076538086px 5.236955642700195px 0px rgba(77, 77, 79, 0.03), 0px 12.325902938842773px 9.860722541809082px 0px rgba(77, 77, 79, 0.04), 0px 20px 25px 0px rgba(77, 77, 79, 0.04)",
        "bg-notipage": "rgba(10, 102, 194, 0.20)",
        "bg-signin":
          "linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%);",
      },
      backgroundImage: {
        "banner-center": "url('/assets/images/backgroundImage/center.svg')",
        "banner-1": "url('/assets/images/backgroundImage/1.svg')",
        "banner-heart": "url('/assets/images/backgroundImage/heart.svg')",
        "banner-bcs": "url('/assets/images/backgroundImage/bcs.svg')",
        "banner-pharmacy-center":
          "url('/assets/images/backgroundImage/background.svg')",
        "bg-signup": "url('/assets/images/backgroundImage/dangky.png')",
      },
      backgroundSize: {
        "100%": "100%",
        "125%": "125%",
      },
      keyframes: {
        show: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
};
