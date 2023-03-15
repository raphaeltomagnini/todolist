import React from "react";
import { useNavigate, useParams } from "react-router-dom"
import Button from "./Button";
import "./TaskDetails.css";


const TaskDetails = () => {
    const params = useParams();
    const history = useNavigate();

    //const handleBackButtonClick = () => {
    //        history.goBack();
   // };
    
    return (
       <>
        <div className="back-button-container">
            <Button onClick={()=> history(-1)}>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tenetur repudiandae perferendis quas, tempore tempora.

            </p>
        </div>
       
       </> 
    );
};

export default TaskDetails;
