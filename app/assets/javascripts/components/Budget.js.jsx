class Budget extends React.Component{
  constructor(props){
    super(props);
  }


render(){
  let bills = this.props.bills.map( bill => {
    let key = `bill-${bill.id}`;
    return(<Bill key = {key} {...bill} />);
  });
  return(<div className='card blue-grey darken-1'>
           <div className='col-4'>
             <div className='card-action'>
               <a onClick={this.budgets}> <span className='center'>{this.props.budget.balance}</span></a>
               <a  className='btn waves-effect white-text' onClick={() => this.props.deleteBudget(this.props.id)}>X</a>
             </div>
             <div className='card-content white-text' onClick={this.loadBill}>
               <p>{this.props.budget.name}</p>
             </div>
             {bills}
           </div>
         </div>);
}

}