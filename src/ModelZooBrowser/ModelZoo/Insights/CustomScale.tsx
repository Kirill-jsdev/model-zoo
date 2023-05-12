import './CustomScale.css'

type CustomScaleProps = {
  color: string
  label: string
  name: string
  tooltipLabel: string
}


const CustomScale: React.FC<CustomScaleProps> = ({color, label, name, tooltipLabel}) => {
  return (
    <div className='mzb-scale-wrapper'>
      <div className='mzb-scale-header'>
        <div>{name}</div>
        <div className='mzb-scale-label' style={{backgroundColor: color}}>{label}</div>
      </div>
      <div className="mzb-scale">
        <div className="mzb-scale-p">
          <span className='mzb-scale-badge start'>-18</span>
          <span className='mzb-scale-badge'>-16</span>
        </div>
        <div className="mzb-scale-p"><span className='mzb-scale-badge'>-14</span></div>
        <div className="mzb-scale-p"><span className='mzb-scale-badge'>-12</span></div>
        <div className="mzb-scale-p"><span className='mzb-scale-badge'>-10</span></div>
        <div className="mzb-scale-p"><span className='mzb-scale-badge'>-8</span></div>
        <div className="mzb-scale-p"><span className='mzb-scale-badge'>-6</span></div>
        <div className="mzb-scale-p"><span className='mzb-scale-badge'>-4</span></div>
        <div className="mzb-scale-p"><span className='mzb-scale-badge'>-2</span></div>
        <div className="mzb-scale-p start"><span className='mzb-scale-badge'>-0</span></div>
        <div className="mzb-scale-p"><span className='mzb-scale-badge'>+2</span></div>
      </div>

      <div className='mzb-result-line-container' >
        <div className='mzb-result-line-100'>
          <div className='mzb-result-line-color' style={{backgroundColor: color, width: '90%', right: '20%' }}></div>
        </div>
      </div>

      <div className='mzb-scale-tooltip-label'>
        <div className='mzb-scale-label-mark' style={{backgroundColor: color}}></div>
        <div className='mzb-scale-label-text'>{tooltipLabel}</div>
      </div>

    </div>
  )
}

export default CustomScale