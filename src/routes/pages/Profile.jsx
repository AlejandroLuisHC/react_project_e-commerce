import UpdateForm from "../../components/main/profile/update_form/UpdateForm"

const Profile = () => {
    const styleMain = {
        marginTop: "30px",
        gridColumn: "2",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        AlignItems: "start",
        gap: "40px",
    }
    
    return (
        <main style={styleMain}>
            <UpdateForm />
        </main>
    )
}

export default Profile