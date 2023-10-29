import * as elements from 'typed-html';

export default async function handler(request, response) {
    return response.status(200).send(<p>Hello, world!</p>)
}