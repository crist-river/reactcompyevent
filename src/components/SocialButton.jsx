import PropTypes from 'prop-types'

const SocialButton = ({img,img2,img3}) => {
  return (
    <>
        <button> facebook {img}</button>
        <button> github {img2}</button>
        <button> instagram {img3}</button>

        <></>
    </>
  )
};

SocialButton.propTypes={
    img:PropTypes.string.isRequired,
    img2:PropTypes.string.isRequired,
    img3:PropTypes.string.isRequired
}

export default SocialButton;
