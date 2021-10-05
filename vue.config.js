module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "my-application",
        appId: "com.sample.myapplication",
        win: {
          icon: "./resource/LEicon.png",
          target: [
            {
              target: "nsis", // 'zip', 'nsis', 'portable'
              arch: ["x64"], // 'x64', 'ia32'
            },
          ],
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true,
        },
        mac: {
          icon: "./resource/LEicon.png",
        },
      },
    },
  },
};
