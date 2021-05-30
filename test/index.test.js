const { chromium } = require('playwright');

describe('E2Eテスト練習', () => {

    beforeAll(async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext()
        page = await context.newPage()
        await page.goto('https://www.google.co.jp/');
    })
    test('Webページのタイトル一致判定', async () => {
        const pageTitle = await page.evaluate(async() => {
            return document.title
        })
        expect(pageTitle).toBe('Google')
        console.log(pageTitle)

    })
    
    afterAll(async () => {
        await browser.close()
    })
})