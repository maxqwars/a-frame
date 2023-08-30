// TODO: Migrate to indexedDB

/* Types */

export type ThemeType = 'auto' | 'dark' | 'light';
export type LanguageType = 'auto' | 'custom';
export type ApiServerType = 'default' | 'custom';
export type StaticServerType = 'default' | 'custom';

export interface IApp {
  theme: ThemeType;

  /* Build-in props */
  language: LanguageType;
  apiServerUrl: ApiServerType;
  staticServerUrl: StaticServerType;

  /* Custom props */
  customLanguage: string | null;
  customApiServerUrl: string | null;
  customStaticServerUrl: string | null;
}

/*
 * Define default app configuration / props
 */
export const DEFAULT_APP_VALUES: IApp = {
  theme: 'auto',
  language: 'auto',
  apiServerUrl: 'default',
  staticServerUrl: 'default',
  customLanguage: null,
  customApiServerUrl: null,
  customStaticServerUrl: null,
};

/* Model */

export interface IAppModel extends IApp {
  config: IApp;

  // eslint-disable-next-line no-unused-vars
  setTheme(theme: ThemeType): void;

  // eslint-disable-next-line no-unused-vars
  setLanguage(language: LanguageType): void;

  // eslint-disable-next-line no-unused-vars
  setApiServerUrl(url: ApiServerType): void;

  // eslint-disable-next-line no-unused-vars
  setStaticServerUrl(url: StaticServerType): void;

  // eslint-disable-next-line no-unused-vars
  setCustomLanguage(language: null | string): void;

  // eslint-disable-next-line no-unused-vars
  setCustomApiServerUrl(url: null | string): void;

  // eslint-disable-next-line no-unused-vars
  setCustomStaticServerUrl(url: null | string): void;
}

class AppModel implements IAppModel {
  private readonly _localStorageKey = 'app_configuration';
  private readonly _ls = window.localStorage;

  private _config: IApp = DEFAULT_APP_VALUES;

  constructor() {
    const conf = this._read();

    if (conf) {
      this._config = conf;
    } else {
      this._create();
      this._config = this._read() as IApp;
    }
  }

  setTheme(theme: ThemeType): void {
    this._config.theme = theme;
    this._update();
  }

  setLanguage(language: LanguageType): void {
    this._config.language = language;
    this._update();
  }

  setApiServerUrl(url: ApiServerType): void {
    this._config.apiServerUrl = url;
    this._update();
  }

  setStaticServerUrl(url: StaticServerType): void {
    this._config.staticServerUrl = url;
    this._update();
  }

  setCustomLanguage(language: string | null): void {
    this._config.customLanguage = language;
    if (!language) this._config.language = 'auto';
    this._update();
  }

  setCustomApiServerUrl(url: string | null): void {
    this._config.customApiServerUrl = url;
    if (!url) this._config.apiServerUrl = 'default';
    this._update();
  }

  setCustomStaticServerUrl(url: string | null): void {
    this._config.customStaticServerUrl = url;
    if (!url) this._config.apiServerUrl = 'default';
    this._update();
  }

  private _create(config?: IApp) {
    const conf = config ? JSON.stringify(config) : JSON.stringify(DEFAULT_APP_VALUES);
    this._ls.setItem(this._localStorageKey, conf);
  }

  private _read(): IApp | null {
    const json = this._ls.getItem(this._localStorageKey);
    return json ? JSON.parse(json) : null;
  }

  private _update() {
    this._delete();
    this._create(this._config);
  }

  private _delete() {
    this._ls.removeItem(this._localStorageKey);
  }

  get theme() {
    return this._config.theme;
  }

  get language() {
    return this._config.language;
  }

  get apiServerUrl() {
    return this._config.apiServerUrl;
  }

  get staticServerUrl() {
    return this._config.staticServerUrl;
  }

  get customLanguage() {
    return this._config.customLanguage;
  }

  get customApiServerUrl() {
    return this._config.customApiServerUrl;
  }

  get customStaticServerUrl() {
    return this._config.customStaticServerUrl;
  }

  get config() {
    return this._config;
  }
}

export const appModel = new AppModel();
