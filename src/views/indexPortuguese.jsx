import Container1PT from "../components/components-pt/container1PT";
import Container3PT from "../components/components-pt/container3PT";
import Container4PT from "../components/components-pt/container4PT";
import FooterPT from "../components/components-pt/footerCompPT";
import HeaderPT from "../components/components-pt/headerPT";
import Container2 from "../components/container2";

const indexPortuguese = () =>{
    return(
        <div className="index-portuguese">
            <HeaderPT/>
            <Container1PT/>
            <Container2/>
            <Container3PT/>
            <Container4PT/>
            <FooterPT/>
        </div>
    )
};

export default indexPortuguese;