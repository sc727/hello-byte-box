export interface ECBRate {
  date: string;
  depositFacility: number;
  mainRefinancing: number;
  marginalLending: number;
}

export const ecbRatesData: ECBRate[] = [
  { date: "2025-06-11", depositFacility: 2.00, mainRefinancing: 2.15, marginalLending: 2.40 },
  { date: "2025-04-23", depositFacility: 2.25, mainRefinancing: 2.40, marginalLending: 2.65 },
  { date: "2025-03-12", depositFacility: 2.50, mainRefinancing: 2.65, marginalLending: 2.90 },
  { date: "2025-02-05", depositFacility: 2.75, mainRefinancing: 2.90, marginalLending: 3.15 },
  { date: "2024-12-18", depositFacility: 3.00, mainRefinancing: 3.15, marginalLending: 3.40 },
  { date: "2024-10-23", depositFacility: 3.25, mainRefinancing: 3.40, marginalLending: 3.65 },
  { date: "2024-09-18", depositFacility: 3.50, mainRefinancing: 3.65, marginalLending: 3.90 },
  { date: "2024-06-12", depositFacility: 3.75, mainRefinancing: 4.25, marginalLending: 4.50 },
  { date: "2023-09-20", depositFacility: 4.00, mainRefinancing: 4.50, marginalLending: 4.75 },
  { date: "2023-08-02", depositFacility: 3.75, mainRefinancing: 4.25, marginalLending: 4.50 },
  { date: "2023-06-21", depositFacility: 3.50, mainRefinancing: 4.00, marginalLending: 4.25 },
  { date: "2023-05-10", depositFacility: 3.25, mainRefinancing: 3.75, marginalLending: 4.00 },
  { date: "2023-03-22", depositFacility: 3.00, mainRefinancing: 3.50, marginalLending: 3.75 },
  { date: "2023-02-08", depositFacility: 2.50, mainRefinancing: 3.00, marginalLending: 3.25 },
  { date: "2022-12-21", depositFacility: 2.00, mainRefinancing: 2.50, marginalLending: 2.75 },
  { date: "2022-11-02", depositFacility: 1.50, mainRefinancing: 2.00, marginalLending: 2.25 },
  { date: "2022-09-14", depositFacility: 0.75, mainRefinancing: 1.25, marginalLending: 1.50 },
  { date: "2022-07-27", depositFacility: 0.00, mainRefinancing: 0.50, marginalLending: 0.75 },
  { date: "2019-09-18", depositFacility: -0.50, mainRefinancing: 0.00, marginalLending: 0.25 },
];

export const getCurrentRates = () => {
  return ecbRatesData[0]; // Most recent data
};

export const getRateHistory = (rateType: 'depositFacility' | 'mainRefinancing' | 'marginalLending') => {
  return ecbRatesData.map(rate => ({
    date: rate.date,
    value: rate[rateType]
  }));
};

export const getRateTypeLabel = (rateType: 'depositFacility' | 'mainRefinancing' | 'marginalLending') => {
  const labels = {
    depositFacility: 'Deposit Facility Rate',
    mainRefinancing: 'Main Refinancing Rate',
    marginalLending: 'Marginal Lending Rate'
  };
  return labels[rateType];
};