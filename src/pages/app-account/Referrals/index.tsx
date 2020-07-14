import React from "react";
import { Helmet } from "react-helmet";
import { AppName } from "../../../context/App";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/react-hooks";
import { GET_YOUR_REFERRALS } from "../../../queries/user.query";
import { toast } from "react-toastify";
import { CleanMessage } from "./../../../context/App";
import { LoadingIcon } from "../../../components/Button";
import UserItems from "./items";
import { Copy } from "@styled-icons/feather";
import { authService } from "./../../../services/Authentication.Service";

const YourReferral = () => {
    const { t } = useTranslation();
    const { referralCode } = authService.GetUser();

    const { loading, data } = useQuery(GET_YOUR_REFERRALS, {
        onError: (er) => toast.error(CleanMessage(er.message)),
    });
    return (
        <>
            <Helmet>
                <title>
                    {t("referrer")} | {AppName}
                </title>
            </Helmet>
            <h2 className="intro-y text-lg font-medium mt-10">{t("referrer")}</h2>
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
                <div className="mr-2 mx-auto text-gray-600 sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">Invite a friend to invest using your referral code</div>
                <div className="hidden md:block mx-auto text-gray-600 ">{t("referral.message")}</div>
                <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                    <div className="w-56 relative text-gray-700">
                        <input title="referral code" defaultValue={referralCode} disabled={true} type="text" className="input w-56 box pr-10 placeholder-theme-13" placeholder="Search..." />
                        <Copy className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
                        {/* <i className="" data-feather="search"></i> */}
                    </div>
                </div>
            </div>

            <LoadingIcon className="text-theme-1" loading={loading} />

            {data && !loading && <UserItems items={data.GetYourReferrals.docs} />}
        </>
    );
};

export default YourReferral;
