import Constants from "expo-constants";
import { CustomAppConfig } from "../../app.config";

export const AppConfig: CustomAppConfig = Constants.expoConfig
  ?.extra as CustomAppConfig;
