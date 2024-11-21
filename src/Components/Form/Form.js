import "./Form.css";
import { useState } from "react";

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();

const Form = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [date, setDate] = useState({
		day: "",
		month: "",
		year: "",
	});
	const [time, setTime] = useState({
		hour: "",
		minute: "",
	});
	const [people, setPeople] = useState(1);
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [dateError, setDateError] = useState(false);
	const [timeError, setTimeError] = useState(false);

	const handleCount = (symbol) => {
		if (symbol === "+") {
			setPeople(people + 1);
		} else if (symbol === "-" && people > 1) {
			setPeople(people - 1);
		}
	};

	const validateName = () => {
		let isError = false;
		if (name === "") {
			isError = true;
		} else {
			isError = false;
		}
		setNameError(isError);
		return isError;
	};

	const validateEmail = () => {
		let isError = false;
		if (email === "") {
			isError = true;
		} else {
			isError = false;
		}
		setEmailError(isError);
		return isError;
	};

	const validateDate = () => {
		const { month, day, year } = date;
		const yearCondition = +year < currentYear;
		const monthCondition = +month < currentMonth && +year === currentYear;
		const dayCondition = +day < currentDay && +month === currentMonth;
		let isError = false;

		if (yearCondition || monthCondition || dayCondition) {
			isError = true;
		} else {
			isError = false;
		}
		setDateError(isError);
		return isError;
	};

	const validateTime = () => {
		const { hour, minute } = time;
		const currentTime = currentDate.toLocaleTimeString();
		const currentHour = +currentTime.split(":")[0];
		const currentMinute = +currentTime.split(":")[1];
		let isError = false;

		// to add logic for AM and PM time
		// const dayTime = currentTime.split(" ")[1];

		const dayCondition = +hour < currentHour && +date.day === currentDay;
		const timeCondition = +minute < currentMinute && +hour === currentHour;

		if (dayCondition || timeCondition) {
			isError = true;
		} else {
			isError = false;
		}
		setTimeError(isError);
		return isError;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const isNameError = validateName();
		const isEmailError = validateEmail();
		const isDateError = validateDate();
		const isTimeError = validateTime();

		if (isNameError || isEmailError || isDateError || isTimeError) {
			console.table({ isNameError, isEmailError, isDateError, isTimeError });
		} else {
			window.location.href = "/confirmation";
		}
	};

	return (
		<form onSubmit={handleSubmit} className="form-wrapper p-4 p-sm-5">
			<input type="text" value={name} placeholder="Name" className="w-100" onChange={(e) => setName(e.target.value)} />
			<p className={nameError ? "input-error m-0 p-0" : "hidden"}>This field is required!</p>
			<input type="text" value={email} placeholder="Email" className="w-100" onChange={(e) => setEmail(e.target.value)} />
			<p className={emailError ? "input-error m-0 p-0" : "hidden"}>This field is required!</p>
			<div>
				<label>
					Pick a date:
					<p className={dateError ? "input-error m-0 p-0" : "hidden"}>This field is required!</p>
				</label>
				<input
					type="number"
					value={date.month}
					placeholder="MM"
					max="12"
					onChange={(e) => setDate({ ...date, month: e.target.value })}
				/>
				<input
					type="number"
					value={date.day}
					placeholder="DD"
					max="31"
					onChange={(e) => setDate({ ...date, day: e.target.value })}
				/>
				<input type="number" value={date.year} placeholder="YYYY" onChange={(e) => setDate({ ...date, year: e.target.value })} />
			</div>
			<div>
				<label>
					Pick a time:
					<p className={timeError ? "input-error m-0 p-0" : "hidden"}>This field is required!</p>
				</label>
				<input
					type="number"
					value={time.hour}
					placeholder="09"
					max="12"
					onChange={(e) => setTime({ ...time, hour: e.target.value })}
				/>
				<input
					type="number"
					value={time.minute}
					placeholder="00"
					max="59"
					onChange={(e) => setTime({ ...time, minute: e.target.value })}
				/>
				<div className="custom-select">
					<select>
						<option value="am">AM</option>
						<option value="pm">PM</option>
					</select>
				</div>
			</div>
			<div className="select-people">
				<p onClick={() => handleCount("-")} className="select-symbol">
					-
				</p>
				<p className="edit">{people} people</p>
				<p onClick={() => handleCount("+")} className="select-symbol">
					+
				</p>
			</div>
			<button className="btn-dine">make reservation</button>
		</form>
	);
};

export default Form;
