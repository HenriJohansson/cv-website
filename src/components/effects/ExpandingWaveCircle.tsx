import { useEffect, useState } from "react";
import '@components/effects/expandingWaveCircle.css'

const ExpandingWaveCircle = (props: {disabled?: boolean}) => {
  const [effect, setEffect] = useState("effect")
  useEffect(() => {
    if(props.disabled){
      setEffect("effect_disabled")
    }
  }, [props.disabled])

  return (
    <div className={effect}>
    </div>
  )
}
export default ExpandingWaveCircle
