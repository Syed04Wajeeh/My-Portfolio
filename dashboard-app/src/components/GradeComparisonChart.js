import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// The component now accepts the language prop
function GradeComparisonChart({ data, text, language, selectedWeekIndex }) {
  
  const selectedWeekPrices = {
    regular: Object.values(data.regular).map(prices => prices[selectedWeekIndex]),
    premium: Object.values(data.premium).map(prices => prices[selectedWeekIndex]),
    diesel: Object.values(data.diesel).map(prices => prices[selectedWeekIndex]),
  };

  // Date formatting for the title
  const dateLocale = language === 'fr' ? 'fr-CA' : 'en-CA';
  const dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const selectedDateString = data.labels[selectedWeekIndex].toLocaleDateString(dateLocale, dateFormatOptions);

  const chartData = {
    labels: Object.values(text.companies),
    datasets: [
      { label: text.fuelGrades.regular, data: selectedWeekPrices.regular, backgroundColor: 'rgba(54, 162, 235, 0.5)' },
      { label: text.fuelGrades.premium, data: selectedWeekPrices.premium, backgroundColor: 'rgba(255, 99, 132, 0.5)' },
      { label: text.fuelGrades.diesel, data: selectedWeekPrices.diesel, backgroundColor: 'rgba(75, 192, 192, 0.5)' },
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { 
        display: true, 
        // Use the newly formatted date string in the title
        text: `${text.barChartTitle} (${selectedDateString})`, 
        font: { size: 16 } 
      },
    },
    scales: { y: { title: { display: true, text: 'Cents per Litre' } } }
  };

  return (
    <div className="chart-container">
      <p>{text.barChartDescription}</p>
      <Bar options={options} data={chartData} />
    </div>
  );
}
export default GradeComparisonChart;