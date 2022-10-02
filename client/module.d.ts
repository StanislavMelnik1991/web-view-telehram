declare module '*.css';
declare module '*.scss';
declare module '*.png';
declare module '*.svg';
declare module '*.json';
declare module '*.jpg';
interface Window {
  Telegram: {
    WebView: any;
    webData: any;
    WebApp: WebApp;
  };
}
interface WebApp {
  MainButton: any;
  close(): void;
  colorScheme: string;
  expand(): void;
  initData: string;
  initDataUnsafe: object;
  isExpanded: boolean;
  isVersionAtLeast(ver: string): boolean;
  offEvent(eventType: string, callBack: Function): void;
  onEvent(eventType: string, callBack: Function): void;
  openTgLink(url: string): void;
  ready(): void;
  sendData(data: string): void;
  themeParams: object;
  version: string;
  viewportHeight: number;
  viewportStableHeight: number;
}
