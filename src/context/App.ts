const { REACT_APP_BASE_URL, REACT_APP_WalletAddress, REACT_APP_ReferralBonus, REACT_APP_UploadBaseUrl, REACT_APP_UploadPreset } = process.env;

export const AppUrl = () => REACT_APP_BASE_URL || "";

export const WalletAddress = () => REACT_APP_WalletAddress || "";

export const ReferralBonus = () => REACT_APP_ReferralBonus || 6;

export const AppUploadUrl = () => REACT_APP_UploadBaseUrl || "";

export const UploadPreset = () => REACT_APP_UploadPreset || "";

export const AppName = "New Investment Bot";
