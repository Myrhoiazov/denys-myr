import {classNames} from 'shared/lib/classNames/classNames';
import React, {memo, useEffect, useRef, useState} from 'react';
import cls from './Textarea.module.scss';

const Textarea = memo((props) => {
	const {
		className,
		value,
		onChange,
		name,
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
		<div className={classNames(cls.TextareaWrapper, {}, [className])}>
			{placeholder && (
				<label
					htmlFor={placeholder}
					className={cls.placeholder}>{`${placeholder}`}</label>
			)}
			<textarea
				name={name}
				id={placeholder}
				ref={ref}
				value={value}
				onChange={onChangeHandler}
				className={cls.textarea}
				onFocus={onFocus}
				onBlur={onBlur}
				{...otherProps}
			/>
		</div>
	);
});

export default memo(Textarea);
