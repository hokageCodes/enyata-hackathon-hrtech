
const crypto = require("crypto");

import log4js from "log4js";

const env = process.env.NODE_ENV || 'development';
const logger = log4js.getLogger();
logger.level = "debug";

export default class Functions {
    /**
     * @type {Sequelize}
     */
    static sequelize;

    static redis;

    static backupMasterRedis;

    /**
     * GET DATA FROM CONFIG
     * get data from the config file <app-config.json> located in root directory
     * @param config - specify the configuration to get, default gets a config
     */
    static getConfig(config) {
        // const path = process.env.ENVIRONMENT === 'production' ? '../app-production.json' : '../app-config-sensitive.json';
        const path = __dirname + (process.env.CONFIG_FILE || '/../config/config.js');
        const appConfig = require(path);

        if (config && config.length > 0) {
            return appConfig[env][config];
        } else {
            return appConfig[env];
        }
    };

    static getEnvironment() {
        return this.getConfig("environment") || env;
    }


    static getSequelize() {
        return Functions.sequelize;
    }


    static getLogger() {
        return logger;
    }

    /**
     * Check if currency is valid
     * @returns boolean
     * @param currency
     */
    static isCurrency(currency) {
        return this.getCurrencies().toLowerCase().indexOf(currency.toLowerCase().trim()) !== -1;
    }

    static formatMoney = (number, currency = '$') => {
        if (!number) {
            return currency + "0.00";
        }
        let num = parseFloat(number.toString());
        return (num < 0 ? "-" : "") + currency.toUpperCase() + Math.abs(num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    static numberFormat(number, decimal = 2) {
        number = parseFloat(number);
        decimal = isNaN(decimal = Math.abs(decimal)) ? 2 : decimal;
        let d = ".", t = ",";
        let s = number < 0 ? "-" : "",
            i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decimal))),
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substring(0, j) + t : "") + i.substring(j).replace(/(\d{3})(?=\d)/g, "1" + t) + (decimal ? d + Math.abs(number - i).toFixed(decimal).slice(2) : "");
    }


    /**
     * generates random string of characters i.e salt
     * @function
     * @param {number} length - Length of the random string.
     */
    static genRandomString(length) {
        return crypto.randomBytes(Math.ceil(length / 2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0, length);
        /** return required number of characters */
    }

    /**
     * Generate a random number
     * length is secure to 15 length, more than that a less secure function is used
     * @param length
     * @returns {number|string}
     */
    static genRandomNumber(length) {
        let randomNumber = '';
        for (let i = 0; i < length; i++) {
            randomNumber += Math.floor(Math.random() * 10);
        }
        return randomNumber;
    }

    static generateStrongPassword(length) {
        const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';

        const allChars = symbols + uppercaseLetters + lowercaseLetters + numbers;

        let password = '';

        // Ensure at least one character from each character set
        password += Functions.getRandomChar(symbols);
        password += Functions.getRandomChar(uppercaseLetters);
        password += Functions.getRandomChar(lowercaseLetters);
        password += Functions.getRandomChar(numbers);

        // Fill the remaining characters randomly
        for (let i = password.length; i < length; i++) {
            password += Functions.getRandomChar(allChars);
        }

        // Shuffle the password to mix characters
        password = password.split('').sort(() => Math.random() - 0.5).join('');

        return password;
    }

}
