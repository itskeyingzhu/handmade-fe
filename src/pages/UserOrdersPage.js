import React from 'react'
// import { Outlet } from 'react-router'
// import { Container } from 'react-bootstrap'
// import FilterPage from '../components/User/FilterPage'
// import UserCard from '../components/User/UserCard'
import UserOrders from '../components/User/UserOrders'
import { Row, Col, Form } from 'react-bootstrap'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import UserPagination from '../components/User/UserPagination'

const UserOrdersPage = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  return (
    <>
      <Col>
        <div className="user_orders_form mt-8">
          <Form.Group>
            <Row>
              <div className="my-5 ms-7 d-flex justify-content-start">
                <button className="user_orders_btn fw-bold me-5">
                  全部訂單
                </button>
                <button className="user_orders_btn fw-bold me-5">
                  預約課程
                </button>
                <button className="user_orders_btn fw-bold me-5">
                  商品訂單
                </button>
              </div>
            </Row>
            <Row>
              <div className="d-flex">
                <div className="fw-bold ms-5 user_orders_header">
                  查詢訂單時間
                </div>
                <div className="d-flex align-items-center">
                  <DatePicker
                    className="ms-4 me-2 user_orders_date p-0"
                    dateFormat="yyyy/MM/dd"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                  />
                  <span className="m-1">-</span>
                  <DatePicker
                    className="user_orders_date ms-2"
                    dateFormat="yyyy/MM/dd"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                  />
                </div>
                <div className="d-flex align-items-center ms-5">
                  <button className="user_orders_dateBtn fw-bold">
                    確定送出
                  </button>
                </div>
              </div>
            </Row>
          </Form.Group>
          <UserOrders />
        </div>
      </Col>
    </>
  )
}

export default UserOrdersPage
