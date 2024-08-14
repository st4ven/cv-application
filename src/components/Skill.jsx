const Skill = ({skills, handleAddSkills, handleDeleteSkills, handleSkills}) => {
    return (
        <>
            <div className="title">Skills</div>

            {skills.map((e, i) => (
              <div className="boxed" key = {i}>

                <button className="remove" onClick={() => handleDeleteSkills(i)}>Remove Skill</button>
                <form>
                  <div className="form">
                    <label htmlFor="skillTitle">Skills Title</label>
                    <input type="text" id="skillTitle" placeholder="Languages" onChange={e => handleSkills(e, i)}></input>
                  </div>

                  <div className="form">
                    <label htmlFor="skill">Skills</label>
                    <input type="text" id="skill" placeholder="Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R" onChange={e => handleSkills(e, i)}></input>
                  </div>
                </form>
              </div>
            ))}

            <div className="centered">
              <button className="add" onClick={handleAddSkills}>Add Skill</button>
            </div>
        </>
    )
}

export default Skill;