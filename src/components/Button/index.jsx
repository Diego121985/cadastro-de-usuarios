import PropTypes from 'prop-types'
import {Button} from './styles'


function DefaultButton ({children,theme,...prosp}){
  //spread operator -> Todo o resto

    return(
        <Button {...prosp}theme={theme}>{children}</Button>
       
    )

}
DefaultButton.prototypes = {
    children: PropTypes.node.isRequired
}
    
    export default DefaultButton