const Project = ({projects, handleAddProjects, handleDeletePro, handleProjects}) => {
    return (
        <>
            <div className="title">Projects</div>
            
            {projects.map((e, i) => (
              <div className="boxed" key ={i}>
                <button className="remove" onClick={() => handleDeletePro(i)}>Remove Project</button>
                  <form>

                    <div className="form">
                      <label htmlFor="project">Project Name</label>
                      <input type="text" id="project" placeholder="Gitlytics" onChange={e => handleProjects(e, i)}></input>
                    </div>

                    <div className="form">
                    <label htmlFor="tools">Tools/Frameworks Used</label>
                    <input type="text" id="tools" placeholder="Python, Flask, React, PostgreSQL, Docker" onChange={e => handleProjects(e, i)}></input>
                    </div>

                    <div className="form">
                      <label htmlFor="builtDate">Date</label>
                      <input type="text" id="builtDate" placeholder="June 2020" onChange={e => handleProjects(e, i)}></input>
                    </div>

                    <div className="form">
                      <label htmlFor="desc">Description</label>
                      <div className="tasks">
                        <input type="text" id="desc" placeholder="Developed sum"></input>
                        <button className="delete">X</button>
                      </div>
                    </div>

                    <button className="job">Add Description</button>
                  </form>
              </div>
              ))}

            <div className="centered">
              <button className="add" onClick={handleAddProjects}>Add Project</button>
            </div>
        </>
    )



}

export default Project;