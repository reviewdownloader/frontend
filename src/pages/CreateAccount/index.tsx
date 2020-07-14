import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import { AppName } from "../../context/App";
import PrimaryButton, { ButtonType } from "../../components/Button";
import { ArrowLeft, UserPlus, ArrowRight, LogIn as LoginIcon } from "@styled-icons/feather";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import countries from "../../data/country.json";

interface iProp {
    history?: any;
}

const CreateAccount: FC<iProp> = ({ history }) => {
    document.body.className = "login";
    const { t } = useTranslation();
    const [step, setStep] = useState(1);

    return (
        <>
            <Helmet>
                <title>
                    {t("join")} | {AppName}
                </title>
            </Helmet>

            <div className="container sm:px-10">
                <div className="block xl:grid grid-cols-2 gap-4">
                    <div className="hidden xl:flex flex-col min-h-screen">
                        <a href="/" className="-intro-x flex items-center pt-5">
                            <img alt="Investment bot" className="w-6" src="dist/images/logo.svg" />
                            <span className="text-white text-lg ml-3">
                                Trade<span className="font-medium">Bot</span>
                            </span>
                        </a>
                        <div className="my-auto">
                            <img alt="investment bot" className="-intro-x w-1/2 -mt-16" src="dist/images/Site-constructor.svg" />
                            <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                                {t("login_title")}
                                <br />
                                {t("sign_up_title_2")}
                            </div>
                            <div className="-intro-x mt-5 text-lg text-white">{t("login_title_desc")}</div>
                        </div>
                    </div>

                    <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                        <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                            <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">{t("join")}</h2>
                            <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">{t("login_desc")}</div>
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                }}
                            >
                                <div className="intro-x mt-8">
                                    {step === 1 && (
                                        <>
                                            <input required type="text" className="intro-x login__input input input--lg border border-gray-300" placeholder={t("name.first.label")} />
                                            <input required type="text" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder={t("name.last.label")} />
                                            <input required type="email" className="intro-x login__input input input--lg border border-gray-300 block mt-4" name="email" placeholder={t("email.label")} />
                                            <input required type="text" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder={t("phone.label")} />
                                            <Select
                                                className="intro-x mt-4"
                                                isMulti={false}
                                                
                                                placeholder={t("gender.label")}
                                                options={[
                                                    { value: "Male", label: "Male" },
                                                    { value: "Female", label: "Female" },
                                                    { value: "Others", label: "Others" },
                                                ]}
                                            />
                                            <Select
                                                className="intro-x block mt-4"
                                                isMulti={false}
                                                placeholder={t("nation.label")}
                                                options={countries.map((item) => ({
                                                    value: item.name,
                                                    label: item.name,
                                                }))}
                                            />
                                        </>
                                    )}
                                    {step === 2 && (
                                        <>
                                            <input type="text" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder={t("wallet.label")} />
                                            <input type="date" className="intro-x login__input input input--lg border border-gray-300 block mt-4" name="dob" placeholder={t("dob.label")} />
                                            <input type="text" className="intro-x login__input input input--lg border border-gray-300 block mt-4" name="address" placeholder={t("address.label")} />
                                            <input type="password" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder={t("password.label")} />
                                            <input type="password" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder={t("password.confirm.text")} />
                                        </>
                                    )}
                                </div>

                                {step === 2 && (
                                    <>
                                        <div className="intro-x flex items-center text-gray-700 mt-4 text-xs sm:text-sm">
                                            <input type="checkbox" className="input border mr-2" id="remember-me" />
                                            <label className="cursor-pointer select-none" htmlFor="remember-me">
                                                {t("agree")} {AppName}
                                            </label>
                                            <a className="text-theme-1 ml-1" href="/">
                                               {t("policy")}
                                            </a>
                                            .
                                        </div>
                                        <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                                            <PrimaryButton type={ButtonType.submit} loading={false} className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">
                                                {t("btn-register")} <UserPlus size={18} />
                                            </PrimaryButton>
                                            <button type="button" onClick={() => setStep(1)} className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0">
                                                <ArrowLeft color="#1b56f2" size={24} /> {t("pagination.previous")}
                                            </button>
                                        </div>
                                    </>
                                )}
                                {step === 1 && (
                                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                                        <PrimaryButton onClick={() => setStep(2)} type={ButtonType.button} loading={false} className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3">
                                            {t("pagination.next")} <ArrowRight size={18} />
                                        </PrimaryButton>
                                        <button type="button" onClick={() => history.push("/")} className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0">
                                            <LoginIcon color="#1b56f2" size={24} /> {t("login.caption")}
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateAccount;
