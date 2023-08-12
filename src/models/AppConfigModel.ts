/* eslint-disable no-unused-vars */
import { AppConfigType } from '@/types/AppConfigType';
import { DEF_APP_CONF } from '@/constants/DEF_APP_CONF';

interface IAppConfigModel extends AppConfigType {
  raw(): AppConfigType;
  setTheme(theme: 'system' | 'light' | 'dark'): void;
  setLanguage(language: 'system' | 'user'): void;
  setUserSelectedLanguage(userSelectedLanguage: string | null): void;
  setApiServerUrl(apiServerUrl: 'default' | 'user'): void;
  setUserApiServerUrl(userApiServerUrl: string | null): void;
}

class AppConfigModel implements IAppConfigModel {
  private readonly _storageKey = 'MIZ_APP_CFG';
  private readonly _ls = window.localStorage;

  private _config: AppConfigType;

  constructor() {
    const loadedConf = this._read();

    if (loadedConf) {
      this._config = loadedConf;
    } else {
      this._create();
      this._config = this._read() as AppConfigType;
    }
  }

  setTheme(theme: 'system' | 'light' | 'dark'): void {
    this._config.theme = theme;
    this._update();
  }

  setLanguage(language: 'system' | 'user'): void {
    this._config.language = language;
    this._update();
  }

  setUserSelectedLanguage(userSelectedLanguage: string | null): void {
    this._config.userSelectedLanguage = userSelectedLanguage;
    this._update();
  }

  setApiServerUrl(apiServerUrl: 'user' | 'default'): void {
    this._config.apiServerUrl = apiServerUrl;
    this._update();
  }

  setUserApiServerUrl(userApiServerUrl: string | null): void {
    this._config.userApiServerUrl = userApiServerUrl;
    this._update();
  }

  /* App config CRUD methods */
  private _create(newConfig?: AppConfigType | null) {
    const serializedConf = newConfig ? JSON.stringify(newConfig) : JSON.stringify(DEF_APP_CONF);
    this._ls.setItem(this._storageKey, serializedConf);
  }

  private _read(): AppConfigType | null {
    const conf = this._ls.getItem(this._storageKey);
    return conf ? JSON.parse(conf) : null;
  }

  private _update() {
    this._delete();
    this._create(this._config);
  }

  private _delete() {
    this._ls.removeItem(this._storageKey);
  }

  /* Define getter */
  public get theme(): 'system' | 'light' | 'dark' {
    return this._config.theme;
  }

  public get language(): 'system' | 'user' {
    return this._config.language;
  }

  public get userSelectedLanguage(): string | null {
    return this._config.userSelectedLanguage;
  }

  public get apiServerUrl(): 'user' | 'default' {
    return this._config.apiServerUrl;
  }

  public get userApiServerUrl(): string | null {
    return this._config.userApiServerUrl;
  }

  raw() {
    return this._config;
  }
}

export const appConfigModel = new AppConfigModel();
