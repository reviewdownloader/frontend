import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { AppName } from "../../context/App";
import PrimaryButton, { ButtonType } from "../../components/Button";
import { ArrowRight, UserPlus } from "@styled-icons/feather";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

interface iProp {
    history?: any;
}

const Login: FC<iProp> = ({ history }) => {
    document.body.className = "login";
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>
                    {t("login")} | {AppName}
                </title>
            </Helmet>

            <div className="container sm:px-10">
                <div className="block xl:grid grid-cols-2 gap-4">
                    <div className="hidden xl:flex flex-col min-h-screen">
                        <a href="/" className="-intro-x flex items-center pt-5">
                            <img alt="Investment bot" className="w-6" src="assets/images/logo.svg" />
                            <span className="text-white text-lg ml-3">
                                Trade<span className="font-medium">Bot</span>
                            </span>
                        </a>
                        <div className="my-auto">
                            <img alt="investment bot" className="-intro-x w-1/2 -mt-16" src="assets/images/Site-constructor.svg" />
                            <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                                {t("login_title")}
                                <br />
                                {t("login_title_2")}
                            </div>
                            <div className="-intro-x mt-5 text-lg text-white">{t("login_title_desc")}</div>
                        </div>
                    </div>

                    <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                        <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                            <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">{t("login.caption")}</h2>
                            <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">{t("login_desc")}</div>
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                }}
                            >
                                <div className="intro-x mt-8">
                                    <input type="email" className="intro-x login__input input input--lg border border-gray-300 block" placeholder="Email" />
                                    <input type="password" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Password" />
                                </div>
                                <div className="intro-x flex text-gray-700 text-xs sm:text-sm mt-4">
                                    <div className="flex items-center mr-auto">
                                        <input type="checkbox" className="input border mr-2" id="remember-me" />
                                        <label className="cursor-pointer select-none" htmlFor="remember-me">
                                            Remember me
                                        </label>
                                    </div>
                                    <NavLink to="/forgot-password">Forgot Password?</NavLink>
                                </div>
                                <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                                    <PrimaryButton type={ButtonType.submit} loading={false} className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">
                                        Login <ArrowRight size={18} />
                                    </PrimaryButton>

                                    <button
                                        type="button"
                                        onClick={() => history.push("/create-account")}
                                        className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"
                                    >
                                        Sign up <UserPlus size={18} color="#1b56f2" />
                                    </button>
                                </div>
                            </form>
                            <div className="intro-x mt-10 xl:mt-24 text-gray-700 text-center xl:text-left">
                                By signin up, you agree to our
                                <br />
                                <a className="text-theme-1" href="/">
                                    Terms and Conditions
                                </a>
                                &{" "}
                                <a className="text-theme-1" href="/">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
