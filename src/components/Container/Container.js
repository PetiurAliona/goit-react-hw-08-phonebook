import styled from "./Container.module.css"

const Container = ({ children }) => {
  return <div className={styled.containerWrapper}>{children}</div>
}

export default Container
