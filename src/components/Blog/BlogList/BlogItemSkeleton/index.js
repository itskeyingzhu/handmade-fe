import { Skeleton } from '@mui/material'

const BlogItemSkeleton = () => {
  return (
    <>
      <div className="mb-2 d-flex flex-column flex-lg-row gap-4 pb-4 mb-6 border-bottom">
        <div className="w-100 w-md-25">
          <Skeleton
            className="h-100 d-md-flex img-fluid p-10"
            animation="wave"
            variant="rectangular"
          />
        </div>
        <div className="w-md-100 d-flex flex-column">
          <div className="d-flex gap-3">
            <Skeleton
              className="rounded-0 mb-2 align-self-start py-2 px-3 text-dark px-6 py-3 m-0"
              animation="wave"
              variant="rectangular"
            />
            <Skeleton
              className="rounded-0 mb-2 align-self-start py-2 px-3 text-dark px-6 py-3 m-0"
              animation="wave"
              variant="rectangular"
            />
          </div>
          <Skeleton animation="wave" className="py-2 w-35 " />
          <Skeleton animation="wave" className="w-20" />
          <Skeleton animation="wave" /> <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </div>
      </div>
    </>
  )
}

export default BlogItemSkeleton
