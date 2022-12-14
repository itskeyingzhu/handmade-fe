import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import Collapse from 'react-bootstrap/Collapse'
import Form from 'react-bootstrap/Form'
import { Toast } from '../../../../UI/SwalStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  useRepliesQuery,
  useCreateReplyMutation,
} from '../../../../../services/replyApi'
import { getReply } from '../../../../../slices/reply-slice'
import { useSelector } from 'react-redux'

const CreateReply = ({ commentId }) => {
  const { data } = useRepliesQuery()
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const [createReply] = useCreateReplyMutation()

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleCancel = () => {
    setInputValue('')
    setOpen(!open)
  }

  useEffect(() => {
    dispatch(getReply(data))
  }, [data, dispatch])

  const localUser = JSON.parse(localStorage?.getItem('user')).user
  const sliceAuth = useSelector((state) => state.authReducers)
  const reply = {
    id: uuidv4(),
    reply_content: inputValue,
    user_id: localUser?.id || sliceAuth?.user.id,
    reply_date: moment().format('YYYY-MM-DD h:mm:ss'),
    comment_id: commentId,
  }

  /**
   * 把回覆傳送給後端和更新 slice
   * @param {event} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await setInputValue('')
      await createReply(reply)
      await Toast.fire({
        icon: 'success',
        title: '已送出回覆',
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className="text-end">
        <button
          onClick={() => setOpen(!open)}
          aria-controls="comment-collapse"
          aria-expanded={open}
          className="rounded-2 border-0 bg-secondary text-white px-4 py-1 mb-3 ms-auto"
        >
          回覆留言
        </button>
      </div>
      <Collapse in={open}>
        <form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              className=" bg-skin-bright"
              as="textarea"
              rows={4}
              required
              value={inputValue}
              onChange={handleChange}
              placeholder="輸入回覆..."
            />
            <div className="d-flex justify-content-end gap-3 align-items-center my-4">
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-2 border-0 bg-secondary text-white px-4 py-1"
              >
                取消
              </button>
              <button
                type="submit"
                className="rounded-2 border-0 bg-secondary-dark text-white px-4 py-1"
              >
                回覆
                <FontAwesomeIcon className="ms-2" icon="fa-solid fa-reply" />
              </button>
            </div>
          </Form.Group>
        </form>
      </Collapse>
    </>
  )
}

export default CreateReply
