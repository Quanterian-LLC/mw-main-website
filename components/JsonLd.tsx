// Renders a JSON-LD block.
//
// JSON.stringify is used rather than a template literal so that the payload cannot be
// broken by a quote in the source data. The `<` escape closes the one remaining hole:
// a literal "</script>" inside a string would otherwise terminate the block early.

export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
