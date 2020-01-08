interface IConfig {
  serverUrl: string;
}

const prodConfig: IConfig = {
  serverUrl: "https://dylankite.com"
};

const devConfig: IConfig = {
  serverUrl: "http://localhost:8080"
};

export default Object.assign({}, process.env.NODE_ENV === "development" ? devConfig : prodConfig);
