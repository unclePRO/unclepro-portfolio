import TextPressure from "../ext/TextPressure";
import LineWaves from "../ext/LineWaves"
import ASCIIText from '../ext/AsciiText';

export default function Page1() {

    return (
        <div className="w-[800px] h-[500px] flex flex-col justify-center items-center rounded-3xl">
            <ASCIIText
            text="unclePRO"
            enableWaves
            asciiFontSize={10}
            />
        </div>
    )
}