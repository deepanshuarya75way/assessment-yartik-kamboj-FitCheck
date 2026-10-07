export default function EditResume({ currResumeData, setCurrentResData }) {
  return (
    <div className="modalView w-full h-full">
      <div className="header flex justify-between items-center py-4 px-8 bg-surface">
        <p className="text-2xl ">Edit Resume</p>
        <button className="px-3 py-2 bg-primary text-gray-50" onClick={handleSaveResume}>Save Resume</button>
      </div>
      <div className="body ">
        <div className="prfileContainer">
          <label htmlFor="profile">Profile</label>
          <textarea name="profile" id="profile" value={currResumeData.profile} onChange={handleChange}></textarea>
        </div>
        <div className="experienceContainer">
          <p>Experience</p>
          {currResumeData.experience.map((exp, idx) =>
            <div className="exp">
              <label htmlFor="exptitle">Experience Title:</label>
              <input type="text" name="exptitle" value={exp.title} />
              <label htmlFor="expat">Experience at:</label>
              <input type="text" name="expat" value={exp.at} />
              <label htmlFor="expdur">Experience duration:</label>
              <input type="text" name="expdur" value={exp.dur} />
            </div>
          )}
        </div>
        <div className="projectContainer">
          <p>Projects</p>
          {currResumeData.projects.map((proj, idx) =>
            <div className="proj" key={idx}>
              <label htmlFor="projtitle">Project Title:</label>
              <input type="text" name="projtitle" value={proj.title} />
              <label htmlFor="projdes">Description:</label>
              <input type="text" name="projdes" value={proj.des} />
              <label htmlFor="projdur">duration:</label>
              <input type="text" name="projdur" value={proj.dur} />
            </div>
          )}
        </div>
        <div className="projectContainer">
          <p>skills</p>
          {currResumeData.experience.map((skill, idx) =>
            <div className="skills" key={idx} >
              <span>{skill}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}