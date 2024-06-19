import React, { useState } from "react";
import { Link } from "react-router-dom";

function Content(props) {
  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
          <span className="navbar-brand mb-0 h1 ">GUVI COURSES</span>
        </nav>
      </div>
      <nav>
        <div id="nav" className="bg-black px-5 p-2 ">
          <Link to="/"className="px-2">ALL</Link>
          <Link to="/Full-Stack" className="px-2">FULL STACK DEVELOPMENT</Link>
          <Link to="/Data_Science" className="px-2">DATA_SCIENCE</Link>
          <Link to="/Cyber_Security" className="px-2">CYBER_SECURITY</Link>
          <Link to="/career"className="px-2">CAREER</Link>
        </div>
      </nav>

      <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 px-5 mb-3">
        <div class="col">
          <div class="card h-100">
            <img src={props.imgAddress1}
              class="card-img-top"
              alt="UI/UX Designer"
            ></img>
            <div class="card-body">
              <h5 class="card-title">{props.cardTitle1}</h5>
              <p class="card-text">
                <div>{props.cardText1}</div>
                <br></br>
                <div>READ MORE »</div>
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
 
           <div class="card h-100">
            <img src={props.imgAddress2} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">{props.cardTitle2}</h5>
              <p class="card-text">
                <div>{props.cardText2}</div>
                <br></br>

                <div>READ MORE »</div>
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">

             <img src={props.imgAddress3} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">{props.cardTitle3}</h5>
              <p class="card-text">
                <div>{props.cardText3}</div>
                <br></br>

                <div>READ MORE »</div>
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;