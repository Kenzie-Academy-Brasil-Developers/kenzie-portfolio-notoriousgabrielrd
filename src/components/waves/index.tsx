import { DivSvg } from "./style"



export const Waves = (): JSX.Element =>{

        return(
            <DivSvg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path className="wave-1" fill="#273036" fill-opacity="0.9" d="M0,96L60,90.7C120,85,240,75,360,85.3C480,96,600,128,720,170.7C840,213,960,267,1080,272C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            <path className="wave-2"  fill="#273036" fill-opacity="0.9" d="M0,288L60,266.7C120,245,240,203,360,181.3C480,160,600,160,720,186.7C840,213,960,267,1080,277.3C1200,288,1320,256,1380,240L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            <path className="wave-3" fill="#273036" fill-opacity="0.9" d="M0,288L60,277.3C120,267,240,245,360,245.3C480,245,600,267,720,234.7C840,203,960,117,1080,117.3C1200,117,1320,203,1380,245.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </DivSvg>
        )
}