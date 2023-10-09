import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

   
               <h2>
               {
                 resumeData.aboutme
               }
               </h2>

               <div className="row">

                  <div className="columns contact-details">
                  <br/>
                  <h2 className="address">
       						<span>-Vivek Kumar</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </h2>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}