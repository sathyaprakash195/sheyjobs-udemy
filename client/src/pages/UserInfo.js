import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
function UserInfo({ match }) {
  const { users } = useSelector((state) => state.usersReducer);

  const user = users.find((user) => user._id == match.params.id);
  return (
    <div>
      <DefaultLayout>
        {user && (
          <div>
            <h3>
              <b>Personal inforamtion</b>
            </h3>
            <p>
              <b>First name : </b>
              {user.firstName}
            </p>
            <p>
              <b>Last name : </b>
              {user.lastName}
            </p>
            <p>
              <b>Email : </b>
              {user.email}
            </p>
            <p>
              <b>Mobile Number : </b>
              {user.mobileNumber}
            </p>
            <p>
              <b>Address : </b>
              {user.address}
            </p>

            <hr />
            <h3>
              <b>Skills</b>
            </h3>

            {user.skills.map((skill) => {
              return <li>{skill}</li>;
            })}

            <hr />
            <h3>
              <b>Education</b>
            </h3>
            {user.education.map((education) => {
              return <li>{education}</li>;
            })}
            <hr />

            <h3>
              <b>Projects</b>
            </h3>
            {user.projects.map((project) => {
              return <li>{project}</li>;
            })}

            <hr />
            <h3>
              <b>Experience</b>
            </h3>
            {user.experience.map((experience) => {
              return <li>{experience}</li>;
            })}
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default UserInfo;
