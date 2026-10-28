import '../assets/css/modal-asset-banner.css'

import drone from '../assets/images/modal3d/drone.png'
import tanks from '../assets/images/modal3d/tank.png'
// import ammunition from '../assets/images/modal3d/ammunition.png'
// tank/ammunition artwork is not in the repo yet; drop the files at these public paths to show them
const tank = '/assets/images/modal3d/banner/tank.png'
const hideBroken = (e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.style.visibility = 'hidden' }

export function ModalAssetBanner() {
  return <div className="modal-asset-banner modal-two-assets" role="img" aria-label="A drone in flight above a tank in a training field">
    <div className="modal-banner-drone"><img src={drone} alt="" onError={hideBroken} /></div>
    <div className="modal-banner-tank"><img src={tanks} alt="" onError={hideBroken} /></div>
  </div>
}
