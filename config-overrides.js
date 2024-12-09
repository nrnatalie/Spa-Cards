module.exports = function override(config) {
  
    if (config.devServer) {
      config.devServer.client = {
        ...config.devServer.client,
        overlay: false,
        progress: false,
      
        localNetwork: false,
      };
    }
    return config;
  };