import { Row, Col } from "antd";
import News from "../components/News"
import Category from "../components/Category"

export default function Content() {
    return (
        <div className="content">
            <img style={{width:'100%'}} src="https://s3-alpha-sig.figma.com/img/40bd/ab4b/3152f5558106452e2227be7e95030ad5?Expires=1619395200&Signature=T1T8Y0BzQIP7HCR1OZazASz6rpMEL~~2B3IBiaowHO~KuEnIS0KAUfGjZhDEvV89Asu~nAKPsSZTG1Br~oTw-PoQRYntwd-f5xBv5L2dInsZBBFD1tFBSA7gGUkYryMxCTnte9TPoQSrxH-I2F9W~eFzp8dJ~olTBtDCv013lY~upGFR8gv1bA-D8t7S6NfBJqGO9dLRTsjq0KPhTpJAIcIFD2g71XE9tg6GuOA26bofurwMWqjbis6MoQaWVCCGKOCTOEuXgAjqYpXV9pUE20xz6NRW53RQ1gZpP~IpfUtI38pPXU-wGF13X8Dy4UXjg0IAIxFhl7Msqb5iMrNoEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            <Row className="container">
                <News />
            </Row>
            <img style={{width:'100%'}} src="https://s3-alpha-sig.figma.com/img/b04b/7f4b/52d69a3bd56291b319f8f3df363c3c0e?Expires=1619395200&Signature=XD40Gj~DS08u8O0dl-hjARTipylNlJcioW-FVt9XrX7q1M3ERyeAfPlqkMDTIDTN9R8n3oX4Tvke8hUUFRJ0KkKYUslSnEFtJbO0paRfFWIHCFO~I3AWOPzrJRbYRzWuIB8RorNcpnHMmKSbdUlCIQoBx4cJUYoov1YhiDvLX4CpW-oryT3kdbWm7sgIGtsOi3r1UqPLtn9JqMDj5wI-clHH43LYI~7QhsfwsbpwUwxosEePq30dPeXBfm1eDWEZfpPFIJCjAacvwQ-Fjs2gndAyMn2-kk4XC3eqnDEtPGPr-KAdc1WH9ghFpwBGB4UUDb5OrV6Vm6PCPOaquRdERA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            <Row className="container">
                <Category />
            </Row>
        </div>           
    );
}