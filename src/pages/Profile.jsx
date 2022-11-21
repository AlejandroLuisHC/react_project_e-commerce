import { useSelector } from "react-redux"
import DisplayUserData from "../components/main/profile/DisplayUserData"
import UpdateForm from "../components/main/profile/UpdateForm"
import WishListDisplay from "../components/main/profile/WishListDisplay"

const Profile = () => {
    const styleMain = {
        marginTop: "30px",
        gridColumn: "2",
    }
    const styleSection = {
        display: "grid",
        gridTemplateColumns: "4fr 1fr",
        gap: "40px",
    }

    // Upload default form values depending on the user in the store
    const user = useSelector((state) => state.userData.user)

    return (
        <>
            <main style={styleMain}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <WishListDisplay />
                </div>
                <section style={styleSection}>
                    <DisplayUserData user = {user} />
                    <UpdateForm user = {user} />
                </section>
            </main>
        </>
    )
}

export default Profile