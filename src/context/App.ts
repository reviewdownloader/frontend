const { REACT_APP_BASE_URL, REACT_APP_WalletAddress, REACT_APP_ReferralBonus, REACT_APP_UploadBaseUrl, REACT_APP_UploadPreset } = process.env;

export const AppUrl = () => REACT_APP_BASE_URL || "";

export const WalletAddress = () => REACT_APP_WalletAddress || "";

export const ReferralBonus = () => REACT_APP_ReferralBonus || 6;

export const AppUploadUrl = () => REACT_APP_UploadBaseUrl || "";

export const UploadPreset = () => REACT_APP_UploadPreset || "";

export const AppName = "New Investment Bot";

export const CleanMessage = (message: string) => message.replace("GraphQL error:", "").replace("Network error:", "");

export const CleanDate = (date: string, onlyDate = false, short = true) =>
    onlyDate
        ? Intl.DateTimeFormat("en-GB", {
              month: short ? "short" : "long",
              year: "numeric",
              weekday: short ? "short" : "long",
              day: "numeric",
          }).format(new Date(date))
        : Intl.DateTimeFormat("en-GB", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: false,
              month: short ? "short" : "long",
              year: "numeric",
              weekday: short ? "short" : "long",
              day: "numeric",
          }).format(new Date(date));
