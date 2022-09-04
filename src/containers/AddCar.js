import { connect } from 'react-redux'
//import { AddCar } from '../redux/actions'
import AddCar from '../components/AddCar'


const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(AddCar(car)),
    }
}

export default connect(null, mapDispatchToProps)(AddCar)