// FAQPage structured data for a page's FAQ list (hand-written; the design converter inserts it after each FAQ
// accordion, see add_faqs in scripts/convert_design.py). Items are the accordion's { q, a } entries.
export default function FaqSchema({ items }) {
  const list = (items || []).filter((f) => f && typeof f.q === 'string' && typeof f.a === 'string' && f.q.trim() && f.a.trim());
  if (!list.length) return null;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
