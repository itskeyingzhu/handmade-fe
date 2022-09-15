import '../../../../components/User/User.scss'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useCourseOrderDetailsQuery } from '../../../../services/userApi'
import { Table } from 'react-bootstrap'
import moment from 'moment'

const CoursesDetails = () => {
  const { orderNumber } = useParams()
  const { data } = useCourseOrderDetailsQuery(orderNumber)
  // console.log("data:", data )

  return (
    <>
      <Table className="ms-8 user_order_list_table">
        <thead>
          <tr className="text-center">
            <th></th>
            <th>課程名稱</th>
            <th>預約時段</th>
            <th>人量</th>
            <th>單價</th>
            <th>小計</th>
          </tr>
        </thead>
        {data?.map((item) => {
          const transformCourse = moment(item.date).format(
            'YYYY.MM.DD - hh:mma'
          )
          return (
            <tbody key={item.id}>
              <tr className="text-center align-middle">
                <td className="text-end">
                  <img
                    className="user_order_list_img"
                    src={require(`../../../../assets/course/course_${item.category_en_name}_${item.course_id}/${item.img_name}`)}
                    alt=""
                  />
                </td>
                <td>{item.course_name}</td>
                <td>{transformCourse}</td>
                <td>{item.amount}</td>
                <td>$ {item.price}</td>
                <td>$ {item.amount * item.price}</td>
              </tr>
            </tbody>
          )
        })}
      </Table>
    </>
  )
}
export default CoursesDetails
