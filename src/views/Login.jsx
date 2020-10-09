import React from "react";
import logo from "../assets/wobiz-logo.png";
import background from "../assets/wobiz-background.png";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { loginThunk } from "./loginSlice";
import styles from "./Login.module.css";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Input from "../components/Input/Input";

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const login = useSelector((state) => state.login);
    const onSubmit = (data) => {
        console.log({ email: data.email, password: data.password });
        dispatch(loginThunk(data.email, data.password));
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 px-4 py-5">
                    <img
                        src={logo}
                        className={styles.login__logo}
                        alt="Wobiz logo"
                    />
                    <h1 className={`mt-5 mb-4 ${styles.login__title}`}>
                        Ingresa a tu cuenta
                    </h1>
                    <form
                        className="form-group"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="mb-4">
                            <Input
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="ej: usuario@mail.com"
                                refRegister={register({
                                    required: true,
                                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                })}
                            />
                            {errors.email?.type === "required" && (
                                <ErrorMessage>
                                    Necesitamos tu email
                                </ErrorMessage>
                            )}
                        </div>
                        <div className="mb-4">
                            <Input
                                label="Contraseña"
                                name="password"
                                type="password"
                                placeholder="Escribe tu contraseña"
                                refRegister={register({
                                    required: true,
                                    minLength: 6,
                                })}
                            />
                            {errors.password?.type === "required" && (
                                <ErrorMessage>
                                    Necesitamos tu contraseña
                                </ErrorMessage>
                            )}
                            {errors.password?.type === "minLength" && (
                                <ErrorMessage>
                                    La contraseña no tiene un formato válido.
                                </ErrorMessage>
                            )}
                        </div>
                        <a
                            href="#"
                            className={`mb-3 d-block ${styles.login__recover}`}
                        >
                            ¿Olvidaste tu contraseña?
                        </a>
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                        >
                            Ingresar a mi cuenta
                        </button>
                    </form>

                    {login.status === "pending" && (
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    )}
                    {login.status === "success" && (
                        <div class="alert alert-success" role="status">
                            Has sido logeado con exito
                        </div>
                    )}

                    {login.status === "fail" && (
                        <div className="alert alert-danger" role="status">
                            No pudimos logearte. Causa:{" "}
                            {login.response.data.message}
                        </div>
                    )}
                </div>
                <div className="col-lg-8 col-md-6 d-none d-md-block p-0 ">
                    <img
                        className={`vh-100 ${styles.login__background}`}
                        src={background}
                        alt="Home background"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
