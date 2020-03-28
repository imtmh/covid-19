import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { zonedTimeToUtc } from 'date-fns-tz'
import { formatDistance } from 'date-fns'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
} from 'recharts'

function Home(props) {
  const [states, setStates] = useState([])
  const [stateDistrictWiseData, setStateDistrictWiseData] = useState({})
  const [fetched, setFetched] = useState(false)
  // const [graphOption, setGraphOption] = useState(1)
  const [lastUpdated, setLastUpdated] = useState('')
  const [timeseries, setTimeseries] = useState([])
  const [deltas, setDeltas] = useState([])
  // const [timeseriesMode, setTimeseriesMode] = useState(true)
  const [stateHighlighted, setStateHighlighted] = useState(undefined)

  useEffect(() => {
    if (fetched === false) {
      getStates()
    }
  }, [fetched])

  const getStates = async () => {
    try {
      const [response, stateDistrictWiseResponse] = await Promise.all([
        axios.get('https://api.covid19india.org/data.json'),
        axios.get('https://api.covid19india.org/state_district_wise.json'),
      ])
      setStates(response.data.statewise)
      setTimeseries(response.data.cases_time_series)
      setLastUpdated(response.data.statewise[0].lastupdatedtime)
      setDeltas(response.data.key_values[0])
      setStateDistrictWiseData(stateDistrictWiseResponse.data)
      setFetched(true)
    } catch (err) {
      console.log(err)
    }
  }

  const formatDate = unformattedDate => {
    const day = unformattedDate.slice(0, 2)
    const month = unformattedDate.slice(3, 5)
    const year = unformattedDate.slice(6, 10)
    const time = unformattedDate.slice(11)
    return `${year}-${month}-${day}T${time}`
  }

  const onHighlightState = (state, index) => {
    if (!state && !index) setStateHighlighted(null)
    else setStateHighlighted({ state, index })
  }
  // const getRandomColor = () =>
  //   '#' + Math.floor(Math.random() * 16777215).toString(16)

  console.log(timeseries)
  return (
    <section id="first" className="main special">
      <header className="major">
        <h6>Last Updated</h6>
        <h3>
          {isNaN(Date.parse(formatDate(lastUpdated)))
            ? ''
            : formatDistance(
                zonedTimeToUtc(
                  new Date(formatDate(lastUpdated)),
                  'Asia/Calcutta'
                ),
                zonedTimeToUtc(new Date())
              ) + ' Ago'}
        </h3>
      </header>

      <AreaChart
        width={700}
        height={300}
        data={timeseries}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 'auto']} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="totalconfirmed"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Brush />
      </AreaChart>
      <p>Total Confirmed Cases day wise</p>
      <LineChart
        width={700}
        height={300}
        data={timeseries}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" allowDataOverflow={false} />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="totaldeceased"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </LineChart>
      <p>Total Deceased Cases day wise</p>

      <AreaChart
        width={700}
        height={300}
        data={timeseries}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="totalrecovered"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
      <p>Total Recovered Cases day wise</p>
    </section>
  )
}

export default Home
