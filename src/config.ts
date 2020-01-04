interface Config {
  serverUrl: string;
}

const prodConfig: Config = {
  serverUrl: "https://dylankite.com"
};

const devConfig: Config = {
  serverUrl: "http://localhost:8080"
};

export default Object.assign({}, process.env.NODE_ENV === "development" ? devConfig : prodConfig);
