import { calculateInvestmentResults, formatter } from "../util/investment";
const Result = ({ input }) => {
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);
  console.log(input);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Years</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((value) => {
          return (
            <tr key={value.year}>
              <td>{value.year}</td>
              <td>{formatter.format(value.annualInvestment)}</td>
              <td>{formatter.format(value.interest)}</td>
              <td>{formatter.format(value.valueEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Result;
