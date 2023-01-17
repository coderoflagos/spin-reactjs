
## A simple React generated application running on Spin.

This is a template for building your [React Application](https://reactjs.org/) and running it on [Fermyon Spin](https://spin.fermyon.dev).

### Using the template

Firstly, you need to install the install the template with the Spin CLI:

```
$ spin templates install --git https://github.com/coderoflagos/spin-reactjs.git
Copying remote template source
Installing template spin-reactjs...
Installed 1 template(s)

+------------------------------------------------------------------------+
| Name           Description                                             |
+========================================================================+
| spin-reactjs   Build your front-end application using reactjs and Spin |
+------------------------------------------------------------------------+

```

Next, you should create a new application based on this template:

```
$ spin new spin-reactjs my-react-app
# your new application has been created in the my-react-app directory
```

### Building and running your application

Before you can build your React Application, ensure you run the ```npm install``` command. Next, run the ```spin build``` command and start editing your application - the ```spin build``` command also helps to execute the ```npm run build``` command. 
To run application, you run the 'spin up' command; here is how it's done:

``` 
$ spin up
Serving http://127.0.0.1:3000
Available Routes:
hello: http://127.0.0.1:3000 (wildcard)
```

**Note**: When you make changes, you should always run these commands at once:

```
spin build && spin up
```

## Deploying your application

Using a free [Fermyon Cloud](https://cloud.fermyon.com) account, you can deploy your serverless WebAssembly applications and get a public URL:

```
$ spin deploy
# your application will now be available at a *.fermyon.app URL
```
