import SmallWithSocial from "../Components/Footer"
import WithSubnavigation from "../Components/Header"
import CallToActionWithVideo from "../Components/Hero"

const Home = () => {
  return (
    <div>
      <WithSubnavigation/>
      <CallToActionWithVideo/>
      {/**PUT YOUR CONTENT HERE ! */}
      <SmallWithSocial/>
    </div>
  )
}

export default Home