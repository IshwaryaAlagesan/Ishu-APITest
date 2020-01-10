exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:5000/v1',
      onRequest: (request) => {
      // request.headers.auth = '123';
     }
    }
  },
  include: {
    // I: './steps_file.js'
  },
  plugins: {
    allure:{
      outputDir: "output",
      enabled: true
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'Ishu-APITest'
}