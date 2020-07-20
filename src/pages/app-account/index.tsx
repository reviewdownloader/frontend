import React from "react";
import { Helmet } from "react-helmet";
import { AppName } from "../../context/App";
// import { authService } from "../../services/Authentication.Service";
import { useTranslation } from "react-i18next";
import MobileNavigation from "../../components/MobileNavigation";
import TopNavigation from "../../components/TopNavigation";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import YourInvestment from "./YourInvestment";
import YourReferral from "./Referrals/index";
import Profile from "./Profile/index";
import InvestmentHistory from "./YourInvestment/History";
import Plan from "./Management/Plan";


const AppAccount = () => {
    // Update css class name
    document.body.className = "app";
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>
                    {t("Dashboard")} | {AppName}
                </title>
            </Helmet>
            <MobileNavigation />
            <TopNavigation />
            <div className="content">
                <Switch>
                    <Route exact path="/app" component={Dashboard} />
                    <Route exact path="/app/user-investment" component={YourInvestment} />
                    <Route exact path="/app/referral" component={YourReferral} />
                    <Route path="/app/profile" component={Profile} />
                    <Route path="/app/investment-history/:id" component={InvestmentHistory} />
                    <Route path="/app/plan" component={Plan} />
                </Switch>
            </div>
        </>
    );
};

export default AppAccount;
