import source0 from '../assets/images/sectors/enterprise-hero.webp'
import variant0_640 from '../assets/images/enterprise-responsive/enterprise-hero-640.webp'
import variant0_1024 from '../assets/images/enterprise-responsive/enterprise-hero-1024.webp'
import source1 from '../assets/images/insightxr/connected-training.webp'
import variant1_640 from '../assets/images/enterprise-responsive/connected-training-640.webp'
import variant1_1024 from '../assets/images/enterprise-responsive/connected-training-1024.webp'
import source2 from '../assets/images/insightxr/professional-safety-vr.webp'
import variant2_640 from '../assets/images/enterprise-responsive/professional-safety-vr-640.webp'
import variant2_1024 from '../assets/images/enterprise-responsive/professional-safety-vr-1024.webp'
import source3 from '../assets/images/sectors/forklift-enterprise.webp'
import variant3_640 from '../assets/images/enterprise-responsive/forklift-enterprise-640.webp'
import variant3_1024 from '../assets/images/enterprise-responsive/forklift-enterprise-1024.webp'
import source4 from '../assets/images/sectors/confined-space-vr.webp'
import variant4_640 from '../assets/images/enterprise-responsive/confined-space-vr-640.webp'
import variant4_1024 from '../assets/images/enterprise-responsive/confined-space-vr-1024.webp'
import source5 from '../assets/images/sectors/working-at-height-vr.webp'
import variant5_640 from '../assets/images/enterprise-responsive/working-at-height-vr-640.webp'
import variant5_1024 from '../assets/images/enterprise-responsive/working-at-height-vr-1024.webp'
import source6 from '../assets/images/sectors/scaffolding-training.webp'
import variant6_640 from '../assets/images/enterprise-responsive/scaffolding-training-640.webp'
import variant6_1024 from '../assets/images/enterprise-responsive/scaffolding-training-1024.webp'
const images:Record<string,{width:number;height:number;srcSet:string}>={
 [source0]: {width:1672,height:941,srcSet:`${variant0_640} 640w, ${variant0_1024} 1024w, ${source0} 1672w`},
 [source1]: {width:1600,height:900,srcSet:`${variant1_640} 640w, ${variant1_1024} 1024w, ${source1} 1600w`},
 [source2]: {width:1600,height:900,srcSet:`${variant2_640} 640w, ${variant2_1024} 1024w, ${source2} 1600w`},
 [source3]: {width:1672,height:941,srcSet:`${variant3_640} 640w, ${variant3_1024} 1024w, ${source3} 1672w`},
 [source4]: {width:1672,height:941,srcSet:`${variant4_640} 640w, ${variant4_1024} 1024w, ${source4} 1672w`},
 [source5]: {width:1672,height:941,srcSet:`${variant5_640} 640w, ${variant5_1024} 1024w, ${source5} 1672w`},
 [source6]: {width:1672,height:941,srcSet:`${variant6_640} 640w, ${variant6_1024} 1024w, ${source6} 1672w`}
}
export function enterpriseImageProps(src:string,sizes='(max-width: 700px) 100vw, 50vw'){const image=images[src];return image?{...image,sizes}:{}}
