exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:5000/v1',
      onRequest: (request) => {
      // request.headers.auth = '123';
     }
    },
    Mochawesome: {
      uniqueScreenshotNames: true,
      enabled: true
    }
  },
  include: {
    // I: './steps_file.js'
  },
  plugins: {
    allure:{
      outputDir: "output/allure",
      enabled: true
    }
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        stdout: "-",
        options: {
          verbose: false,
          steps: true
        }
      },
      "mocha-junit-reporter": {
        "stdout": "./output/console.log",
        "options": {
          "mochaFile": "./output/result.xml"
        }
      },
      mochawesome: {
        stdout: "./output/mocharesult.log",
        options: {
          reportDir: "output",
          reportFilename: "result.html"
        }
      }
    }
  },
  name: 'Ishu-APITest'
}