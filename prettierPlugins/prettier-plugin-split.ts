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
  "absolute text-opacity font-basier text-[14px] self-center text-red/50 font-moderat text-md font-normal text-white text-white font-medium transition-colors text-xs ease-in-out"

const formatted = format(`"${source}"`, {
  parser: "babel",
  plugins: [styleGroupingPlugin],
})

console.log(formatted)
