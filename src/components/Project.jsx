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
                      <input type="text" id="project" placeholder="Gitlytics" value = {e.project} onChange={e => handleProjects(e, i)}></input>
                    </div>

                    <div className="form">
                    <label htmlFor="tools">Tools/Frameworks Used</label>
                    <input type="text" id="tools" placeholder="Python, Flask, React, PostgreSQL, Docker" value = {e.tools} onChange={e => handleProjects(e, i)}></input>
                    </div>

                    <div className="form">
                      <label htmlFor="builtDate">Date</label>
                      <input type="text" id="builtDate" placeholder="June 2020" value = {e.builtDate} onChange={e => handleProjects(e, i)}></input>
                    </div>

                    <div className="form">
                        <label htmlFor="desc">Description</label>
                        <textarea id="desc" value = {e.desc} placeholder={"Developed a full-stack web application using with Flask serving a REST API with React as the frontend. \nImplemented GitHub OAuth to get data from user's repositories."} onChange={e => handleProjects(e, i)}></textarea>
                    </div>
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