import './CustomScale.css'

type CustomScaleProps = {
  color: string
  label: string
  name: string
  tooltipLabel: string
  scaledUnusedOffsets: {
    from?: number
    to?: number
  }
}


const CustomScale: React.FC<CustomScaleProps> = ({color, label, name, tooltipLabel, scaledUnusedOffsets}) => {

  const {from, to} = scaledUnusedOffsets

  const barLength = typeof from === 'number' && typeof to === 'number' ? Math.abs((to - from) * 10) : 0
  const offsetRight = typeof to === 'number' ? Math.abs(to * 10) : 0
  const offset =  typeof to === 'number' && to > 0 ? offsetRight * - 1 : offsetRight
  const areDotsVisible = typeof from === 'number' && typeof to === 'number' && barLength + offset > 180 ? true : false

  console.log(barLength, from, to)

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
          <div className='mzb-result-line-color' style={{backgroundColor: color, width: `${barLength}%`, right: `${offset}%` }}></div>
          {/* <div className='mzb-result-line-color' style={{backgroundColor: color, width: '50%', right: '-25%' }}></div> */}
        </div>
      </div>
      {areDotsVisible && <div className='mzb-overflow-dot first' style={{backgroundColor: color}}></div>}
      {areDotsVisible && <div className='mzb-overflow-dot second' style={{backgroundColor: color}}></div>}

      <div className='mzb-scale-tooltip-label'>
        <div className='mzb-scale-label-mark' style={{backgroundColor: color}}></div>
        <div className='mzb-scale-label-text'>{tooltipLabel}</div>
      </div>

    </div>
  )
}

export default CustomScale