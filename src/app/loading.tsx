export default function Loading() {
  return (
    <section className="hero">
      <div className="hero-body">
        <p className="title">Risk Toolbox</p>
        <p className="subtitle">Loading...</p>
        <progress className="progress is-large is-primary" max="100">60%</progress>
      </div>
    </section>
  )
}