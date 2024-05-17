import React, {memo, useMemo} from 'react';
import s from './Select.module.scss';

const Select = ({name, elements, placeholder, onChange, defaultValue}) => {
	let optionValue = defaultValue ?? 'Выберите значение';

	const onChangeHandler = (e) => {
		let targetValue = e.target.value;

		targetValue = targetValue === optionValue ? '' : targetValue;
		onChange?.(targetValue);
	};

	const elementsList = useMemo(() => {
		return elements.map((elem) => {
			return (
				<option key={elem} value={elem}>
					{elem}
				</option>
			);
		});
	}, [elements]);

	return (
		<div className={s.selectWrapper}>
			{placeholder && (
				<label
					htmlFor={placeholder}
					className={s.placeholder}>{`${placeholder}`}</label>
			)}
			<select
				id={placeholder}
				className={s.select}
				name={name}
				value={defaultValue}
				onChange={onChangeHandler}>
				<option value={optionValue}>
					{defaultValue || optionValue}
				</option>
				{elementsList}
			</select>
		</div>
	);
};

export default memo(Select);
