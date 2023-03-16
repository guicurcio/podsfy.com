import { format } from "prettier"
import parserBabel from "prettier/parser-babel"

const styleGroupingPlugin = {
  languages: [
    {
      name: "javascript",
      parsers: ["babel"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  ],
  parsers: {
    babel: {
      ...parserBabel.parsers["babel-ts"],
      preprocess: (text, options) => {
        const regex = /"([^"]+)"/g
        const newText = text.replace(regex, (match) => {
          const styles = match
            .slice(1, -1)
            .split(" ")
            .reduce((acc, style) => {
              const prefix = style.match(/^\w+/)
              if (prefix) {
                const key = prefix[0]
                acc[key] = (acc[key] ? `${acc[key]} ` : "") + style
              }
              return acc
            }, {})

          const sortedStyles = Object.values(styles).join('",\n"')

          return `"${sortedStyles}"`
        })

        return newText
      },
    },
  },
}

const source =
  `"absolute  self-center transition-colors ease-in-out",
   "font-moderat font-medium font-normal",
   "text-md text-xs text-white text-white text-opacity"`

const formatted = format(source, {
  parser: "babel",
  plugins: [styleGroupingPlugin],
})

console.log("formatted", formatted)
