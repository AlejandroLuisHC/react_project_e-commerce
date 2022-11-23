import { useSelector } from "react-redux"
import DisplayUserData from "../components/main/profile/DisplayUserData"
import UpdateForm from "../components/main/profile/UpdateForm"
import WishListDisplay from "../components/main/profile/WishListDisplay"
import { MainProfile, SectionProfile } from "../components/style/profileStyle"

const Profile = () => {
    // Upload default form values depending on the user in the store
    const user = useSelector((state) => state.userData.user)

    return (
        <>
            <MainProfile>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <WishListDisplay />
                </div>
                <SectionProfile>
                    <DisplayUserData user = {user} />
                    <UpdateForm user = {user} />
                </SectionProfile>
            </MainProfile>
        </>
    )
}

export default Profile