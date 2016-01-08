class Budgets extends React.Component{
  constructor(props){
    super(props); 
    this.newBudget = this.newBudget.bind(this);
    this.state = { budgets: [] }
  }
  componentDidMount(){
    $.ajax({
      url: '/all_budgets'
    }).success( data => {
      this.setState({budgets: data.budgets })
    })
  }
  newBudget(e){
    e.preventDefault();
    let self = this;
    $.ajax({
      url: '/budgets',
      type: 'POST',
      data: { budget: { name: this.refs.budgetName.value, balance: this.refs.budgetCap.value }}
    }).success(data => {
      // This is where it's failing, figure out why'
      let budgets = this.props.budgets;
      budgets.unshift(data);
      self.refs.newBudget.value = null;
      self.setState({ budgets: budgets });
    }).error( data => {
      console.log('erroR');
    });
  }

  deleteBudget() {
    $.ajax({
      url: '/boards/' + id,
      type: 'DELETE',
      }).success(data =>  {
        this.setState({budget: data});
      });
    }

  render(){
    let budgets = [];
    this.state.budgets.map( budget => {
      budgets.push(<Budget key={`budget-${budget.id}`} {...budget} />)
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
            </div>
            );
  }

}