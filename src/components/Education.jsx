const Education = ({educations, handleAddEducation, handleDeleteEdu, handleEducation}) => {
    return (
        <>
            <div className="title">Education</div>

            {educations.map((e, i) => (
              <div className="boxed" key = {i}>
                <button className="remove" onClick={() => handleDeleteEdu(i)}>Remove Education</button>
              <form>
                <div className="form">
                  <label htmlFor="college">School Name</label>
                  <input type="text" id="college" placeholder="Southwestern University" value = {e.college} onChange={e => handleEducation(e, i)}></input>
                </div>

                <div className="form">
                  <label htmlFor="degree">Degree Name</label>
                  <input type="text" id="degree" placeholder="Bachelor of Arts in Computer Science, Minor in Business" value = {e.degree} onChange={e => handleEducation(e, i)}></input>
                </div>

                <div className="together2">
                  <div className="form">
                    <label htmlFor="place">City Name</label>
                    <input type="text" id="place" placeholder="Georgetown, TX" value = {e.place} onChange={e => handleEducation(e, i)}></input>
                  </div>

                  <div className="form">
                    <label htmlFor="date">Graduation Date</label>
                    <input type="text" id="date" placeholder="May 2021" value = {e.date} onChange={e => handleEducation(e, i)}></input>
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