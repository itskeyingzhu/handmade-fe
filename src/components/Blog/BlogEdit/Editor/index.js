import React from 'react'
import Form from 'react-bootstrap/Form'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'

const API_URL = 'http://localhost:8080'
const UPLOAD_ENDPOINT = 'upload_files'
const Editor = ({
  addTitle,
  handleTitleChange,
  addContent,
  handleContentChange,
  blogId,
}) => {
  /**
   * @param {loader} loader
   * @returns 回傳upload 函式
   */
  const uploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData()
          loader.file.then((file) => {
            body.append('files', file)

            fetch(`${API_URL}/api/blog/${blogId}/${UPLOAD_ENDPOINT}`, {
              method: 'post',
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: `${API_URL}/${res.filename}`,
                })
              })
              .catch((err) => {
                reject(err)
              })
          })
        })
      },
    }
  }

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader)
    }
  }

  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          value={addTitle}
          onChange={handleTitleChange}
          placeholder="文章標題"
          className="fs-1 border-0 border-start border-gray-dark"
        />
      </Form.Group>
      <div className="mb-md-12 mb-7">
        <CKEditor
          editor={BalloonEditor}
          config={{ placeholder: '輸入內容...', extraPlugins: [uploadPlugin] }}
          data={addContent ? addContent : ''}
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor)
          }}
          onChange={handleContentChange}
        />
      </div>
    </>
  )
}

export default Editor
