const Education = ({educations, handleAddEducation, handleDeleteEdu, handleEducation}) => {
    return (
        <>
            <div className="title">Education</div>

            {educations.map((e, i) => (
              <div className="boxed" key = {i}>
              <form>
                <button className="remove" onClick={() => handleDeleteEdu(i)}>Remove Education</button>

                <div className="form">
                  <label htmlFor="degree">Degree Name</label>
                  <input type="text" id="degree" placeholder="Bachelor of Arts in Computer Science, Minor in Business" onChange={e => handleEducation(e, i)}></input>
                </div>

                <div className="form">
                  <label htmlFor="college">School Name</label>
                  <input type="text" id="college" placeholder="Southwestern University" onChange={e => handleEducation(e, i)}></input>
                </div>

                <div className="together2">
                  <div className="form">
                    <label htmlFor="place">City Name</label>
                    <input type="text" id="place" placeholder="Georgetown, TX" onChange={e => handleEducation(e, i)}></input>
                  </div>

                  <div className="form">
                    <label htmlFor="date">Graduation Date</label>
                    <input type="text" id="date" placeholder="May 2021" onChange={e => handleEducation(e, i)}></input>
                  </div>
                </div>
              </form>
              </div>
            ))}

            <div className="centered">
              <button className="add" onClick={handleAddEducation}>Add Education</button>
            </div>
        </>
    )
}

export default Education;