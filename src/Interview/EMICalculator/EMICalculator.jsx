import { useEffect, useState } from "react";
import "./styles.css";
import { tenureData } from "../Constants";
const EMICalculator = () => {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }

    const emi = calculateEMI(downPayment);
    setEmi(emi);
  }, [tenure]);

  const updateEMI = (e) => {
    if (!cost) return;
    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    const emi = calculateEMI(dp);
    setEmi(emi.toFixed(0));
  };
  const updateDownPayment = (e) => {
    if (!cost) return;
    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    const dp = calculateDP(emi);
    setDownPayment(dp);
  };

  const calculateDP = () => {
    if (!cost) return;

    const downPaymentPercentage = 100 - (emi / calculateEMI(0)) * 100;

    return Number((downPaymentPercentage / 100) * cost).toFixed(0);
  };
  const calculateEMI = (downPayment) => {
    if (!cost) return;

    const loanAmt = cost - downPayment;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;

    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
      ((1 + rateOfInterest) ** numOfYears - 1);

    return Number((EMI / 12).toFixed(0));
  };
  return (
    <div className="emi__container">
      <h1>EMI Calculator</h1>

      <h4>Total Cost of Asset</h4>
      <input
        type="number"
        placeholder="Enter Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <h4>Interest Rate (in %)</h4>
      <input
        type="number"
        placeholder="Enter Interest Rate (in %)"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />
      <h4>Processing Fee (in %)</h4>
      <input
        type="number"
        placeholder="Enter Processing Fee (in %)"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      />

      <h4>Down Payment</h4>
      <span className="title">
        Total Down Payment -{" "}
        {(Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)}
      </span>
      <div className="slider__container">
        <input
          type="range"
          className="slider"
          min={0}
          max={cost}
          value={downPayment}
          onChange={updateEMI}
        />
        <div className="lables">
          <label htmlFor="">0%</label>
          <b>{downPayment}</b>
          <label htmlFor="">100%</label>
        </div>
      </div>
      <h4>Loan Per Month</h4>
      <span className="title">
        Total Loan Amount - {(emi * tenure).toFixed(0)}
      </span>
      <div className="slider__container">
        <input
          type="range"
          className="slider"
          min={calculateEMI(cost)}
          max={calculateEMI(0)}
          value={emi}
          onChange={updateDownPayment}
        />
        <div className="lables">
          <label htmlFor="">{calculateEMI(cost)}</label>
          <b>{emi}</b>
          <label htmlFor="">{calculateEMI(0)}</label>
        </div>
      </div>

      <h4>Tenure</h4>
      <div className="tenure-container">
        {tenureData.map((item) => (
          <button
            className={`tenure-btn ${tenure === item ? "selected" : ""}`}
            onClick={() => setTenure(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EMICalculator;
