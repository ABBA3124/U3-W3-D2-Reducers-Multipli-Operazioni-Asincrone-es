import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Job from './Job'
import { clearSearchResults, fetchjobs, setLoading, setError, clearError*  } from '../redux/action/actions';
import { useDispatch, useSelector } from 'react-redux';

const MainSearch = () => {
  const [query, setQuery] = useState('')
  
  const dispatch = useDispatch()

  const navigate = useNavigate()


  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const renderjobs = useSelector((state) => state.searchResults.results)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(clearSearchResults())
  
    
    // try {
    //   const response = await fetch(baseEndpoint + query + '&limit=20')
    //   if (response.ok) {
    //     const { data } = await response.json()
    //     console.log("data arriva?", data)
    //     dispatch(setSearchResults(data))
    //   } else {
    //     alert('Error fetching results')
    //   }
    // } catch (error) {
    //   console.log(error)
    // }

    dispatch(fetchjobs(query))

  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Button onClick={() => navigate('/favourites')}>Favourites</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {renderjobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
