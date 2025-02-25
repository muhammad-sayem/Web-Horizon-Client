import { Navigate } from "react-router-dom";
import UseRole from "../hooks/useRole";
import LoadingSpinner from "../Shared/LoadingSpinner";


const ModeratorRoute = ({children}) => {
    const [role, isLoading] = UseRole();
    
    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(role === 'Moderator'){
        return children;
    }

    return <Navigate to='/dashboard' replace={true}></Navigate>
};

export default ModeratorRoute;