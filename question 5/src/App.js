import React from 'react'
import FocusableInput from "./components/FocusableInput";
import {createRoot} from 'react-dom/client'
class Input extends React.PureComponent {
  render(){
    let { forwardedRef, ...otherProps } = this.props;
    return <input {...otherProps} ref = {forwardedRef/>;
  }
}
const TextInput = React.forwardRef((props, ref) =>{
  return <Input (...props) forwardedRef={ref}/>;
});
class FocusableInput extends React.Component {
  constructor(props){
    super(props);
    this.ref = React.createRef();
  }
  componentDidUpdate(prevProps){
    if (!prevProps.focused && this.props.focused &&document.activeElement !== this.ref.current){
      this.ref.current.focus();
    }
  }
  componentDidMount(){
    if(this.props.focused){
      this.ref.current.focus();
    }
  }
  render(){
    return <TextInput ref={this.ref}/>;
  }
}
FocusableInput.defaultProps = {
  focused:false
};

const App = (props) => <FocusableInput focused={props.focused} />;
document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<App />)
export default App