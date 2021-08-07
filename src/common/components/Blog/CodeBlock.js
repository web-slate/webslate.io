import React from 'react'
import { Wrapper, Pre, Line, LineNo, LineContent } from "./CodeBlockStyles";
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/nightOwl";

const exampleCode = `
function fibo_1(n) {
  if (n < 2) {
    return n
  }
  return fibo_1(n - 1) + fibo_1(n - 2)
}
`.trim();

const CodeBlock = ({ children, language = 'javascript' }) => (
  <Wrapper>
    <Highlight {...defaultProps} theme={theme} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  </Wrapper>
);

export default CodeBlock