import '../history/history.css'

const History = ({ history }) => {
  if (!history || history.length === 0) {
    return (
      <div className="history-card">
        <h3 className="cards-tittle">Histórico</h3>
        <p>Nenhum dado registrado ainda.</p>
      </div>
    )
  }

  return (
    <div className="history-card">
      <h3 className="cards-tittle">Histórico</h3>

      <div className="history-list">
        {history.map((item, index) => (
          <div key={index} className="history-item">
            <span className="history-time">{item.time}</span>

            <div className="history-values">
              <span>EUR: {item.rates.EUR.toFixed(4)}</span>
              <span>BRL: {item.rates.BRL.toFixed(4)}</span>
              <span>JPY: {item.rates.JPY.toFixed(4)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History