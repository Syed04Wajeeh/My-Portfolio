// src/translations.js
export const translations = {
  en: {
    dashboardTitle: 'Canadian Retail Gasoline Prices',
    dataSourceNotice: 'Data shown is synthetic and for demonstration purposes only.',
    selectWeekLabel: 'Select week for comparison:', // <-- NEW
    lineChartTitle: 'Weekly Price Trend (per Litre)',
    lineChartDescription: 'Select a fuel company to see its average weekly price trend for regular unleaded gasoline.',
    selectCompanyLabel: 'Select Company:',
    barChartTitle: 'Price Comparison by Grade', // <-- MODIFIED
    barChartDescription: 'A comparison of average prices across different fuel grades for all companies.',
    fuelGradeLabel: 'Fuel Grade:',
    companies: { petroCanada: 'Petro-Canada', esso: 'Esso', shell: 'Shell', canadianTire: 'Canadian Tire' },
    fuelGrades: { regular: 'Regular', premium: 'Premium', diesel: 'Diesel' }
  },
  fr: {
    dashboardTitle: 'Prix de l\'Essence au Détail au Canada',
    dataSourceNotice: 'Les données affichées sont synthétiques et à des fins de démonstration uniquement.',
    selectWeekLabel: 'Sélectionnez la semaine pour la comparaison :', // <-- NEW
    lineChartTitle: 'Tendance Hebdomadaire des Prix (par Litre)',
    lineChartDescription: 'Sélectionnez une compagnie pétrolière pour voir la tendance hebdomadaire de son prix moyen pour l\'essence ordinaire sans plomb.',
    selectCompanyLabel: 'Sélectionnez une compagnie :',
    barChartTitle: 'Comparaison des Prix par Catégorie', // <-- MODIFIED
    barChartDescription: 'Une comparaison des prix moyens pour différentes catégories de carburant, toutes compagnies confondues.',
    fuelGradeLabel: 'Catégorie de carburant :',
    companies: { petroCanada: 'Petro-Canada', esso: 'Esso', shell: 'Shell', canadianTire: 'Canadian Tire' },
    fuelGrades: { regular: 'Ordinaire', premium: 'Super', diesel: 'Diesel' }
  }
};