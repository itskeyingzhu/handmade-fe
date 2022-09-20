import { React, useEffect } from 'react'
import {
  useAddUserFavoriteProductMutation,
  useRemoveUserFavoriteProductMutation,
} from '../../../services/productApi'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProductCart,
  getProductTotal,
} from '../../../slices/productCart-slice'
import cart from '../../../assets/cart.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col } from 'react-bootstrap'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import '../News.scss'

function getImgsRouter(imgsName, category, productId) {
  const baseRouter = `assets/product/product`
  const router = `${baseRouter}_${category}_${productId}/`
  const routers = imgsName?.map((v) => {
    return router + v
  })
  return routers
}

function NewsCard({
  productId,
  storeId,
  categoryId,
  imgs,
  category,
  storeName,
  name,
  price,
  isFavorite,
  amount,
}) {
  const [addUserFavoriteProduct] = useAddUserFavoriteProductMutation()
  const [removeUserFavoriteProduct] = useRemoveUserFavoriteProductMutation()
  const dispatch = useDispatch()

  // const ProductItem = useSelector(
  //   (state) => state.productCartReducer.productCartItem
  // )
  const addToProductCart = () => {
    dispatch(addProductCart({ productId, name, imgs, price, category, amount }))
  }
  const productItem = useSelector(
    (state) => state.productCartReducer.productCartItem
  )

  useEffect(() => {
    dispatch(getProductTotal())
  }, [dispatch, productItem])

  // let newData = []

  // if (data) {
  //   newData = [...data]?.sort(() => 0.5 - Math.random())
  // }

  return (
    <>
      <Col md={3} xs={6} className="news_card_m px-3" key={uuidv4()}>
        {/* ========== 商品照片 ========== */}
        <Swiper
          modules={[Navigation]}
          navigation
          effect={'slide'}
          speed={800}
          slidesPerView={1}
          loop={true}
          className="news_card_swiper rounded shadow"
        >
          {getImgsRouter(imgs, category, productId)?.map((v, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={require(`../../../${v}`)} alt={name} />
              </SwiperSlide>
            )
          })}
        </Swiper>

        {/* ========== 商品照片 ========== */}
        <div className="d-flex justify-content-between">
          <div>
            <p className="news_card_store m-2 text-truncate">
              <small>| {storeName} |</small>
            </p>
            <a href="#/">
              <h6 className="news_card_text m-1 fw-bold">{name}</h6>
            </a>
            <h6 className="news_card_text text-primary fw-bold m-1">
              $ {price}
            </h6>
          </div>

          {/* ========== 收藏 & 購物車 ========== */}

          <div className="d-flex align-items-center me-2">
            <button
              className="bg-primary news_card_favorite me-2"
              onClick={() => {
                if (isFavorite) {
                  removeUserFavoriteProduct({
                    productId,
                  })
                } else {
                  addUserFavoriteProduct({
                    productId,
                    storeId,
                    categoryId,
                  })
                }
              }}
            >
              <FontAwesomeIcon
                icon={isFavorite ? 'fa-solid fa-heart' : 'far fa-heart'}
                inverse
                size="lg"
              />
            </button>
            <button
              onClick={addToProductCart}
              className="bg-secondary news_card_favorite border-0 rounded-circle"
            >
              <img src={cart} alt="" className="news_card_cart" />
            </button>
          </div>
        </div>
        {/* ========== 收藏 & 購物車 ========== */}
      </Col>
    </>
  )
}

export default NewsCard
