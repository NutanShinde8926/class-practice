export default function NewComp() {
    const userName = 'ABCD'
    return(
        <>
        <h3>Hello from NewComp, {userName}</h3>
        <childComp 
        name={userName}
        />
        </>
    );
}

function childComp({ name }) {
    return (
        <AnotherComp
        value = {name}
        />

    );
}
function AnotherComp({ value }) {
    return <h4>Hello again, {value}</h4>
}