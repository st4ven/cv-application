const Personal = ({handleInfo, userInfo}) => {
    return (
        <>
        <div className="title">Personal Details</div>
            <div className="boxed">
            <form>
              <div className="together">
                <div className="form">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="Jake" value = {userInfo.firstName} onChange={handleInfo}></input>
                </div>

                <div className="form">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Ryan" value = {userInfo.lastName} onChange={handleInfo}></input>
                </div>
              </div>

              <div className="form">
                <label htmlFor="phoneNum">Phone Number</label>
                  <input type="text" id="phoneNum" placeholder="123-456-7890" value = {userInfo.phoneNum}onChange={handleInfo}></input>
              </div>

              <div className="form">
                <label htmlFor="emailAdd">Email Address</label>
                  <input type="text" id="emailAdd" placeholder="jake@su.edu" value = {userInfo.emailAdd} onChange={handleInfo}></input>
              </div>

              <div className="form">
                <label htmlFor="linkedIn">LinkedIn</label>
                  <input type="text" id="linkedIn" placeholder="linkedin.com/in/jake" value = {userInfo.linkedIn}onChange={handleInfo}></input>
              </div>

              <div className="form">
                <label htmlFor="githubLink">Github</label>
                  <input type="text" id="githubLink" placeholder="github.com/jake" value = {userInfo.githubLink}onChange={handleInfo}></input>
              </div>
            </form>
            </div>
        </>
    )
}

export default Personal;