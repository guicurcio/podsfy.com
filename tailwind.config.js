const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { mauve } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    paintOrder: {
      fsm: { paintOrder: "fill stroke markers" },
      fms: { paintOrder: "fill markers stroke" },
      sfm: { paintOrder: "stroke fill markers" },
      smf: { paintOrder: "stroke markers fill" },
      mfs: { paintOrder: "markers fill stroke" },
      msf: { paintOrder: "markers stroke fill" },
    },
    colors: {
      fondy: "#020416d4",
      fondy2: "#020416d4",
      modalInput: "#4b4b5228",
      codeTitles: "#161619",
      read: "#252525",
      lightbrand: "#1f1f23",
      brand: "#202125",
      darkBrand: "#1a1b20",
      darkerBrand: "#171719",
      sharp: "rgb(134, 143, 151)",
      sharper: "#c4c7ca",
      greenNote: "#a8ff98",
      colorLink: "#657df9",
      colorLinkDim: "#657df9cc",
      colorLinkFull: "#784ad3fa",
      via: "#4628a3",
      sgColorLink: "#431fc9",
      earlybrandGreen: "#205a4e",
      ebgb: "#205a4e66",
      earlybrand: "rgb(223, 170, 170)",
      ebb: "#ffa3a340",
      earlybrandBright: "#ffa3a3",
      earlyunder: "#ffa3a35e",
      coolPink: "#f217a4",
      coolPinkDimmed: "#f218a540",
      coolRed: "#f92f51",
      coolPurple: "#5f2ffa",
      pfa: "#4f2fb7",
      pfaunder: "#4a2f9f8a",
      primary: "#0f1218",
      header: "#16171a",
      modal2: "#697b95",
      modal3: "rgba(134, 143, 151, 0.21)",
      secondary: "#1b212a",
      grayish: "#fafafa",
      list: "#bfbfbf",
      brd: "#363739",
      dim: "#e1dfdf",
      pb: "#76309a",
      card: "#1f2022",
      input: "#222226",
      transparent: "transparent",
      current: "currentColor",
      headerCalm: "hsl(30deg 20% 98% / 13%)",
      black: "#000",
      white: "#fff",
      calmGray: "#f5f5f5",
      calm: "#fbfaf9",
      amber: colors.amber,
      blue: colors.blue,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      gray: colors.coolGray,
      green: colors.green,
      indigo: colors.indigo,
      "light-blue": colors.lightBlue,
      lime: colors.lime,
      orange: {
        ...colors.orange,
        1000: "#4a2008",
      },
      pink: {
        ...colors.pink,
        1000: "#460d25",
      },
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      teal: colors.teal,
      violet: colors.violet,
      yellow: colors.yellow,

      code: {
        punctuation: "#A1E8FF",
        tag: "#D58FFF",
        "attr-name": "#4BD0FB",
        "attr-value": "#A2F679",
        string: "#A2F679",
        highlight: "rgba(134, 239, 172, 0.25)",
      },
    },
    extend: {
      borderWidth: {
        0.5: "0.2px",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        // light mode
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#bfdbfe", // blue-200
            subtle: "#60a5fa", // blue-400
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#1d4ed8", // blue-700
            inverted: "#ffffff", // white
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "#f3f4f6", // gray-100
            DEFAULT: "#ffffff", // white
            emphasis: "#374151", // gray-700
          },
          border: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          ring: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          content: {
            subtle: "#9ca3af", // gray-400
            DEFAULT: "#6b7280", // gray-500
            emphasis: "#374151", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
          },
        },
        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229", // custom
            muted: "#172554", // blue-950
            subtle: "#1e40af", // blue-800
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#60a5fa", // blue-400
            inverted: "#030712", // gray-950
          },
          background: {
            muted: "#131A2B", // custom
            subtle: "#1f2937", // gray-800
            DEFAULT: "#111827", // gray-900
            emphasis: "#d1d5db", // gray-300
          },
          border: {
            DEFAULT: "#1f2937", // gray-800
          },
          ring: {
            DEFAULT: "#1f2937", // gray-800
          },
          content: {
            subtle: "#4b5563", // gray-600
            DEFAULT: "#6b7280", // gray-600
            emphasis: "#e5e7eb", // gray-200
            strong: "#f9fafb", // gray-50
            inverted: "#000000", // black
          },
        },
        setting: "rgb(229, 231, 235)",
        under: "#fbfbfc",
        shine: "#191919",
        lightbrand: "#1f1f23",
        brand: "#202125",
        darkBrand: "#1a1b20",
        darkerBrand: "#171719",
        sharp: "rgb(134, 143, 151)",
        earlybrandGreen: "#205a4e",
        ebgb: "#205a4e66",
        earlybrand: "rgb(223, 170, 170)",
        ebb: "#ffa3a340",
        earlybrandBright: "#ffa3a3",
        earlyunder: "#ffa3a35e",
        coolPink: "#f217a4",
        coolPinkDimmed: "#f218a540",
        coolRed: "#f92f51",
        coolPurple: "#5f2ffa",
        pfa: "#4f2fb7",
        pfaunder: "#4a2f9f8a",
        grape: colors.purple,
        back: "#f6f6f9",
        dim: "#fafafa",
        flush: "#eff0f2",
        brand: "#383838",
        lightbrand: "#1f1f23",
        brandTwo: "#202125",
        darkBrand: "#1a1b20",
        darkerBrand: "#171719",
        sharp: "rgb(134, 143, 151)",
        terminal: "rgb(11, 11, 12)",
        box: "#1f1f1f",
        boxed: "#232323",
        grayish: "#868f97",
        feat: "#0b0b0f",
        feat2: "#0b0b0f40",
        feat3: "#0e0e1473",
        features: "#fff",
        under: "#868F97",
        underMain: "#d8d4d4",
        copy: "#383838d1",
        second: "#d6d6d6ba",
        lightPurple: "#e4e1ff",
        bigButton: "#f6f9fc",
        codeButtonNotActive: "#110f14",
        blueg: "#3a68c0",
        pinkg: "#faf0f0",
        goldg: "#fbbd50",
        greeng: "#6AA09D",
        lightBlue: "#f0f2f7",
        uber: "rgb(20, 20, 25)",
        uber2: "#141418",
        uber3: "rgb(23 21 31)",
        uber4: "#101014",
        uber5: "#503e60",
        uber6: "#2a1b38cc",
        uber7: "#291b38d9",
        uber8: "#050506",
        uberBack: "#151519",
        code: "#2d3748",
        code2: "#172130",
        code3: "#01020c",
        code4: "#070816",
        code5: "#05050d",
        backy: "#2b2431",
        back: "#f7f7f9",
        editor: "#020202",
        featTitle: "#1C212B",
        featUnder: "#72757B",
        branding: "#0e50a9",
        click: "#44444c61",
        top: "#18191B",
        bor: "rgb(222, 222, 222);",
        blackPure: "rgb(11, 11, 15);",
        featLink: "rgb(134, 143, 151);",
        purpleb: "#6166DC;",
        greenb: "#4EBE96;",
        sharpBack: "#1a1b20",
        almostPure: "#0b0b0f",
        fileBox: "#1a1a1d",
        cta: "#f5f5f5",
        sharpBorder: "#393939",
        console: "rgb(11, 11, 12)",
        smoothBorder: "rgb(35, 35, 35)",
        deploy: "rgb(23 23 23);",
        lightbrand: "#1f1f23",
        brand: "#202125",
        darkBrand: "#1a1b20",
        darkerBrand: "#111113",
        sharp: "rgb(134, 143, 151)",
        earlybrandGreen: "#205a4e",
        ebgb: "#205a4e66",
        earlybrand: "rgb(223, 170, 170)",
        ebb: "#ffa3a340",
        earlybrandBright: "#ffa3a3",
        earlyunder: "#ffa3a35e",
        coolPink: "#f217a4",
        coolPinkDimmed: "#f218a540",
        dimmed: "#f8f6f8",
        dimmed2: "#efefef",
        dimmed3: "#f3f0ffe6",
        coolRed: "#f92f51",
        coolPurple: "#5f2ffa",
        pfa: "#4f2fb7",
        pfaunder: "#4a2f9f8a",
        functionality: "rgba(234,234,234)",
        eaea: "#eaeaea",
        moreDimmed: "#656565",
        blue1: "rgb(36, 0, 255)",
        blue2: "rgb(0, 135, 255)",
        blue3: "rgb(105, 30, 255)",
        coolPink: "#f217a4",
        coolPinkDimmed: "#f218a540",
        coolRed: "#f92f51",
        coolPurple: "#5f2ffa",
        grape: colors.purple,
        back: "#f6f6f9",
        dim: "#fafafa",
        flush: "#eff0f2",
        brand: "#383838",
        lightbrand: "#1f1f23",
        brandTwo: "#202125",
        darkBrand: "#1a1b20",
        darkerBrand: "#171719",
        sharp: "rgb(134, 143, 151)",
        terminal: "rgb(11, 11, 12)",
        box: "#1f1f1f",
        grayish: "#868f97",
        feat: "#0b0b0f",
        features: "#fff",
        under: "#868F97",
        underMain: "#d8d4d4",
        copy: "#383838d1",
        second: "#d6d6d6ba",
        lightPurple: "#e4e1ff",
        bigButton: "#f6f9fc",
        blueg: "#3a68c0",
        pinkg: "#faf0f0",
        goldg: "#ba8527",
        greeng: "#6AA09D",
        lightBlue: "#f0f2f7",
        uber: "rgb(20, 20, 25)",
        uberBack: "#151519",
        code: "#2d3748",
        back: "#f7f7f9",
        featTitle: "#1C212B",
        featUnder: "#72757B",
        branding: "#0e50a9",
        click: "#44444c61",
        top: "#18191B",
        bor: "rgb(222, 222, 222);",
        blackPure: "rgb(11, 11, 15);",
        featLink: "rgb(134, 143, 151);",
        purpleb: "#6166DC;",
        greenb: "#4EBE96;",
        sharpBack: "#1a1b20",
        almostPure: "#0b0b0f",
        fileBox: "#1a1a1d",
        cta: "#f5f5f5",
        sharpBorder: "#393939",
        console: "rgb(11, 11, 12)",
        smoothBorder: "rgb(35, 35, 35)",
        deploy: "rgb(23 23 23);",
        lightbrand: "#1f1f23",
        brand: "#202125",
        darkBrand: "#1a1b20",
        darkerBrand: "#171719",
        sharp: "rgb(134, 143, 151)",
        earlybrandGreen: "#205a4e",
        ebgb: "#205a4e66",
        earlybrand: "rgb(223, 170, 170)",
        ebb: "#ffa3a340",
        earlybrandBright: "#ffa3a3",
        earlyunder: "#ffa3a35e",
        coolPink: "#f217a4",
        coolPinkDimmed: "#f218a540",
        dimmed: "#f8f6f8",
        coolRed: "#f92f51",
        coolPurple: "#5f2ffa",
        pfa: "#4f2fb7",
        pfaunder: "#4a2f9f8a",
        darky: "#2a2a32",
        black2: "rgb(10, 10, 10)",
        gradPink: "rgb(255, 29, 122)",
        gradblue: "rgb(36, 0, 255)",
        gradLightBlue: "rgb(0, 135, 255)",
        gradOrange: "rgb(245, 56, 27)",
        gradOrange2: "rgb(255, 83, 53)",
        gradPurple: "rgb(105, 30, 255)",
        fondy: "#16171c",
        ...mauve,
      },
      boxShadow: {
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        xxs: "0.65rem",
        "7xl": "3.80rem",
        hero: "4.5rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        13: "5rem",
      },
      height: {
        accessModal: "500px",
      },
      width: {
        accessModal: "420px",
      },
      animation: {
        marquee: "marquee 100s linear infinite",
        marqueey: "marqueey 100s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueey: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideUpAndFade: {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideDownAndFade: {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      fontSize: {
        "tremor-label": ["0.75rem"],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      fontFamily: {
        basier: ["BasierSquare", ...defaultTheme.fontFamily.sans],
        moderat: ["var(--font-moderat)", ...defaultTheme.fontFamily.sans],
        visuelt: ["var(--font-visuelt)", ...defaultTheme.fontFamily.sans],
        SpaceGrotesk: [
          "var(--font-space-grotesk)",
          ...defaultTheme.fontFamily.sans,
        ],
        calibre: ["Calibre", ...defaultTheme.fontFamily.sans],
        founders: ["Founders", ...defaultTheme.fontFamily.sans],
        lausanne: ["Lausanne", ...defaultTheme.fontFamily.sans],
        FiraCode: ["FiraCode", ...defaultTheme.fontFamily.sans],
        untitled: ["UntitledSans", ...defaultTheme.fontFamily.sans],
        Domaine: ["Domaine", ...defaultTheme.fontFamily.sans],
        brand: ["Brand", ...defaultTheme.fontFamily.sans],
        Apercu: ["Apercu", ...defaultTheme.fontFamily.sans],
        Reader: ["Reader", ...defaultTheme.fontFamily.sans],
        Athletics: ["Athletics", ...defaultTheme.fontFamily.sans],
        bossa: ["Bossa", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideUpAndFade: "slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
        slideDownAndFade:
          "slideDownAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
        slideRightAndFade:
          "slideRightAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
      },
      maxWidth: {
        "4.5xl": "60rem",
        "8xl": "85rem",
        "9xl": "86rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-radix")(),
    require("tailwind-scrollbar"),
  ],
};
