import { useContext } from 'react'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import DataDisplay from "./DataDisplay/DataDisplay"
import DataInfo from "./DataDisplay/DataInfo/DataInfo"
import { Insights } from "./Insights/Insights"
import { Navigation } from "./Navigation/Navigation"

const ModelZoo = () => {

    const { isDrawerOpen } = useContext(ModelZooBrowserContext)

    return (
        <div className="model-zoo-browser" style={{gridTemplateColumns: isDrawerOpen ? '250px 1fr 250px' : '250px 1fr 0px'}}>
            <div className='navigation'>
                <Navigation />
            </div>
            <div className="data-visualization">
                <DataInfo />
                <DataDisplay />
            </div>
            <div className='insights'>
                <Insights />
            </div>
        </div>
    )
}

export default ModelZoo