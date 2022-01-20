const build = require('../../src/app');

let app;
describe('Root route', () => {
    beforeEach(()=>{
        app = build();
    })

afterEach(()=> {
    app.close();
});

it('should return 200 when root route called', ()=>{
    const res = app.inject({
        url: '/',
    });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toBe({hello: "world!"});
});
});
