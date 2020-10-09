import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, name, placeholder, refRegister }) => (
    <>
        <label htmlFor={name} className={styles.input__title}>
            {label}
        </label>
        <input
            type={type}
            className={`form-control mb-2 ${styles.input}`}
            name={name}
            placeholder={placeholder}
            ref={refRegister}
        />
    </>
);

export default Input;
