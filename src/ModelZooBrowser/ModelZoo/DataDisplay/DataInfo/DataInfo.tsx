import { useContext } from 'react'
import { ModelZooBrowserContext } from '../../../Context/ModelZooBrowserContextProvider'
import { DrawerArrows } from '../../../Icons'


const DataInfo = () => {

    const { selectedModelIndex, selectedModelTerms, onVisualizeAsChange, model, onIsDrawerOpenChange, isDrawerOpen, nodeData } = useContext(ModelZooBrowserContext)

    const timePeriodISO8601 = model?.model?.modelZoo?.samplingPeriod ?? model?.model?.normalBehaviorModel?.samplingPeriod

    const labelValue = convertTimePeriodFromISO8601(timePeriodISO8601)?.labelValue

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onVisualizeAsChange(e.target.value as 'treemap' | 'table')
    }

    // const modelDetailsText = selectedModelIndex ? `Model Index ${selectedModelIndex} (${selectedModelTerms?.length} Terms)` : 'Overview'
    // const timeScale = model?.model?.settings?.data?.timeScale
    const timeScaleText = `Timescale: ${labelValue}`

    return (
        <div className="data-info">
            {/* <h6 className='model-details-header'>{modelDetailsText}</h6> */}
            <div className='model-details'>
                <div className='node-details'>
                    <div>
                        <div className='dn-mark' style={{backgroundColor: nodeData?.color}}></div>
                    </div>
                    <div className='dn-txt-info'>
                        <span style={{fontWeight: '700'}}>{nodeData?.term}</span>
                        {nodeData?.importance && <span>Importance: {nodeData?.importance.toFixed(3)}</span>}
                        {nodeData?.coefficient && <span>Coefficient: {nodeData?.coefficient?.toFixed(3)}</span>}
                    </div>
                </div>
                <span className='mzb-timescale-badge'>{timeScaleText}</span>
                <select onChange={handleSelectChange} defaultValue='treemap' className='mzb-select' >
                    <option value="treemap">Treemap</option>
                    <option value="table">Table</option>
                </select>
                {!isDrawerOpen &&
                    <div className='open-drawer' onClick={() => onIsDrawerOpenChange(true)}>
                        <DrawerArrows />
                        <span>Insights</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default DataInfo


interface TimePeriod {
    value: number;
    timeUnit: string;
    labelValue: string;
}


interface TimePeriod {
    value: number;
    timeUnit: string;
    labelValue: string;
  }

const convertTimePeriodFromISO8601 = (timePeriod: string | undefined): TimePeriod | null => {
    if (!timePeriod) return null

    const regex = /P(?:(\d+)D)?T?(\d+)?(\w+)/
    const matches = timePeriod.match(regex)

    if (matches) {
        let value = 0
        let timeUnit = ''
        if (matches[1]) {
            value += parseInt(matches[1])
            timeUnit = 'day';
        }
        if (matches[2]) {
            value += parseInt(matches[2])
            timeUnit = matches[3]
        }
        const timeUnitMapping: { [key: string]: string } = {
            H: 'hour',
            M: 'minute',
            S: 'second',
            D: 'day',
        }

        const labelValue = `${value} ${timeUnitMapping[timeUnit]}${value > 1 ? 's' : ''}`

        return {
            value,
            timeUnit: timeUnitMapping[timeUnit],
            labelValue
        }
    }

    return null // Invalid time period format
}

