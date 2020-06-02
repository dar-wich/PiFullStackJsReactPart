import React, { Component, lazy, Suspense } from 'react';
import {   Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import ReactDOM from 'react-dom';
import { Bar, Line ,Pie,Doughnut,Polar} from 'react-chartjs-2';
import { Redirect } from 'react-router-dom';
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

class Dashboard extends Component {

  connection(){
    if(localStorage.getItem("user")==null)
    this.setState({redirect:true})
  }

  renderRedirect(){
    
    if(this.state.redirect)
    return <Redirect to='/login' />
  }
  
  componentDidMount() {
    console.log("before"+this.state.redirect)
    console.log("uuuuuuuser     "+localStorage.getItem("user"))
    this.connection()
    console.log("after"+this.state.redirect)
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
  }
  
  i=10
  j=0;
  constructor(props) {
  
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      tweets:[],
      currentPage: 0,
      performances:[],
      bestTopics:[],
      worstTopics:[],
      naturalTopics:[],
      redirect:false
      
    };
  
  
   
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

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    
    
    
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
    const pie = {
      labels: [
        'Good Reviews',
        'Bad Reviews',
        'Natural Reviews',
      ],
      datasets: [
        {
          data: [nbGood, nbBad, nbNatural],
          backgroundColor: [
            '#03fc8c',
            '#fc0303',
            '#03c2fc',
          ],
          hoverBackgroundColor: [
            '#03fc8c',
            '#fc0303',
            '#03c2fc',
          ],
        }],
    };
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
    
    const Gooddoughnut = {
      labels:goodTopics.slice(0,10),
      datasets: [
        {
          data:goodOcc.slice(0,10),
          backgroundColor: [
            'lime',
            'Cyan',
            'Pink',
            'Orange',
            'Steel',
            'Yellow',
            'Magenta',
            'Crimson',
            'Teal',
            'Brown',
          ],
          hoverBackgroundColor: [
            'lime',
            'Cyan',
            'Pink',
            'Orange',
            'Steel',
            'Yellow',
            'Magenta',
            'Crimson',
            'Teal',
            'Brown',
          ],
          
        }],
    };
    const Naturaldoughnut = {
      labels:naturalTopics.slice(0,10),
      datasets: [
        {
          data:naturaldOcc.slice(0,10),
          backgroundColor: [
            'lime',

            'Cyan',
            'Pink',
            'Orange',
            'Steel',
            'Yellow',
            'Magenta',
            'Crimson',
            'Teal',
            'Brown',
           
          ],
          hoverBackgroundColor: [
          
            'lime',
            'Cyan',
            'Pink',
            'Orange',
            'Steel',
            'Yellow',
            'Magenta',
            'Crimson',
            'Teal',
            'Brown',
          ],
        }],
    };
    const baddoughnut = {
      labels:badTopics.slice(0,10),
      datasets: [
        {
          data:baddOcc.slice(0,10),
          backgroundColor: [
            'lime',
            'Cyan',
            'Pink',

            'Orange',
            'Steel',
            'Yellow',

            'Magenta',

            'Crimson',
            
            'Teal',
            'Brown',
          ],
          hoverBackgroundColor: [
            'lime',
            'Cyan',
            'Pink',
            'Orange',
            'Steel',
            'Yellow',
            'Magenta',
            'Crimson',
            'Teal',
            'Brown',
          ],
        }],
    };
    
    this.pageSize = 20;
   // if(this.state.tweets.length!=0)
    //this.pagesCount = this.state.tweets.length/20;
    if(tweets.length!=0){
      this.pagesCount = Math.ceil(tweets.length / this.pageSize);
      console.log(tweets.length)
    }
    
    return (
      
      <div className="animated fadeIn">
        
        {this.renderRedirect()}
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb2-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Members online</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        

  <Card>
            <CardHeader>
              PERFORMANCE PER MONTH
             
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Bar data={bar} options={options} />
              </div>
            </CardBody>
          </Card>
 
        <CardColumns className="cols-2">
        <Col>
        <Card>
            <CardHeader>
              Good Topics Distribution
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              
              <div className="chart-wrapper">
                <Doughnut data={Gooddoughnut}  onElementsClick={elems => { 
                  
                  console.log( elems[0]._index);
                  }}/>
              </div>
            </CardBody>
          </Card>
  </Col>
          <Col>
          <Card>
            <CardHeader>
            Bad Topics Distribution
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Doughnut data={baddoughnut} />
                
              </div>
            </CardBody>
          </Card>
          </Col>
          <Col>
          <Card>
            <CardHeader>
            Natural Topics Distribution
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Doughnut data={Naturaldoughnut} />
              </div>
            </CardBody>
          </Card>
          </Col>
          <Col>
          <Card>
            <CardHeader>
              REVIEWS DISTRIBUTION
             
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Pie data={pie} />
              </div>
            </CardBody>
          </Card>
          </Col>

        
        </CardColumns>
        

       
        

  
                    
          
                    
                   
                    

        <Row>
          <Col>
            <Card>
              <CardHeader>
              ALL REVIEWS
              </CardHeader>
              <CardBody>
                
                <br />
                <React.Fragment>
      
      <Table id="tabTweets" hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th ><i className="icon-people"></i></th>
                    <th>Date</th>
                    <th >Tweet</th>
                    <th>Sentiment</th>
                    
                  </tr>
                  </thead>
                  <tbody>
      {this.state.tweets
          .slice(
            currentPage * this.pageSize,
            (currentPage + 1) * this.pageSize
          )
          .map((tweet, i) => 
          <tr>
                   
          <td>
            <div>{tweet.userName}</div>
            
          </td>
          <td >
            {tweet.Date}
          </td>
          <td>
            <div style={divStyle}>
             {tweet.textTranslated}
             
            </div>
           
          </td>
          <td >
           { sent(tweet.sentiment) }
           
          </td>
          
        </tr>
          )}

                 
              
        <div>
        
         
      </div>
                  
                  
                  
                 
                  </tbody>
                </Table>
                
      <div className="pagination-wrapper ">
        
        <Pagination aria-label="Page navigation example">
          
          <PaginationItem disabled={currentPage <= 0}>
            
            <PaginationLink
              onClick={e => this.handleClick(e, currentPage - 1)}
              previous
              href="#"
            />
            
          </PaginationItem>

          

          <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
            
            <PaginationLink
              onClick={e => this.handleClick(e, currentPage + 1)}
              next
              href="#"
            />
            
          </PaginationItem>
          
        </Pagination>
        
      </div>
    </React.Fragment>
  
               
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
    );
  }
  /* render(){
    return (
      <div>
        <center><h1>Contact List</h1></center>
        {this.state.contacts.map((contact) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{contact.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
              <p class="card-text">{contact.company.catchPhrase}</p>
            </div>
          </div>
        ))}
      </div>
    )
  };*/
}

export default Dashboard;
