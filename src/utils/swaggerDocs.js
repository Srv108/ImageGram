const pathToRoutesFile = new URL('../router/v1/*.js', import.meta.url).pathname;
console.log(pathToRoutesFile)
export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Image gram API',
            version: '1.0.0',
            description:
                'This is a simple CRUD API application made with Express and documented with Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3300/api/v1',
            },
        ],
    },
    apis: [pathToRoutesFile],
};