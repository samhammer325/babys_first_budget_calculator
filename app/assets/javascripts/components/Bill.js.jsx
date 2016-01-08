class Bill extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
  return(<div className='row'>
          <div className='blue-grey darken-1'>
            <div className='white-text'>
              <p>{this.props.name}</p>
            </div>
            <div className='card-action'>
              <a>{this.bills}</a><a className='center'>{this.props.balance}</a>
            </div>
          </div>
          
        </div>);
}
}