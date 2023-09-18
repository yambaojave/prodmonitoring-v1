export const BASE_API_URL = process.env.API_URL;

export const SESSION_WORKGROUP_ID_KEY = 'WORKGROUP_ID'
export const SESSION_HEADER_ID_KEY = 'HEADER_ID'
export const SESSION_MODEL_KEY = 'MODEL'
export const SESSION_LINE_KEY = 'LINE'

// export const STATUS_LIST = ['OK', 'NOT OK', 'WITH CONDITION'];
// export const STATUS_OK = 'OK'
// export const STATUS_NOT_OK = 'NOK'
// export const STATUS_WITH_CONDITION = 'CON'


export const STATUS = [
    {label: 'OK', name: 'OK'},
    {label: 'NOK', name: 'NOT OK'},
    {label: 'CON', name: 'WITH CONDITION'},
]

export const STATUS_LIST = STATUS.map((status) => status.name);
export const STATUS_LABEL = STATUS.map((status) => status.label);