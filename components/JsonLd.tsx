// Renders a JSON-LD block.
//
// JSON.stringify is used rather than a template literal so that the payload cannot be
// broken by a quote in the source data. The `<` escape closes the one remaining hole:
// a literal "</script>" inside a string would otherwise terminate the block early.

export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // dangerouslySetInnerHTML is the documented way to emit JSON-LD in React: the
      // payload must reach the DOM unescaped. It is safe here because `data` is built
      // from repository constants, never from user input, and `<` is escaped above.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
