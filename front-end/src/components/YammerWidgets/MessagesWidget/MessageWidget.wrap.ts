import {connect} from "react-redux";
import {MessageWidgetWrapper} from "./MessageWidget";

const mapStateToProps = (state: any) => {
    return {
        services: state.services.services
    }
}


export default connect(mapStateToProps, null)(MessageWidgetWrapper);