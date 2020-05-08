import React, { Component, lazy, Suspense } from 'react';
import {   Pagination, PaginationItem, PaginationLink,Collapse, Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label, } from 'reactstrap';
import ReactDOM from 'react-dom';
import { Bar, Line ,Pie,Doughnut,Polar} from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  CardColumns
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { copyFile } from 'fs';
import { thisExpression } from '@babel/types';
import { runInThisContext } from 'vm';

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};
function sayHello(){
  return ( <div>salmene</div>)
}
const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};
const divStyle = {
  width: '400px',
 
};

function sent(sentiment){
  if(sentiment<0) return "negative review"
  else if(sentiment==0) return "natural review"
  else return "positive review"
}

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class ActionPlan extends Component {
  
  componentDidMount() {
    
    fetch('http://localhost:9000/preproc/getAllTweets')
    .then(res => res.json())
    .then((data) => {
      this.setState({ tweets: data })
      console.log(this.state.tweets)
      
    })
    .catch(console.log)
    fetch('http://localhost:9000/preproc/performance')
    .then(res => res.json())
    .then((data) => {
      this.setState({ performances: data })
      console.log(this.state.performances)
      
      
    })
    .catch(console.log)

    fetch('http://localhost:9000/thoughts/bestTopics')
    .then(res => res.json())
    .then((data) => {
      this.setState({ bestTopics: data })
      console.log(this.state.performances)
      
      
    })
    .catch(console.log)
    fetch('http://localhost:9000/thoughts/allProblems')
    .then(res => res.json())
    .then((data) => {
      this.setState({ problems: data })
      var tf=[true];
      for(let i=1;i<data.length;i++)
      tf.push(false)
     this.setState({accordion:tf})
     this.setState({labelStat:data[0].Title})
      
      
    })
    .catch(console.log)
    

    
    fetch('http://localhost:9000/thoughts/worstTopics')
    .then(res => res.json())
    .then((data) => {
      this.setState({ worstTopics: data })
      localStorage.setItem('worstTopics',JSON.stringify(data))
      
      
    })
    .catch(console.log)


    fetch('http://localhost:9000/thoughts/naturalTopics')
    .then(res => res.json())
    .then((data) => {
      this.setState({ naturalTopics: data })
    
      
      
    })
    .catch(console.log)
    
  
  



      
 
  fetch('http://localhost:9000/thoughts/chartSolutions?indiceProb=0')
  .then(res => res.json())
  .then((data) => {
    if(data!=[]){
      var tabdate=[];
      tabdate.push("Someday")
    /*  this.setState({ tweets: data })
      console.log(this.state.tweets)*/
      this.setState({ solutionsChart: data })
     
     console.log(data)
     var j=0
   for(let i=0;i<this.state.solutionsChart.length-1;i++){
     j++;
    tabdate.push("Solution "+j)
   }
    
    this.setState({dates:tabdate})
    }
   
  })
  .catch(console.log)
 

    
  }
  /*componentDidUpdate() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: this.state.problems[0]
  };
  console.log("cccccc")
  console.log(this.state.problems[0])
    fetch('http://localhost:9000/thoughts/chartSolutions',requestOptions)
   
    .then((data) => {
   console.log(data)
      
    })
    .catch(console.log)
}*/
  i=10
  j=0;
  constructor(props) {
    
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      tweets:[],
      currentPage: 0,
      performances:[],
      bestTopics:[],
      worstTopics:[],
      naturalTopics:[],
      tabInputs:[""],
      collapse: false,
      accordion: [],
      finalSolutions:[],
      problems:[],
      solutionsChart:[],
      dates:[],
      labelStat:""
      
      
      
    };
  
    
    
    
  }
  
  
    
  
  handleSubmit(event) {
   // for(let i=0;i<this.state.tabInputs.length;i++){
    
    var solutions=event.target.solution.value
   var prob={
      Title:event.target.Title.value,
      Description:event.target.Description.value,
      Solutions :{solution:solutions,status:"Waiting",date:new Date()}
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prob)
  };
    fetch('http://localhost:9000/thoughts/addProblem',requestOptions)
    .then(res => res.json())
    .then((data) => {
    /*  this.setState({ tweets: data })
      console.log(this.state.tweets)*/
      
      
    })
    .catch(console.log)
    document.getElementById("title").value=""
    document.getElementById("desc").value=""
    document.getElementById("sol").value=""
    
    this.componentDidMount()
    event.preventDefault();

  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  toggleAccordion(tab,title) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
    console.log("cccccc"+tab)
    this.stats(tab,title)
  }
  handleClick(e, index) {
    
    e.preventDefault();

    this.setState({
      currentPage: index
    });
    
  }
   handleNext(i,j){
    console.log(i)
   i+=10
    j+=10
    console.log(i)
  }
  cc(){
    console.log("zzzzz")
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }
  removeProblem(data){
    const requestOptions = {
      method: 'POST',
      headers: { 
      'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
    fetch('http://localhost:9000/thoughts/removeProb',requestOptions)
   
    .then((data) => {
    /*  this.setState({ tweets: data })
      console.log(this.state.tweets)*/
      this.componentDidMount()
    
    })
    .catch(console.log)
  }
  anotherSolution(data,i){
    var obj=data;
    var val="rmv"+i
   var newVal=document.getElementById(val).value
   var sol={
     solution:newVal,
     status:"Waiting",
     date: new Date()
   }
    obj.Solutions.push(sol)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
  };
    fetch('http://localhost:9000/thoughts/updateSolution',requestOptions)
   
    .then((data) => {
    /*  this.setState({ tweets: data })
      console.log(this.state.tweets)*/
      this.componentDidMount()
      document.getElementById(val).value=''
    })
    .catch(console.log)
  }
  removeSolution(data,j){
    
    var obj=data;
   
    obj.Solutions.splice(j,1)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
  };
    fetch('http://localhost:9000/thoughts/updateSolution',requestOptions)
   
    .then((data) => {
    /*  this.setState({ tweets: data })
      console.log(this.state.tweets)*/
      this.componentDidMount()
      
    })
    .catch(console.log)
  }
  doneSolution(data,j){
    data.Solutions[j].status="done"
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
    fetch('http://localhost:9000/thoughts/updateSolutionStatus?indice='+j,requestOptions)
   
    .then((data) => {
    /*  this.setState({ tweets: data })
      console.log(this.state.tweets)*/
      this.componentDidMount()
      
    })
    .catch(console.log)
  }
  updateSolution(e,data,j,i){
    console.log(j)
    var val="index"+j+i
   var newVal=document.getElementById(val).value
    var obj=data;
    obj.Solutions[j].solution=newVal;
    
    console.log(obj)
    console.log(newVal)
   const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
  };
    fetch('http://localhost:9000/thoughts/updateSolution',requestOptions)
   
    .then((data) => {
    /*  this.setState({ tweets: data })
      console.log(this.state.tweets)*/
      this.componentDidMount()
      
    })
    .catch(console.log)
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
   stats(prob,title){
    //
  var tabdate=[];
  
  tabdate.push("Someday")
  fetch('http://localhost:9000/thoughts/chartSolutions?indiceProb='+prob)
  .then(res => res.json())
  .then((data) => {
    if(data!=[]){
      this.setState({labelStat:title})
      var tabdate=[];
      tabdate.push("Someday")
    /*  this.setState({ tweets: data })
      console.log(this.state.tweets)*/
      this.setState({ solutionsChart: data })
     
     console.log(data)
     var j=0
   for(let i=0;i<this.state.solutionsChart.length-1;i++){
     j++;
    tabdate.push("Solution "+j)
   }
    
    this.setState({dates:tabdate})
    }
   
  })
  .catch(console.log)
    
  }
  render() {
 
    
 
    const line = {
      labels: this.state.dates,
      datasets: [
        {
          label: this.state.labelStat,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          
            data:this.state.solutionsChart,
          
         
        },
      ],
    };  
    //let element=this.state.tweets.slice(this.j,this.i);
    const tabMonths=['January','February','March','April','May','June','July','August','September','October','November','December']
    const { currentPage } = this.state;
    const { tweets } = this.state;
    const monthsReviews=[]
    const valuesGoodReviews=[]
    const valuesBadReviews=[]
    const valuesNaturalReviews=[]
    this.state.performances.map((data,i)=>{
      
      monthsReviews.push(tabMonths[i])
valuesGoodReviews.push(data.nbGoodRev)
valuesBadReviews.push(data.nbBadRev)
valuesNaturalReviews.push(data.nbNaturalRev)
    })

   
    
    const bar = {
      labels: monthsReviews,
      datasets: [
        {
          label: 'Good Reviews',
          backgroundColor: 'rgba(3,252,78)',
          borderColor: 'rgba(3,252,78)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(3,252,78)',
          hoverBorderColor: 'rgba(3,252,78)',

          data:valuesGoodReviews,
        },
        {
          label: 'Natural Reviews',
          backgroundColor: 'rgba(3,115,252)',
          borderColor: 'rgba(3,115,252)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(3,115,252)',
          hoverBorderColor: 'rgba(3,115,252)',

          data:valuesNaturalReviews,
        },
        {
          label: 'Bad Reviews',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',

          data:valuesBadReviews,
        },
      ],
      
    };
    const options = {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      maintainAspectRatio: false
    }
    var nbGood=0;
    var nbBad=0;
    var nbNatural=0;
    this.state.tweets.map(data=>{
      if(data.sentiment===0) nbNatural++;
      else if (data.sentiment<0) nbBad++;
      else nbGood++;
    })

    var goodTopics=[];
    var goodOcc=[];
    var badTopics=[];
    var baddOcc=[];
    var naturalTopics=[];
    var naturaldOcc=[];
   
    this.state.naturalTopics.map(data=>{
      naturalTopics.push(data.topic)
      naturaldOcc.push(data.occ)
    })
    this.state.bestTopics.map(data=>{
      goodTopics.push(data.topic)
      goodOcc.push(data.occ)
    })
    this.state.worstTopics.map(data=>{
      badTopics.push(data.topic)
      baddOcc.push(data.occ)
    })
    
    function Greeting(props) {
      //const isLoggedIn = props.isLoggedIn;
     var month=new Date(props.date).getMonth()+1
     var day=new Date(props.date).getUTCDate()
     var date=day+"-"+month+"-"+new Date(props.date).getFullYear()
   //  var solution="index";
      if (props.status==="Waiting") {
        return  <div> 
          <Badge>{date}</Badge>
          <Input type="text"  id={props.idSolInput} name="solution"   defaultValue={props.val}  />
          
          <Button  color="success" active onClick={props.event}>Done</Button>
        <Button  color="info" type="submit" active onClick={props.eventUpdate}  >Update</Button>
    

   
                <Button  color="danger" active onClick={props.eventRemove}>Remove</Button>
                </div>
      }
      else return  <div>
        <Badge>{date}</Badge>
        <Input type="text" disabled id={props.idSolInput} name="solution"   defaultValue={props.val}  />
        
        </div>;
    //  return <GuestGreeting />;
    }
    
    this.pageSize = 20;
   // if(this.state.tweets.length!=0)
    //this.pagesCount = this.state.tweets.length/20;
    if(tweets.length!=0){
      this.pagesCount = Math.ceil(tweets.length / this.pageSize);
      console.log(tweets.length)
    }
    var solution="index";
    var rmv="rmv"
    return (
      <div className="animated fadeIn">
        
        


 
     
        
       
          <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Frequent problems
                <div className="card-header-actions">
                  <Badge>{this.state.problems.length} problems</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  {this.state.problems.map((data,i)=>
                   
                  <Card className="mb-0">
                  <CardHeader id="headingOne">
                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(i,data.Title)} aria-expanded={this.state.accordion[i]} aria-controls="collapseOne">
                      <h5 className="m-0 p-0">{data.Title}</h5>
                    </Button>
                    <div className="card-header-actions">
                  <Badge>  <Button active  color="danger" onClick={() => this.removeProblem(data)}>Remove</Button>
                    </Badge>
                </div>
                  </CardHeader>
                  <Collapse isOpen={this.state.accordion[i]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                    <CardBody>
                      <b>Descrition: </b>{data.Description}
                      <hr></hr>
                      <b>Solutions: </b><br></br>
                      
                      {data.Solutions.map((e,j)=>
                     
  
  <div>
    
    
    <Greeting status={e.status} date={e.date} idSolInput={solution+j+i} val={e.solution} event={()=>this.doneSolution(data,j)} eventUpdate={()=>this.updateSolution(e,data,j,i)} eventRemove={()=> this.removeSolution(data,j)} index={j} />
    
               
            
               
  </div>  
              
             
             
              
                        )}
                       <hr></hr>
                       <Input type="text" id={rmv+i} name="solution" placeholder="Another solution?"  />
                       <Button  color="success" active onClick={() => this.anotherSolution(data,i)}>ok</Button>
                    </CardBody>
                  </Collapse>
                </Card>
           
                    )}
                  
                  
                 
                </div>
              </CardBody>
            </Card>
            <Card>
            <CardHeader>
              Problem chart
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Line data={line} options={options} />
              </div>
            </CardBody>
          </Card>
         
            <Card>
              <CardHeader>
                <strong>Basic Form</strong> Elements
              </CardHeader>
              <CardBody>
                <Form className="form-horizontal" onSubmit={this.handleSubmit}>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Problem</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="title" name="Title" placeholder="Problem" />
                    </Col>
                  </FormGroup>
                 
                  
               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Descrition</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="Description" id="desc" rows="9"
                             placeholder="Content..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Solution</Label>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                      
                    </Col>
                    <Col xs="12" md="9">
             
                      

  <Input type="text" id="sol" name="solution" placeholder="Problem"  />

                     
                      
                     
                  
                      
                    </Col>
                  </FormGroup>
                  <Button  type="submit"  size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
              
                  
                </Form>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
        
      
        

           
        

  
                    
          
                    
                   
                    

        
      </div>
    );
  }

}

export default ActionPlan;
