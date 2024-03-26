import React, { useState } from 'react'

function Switch({ checked = false }) {
	const [isChecked, setIsChecked] = useState(checked);

	const handleIsChecked = () => {
		setIsChecked(!isChecked)
	}

	return (
		<>
			<label class="inline-flex items-center cursor-pointer">
				<input type="checkbox" value="" class="sr-only peer" checked={isChecked} onClick={handleIsChecked} />
				<div class="relative w-12 h-7 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary dark:peer-focus:ring-primary dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:start-[5px] after:bg-white after:border-primary after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-b from-primary to-sub-primary"></div>
				<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 sr-only">Checked toggle</span>
			</label>
		</>
	)
}

export default Switch
