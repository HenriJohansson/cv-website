import "@components/Header/header.css"

export const Header = () => {
  return (
    <>
      <header>
        <div className="header_content">
          <p className="header_p">
            <small className="header_small">Hello, I am</small>
          </p>
          <h1 className="header_h1">Henri Johansson</h1>
        </div>
      </header>
      <span id="header_divider"></span>
    </>
  )
}
