class Budget extends React.Component{
  constructor(props){
    super(props);
  }


render(){
  return(<div>
          <div className='card blue-grey darken-1'>
            <div className='card content white-text'>
              <p>{this.props.balance}</p>
            </div>
            <div className='card-action'>
              <a onClick={this.budgets}>{this.props.name}</a>
            </div>
          </div>
        </div>);
}

}