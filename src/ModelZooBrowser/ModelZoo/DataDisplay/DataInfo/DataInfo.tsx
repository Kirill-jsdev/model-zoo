import { useContext } from 'react'
import { ModelZooBrowserContext } from '../../../Context/ModelZooBrowserContextProvider'
import { DrawerArrows } from '../../../Icons'
import { DetectionModel } from '../../../ADModelTypes'
import { ForecastModel } from '../../../FTypes'


const DataInfo = () => {

    const { onVisualizeAsChange, model, onIsDrawerOpenChange, isDrawerOpen, nodeData } = useContext(ModelZooBrowserContext)

    const detectionModel = model as DetectionModel
    const forecastModel = model as ForecastModel

    const timePeriodISO8601 = forecastModel?.model?.modelZoo?.samplingPeriod ?? detectionModel?.model?.normalBehaviorModel?.samplingPeriod

    const labelValue = convertTimePeriodFromISO8601(timePeriodISO8601)?.labelValue

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onVisualizeAsChange(e.target.value as 'treemap' | 'table')
    }

    const timeScaleText = `Timescale: ${labelValue}`

    return (
        <div className="data-info">

            <div className='mzb-node-details'>
                <div>
                    <div className='dn-mark' style={{backgroundColor: nodeData?.color}}></div>
                </div>
                <div className='dn-txt-info'>
                    <span style={{fontWeight: '700'}}>{nodeData?.term}</span>
                    {nodeData?.importance && <span>Importance: {nodeData?.importance.toFixed(3)}</span>}
                    {nodeData?.coefficient && <span>Coefficient: {nodeData?.coefficient?.toFixed(3)}</span>}
                </div>
            </div>

            <div className='model-details'>
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


export interface TimePeriod {
    value: number
    timeUnit: string
    labelValue: string
  }

export const convertTimePeriodFromISO8601 = (timePeriod: string | undefined): TimePeriod | null => {
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

