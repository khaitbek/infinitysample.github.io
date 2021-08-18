import Highway from "@dogstudio/highway";
import {TimelineLite} from "gsap";

class Fade extends Highway.Transition { in({from,to,done}){
	const tl =new TimelineLite();
	tl.fromTo(to,0,{top:"50%"},{top:"50%"}).fromTo(to,0,{height:"2vh",opacity:0},{height:"40vh",top:"10vh",opacity:1,onComplete:()=>{
		from.remove();
		done();
	}});
	}
	out({from,done}){
		done();
		from.remove();
	}

}
export default Fade;