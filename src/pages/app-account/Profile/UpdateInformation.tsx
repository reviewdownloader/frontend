import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { authService } from "./../../../services/Authentication.Service";
import { Save, Edit3 } from "@styled-icons/feather";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_ACCOUNT } from "../../../queries/user.query";
import { toast } from "react-toastify";
import { CleanMessage } from "./../../../context/App";
import { LoadingIcon } from "./../../../components/Button/index";

const UpdateInformation = () => {
    const user = authService.GetUser();
    const { t } = useTranslation();
    const [model, setModel] = useState(user);

    const [updateFunc, { loading }] = useMutation(UPDATE_ACCOUNT, {
        onCompleted: (data) => {
            if (data.UpdateAccount) {
                toast.success(data.UpdateAccount.message);
                const token = authService.GetToken();
                authService.Login(data.UpdateAccount.doc, token);
            }
        },
        onError: (er) => toast.error(CleanMessage(er.message)),
    });

    return (
        <form
            onSubmit={async (event) => {
                event.preventDefault();
                await updateFunc({
                    variables: {
                        id: user.id,
                        update: {
                            firstname: model.firstname,
                            lastname: model.lastname,
                            address: model.address,
                            walletAddress: model.wallet_address,
                            phone: model.phone,
                            gender: model.gender,
                        },
                    },
                });
            }}
        >
            <div className="intro-y box lg:mt-5" style={{ minHeight: "66vh" }}>
                <div className="flex items-center p-5 border-b border-gray-200">
                    <h2 className="font-medium text-base mr-auto">
                        <Edit3 className="w-4 h-4 mr-2 text-theme-1" /> {t("account_setting")}
                    </h2>
                </div>
                <div className="p-5">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 xl:col-span-6">
                            <div>
                                <label>{t("name.first.label")}</label>
                                <input
                                    onChange={({ currentTarget: { value } }) => setModel({ ...model, firstname: value })}
                                    type="text"
                                    className="input w-full border mt-2"
                                    placeholder={t("name.first.label")}
                                    defaultValue={model.firstname}
                                />
                            </div>
                            <div className="mt-3">
                                <label>{t("email.label")}</label>
                                <input
                                    type="text"
                                    defaultValue={model.email}
                                    className="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                                    placeholder={t("email.placeholder")}
                                    disabled={true}
                                />
                            </div>
                            <div className="mt-3">
                                <label>{t("gender.label")}</label>
                                <select defaultValue={model.gender} onChange={({ currentTarget: { value } }) => setModel({ ...model, gender: value })} className="input w-full border mt-2">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Others</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>{t("referral_code")}</label>
                                <input type="text" className="input w-full border bg-gray-100 cursor-not-allowed mt-2" placeholder="Input text" defaultValue={model.referralCode} />
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-6">
                            <div>
                                <label>{t("name.last.label")}</label>
                                <input
                                    type="text"
                                    onChange={({ currentTarget: { value } }) => setModel({ ...model, lastname: value })}
                                    defaultValue={model.lastname}
                                    className="input w-full border mt-2"
                                    placeholder={t("name.last.label")}
                                />
                            </div>
                            <div className="mt-3">
                                <label>{t("phone.label")}</label>
                                <input
                                    type="text"
                                    onChange={({ currentTarget: { value } }) => setModel({ ...model, phone: value })}
                                    defaultValue={model.phone}
                                    className="input w-full border mt-2"
                                    placeholder={t("phone.placeholder")}
                                />
                            </div>

                            <div className="mt-3">
                                <label>{t("wallet.label")}</label>
                                <input
                                    type="text"
                                    onChange={({ currentTarget: { value } }) => setModel({ ...model, wallet_address: value })}
                                    className="input w-full border mt-2"
                                    defaultValue={model.wallet_address}
                                    placeholder={t("wallet.placeholder")}
                                />
                            </div>
                            <div className="mt-3">
                                <label>{t("address.label")}</label>
                                <textarea
                                    defaultValue={model.address}
                                    onChange={({ currentTarget: { value } }) => setModel({ ...model, address: value })}
                                    className="input w-full border mt-2"
                                    placeholder={t("address.placeholder")}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button disabled={loading} type="submit" className="button  mr-2 mb-2 flex items-center justify-center bg-theme-1 text-white">
                            <Save className="w-4 h-4 mr-2" /> {t("save_changes")}
                        </button>
                    </div>
                    <LoadingIcon loading={loading} />
                </div>
            </div>
        </form>
    );
};

export default UpdateInformation;
