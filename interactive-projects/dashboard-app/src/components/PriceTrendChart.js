import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// The component now accepts the language prop
function PriceTrendChart({ data, text, language }) {
  const [selectedCompany, setSelectedCompany] = useState('petroCanada');
  
  // Date formatting options for the chart's axis
  const dateLocale = language === 'fr' ? 'fr-CA' : 'en-CA';
  const dateFormatOptions = { month: 'short', day: 'numeric' };

  const chartData = {
    // Format the Date objects into strings for the chart labels
    labels: data.labels.map(date => date.toLocaleDateString(dateLocale, dateFormatOptions)),
    datasets: [{
      label: text.companies[selectedCompany],
      data: data.regular[selectedCompany],
      borderColor: '#c0392b',
      backgroundColor: 'rgba(192, 57, 43, 0.5)',
      tension: 0.1,
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: text.lineChartTitle, font: { size: 16 } },
    },
    scales: { y: { title: { display: true, text: 'Cents per Litre' } } }
  };

  return (
    <div className="chart-container">
      <p>{text.lineChartDescription}</p>
      <div className="mb-3">
        <label htmlFor="company-select" className="form-label">{text.selectCompanyLabel}</label>
        <select id="company-select" className="form-select" value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
          {Object.keys(text.companies).map(companyKey => (
            <option key={companyKey} value={companyKey}>{text.companies[companyKey]}</option>
          ))}
        </select>
      </div>
      <Line options={options} data={chartData} />
    </div>
  );
}
export default PriceTrendChart;