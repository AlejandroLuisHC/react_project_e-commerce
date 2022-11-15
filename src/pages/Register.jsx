import ResgisterForm from "../components/main/register/RegisterForm";

const Register = () => {
  const styleMain = {
        marginTop: "30px",
        gridColumn: "2",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "start",
        alignItems: "center",
        gap: "40px",
    };

    return (
        <main style={styleMain}>
            <ResgisterForm />
        </main>
    )
};

export default Register;
