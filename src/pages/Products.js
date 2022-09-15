import { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useGetProductListQuery } from '../services/productApi'
import ProductCard from '../components/Products/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../slices/productCard-slice'
import { pagination } from '../slices/filterPagination-slice'
import { productBanner } from '../image'
import Paginate from '../components/Filter/Paginate'
import FilterStore from '../components/Filter/FilterStore'

function Proudcts() {
  //api get products data
  const { data, error, isLoading } = useGetProductListQuery()
  // console.log('api', data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(pagination(data))
  }, [dispatch, data])
  // const productListNoP = useSelector((state) => state.productReducer.product)
  // console.log('normal', productListNoP)
  const productList = useSelector((state) => state.paginationReducer.data)
  // console.log('pagination',productList)
  return (
    <>
      <div className="position-relative">
        <svg
          id="svg"
          viewBox="0 0 1440 300"
          xmlns="http://www.w3.org/2000/svg"
          className="position-absolute top-0"
        >
          <path
            d="M 0,300 C 0,300 0,200 0,200 C 132,177 264,154 437,159 C 610,163 824,194 998,206 C 1172,217 1306,208 1440,200 C 1440,200 1440,300 1440,300 Z"
            stroke="none"
            fill="#f4eee8"
            className="path-top"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
        <svg
          id="svg"
          viewBox="0 0 1440 300"
          xmlns="http://www.w3.org/2000/svg"
          className="position-absolute bottom-0"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 132,177 264,154 437,159 C 610,163 824,194 998,206 C 1172,217 1306,208 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            fill="#f4eee8"
            className="path-bottom"
          ></path>
        </svg>
        <img className="banner" src={productBanner} alt="banner"></img>
        <h1 className="position-absolute top-50 start-50 translate-middle text-white fw-light banner_title">
          SHOP
        </h1>
      </div>
      <Container fluid className="m-3 mx-auto ">
        <Row>
          <Col lg={4} xl={3}>
            <FilterStore />
          </Col>
          <Col>
            <div className="d-flex justify-content-center">
              <Row className="product_list gap-6">
                {productList?.map((v, i) => {
                  return (
                    <ProductCard
                      key={v.id}
                      productId={v.id}
                      imgs={v.img_name}
                      category={v.category_en_name}
                      storeName={v.store_name}
                      name={v.name}
                      price={v.price}
                      isFavorite={v.isFavorite}
                      amount={v.amount}
                    />
                  )
                })}
              </Row>
            </div>
            <Paginate />

            {/* <div className="d-flex flex-wrap  justify-content-start gap-5">
            {products?.map((v, i) => {              
              return (
                <ProductCard
                  key={v.id}
                  productId={v.id}
                  imgs={v.img_name}
                  category={v.category_en_name}
                  storeName={v.store_name}
                  name={v.name}
                  price={v.price}
                  isFavorite={false}
                />
              )
            })}
          </div> */}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Proudcts
