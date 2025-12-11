export const ProfitHome = ({ totalAmount }) => {
  return (
    <section className="profit-home">
      <span className="profit-home-title">Ganacia Semanal</span>
      <span className="profit-home-summary">S/ {totalAmount.toFixed(2)}</span>
    </section>
  );
};
