import cart from '../../assets/cart.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { React, useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './ProductCard.scss'

import {
  useAddUserFavoriteProductMutation,
  useRemoveUserFavoriteProductMutation,
  useGetProductListQuery,
} from '../../services/productApi'

import { useDispatch } from 'react-redux'
import { addProductCart } from '../../slices/productCart-slice'
export function scrollToTop() {
  window.scrollTo(0, 0)
}

function ProductCard() {
  const [card, setCard] = useState([])
  const { data } = useGetProductListQuery()
  useEffect(() => {
    if (data) {
      if (card.length == 0) {
        let newData = [...data]?.sort(() => 0.5 - Math.random()).slice(0, 4)
        setCard(newData)
      } else {
        let newData = card.map((c) => {
          return data.find((product) => {
            return product.id == c.id
          })
        })
        setCard([...newData])
      }
    }
  }, [data])

  function getImgsRouter(imgsName, category, productId) {
    const baseRouter = `assets/product/product`
    const router = `${baseRouter}_${category}_${productId}/`
    const routers = imgsName?.map((v) => {
      return router + v
    })
    return routers
  }

  const [addUserFavoriteProduct] = useAddUserFavoriteProductMutation()
  const [removeUserFavoriteProduct] = useRemoveUserFavoriteProductMutation()
  const dispatch = useDispatch()
  const userId = JSON.parse(localStorage.getItem('user'))?.user.id

  return (
    <>
      <h4 className="mb-5 product_detail_card_title text-center mt-10 mb-8  fw-bold">
        商品推薦
      </h4>

      <Container className="product_detail_card mb-12 w-100 d-flex">
        {data.map((v, i) => {
          return (
            <Col
              md={3}
              xs={6}
              className="product_detail_card_m px-3"
              key={v.id}
            >
              {/* ========== 商品照片 ========== */}
              <a href={`/product/detail/${v.id}`} onClick={scrollToTop}>
                <Swiper
                  modules={[Navigation]}
                  navigation
                  effect={'slide'}
                  speed={800}
                  slidesPerView={1}
                  loop={true}
                  className="product_detail_card_swiper rounded shadow"
                >
                  {getImgsRouter?.map((v2, i2) => {
                    return (
                      <SwiperSlide key={i2}>
                        <img
                          className="swiper-slide product_detail_card_img"
                          src={require(`../../../${v2}`)}
                          alt="products"
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </a>

              {/* ========== 商品照片 ========== */}
              <div className="d-flex justify-content-between">
                <div>
                  {/* <Link to={v.storeLink}> */}
                  <p className="product_detail_card_store m-2 text-truncate">
                    <small>| {v.store} |</small>
                  </p>
                  {/* </Link> */}
                  <a href={`/product/detail/${v.id}`} onClick={scrollToTop}>
                    <h6 className="product_detail_card_text m-1 fw-bold">
                      {v.name}
                    </h6>
                  </a>
                  <h6 className="product_detail_card_text text-primary fw-bold m-1">
                    $ {v.price}
                  </h6>
                </div>

                {/* ========== 收藏 & 購物車 ========== */}

                <div className="d-flex align-items-center me-2">
                  <button
                    onClick={() => {
                      if (v.isFavorite) {
                        removeUserFavoriteProduct({
                          productId: v.id,
                        })
                      } else {
                        addUserFavoriteProduct({
                          productId: v.id,
                          storeId: v.storeId,
                          categoryId: v.categoryId,
                        })
                      }
                    }}
                    className="bg-primary product_detail_card_favorite me-2"
                  >
                    <FontAwesomeIcon
                      icon={v.isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                      inverse
                    />
                  </button>
                  <button
                    onClick={() => {
                      dispatch(
                        addProductCart({
                          productId: v.id,
                          name: v.name,
                          imgs: v.imgs,
                          price: Number(v.price),
                          category: v.category,
                          amount: v.amount,
                          quantity: 1,
                        })
                      )
                    }}
                    className="bg-secondary product_detail_card_favorite border-0 rounded-circle"
                  >
                    <img
                      src={cart}
                      alt=""
                      className="product_detail_card_cart"
                    />
                  </button>
                </div>
              </div>
              {/* ========== 收藏 & 購物車 ========== */}
            </Col>
          )
        })}
      </Container>
    </>
  )
}

export default ProductCard
