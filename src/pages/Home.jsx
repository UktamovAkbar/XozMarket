import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <>
    <Link to='/'>
    <Layout />
    </Link>
    </>
  )
}

export default Home