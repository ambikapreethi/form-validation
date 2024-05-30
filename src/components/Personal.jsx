import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/mainForm.css";

function PersonalInfo()
{
   
    const { register, handleSubmit, errors } = useForm();
       const[activeTab,setActiveTab]=useState("Personal");

        const handleTabClick=(tab)=>
           {
            setActiveTab(tab);
           }
         
           const onSubmit = (data) => {
            const alldata=JSON.stringify(data);
            alert(alldata);
        } 
            
  return(
    <div className="container">
        <div className="tabs">
            <button onClick={()=>handleTabClick("Personal")}>PersonalInfo</button>
            <button onClick={()=>handleTabClick("Education")}>Education</button>
            <button onClick={()=>handleTabClick("Document")}>Document</button>
        </div>
        
            {activeTab==="Personal" && 
            <div className="personalInfo">
                <h2>Personal Details:</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <table className="personal_table">
                        <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>
                            <input type="text" name="firstName" {...register("firstName",{ required: true })}/>
                            <span>  *</span><br/>
                             </td>
                        </tr>
                       
                        <tr>
                            <td>Last Name:</td>
                            <td>
                            <input type="text"  name="lastName" {...register("lastName",{ required: true })}/>
                            <span>  *</span><br/>
                            </td>
                        </tr>
                       
                        <tr>
                            <td>Password:</td>
                            <td>
                            <input type="password" name="password" {...register("password",{ required: true })}/>
                            <span>  *</span><br/>
                            </td>
                        </tr>
                     
                        <tr>
                            <td>Email:</td>
                            <td>
                            <input type="email" name="email" {...register("email",{ required: true })}/>
                            <span>  *</span><br/>
                            </td>
                        </tr>
                        </tbody>
                       </table>
                    
                    <button className="nextBtn"type="button" onClick={()=>handleTabClick("Education")} >Next</button>
                </form>
            </div>
            }

        {activeTab==="Education" && <div className="educationInfo">
                <h2>Educational Details:</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <table className="education_table">
                        <tbody>
                        <tr>
                            <td>Degree:</td>
                            <td>
                            <input type="text" name="degree"  {...register("degree",{ required: true })} />
                            <span>  *</span><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>Institution:</td>
                            <td>
                            <input type="text" name="institution" {...register("institution",{ required: true })}/>
                            <span>  *</span><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>Year:</td>
                            <td>
                            <input type="text" name="year" {...register("year",{ required: true })}/>
                            <span>  *</span><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>Place:</td>
                            <td>
                            <input type="text" name="place" {...register("place",{ required: true })} />
                            <span>  *</span><br/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    
                    <button className="prevBtn" type="button" onClick={()=>handleTabClick("Personal")} >Prev</button>
                    <button className="nextBtn" type="submit" onClick={()=>handleTabClick("Document")}>Next</button>
                </form>
            </div>
        
        }

        
{activeTab==="Document" && 
            <div className="documentInfo">
                <h2>Document Details:</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <table className="document_table">
                        <tr>
                            <td>Passport:</td>
                            <td>
                            <input type="text" name="passport"  {...register("passport",{ required: true })} />
                            <span>  *</span><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>Driving License:</td>
                            <td>
                            <input type="text" name="drivingLicense"  {...register("drivingLicense",{ required: true })} />
                            <span>  *</span><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>ID Card:</td>
                            <td>
                            <input type="text" name="idCard" {...register("idCard",{ required: true })} />

                            <span>  *</span><br/>
                            </td>
                        </tr>
                    </table>
                    
                    <button className="prevBtn"type="button" onClick={()=>handleTabClick("Education")} >Prev</button>
                    <button className="submitBtn" type="submit">Submit</button>
                </form>
            </div>
            }
         </div>)

  
}


export default PersonalInfo;