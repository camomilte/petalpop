const ProductPage = async ({ params }) => {

    const { productId } = await params;
  return (
    <div>
      Productpage { productId }
    </div>
  )
}

export default ProductPage
