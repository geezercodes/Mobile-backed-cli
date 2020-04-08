## Focus Mobile Backend Take Home Challenge

Node CLI Application


## Author
- [Meshack Mwaura](https://github.com/geezerP)


## Description

The **Focus Mobile Backend Take Home Challenge Appplication** is a cheap command line application centered around stocks that will be used by users in Africa. 


## Development set up


-   Check that node js is installed:

    ```
    node --version
    >> v12.16.1

    ```

-   Install npm:

    ```
    sudo apt-get install npm
    ```

-   Check npm is installed:
    ```
    pipenv --version
    >>  6.14.4

    ```
-   Check that mongoDB is installed:

    ```
    mongo --version
    >> MongoDB shell version v3.6.3

    ```


- Clone the Mobile-backend-cli  repo and cd into it
    ```
    git clone https://github.com/geezerP/Mobile-backed-cli.git
    ```
- Install dependencies 
    ```
    sudo npm install

    ```
- To convert CSV to JSON and save the data in the mongoDB instance run
    ```
    node CsvExtractor.js 

    ```

- Open a new tab and cd into Node-cli
    ```
    cd Node-cli/

    ```
- Install dependencies 
    ```
    sudo npm install

    ```

- Start the backend RESTFUL API by running the following command 
    ```
    node server.js 

    ```
- In the other terminal at the app root start the cli instance
    ```
    node currencyCli.js 

    ```  

## Built with
- Node Js
- Express
- MongoDB
- fast-csv
 ```
