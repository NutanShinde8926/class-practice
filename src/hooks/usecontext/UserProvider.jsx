import { createContext } from "react";

const UserContext = createContext();

export default function UserProvider(){
    const UserName = "ABCD";
    return (
    <UserContext.Provider value={UserName} >
        <h4>Hello, {UserName}</h4>
        <ChildComp />
    </UserContext.Provider>
    );
}

function ChildComp() {
    return <AnotherComp />
}

function AnotherComp() {
    const user = UserContext(UserContext);
    return <h3>Hello again, {user}</h3>
}