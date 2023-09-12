import { useEffect, useState } from 'react'

import { ErrorAlert } from './components/ErrorAlert'
import { Form } from './components/Form'
import { Logo } from './components/Logo'
import { Pagination } from './components/Pagination'
import { Photo } from './components/Photo'
import { Spinner } from './components/Spinner'
import { WarningAlert } from './components/WarningAlert'
import { currentDate } from './utils/current-date'
import nasaApi from './configs/axiosConfig'

function App() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([])
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);
  const [form, setForm] = useState({
    start_date: '',
    end_date: '',
  })
  const { start_date, end_date} = form;

  const recordsPerPage = 6;
  const totalRecords = response.length;
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await nasaApi.get(`?date=${currentDate()}`);
      if (!Array.isArray(data)) {
        setResponse([ data ])
      } else {
        setResponse(data);
      }
      setLoading(false);
    })()
  }, [])

  const handleInputChange = ({ target }) => {
    setForm({
        ...form,
        [ target.name ]: target.value
    })
  }

  const handleFilter = async () => {
    setTouched(true);
    try {
      if (start_date && end_date ) {
        setLoading(true);
        const { data } = await nasaApi.get(`?start_date=${start_date}&end_date=${end_date}`);
        setResponse(data);
        setLoading(false);
      }
    } catch (error) {
      setError('Ups, Algo salió mal!');
      setTimeout(() => {
        setError('');
      }, 3);
    }
  }


  const getRecordsForPage = (page) => {
    const startIndex = (page - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return response.slice(startIndex, endIndex)
  }

  const recordsToShow = getRecordsForPage(currentPage);


  return (
    <div className='container mt-5 pb-5'>
      <Logo />
      { error && <ErrorAlert /> }

      { ((!start_date || !end_date) && touched) && <WarningAlert /> }

      <Form
        form={form}
        handleInputChange={handleInputChange}
        handleFilter={handleFilter}
      />

      { loading && <Spinner /> }

      <div className='row gx-2 gy-2 mt-3'>
        {
          recordsToShow.map(data => (
            <div className="col-4" key={ data.date}>
              <Photo data={data}/>
            </div>
          ))
        }
      </div>

      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        recordsPerPage={recordsPerPage}
        totalRecords={totalRecords}
      />
    </div>
  )
}

export default App
