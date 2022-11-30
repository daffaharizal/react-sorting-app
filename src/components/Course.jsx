const Course = (props) => {
  return (
      <>
        <h6 className="text-secondary">{props.kategori}</h6>
        <h1 className="fw-bolder">{props.judul}</h1>
        <p className="text-secondary">{props.caption}</p>
      </>
  )
}

export default Course;