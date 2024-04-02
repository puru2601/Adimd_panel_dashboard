import "./user.css";
import {
	PermIdentity,
	CalendarToday,
	ContactPhone,
	Email,
	AddLocation,
	Publish,
} from "@mui/icons-material";

export default function User() {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<button className="userAddButton">Create</button>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
							className="userShowImg"
							alt=""
						/>
						<div className="userShowTitle">
							<span className="userShowUsername">Anna Walker</span>
							<span className="userShowUserTitle">Software Developer</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowBottomTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentity className="userShowIcon" />
							<span className="userShowInfoTitle">anny55</span>
						</div>
						<div className="userShowInfo">
							<CalendarToday className="userShowIcon" />
							<span className="userShowInfoTitle">17.11.2005</span>
						</div>
						<span className="userShowBottomTitle">Contact Details</span>

						<div className="userShowInfo">
							<ContactPhone className="userShowIcon" />
							<span className="userShowInfoTitle">+91 132 456 0789</span>
						</div>
						<div className="userShowInfo">
							<Email className="userShowIcon" />
							<span className="userShowInfoTitle">anny55@gmail.com</span>
						</div>
						<span className="userShowBottomTitle">Address</span>
						<div className="userShowInfo">
							<AddLocation className="userShowIcon" />
							<span className="userShowInfoTitle">Bihar | India</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form action="" className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username: </label>
								<input
									type="text"
									placeholder="anna55"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Full Name: </label>
								<input
									type="text"
									placeholder="Anna Walker"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Email: </label>
								<input
									type="text"
									placeholder="anna55@gmail.com"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Phone: </label>
								<input
									type="text"
									placeholder="+90 123 456 7890"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Address: </label>
								<input
									type="text"
									placeholder="Bihar | India"
									className="userUpdateInput"
								/>
							</div>
						</div>

						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<img
									src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
									className="userUpdateImg"
									alt=""
								/>
								<label htmlFor="file">
									<Publish className="userUpdateIcon"/>
								</label>
								<input type="file" id="file" style={{ display: "none" }} />
							</div>
							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
