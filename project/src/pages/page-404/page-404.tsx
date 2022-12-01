function Page404(): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main">
        <div className="page__login-container container">
          404 Page not found
        </div>
      </main>
    </div>
  );
}

export default Page404;
