// eslint-disable-next-line react/prop-types
const FormContainer = ({ key2, onRemove }) => {
  return (
    <div className="educationForm">
      <div className="companyName">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          placeholder="Enter company name .."
        />
      </div>
      <div className="postionName">
        <label htmlFor="postionName">Position</label>
        <input type="text" id="postionName" placeholder="Enter position .." />
      </div>
      <div className="workingTime">
        <span className="startDate">
          <label htmlFor="jobStart">Start Date</label>
          <input type="date" name="jobStart" />
        </span>
        <span className="endDate">
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" />
        </span>
      </div>
      <div className="detail">
        <label htmlFor="jobDetail">Job Description</label>
        <textarea name="jobDetail" />
      </div>
      <button onClick={() => onRemove(key2)}>Remove education</button>
    </div>
  );
};

export default FormContainer;
