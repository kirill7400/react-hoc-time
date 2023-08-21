import React, {useState} from 'react';
import './css/index.css'

function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  )
}

function DateTimePretty({ date }) {
  return <DateTime date={ setPrettyDate(date) }/>
}

const setPrettyDate = (date) => {
  let prettyDate = ''

  let now = new Date()
  let current = new Date (date)

  const diff = (now, current) => {
    let days = Math.abs(now.getTime() - current.getTime()) / (1000 * 3600 * 24)
    if (days >= 1)
      return `${Math.ceil(days)} дней назад`
    else {
      let hours = Math.abs(now.getTime() - current.getTime()) / (1000 * 3600)
      if (hours >= 1)
        return `${Math.ceil(hours)} часов назад`
      else return Math.ceil(Math.abs(now.getTime() - current.getTime()) / (1000 * 60)) + ' минут назад'
    }
  }

  prettyDate = diff(now, current)
  return prettyDate
}

function Video(props) {
  return (
    <div className="video">
      {/*<iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>*/}
      <DateTimePretty date={props.date}/>
    </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-08-21 23:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-08-21 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-08-02 05:24:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}