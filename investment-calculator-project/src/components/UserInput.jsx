

function UserInput({ onInputChange, userInput }) {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(e) => onInputChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(e) => onInputChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(e) => onInputChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(e) => onInputChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
