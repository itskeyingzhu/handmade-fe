import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Row, Col, Card } from 'react-bootstrap'
import { useUserLikesCourseQuery } from '../../../../services/userApi'
import { v4 as uuidv4 } from 'uuid'
import '../../User.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//TODO: link
//TODO: removeUserFavorite

function dataImgRouter(img_name, category_en_name, course_id) {
  const baseRouter = 'assets/course/course'
  const router = `${baseRouter}_${category_en_name}_${course_id}/`
  const routers = img_name.map((v) => {
    return router + v
  })
  // console.log(routers)
  return routers
}
export const UserLikesCourses = () => {
  const { data } = useUserLikesCourseQuery()
  // console.log(data)
  return (
    <>
      {data === 0 ? (
        <p className="user_like_text text-center py-3" colSpan={6}>
          目前沒有收藏的課程
        </p>
      ) : (
        <Col>
          <div className="d-flex justify-content-start ms-6 mt-3">
            <Row className="user_like gap-3 m-0">
              {data?.map((item) => {
                return (
                  <Card
                    key={item.course_id}
                    className="user_like_card border-0 bg-transparent mx-1 p-0 text-gray-dark"
                  >
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      effect={'slide'}
                      speed={800}
                      slidesPerView={1}
                      loop
                      className="user_like_card_swiper rounded shadow"
                    >
                      {dataImgRouter(
                        item.img_name,
                        item.category_en_name,
                        item.course_id
                      ).map((v, i) => {
                        return (
                          <SwiperSlide key={uuidv4()}>
                            <img src={require(`../../../../${v}`)} alt="" />
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                    <Row className="justify-content-between align-items-center">
                      <Col xs={8} className="mt-2">
                        <p className="mb-1">
                          <small>| {item.store_name} |</small>
                        </p>
                        <h6 className="mb-1 text-truncate">
                          {item.course_name}
                        </h6>
                        <p className="text-primary fw-bold">${item.price}</p>
                      </Col>
                      <Col xs={4} className="d-flex align-items-end">
                        <button className="bg-primary user_like_course_card_favorite border-0 rounded-circle">
                          <FontAwesomeIcon
                            icon="fa-solid fa-heart"
                            inverse
                            size="sm"
                          />
                        </button>
                      </Col>
                    </Row>
                  </Card>
                )
              })}
            </Row>
          </div>
        </Col>
      )}
    </>
  )
}
export default UserLikesCourses
