import React from "react";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="intro-y flex items-center mt-8">
                <h2 className="text-lg font-medium mr-auto">{t("home.caption")}</h2>
            </div>
        
        </>
    );
};


export default Dashboard;
