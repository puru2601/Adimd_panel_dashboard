import "./home.css";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgedSm from "../../components/widgedSm/WidgedSm";
import Widgedlg from "../../components/widgetLg/Widgedlg";

export default function Home() {
	return (
		<div className="home">
			<Featured />
			<Chart
				data={userData}
				title="User Analytics"
				grid
				dataKey="Active User"
			/>
			<div className="homeWidegets">
				<WidgedSm />
				<Widgedlg />
			</div>
		</div>
	);
}
