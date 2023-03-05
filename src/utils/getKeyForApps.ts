import { App, AppTab } from "../types";

export const getKey = (apps: Array<AppTab | App> = []) => apps.map((id) => id)