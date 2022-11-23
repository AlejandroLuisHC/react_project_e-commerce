import { ScaleLoader } from 'react-spinners';

const Spinner = () => {
    const styleMain = {
        gridColumn: "1 / span 3",
        gridRow: "1 / span 3"
    }
    const spinnerStyle = {
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }

    return (
        <div style={styleMain}>
            <div  style={spinnerStyle}>
                <ScaleLoader color="#ee4343" height={140} margin={5} width={8} />
            </div>
        </div>
    )
}

export default Spinner