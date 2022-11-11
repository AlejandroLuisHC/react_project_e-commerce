import DisplayUserData from "../../components/main/profile/DisplayUserData"
import UpdateForm from "../../components/main/profile/UpdateForm"

const Profile = () => {
    const styleMain = {
        marginTop: "30px",
        gridColumn: "2",
        display: "grid",
        gridTemplateColumns: "4fr 1fr",
        gap: "40px",
    }
    
    return (
        <main style={styleMain}>
            <DisplayUserData />
            <UpdateForm />
        </main>
    )
}

export default Profile