import "./NewsletterStyle.sass"

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter-form">
          <div className="newsletter-fields">
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">INSCREVER</button>
          </div>

          <label className="checkbox-label">
            <input type="checkbox" />
            Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  )
}

export default Newsletter