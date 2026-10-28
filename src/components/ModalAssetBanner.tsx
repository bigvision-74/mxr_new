import ammunition from '../assets/images/modal3d/banner/ordnance-reference.webp'
import '../assets/css/modal-asset-banner.css'

// tank/ammunition artwork is not in the repo yet; drop the files at these public paths to show them
const tank = '/assets/images/modal3d/banner/tank.png'
const hideBroken = (e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.style.visibility = 'hidden' }

export function ModalAssetBanner(){
  return <div className="modal-asset-banner" role="img" aria-label="A visual collection of a drone, a tank and ammunition training reference models">
    <div className="modal-asset-grid" aria-hidden="true"/>
    <div className="modal-banner-drone"><img src="/assets/images/Home/drone.png" alt=""/><span>01 / UNCREWED SYSTEMS</span></div>
    <div className="modal-banner-tank"><img src={tank} alt="" onError={hideBroken}/><span>02 / DEFENCE ASSETS</span></div>
    <div className="modal-banner-ammo"><img src={ammunition} alt="" onError={hideBroken}/><span>03 / AMMUNITION &amp; ORDNANCE</span></div>
  </div>
}
