import React from "react";
import { Helmet } from "react-helmet";
import { AppName } from "../../../context/App";
import { useTranslation } from "react-i18next";
import { authService } from "./../../../services/Authentication.Service";
import { Lock, Edit3, Settings, Shield, Image } from "@styled-icons/feather";
import { NavLink, Switch, Route } from "react-router-dom";
import UserInformation from "./Information";
import UpdateImage from "./UpdateImage";
import UpdateInformation from "./UpdateInformation";
import UpdatePassword from './ChangePassword';
import UpdateEmail from './UpdateEmail';
import NotFound from './../../404';

const Profile = () => {
    const { t } = useTranslation();
    const user = authService.GetUser();
    return (
        <>
            <Helmet>
                <title>
                    {t("profile")} | {AppName}
                </title>
            </Helmet>
            <div className="intro-y flex items-center mt-8">
                <h2 className="text-lg font-medium mr-auto">{t("profile")}</h2>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
                    <div className="intro-y box mt-5">
                        <div className="relative flex items-center p-5">
                            <div className="w-12 h-12 image-fit">
                                <img alt={user.firstname} className="rounded-full zoom-in" src={user.image || "/dist/images/profile-11.jpg"} />
                            </div>
                            <div className="ml-4 mr-auto">
                                <div className="font-medium text-base">
                                    {user.firstname} {user.lastname}
                                </div>
                                <div className="text-gray-600">Investor</div>
                            </div>
                        </div>
                        <div className="p-5 border-t border-gray-200" style={{ minHeight: "55vh" }}>
                            <NavLink activeClassName="text-theme-1" exact className="flex items-center  font-medium hover:bg-gray-200 p-3" to="/app/profile">
                                <Shield className="w-4 h-4 mr-2" />
                                {t("info")}
                            </NavLink>
                            <NavLink activeClassName="text-theme-1" className="flex items-center mt-5 hover:bg-gray-200 p-3" to="/app/profile/change-image">
                                <Image className="w-4 h-4 mr-2" />
                                {t("change_image")}
                            </NavLink>
                            <NavLink activeClassName="text-theme-1" className="flex items-center mt-5 hover:bg-gray-200 p-3" to="/app/profile/update">
                                <Edit3 className="w-4 h-4 mr-2" />
                                {t("account_setting")}
                            </NavLink>
                            <NavLink activeClassName="text-theme-1" className="flex items-center mt-5 hover:bg-gray-200 p-3" to="/app/profile/change-password">
                                <Lock className="w-4 h-4 mr-2" />
                                {t("change_password")}
                            </NavLink>
                            <NavLink activeClassName="text-theme-1" className="flex items-center mt-5 hover:bg-gray-200 p-3" to="/app/profile/change-email">
                                <Settings className="w-4 h-4 mr-2" />
                                {t("change_email")}
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
                    <Switch>
                        <Route exact path="/app/profile" component={() => <UserInformation user={user} />} />
                        <Route path="/app/profile/change-image" component={UpdateImage} />
                        <Route path="/app/profile/update" component={UpdateInformation} />
                        <Route path="/app/profile/change-password" component={UpdatePassword} />
                        <Route path="/app/profile/change-email" component={UpdateEmail} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default Profile;
