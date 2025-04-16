async function DocsPage({ params }) {

  const { slug } = await params

  if(slug?.length === 2 ) {
    return (
      <div>Docs, Feature { slug [0] }, Example { slug [1] }</div>
    )
  } else if(slug?.length === 1) {
    return (
      <div>Feature { slug[0] }</div>
    )
  }

  console.log(slug)
  return (
    <div>
      <h1 className="text-3xl">Docs Page</h1>
    </div>
  )
}

export default DocsPage
