// eslint-disable-next-line react/prop-types
const FormContainer = ({ key2, onRemove }) => {
  return (
    <div className="education">
      <div className="collegeName">
        <label htmlFor="collegeName">College Name,{key2}</label>
        <input
          type="text"
          id="collegeName"
          placeholder="Enter college name .."
        />
      </div>
      <div className="courseName">
        <label htmlFor="courseName">Course name</label>
        <input type="text" id="courseName" placeholder="Enter course name " />
      </div>
      <div className="cgpa">
        <label htmlFor="cgpa">cgpa </label>
        <input type="text" maxLength="3" />
      </div>
      <div className="educationDate">
        <input type="date" />
        <input type="date" />
      </div>
      <button onClick={() => onRemove(key2)}>Remove education</button>
    </div>
  );
};

export default FormContainer;
