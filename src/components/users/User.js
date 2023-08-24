import React, { Fragment, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";
import PropTypes from "prop-types";
import Repo from "../Repos/Repos";

const User = ({ user, loading, getUser, getUserRepos, repos }) => {
 

  const { username } = useParams();
  useEffect(() => {
    getUser(username);
    getUserRepos(username);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;
  if (loading) return <Spinner></Spinner>;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>
      Hireabe:{""}
      {hireable ? (
        <i className="fas fa-check text-sucess" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location:{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Mt Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>UserName:</strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>UserName:</strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>UserName:</strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
        <div className="card tect-center">
          <div className="badge badge-primary">Followers:{followers}</div>
          <div className="badge badge-success">Following:{following}</div>
          <div className="badge badge-light">Public Repos:{public_repos}</div>
          <div className="badge badge-dark">Public gists:{public_gists}</div>
        </div>
      </div>
      <Repo repos={repos} />
    </Fragment>
  );
};
User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};
export default User;
