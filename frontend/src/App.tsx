import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next/TransWithoutContext';
import "./i18n";
import logo from './logo.svg';
import './styles/App.scss';
import Footer from './components/Footer';
import Header from './components/Header'

function App() {
  const {t, i18n } = useTranslation();

//   <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className='App-title'>{t("title")}</h1>
//     <div>{i18n.language}</div>
//   </header>
//   <div className='App-intro'>
//     <Trans i18nKey="App.title">Default title</Trans>
//     {t("App.subtitle")}
//     <div>
//       <div>
//         <Header/>
//         <button onClick={() => i18n.changeLanguage("es")}>ES</button>
//         <button onClick={() => i18n.changeLanguage("en")}>EN</button>
//       </div>
//     </div>
//   </div>
//   <Footer></Footer>
// </div>
  return (
    <div className="App">
      <Header/>
      <Footer></Footer>
    </div>
  );
}

export default App;
