import { connect } from 'react-redux'
import AddCar from '../components/AddCar'
import { AddCar } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car)),
    }
}

export default connect(null, mapDispatchToProps)(AddCar)