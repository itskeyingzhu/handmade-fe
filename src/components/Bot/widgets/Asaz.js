import React from 'react'
import { Link } from 'react-router-dom'

const Asaz = () => {
  return (
    <h5>
      你好，歡迎至最新消息了解更多「國際女孩日」活動詳情，並可領取專屬優惠券唷 !
      <p>
        好康活動千萬別錯過 : <Link to="/news">提供連結</Link>
      </p>
    </h5>
  )
}

export default Asaz
