export const MAIN_URL = 'http://localhost:4000';

export const ACCESS_TOKEN = 'qhtfs87hjnc12kkos';

export const REQUEST = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
} as const; //as const help to make REQUEST immutable

export type REQUEST_TYPE = keyof typeof REQUEST;

export const QUERY_KEY = {
    CREATE_ORDER: 'CREATE_ORDER',
} as const;