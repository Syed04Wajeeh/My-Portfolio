import React, { useState } from 'react';
import './App.css';

import { translations } from './translations';
import PriceTrendChart from './components/PriceTrendChart';
import GradeComparisonChart from './components/GradeComparisonChart';

const gasData = {
  labels: [
    new Date('2025-05-05'), new Date('2025-05-12'), new Date('2025-05-19'),
    new Date('2025-05-26'), new Date('2025-06-02'), new Date('2025-06-09')
  ],
  regular: { petroCanada: [155.9, 157.2, 156.5, 158.1, 157.8, 159.3], esso: [156.2, 156.9, 157.1, 157.5, 158.0, 159.1], shell: [155.8, 157.5, 157.0, 158.3, 158.5, 160.2], canadianTire: [154.9, 156.1, 155.8, 157.2, 157.0, 158.5] },
  premium: { petroCanada: [175.9, 177.2, 176.5, 178.1, 177.8, 179.3], esso: [176.2, 176.9, 177.1, 177.5, 178.0, 179.1], shell: [176.8, 178.5, 178.0, 179.3, 179.5, 181.2], canadianTire: [174.9, 176.1, 175.8, 177.2, 177.0, 178.5] },
  diesel: { petroCanada: [165.5, 164.2, 163.5, 165.1, 166.8, 165.3], esso: [166.0, 164.9, 163.1, 164.5, 166.0, 165.1], shell: [165.8, 165.5, 164.0, 165.3, 167.5, 166.2], canadianTire: [164.9, 163.1, 162.8, 164.2, 166.0, 164.5] }
};

function App() {
  const [language, setLanguage] = useState('en');
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(gasData.labels.length - 1);
  const text = translations[language];

  const dateLocale = language === 'fr' ? 'fr-CA' : 'en-CA';
  const dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div>
      <header className="dashboard-header d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">{text.dashboardTitle}</h1>
        <div className="d-flex align-items-center">
          <a href="https://syed04wajeeh.github.io/My-Portfolio/" className="btn btn-sm btn-outline-secondary me-3" target="_blank" rel="noopener noreferrer">Back to Portfolio</a>
          <button className={`btn btn-sm ${language === 'en' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setLanguage('en')}>EN</button>
          <button className={`btn btn-sm ms-2 ${language === 'fr' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setLanguage('fr')}>FR</button>
        </div>
      </header>
      
      <main className="container-fluid py-4">
        <div className="alert alert-warning text-center" role="alert">{text.dataSourceNotice}</div>
        <div className="row justify-content-center my-4">
          <div className="col-md-4">
            <label htmlFor="week-select" className="form-label fw-bold">{text.selectWeekLabel}</label>
            <select id="week-select" className="form-select" value={selectedWeekIndex} onChange={(e) => setSelectedWeekIndex(parseInt(e.target.value, 10))}>
              {gasData.labels.map((date, index) => (
                <option key={index} value={index}>
                  {date.toLocaleDateString(dateLocale, dateFormatOptions)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-6 mb-4">
            <PriceTrendChart data={gasData} text={text} language={language} />
          </div>
          <div className="col-lg-6 mb-4">
            <GradeComparisonChart data={gasData} text={text} language={language} selectedWeekIndex={selectedWeekIndex} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;