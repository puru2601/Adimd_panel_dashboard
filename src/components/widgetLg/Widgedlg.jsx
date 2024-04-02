import "./widgedLg.css";

export default function Widgedlg() {

  const Button = ({type}) => {
    return <button className={"widgedlgButton " + type}>{type}</button>
  }

	return (
		<div className="widgedlg">
			<h3 className="widgedlgTitle">Letest Transactions</h3>
			<table className="widgedlgTable">
				<tr className="widgedlgTr">
					<th className="widgedlgTh">Customer</th>
					<th className="widgedlgTh">Date</th>
					<th className="widgedlgTh">Amount</th>
					<th className="widgedlgTh">Status</th>
				</tr>
        <tr className="widgedlgTr">
         <td className="widgedlguser">
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" className="widgedlgImg" />
          <span className="widgedlgName">Susan Carol</span>
         </td>

         <td className="widgedlgData">2 June 2024</td>
         <td className="widgedlgAmount">$122.00</td>
         <td className="widgedlgStatus"><Button type="Approved"/></td>

        </tr>
        <tr className="widgedlgTr">
         <td className="widgedlguser">
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" className="widgedlgImg" />
          <span className="widgedlgName">Susan Carol</span>
         </td>

         <td className="widgedlgData">2 June 2024</td>
         <td className="widgedlgAmount">$122.00</td>
         <td className="widgedlgStatus"><Button type="Declined"/></td>

        </tr>
        <tr className="widgedlgTr">
         <td className="widgedlguser">
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" className="widgedlgImg" />
          <span className="widgedlgName">Susan Carol</span>
         </td>

         <td className="widgedlgData">2 June 2024</td>
         <td className="widgedlgAmount">$122.00</td>
         <td className="widgedlgStatus"><Button type="Pending"/></td>

        </tr>
        <tr className="widgedlgTr">
         <td className="widgedlguser">
          <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" className="widgedlgImg" />
          <span className="widgedlgName">Susan Carol</span>
         </td>

         <td className="widgedlgData">2 June 2024</td>
         <td className="widgedlgAmount">$122.00</td>
         <td className="widgedlgStatus"><Button type="Approved"/></td>

        </tr>
			</table>
		</div>
	);
}
