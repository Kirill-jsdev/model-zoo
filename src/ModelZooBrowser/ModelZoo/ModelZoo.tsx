import DataDisplay from "../DataDisplay/DataDisplay"
import DataInfo from "../DataDisplay/DataInfo/DataInfo"
import { Insights } from "../Insights/Insights"
import { Navigation } from "../Navigation/Navigation"

const ModelZoo = () => {
    return (
        <div className="model-zoo-browser">
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