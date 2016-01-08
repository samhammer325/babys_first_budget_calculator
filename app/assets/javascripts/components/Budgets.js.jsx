class Budgets extends React.Component{
  constructor(props){
    super(props);
    this.newBudget = this.newBudget.bind(this);
    this.state = { budgets: [] };
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
      data: { budget: { name: this.refs.budgetName.value, balance: this.refs.budgetCap.value }}
    }).success( data => {
      let budgets = this.props.budgets;
      budgets.unshift(data.budget);
      this.refs.newBudget.value = null;
      this.setState({ budgets: budgets });
    }).error( data => {
      console.log('erroR');
    });
  }


  render(){
    debugger
    let budgets = this.props.budgets.map( budget => {
      let key = `budget-${budget.id}`;
      return(<Budget key = {key} {...budget} />);
    });
    let bills = this.props.bills.map( bill => {
      let key = `bill-${bill.id}`;
      return(<Bill key = {key} {...bill} />);
    });
    return(<div className='container'>
              <form onSubmit={this.newBudget}>
                <div className='input-field'>
                  <input type='text' placeholder='Budget Name' autoFocus='true' ref='budgetName' />
                  <input type='number' placeholder='Budget Cap' autoFocus='true' ref='budgetCap' />
                  <button type='submit' className='waves-effect waves-light btn'>Submit</button>
                </div>
              </form>
              {budgets}
              <form onSubmit={this.newBill}>
                <div className='input-field'>
                  <input type='text' placeholder='Bill Name' autoFocus='true' ref='billName' />
                  <input type='number' placeholder='Bill Cap' autoFocus='true' ref='billCap' />
                  <button type='submit' className='waves-effect waves-light btn'>Submit</button>
                </div>
              </form>
              {bills}
            </div>
            );
  }


}