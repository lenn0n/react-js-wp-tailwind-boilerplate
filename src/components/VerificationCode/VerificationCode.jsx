import React from 'react'
import VerificationInput from "react-verification-input";

function VerificationCode(props) {

	const {
		value = "",
		length = 6,
		validChars = "",
		placeholder = "",
		autoFocus = true,
		passwordMode = false,
		inputProps = {},
		containerProps = {},
		classNames = {
			container: "container h-10 md:h-20",
			character: "character bg-white border-secondary rounded-md text-lg md:text-3xl leading-[40px] md:leading-[80px]",
			characterInactive: "character--inactive bg-white border-secondary rounded-md text-lg md:text-3xl leading-[40px] md:leading-[80px]",
			characterSelected: "character--selected",
			characterFilled: "character--filled text-2xl leading-[40px] md:leading-[80px] h-10 md:h-20",
		},
		onChange,
		onComplete,
		onFocus,
		onBlur
	} = props

	return (
		<>
			<VerificationInput
				classNames={{
					container: "container h-10 md:h-20",
					character: "character bg-white border-secondary rounded-md text-lg md:text-3xl leading-[40px] md:leading-[80px]",
					characterInactive: "character--inactive bg-white border-secondary rounded-md text-lg md:text-3xl leading-[40px] md:leading-[80px]",
					characterSelected: "character--selected",
					characterFilled: "character--filled text-2xl leading-[40px] md:leading-[80px] h-10 md:h-20",
				}}
				// value={value}
				length={length}
				// validChars={validChars}
				// placeholder={placeholder}
				autoFocus={autoFocus}
				passwordMode={passwordMode}
				inputProps={inputProps}
				containerProps={containerProps}
				onChange={onChange}
				onComplete={onComplete}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		</>
	)
}

export default VerificationCode
