export function QuoteVisual() {
  return (
    <div className="quote-visual" aria-hidden="true">
      <div className="quote-visual-card">
        <div className="quote-visual-figures">
          <div className="quote-person quote-person-left">
            <span className="quote-head" />
            <span className="quote-body" />
            <span className="quote-arm quote-arm-left" />
            <span className="quote-arm quote-arm-right" />
          </div>
          <div className="quote-person quote-person-right">
            <span className="quote-head" />
            <span className="quote-body" />
            <span className="quote-arm quote-arm-left" />
            <span className="quote-arm quote-arm-right" />
          </div>
        </div>
        <div className="quote-table" />
      </div>
    </div>
  );
}
