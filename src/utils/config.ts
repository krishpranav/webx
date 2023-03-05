export enum LogLevel {
    error = 0,
    warn = 1,
    info = 2,
    debug = 3
}

export const getString = (strValue = '') => strValue.trim?.() || ''

export const getBoolean = (strValue = '') => 
    ['true', 'ok', 'yes', 'on'].includes(getString(strValue).toLowerCase())

export const getNumber = (strValue = '') => {
    const value = Number(getString(strValue))

    return isNaN(value)
}

export const GetJSON = (strvalue = '') => JSON.parse(getString(strvalue))