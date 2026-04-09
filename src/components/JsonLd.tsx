/**
 * JsonLd — injects a JSON-LD structured-data script into the page <head>.
 * Pass any valid Schema.org object as `data`.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
