class Bills extends React.Component{
  constructor(props){
    super(props);
    this.newBill = this.newBill.bind(this);
    this.state = { bills: [] };
  }
  componentDidMount(){
    $.ajax({
      url: '/bills',
      type: 'GET'
    }).success(data => {
      this.setState({ bills: data.bills })
    });
  }
  newBill(){
    $.ajax({
      url: '/bill',
      type: 'POST',
      data: { bill: { name: this.refs.billName.value, cost: this.refs.billCap.value }}
    }).success( data => {
      let bills = this.props.bills;
      bills.unshift(data.bills);
      this.refs.newBills.value = null;
      this.setState({ bills: bills });
    }).error( data => {
      console.log('erroR');
    });
  }




  render(){
    let bills = this.props.bills.map( bill => {
      let key = `bill-${bill.id}`;
      return(<Bill key = {key} {...bill} />);
    });
    return(<div className='container'>
              <form onSubmit={this.newBill}>
                <div className='input-field'>
                  <input type='text' placeholder='Bill Name' autoFocus='true' ref='billName' />
                  <input type='number' placeholder='Bill Cap' autoFocus='true' ref='billCap' />
                  <button type='submit' className='waves-effect waves-light btn'>Submit</button>
                </div>
              </form>
              {bills}
            </div>);
  }

  
}