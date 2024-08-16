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
                  <input type="text" id="position" placeholder="Undergraduate Research Assistant" value = {e.position} onChange={e => handleExperiences(e, i)}></input>
                </div>

                <div className="together2">
                  <div className="form">
                    <label htmlFor="employer">Company Name</label>
                    <input type="text" id="employer" placeholder="Texas A&M University" value = {e.employer} onChange={e => handleExperiences(e, i)}></input>
                  </div>

                  <div className="form">
                    <label htmlFor="city">City Name</label>
                    <input type="text" id="city" placeholder="College Station, TX" value = {e.city} onChange={e => handleExperiences(e, i)}></input>
                  </div>
                </div>

                <div className="together2">
                  <div className="form">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="text" id="startDate" placeholder="June 2020" value = {e.startDate} onChange={e => handleExperiences(e, i)}></input>
                  </div>

                  <div className="form">
                    <label htmlFor="endDate">End Date</label>
                    <input type="text" id="endDate" placeholder="Present" value = {e.endDate} onChange={e => handleExperiences(e, i)}></input>
                  </div>
                </div>

                <div className="form">
                    <label htmlFor="task">Job Responsibilities</label>
                    <textarea id="task" value = {e.task} placeholder={"Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems. \nDeveloped a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data."} onChange={e => handleExperiences(e, i)}></textarea>
                </div>
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