import HorizontalLine from "./HorizontalLine";
import Title from "./Title";
import mainImg from './../../images/fake-video-img.png'



const WatchVideo = () => {
  return ( 
<section>
<div className="flex gap-[7vw] items-center">
<Title text='Watch video to discover advantages' maxWidth='473px' size='44' />
<div className="relative">
  <HorizontalLine position='top-0 left-0' />
</div>
</div>
<div className="pt-[10vh]">
  <div>
    <img src={mainImg} alt="mainImg" />
  </div>
</div>
</section>

   );
}
 
export default WatchVideo;