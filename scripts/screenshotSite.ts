import { chromium } from 'playwright'
import URL from 'url'
import md5 from 'md5'

async function run() {
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext({
    viewport: {
      width: 375,
      height: 667,
    },
    deviceScaleFactor: 1,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
  })
  async function take(name='', url='', delay=1000,prefix='') {
      const page = await context.newPage()
      await page.goto(`${url}`)
      // await page.goto(`http://localhost:3333/${no}?shot=true${query}`)
      await page.waitForTimeout(delay)

      // name = url.split('//')[1].replaceAll('.','_').replace(':','_').replace('/','_')
      const urlInfo = URL.parse(url)
      console.log(urlInfo)
      const md5V = md5(urlInfo.query||'')
      // console.log(urlInfo.host+md5V)
      name = urlInfo.host+md5V
      await page.screenshot({ path: `scripts/screenshots/${prefix}${name}.png` })
      page.close()
  }

  async function open(no: string, query = '') {
    const page = await context.newPage()
    await page.goto(`https://www.baidu.com`)
    // await page.goto(`http://localhost:3333/${no}?shot=true${query}`)
    await page.waitForEvent('close')
    return page
  }
  // await take('037', 'https://www.baidu.com')
  await take('038', 'https://www.csdn.net/')
  await take('038', 'https://www.google.com/')
  await browser.close()
}

run()
