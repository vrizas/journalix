import UnderConstruction from "../../../assets/images/under-construction.jpg";
import DefaultLayout from "../../../layouts/DefaultLayout";

const Error404Component = () => {
    return (
        <DefaultLayout>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: "75vh",
                }}
            >
                <img
                    src={UnderConstruction}
                    alt="Under Construction"
                    width={350}
                />
                <p>We are currently working on this page</p>
                Image by{" "}
                <a href="https://www.freepik.com/free-vector/hand-drawn-construction-template_1631771.htm#query=under%20constuction&position=2&from_view=search&track=ais&uuid=d4d3c734-dc96-408a-8bc6-a689b6795c86">
                    Freepik
                </a>
            </div>
        </DefaultLayout>
    );
};

export default Error404Component;
