class Budgets extends React.Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    $.ajax({
      url: '/budgets',
      type: 'GET'
    }).success(data => {
      this.setState({ budgets: data.budgets })
    });
  }

newBudget(){
  $.ajax({
    url: '/budgets',
    type: 'POST',
    data: { budget: { body: this.refs.newBudget.value }}
  }).success( data => {
    let budgets = this.state.budgets;
    budgets.unshift(data.budget);
    this.refs.newBudget.value = null;
    this.setState({ budgets: budgets });
  }).error( data => {
    console.log('erroR');
  });
}


render(){
  let budgets = this.props.budgets.map( budget => {
    let key = `budget-${budget.id}`;
    return(<Budget key = {key} {...budget} />);
  });
  return(<div className='container'>
            <form onSubmit={this.submitBudget}>
              <div className='input-field'>
                <input type='text' placeholder='Budget Name' autoFocus='true' ref='budgetName' />
                <input type='number' placeholder='Budget Cap' autoFocus='true' ref='budgetCap' />
                <button type='submit' className='waves-effect waves-light btn'>Submit</button>
              </div>
            </form>
          </div>);
}


}