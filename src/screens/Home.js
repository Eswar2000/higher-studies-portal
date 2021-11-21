import PieChart from "../components/PieChart";
import HomeCard from "../components/HomeCard";
import { Box } from "@material-ui/core";

export default function Home(){
    return (
        <div className="homeCard">
            <div className="homeLeftCol">
                <HomeCard />
            </div>
            <div className="homeRightCol">
                <div id="homeRows">
                    <PieChart entryLabels={['GRE Marks','Missed Marks']} plotLabel='GRE Marks' plotData={[321,19]} plotTitle='GRE Marks'/>
                </div>
                <Box height={12}/>
                <div id="homeRows">
                    <PieChart entryLabels={['TOEFL Marks','Missed Marks']} plotLabel='TOEFL Marks' plotData={[106,14]} plotTitle='TOEFL Marks'/>
                </div>
            </div>
            
        </div>
    );
}