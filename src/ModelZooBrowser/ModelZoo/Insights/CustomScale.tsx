import './CustomScale.css'

const CustomScale = () => {
  return (
    <div className='mzb-scale-wrapper'>
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

      <div className='mzb-result-line' >
        <div className='mzb-result-line-color'></div>
      </div>
    </div>
  )
}

export default CustomScale