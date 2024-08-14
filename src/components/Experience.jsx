const Experience = ({experiences, handleAddExperiences, handleExperiences, handleDeleteExp}) => {
    return (
        <>
        <div className="title">Experience</div>
            {experiences.map((e, i) => (
              <div className="boxed" key = {i}>
              <form>

                <button className="remove" onClick={() => handleDeleteExp(i)}>Remove Experience</button>
                <div className="form">
                  <label htmlFor="position">Position Title</label>
                  <input type="text" id="position" placeholder="Undergraduate Research Assistant" onChange={e => handleExperiences(e, i)}></input>
                </div>

                <div className="together2">
                  <div className="form">
                    <label htmlFor="employer">Company Name</label>
                    <input type="text" id="employer" placeholder="Texas A&M University" onChange={e => handleExperiences(e, i)}></input>
                  </div>

                  <div className="form">
                    <label htmlFor="city">City Name</label>
                    <input type="text" id="city" placeholder="College Station, TX" onChange={e => handleExperiences(e, i)}></input>
                  </div>
                </div>

                <div className="together2">
                  <div className="form">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="text" id="startDate" placeholder="June 2020" onChange={e => handleExperiences(e, i)}></input>
                  </div>

                  <div className="form">
                    <label htmlFor="endDate">End Date</label>
                    <input type="text" id="endDate" placeholder="Present"onChange={e => handleExperiences(e, i)}></input>
                  </div>
                </div>

                <div className="form">
                    <label htmlFor="task">Job Responsibilities</label>
                    <div className="tasks">
                    <input type="text" id="task" placeholder="Developed sum" onChange={e => handleExperiences(e, i)}></input>
                    <button className="delete">X</button>
                  </div>
                </div>

                <button className="job">Add Responsibility</button>
              </form>
              </div>
            ))}

            <div className="centered">
              <button className="add" onClick={handleAddExperiences}>Add Experience</button>
            </div>
            </>



    )


}


export default Experience;