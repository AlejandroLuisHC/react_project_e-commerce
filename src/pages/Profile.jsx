import DisplayUserData from "../components/main/profile/DisplayUserData"
import UpdateForm from "../components/main/profile/UpdateForm"

const Profile = () => {
    const styleMain = {
        marginTop: "30px",
        paddingLeft: "20px",
        gridColumn: "2",
        display: "grid",
        gridTemplateColumns: "4fr 1fr",
        gap: "40px",
    }
    const styleAside = {
        backgroundColor: "#bbc",
        padding: "10px 5px 10px 10px"
    }
    
    return (
        <>
            <aside className="d-flex justify-content-between" style={styleAside}>
                <h3>Favorite Products:</h3>
                <div>Wishlist</div>
            </aside>
            <main style={styleMain}>
                <DisplayUserData />
                <UpdateForm />
            </main>
        </>
    )
}

export default Profile