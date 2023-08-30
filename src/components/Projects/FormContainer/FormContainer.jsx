// eslint-disable-next-line react/prop-types
const FormContainer = ({ key2, onRemove }) => {
  return (
    <div className="projectForm">
      <div className="projectName">
        <label htmlFor="pName">Project Name</label>
        <input type="text" name="pName"></input>
      </div>
      <div className="projectDesc">
        <label htmlFor="pDesc">Project Description</label>
        <input type="text" name="pDesc"></input>
      </div>
      <div className="projectUrl">
        <label htmlFor="pUrl">Project url</label>
        <input type="text" name="pUrl"></input>
      </div>
      <div className="projectGitUrl">
        <label htmlFor="pGitUrl">Project github addres</label>
        <input type="text" name="pGitUrl"></input>
      </div>
      <div className="projectSkills">
        <label htmlFor="pSkills">Skills</label>
        <textarea name="pSkills" />
      </div>
      <button onClick={() => onRemove(key2)}>Remove project</button>
    </div>
  );
};

export default FormContainer;
