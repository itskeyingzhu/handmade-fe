import React, { useEffect, useState } from 'react'
import { useUserLikesProductQuery } from '../../../services/userApi'
import CartRecommendCard from './CartRecommendCard'

const UserLikeProduct = ({ userId }) => {
  const { data } = useUserLikesProductQuery(userId)
  const [Card, setCard] = useState([])

  let newData = []

  useEffect(() => {
    if (data) {
      newData = [...data]?.sort(() => 0.5 - Math.random())
      setCard(newData)
    }
  }, [data])

  return (
    <>
      {Card.length > 0 ? (
        Card?.map((item, i) => {
          if (i < 4) {
            return (
              <div key={'bb' + i}>
                <CartRecommendCard
                  type="product"
                  dataFrom="user"
                  cartIcon="true"
                  productId={item.product_id}
                  store={item.store_name}
                  name={item.product_name}
                  price={item.price}
                  imgs={item.img_name}
                  category={item.category_en_name}
                  amount={item.amount}
                  isFavorite={true}
                  storeId={item.store_id}
                  categoryId={item.category_id}
                />
              </div>
            )
          }
        })
      ) : (
        <h3 className="my-10 cartRecommend_empty">目前尚未有收藏喔</h3>
      )}
    </>
  )
}

export default UserLikeProduct
