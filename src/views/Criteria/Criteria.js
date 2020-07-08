import React, { Component, lazy, Suspense } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import ReactDOM from 'react-dom';
import { Bar, Line, Pie, Doughnut, Polar } from 'react-chartjs-2';
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
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
  Table,
  CardColumns
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { copyFile } from 'fs';
import { thisExpression } from '@babel/types';

const Widget03 = lazy(() => import('../Widgets/Widget03'));

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
function sayHello() {
  return (<div>salmene</div>)
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

function sent(sentiment) {
  if (sentiment < 0) return "negative review"
  else if (sentiment == 0) return "natural review"
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
      labelColor: function (tooltipItem, chart) {
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

class Criteria extends Component {

  componentDidMount() {
    var years = []

    for (let i = 0; i < 5; i++) {
      years.push(new Date().getFullYear() - i)
      console.log("zzzzz" + new Date().getFullYear() - i)
    }
    this.setState({ tabYears: years })
    fetch('http://localhost:9000/preproc/getAllTweets')
      .then(res => res.json())
      .then((data) => {
        this.setState({ tweets: data })
        this.setState({ finalTweets: data })
        localStorage.setItem('all', JSON.stringify(data));
        //console.log("result : "+localStorage.getItem('all'))


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
        localStorage.setItem('worstTopics', JSON.stringify(data))


      })
      .catch(console.log)


    fetch('http://localhost:9000/thoughts/naturalTopics')
      .then(res => res.json())
      .then((data) => {
        this.setState({ naturalTopics: data })



      })
      .catch(console.log)
  }

  i = 10
  j = 0;
  constructor(props) {

    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      tweets: [],
      currentPage: 0,
      performances: [],
      bestTopics: [],
      worstTopics: [],
      naturalTopics: [],
      tabYears: [],
      checkGood: false,
      checkBad: false,
      checkNatural: false,
      changesGood: [],
      finalTweets: [],
      changesYears: [],
      changesSubject: [],
      another: []
    };

    this.monthsSelection = this.monthsSelection.bind(this)
    this.yearsSelection = this.yearsSelection.bind(this)
    this.subjectSearch = this.subjectSearch.bind(this)
    this.subjectSearchEff = this.subjectSearchEff.bind(this)
    this.focusSubject = this.focusSubject.bind(this)
  }
  focusSubject(e) {
    this.setState({ changesSubject: this.state.finalTweets })
    this.setState({ finalTweets: JSON.parse(localStorage.getItem("all")) })
  }
  subjectSearchEff(e) {
    if (e.keyCode == 8) {
      this.setState({ finalTweets: this.state.changesSubject })
    }
  }
  handleClick(e, index) {

    e.preventDefault();

    this.setState({
      currentPage: index
    });

  }
  handleNext(i, j) {
    console.log(i)
    i += 10
    j += 10
    console.log(i)
  }
  cc() {
    console.log("zzzzz")
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
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

  NaturalReviews(e) {
    var newTab = []

    if (e == 'Natural') {


      this.state.tweets.forEach(element => {
        if (element.sentiment == 0)
          newTab.push(element)
      });

    }
    if (e == 'Good') {


      this.state.tweets.forEach(element => {
        if (element.sentiment > 0)
          newTab.push(element)
      });


    }
    if (e == 'Bad') {


      this.state.tweets.forEach(element => {
        if (element.sentiment < 0)
          newTab.push(element)
      });


    }
    if (e == 'all') {


      this.componentDidMount()
      document.getElementById("subject").value = "";


    }
    localStorage.setItem('all', JSON.stringify(newTab));
    this.setState({ finalTweets: newTab })
    this.performances(JSON.parse(localStorage.getItem("all")))
    document.getElementById("monthes").value = 0;
    document.getElementById("years").value = 0;


  }

  performances(tab) {
    //var tab = JSON.parse(localStorage.getItem("all"))
    var res = []
    for (let i = 0; i < new Date().getMonth() + 1; i++) {
      var nbg = 0
      var nbb = 0
      var nbn = 0
      tab.forEach(e => {
        if ((new Date(e.Date).getMonth() == i) && (e.sentiment > 0)) {
          nbg++
        }
        if ((new Date(e.Date).getMonth() == i) && (e.sentiment < 0)) {
          nbb++
        }
        if ((new Date(e.Date).getMonth() == i) && (e.sentiment == 0)) {
          nbn++
        }
      })
      var obj = {
        month: i + 1, nbBadRev: nbb, nbGoodRev: nbg, nbNaturalRev: nbn

      }
      res.push(obj)
    }
    this.setState({ performances: res })
  }

  monthsSelection(e) {
    var tab = []
    var tab2 = []


    if (e.target.value != 0) {

      tab2 = JSON.parse(localStorage.getItem("all"))
      tab2.forEach(element => {
        if (new Date(element.Date).getMonth() + 1 == e.target.value) {
          tab.push(element)
        }

      });
      this.setState({ finalTweets: tab })
      this.performances(tab)
    }
    else {

      this.setState({ finalTweets: JSON.parse(localStorage.getItem("all")) })
      this.performances(JSON.parse(localStorage.getItem("all")))

    }


  }

  yearsSelection(e) {
    var tab = []
    var tab2 = []
    if (e.target.value != 0) {
      tab2 = JSON.parse(localStorage.getItem("all"))
      tab2.forEach(element => {
        if (new Date(element.Date).getFullYear() == e.target.value) {
          tab.push(element)
        }

      });
      this.setState({ finalTweets: tab })
      this.performances(tab)
    }
    else {

      this.setState({ finalTweets: JSON.parse(localStorage.getItem("all")) })
      this.performances(JSON.parse(localStorage.getItem("all")))
    }


  }
  subjectSearch(e) {
    var tab = []
    if (e.target.value != '') {
      //  this.setState({another:[...this.state.finalTweets]})
      // this.setState({changesSubject:this.state.finalTweets})
      this.state.finalTweets.forEach(element => {
        var ch = ""
        ch = element.textTranslated
        if (ch.includes(e.target.value)) {
          tab.push(element)
        }

      });
      this.setState({ finalTweets: tab })
      this.performances(tab)
    }

  }
  render() {

    //let element=this.state.tweets.slice(this.j,this.i);
    const tabMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const { currentPage } = this.state;
    const { tweets } = this.state;
    const monthsReviews = []
    const valuesGoodReviews = []
    const valuesBadReviews = []
    const valuesNaturalReviews = []
    this.state.performances.map((data, i) => {

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

          data: valuesGoodReviews,
        },
        {
          label: 'Natural Reviews',
          backgroundColor: 'rgba(3,115,252)',
          borderColor: 'rgba(3,115,252)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(3,115,252)',
          hoverBorderColor: 'rgba(3,115,252)',

          data: valuesNaturalReviews,
        },
        {
          label: 'Bad Reviews',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',

          data: valuesBadReviews,
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
    var nbGood = 0;
    var nbBad = 0;
    var nbNatural = 0;
    this.state.tweets.map(data => {
      if (data.sentiment === 0) nbNatural++;
      else if (data.sentiment < 0) nbBad++;
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
    var goodTopics = [];
    var goodOcc = [];
    var badTopics = [];
    var baddOcc = [];
    var naturalTopics = [];
    var naturaldOcc = [];

    this.state.naturalTopics.map(data => {
      naturalTopics.push(data.topic)
      naturaldOcc.push(data.occ)
    })
    this.state.bestTopics.map(data => {
      goodTopics.push(data.topic)
      goodOcc.push(data.occ)
    })
    this.state.worstTopics.map(data => {
      badTopics.push(data.topic)
      baddOcc.push(data.occ)
    })

    const Gooddoughnut = {
      labels: goodTopics.slice(0, 10),
      datasets: [
        {
          data: goodOcc.slice(0, 10),
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
      labels: naturalTopics.slice(0, 10),
      datasets: [
        {
          data: naturaldOcc.slice(0, 10),
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
      labels: badTopics.slice(0, 10),
      datasets: [
        {
          data: baddOcc.slice(0, 10),
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
    if (tweets.length != 0) {
      this.pagesCount = Math.ceil(tweets.length / this.pageSize);
      console.log(tweets.length)
    }


    return (
      <div className="animated fadeIn">


        <Row>
          <Col>
            <Card>

              <CardHeader>
                REVIEWS
                <div className="card-header-actions">
                  <Badge>{this.state.finalTweets.length} problems</Badge>
                </div>
              </CardHeader>

              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label>Inline Radios</Label>
                  </Col>
                  <Col md="9">
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" onClick={() => this.NaturalReviews("Good")} value="Good" />
                      <Label className="form-check-label" check htmlFor="inline-radio1">Good</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" onClick={() => this.NaturalReviews("Natural")} value="Natural" />
                      <Label className="form-check-label" check htmlFor="inline-radio2">Natural</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" onClick={() => this.NaturalReviews("Bad")} value="Bad" />
                      <Label className="form-check-label" check htmlFor="inline-radio3">Bad</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" onClick={() => this.NaturalReviews("all")} value="all" />
                      <Label className="form-check-label" check htmlFor="inline-radio1">Reset All</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="selectLg">Month</Label>
                  </Col>
                  <Col xs="12" md="9" size="lg">
                    <Input type="select" name="selectLg" onChange={this.monthsSelection.bind(this)} id="monthes" bsSize="lg">
                      <option value="0"  >Please select</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="selectLg">Year</Label>
                  </Col>
                  <Col xs="12" md="9" size="lg">
                    <Input type="select" name="selectLg" onChange={this.yearsSelection.bind(this)} id="years" bsSize="lg">
                      <option value="0">Please select</option>
                      {this.state.tabYears.map((y, i) =>
                        <option value={y}>{y}</option>
                      )
                      }


                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Subject</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="subject" onFocus={this.focusSubject} onChange={this.subjectSearch.bind(this)} onKeyDown={this.subjectSearchEff.bind(this)} name="text-input" />
                    <FormText color="muted">Type help word</FormText>
                  </Col>
                </FormGroup>
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
                      {this.state.finalTweets
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
                              {sent(tweet.sentiment)}

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


      </div>
    );
  }
}

export default Criteria;
