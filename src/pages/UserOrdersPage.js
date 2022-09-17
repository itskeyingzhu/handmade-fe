import React from 'react'
import UserProductsOrders from '../components/User/UserProductsOrders'
import UserCourseOrders from '../components/User/UserCourseOrders'
import { Row, Col, Form } from 'react-bootstrap'
import { product } from '../slices/userProductDetails-slice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const UserOrdersPage = () => {
  const showUserProductOrders = useSelector(
    (state) => state.userProductDetailsReducer.setShowUserProductOrders
  )
  const dispatch = useDispatch()
  const productPage = () => {
    dispatch(product(true))
  }
  const orderPage = () => {
    dispatch(product(false))
  }
  return (
    <>
      <Col>
        <div className="user_orders_form m-8 user_order_scroll">
          <Form.Group>
            <Row>
              <div className="my-5 ms-7 d-flex justify-content-start">
                <button
                  className="user_orders_btn fw-bold me-5"
                  onClick={() => {
                    orderPage()
                  }}
                >
                  預約課程
                </button>
                <button
                  className="user_orders_btn fw-bold me-5"
                  onClick={() => {
                    productPage()
                  }}
                >
                  商品訂單
                </button>
              </div>
            </Row>
          </Form.Group>
          {showUserProductOrders ? (
            <UserProductsOrders />
          ) : (
            <UserCourseOrders />
          )}
        </div>
      </Col>
    </>
  )
}

export default UserOrdersPage
