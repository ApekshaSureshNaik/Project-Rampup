import Image from 'next/image'
import mypic from '../images/design.jpg'
import styles from '../styles/Home.module.css'
const MyImage = () => {
    return (
      <Image
        className={styles.image}
        src={mypic}
        alt="Picture of the author"
        width="901px"
        height="795px"
      />
    )
  }
  export default MyImage