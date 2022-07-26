import axios from "axios";

const TaskData=()=>{
    const Data=await axios.get("https://kanban-board-react.herokuapp.com/api/getTasks");

};

export default {TaskData,Data}  ;
