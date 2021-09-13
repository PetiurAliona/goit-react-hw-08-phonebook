import Loader from "react-loader-spinner"
import styled from "./Loader.module.css"

const LoaderSpinner = () => {
  return (
    <div className={styled.loaderWrapper}>
      <Loader type="ThreeDots" color="#6495ed" height={60} width={60} />
    </div>
  )
}

export default LoaderSpinner
