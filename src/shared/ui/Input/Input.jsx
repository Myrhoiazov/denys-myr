import {classNames} from 'shared/lib/classNames/classNames';
import React, {memo, useEffect, useRef, useState} from 'react';
import cls from './Input.module.scss';

const Input = memo((props) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		...otherProps
	} = props;

	const ref = useRef(null);
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e) => {
		onChange?.(e.target.value);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	return (
		<div className={classNames(cls.InputWrapper, {}, [className])}>
			{placeholder && (
				<label
					htmlFor={placeholder}
					className={cls.placeholder}>{`${placeholder}`}</label>
			)}
			<input
				id={placeholder}
				ref={ref}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={cls.input}
				onFocus={onFocus}
				onBlur={onBlur}
				{...otherProps}
			/>
		</div>
	);
});

export default memo(Input);
