import { chromium } from 'playwright'

async function run() {
  const browser = await chromium.launch({ headless: false })
  // const context = await browser.newContext({
  //   viewport: {
  //     width: 960,
  //     height: 500,
  //   },
  //   deviceScaleFactor: 2,
  // })

  const context = await browser.newContext()


  async function take(no: string, retry = 3, delay = 1000, take = 1, query = '', delayBetweenShot = 0, prefix = '') {
    for (let i = 0; i < retry; i++) {
      const page = await context.newPage()
      await page.goto(`https://bm.demopai.com`)
      // await page.goto(`http://localhost:3333/${no}?shot=true${query}`)
      await page.waitForTimeout(delay)
      for (let j = 0; j < take; j++) {
        await page.screenshot({ path: `scripts/screenshots/${prefix}${no}-${i}-${j}.png` })
        if (delayBetweenShot)
          await page.waitForTimeout(delayBetweenShot)
      }

      page.close()
    }
  }

  async function open(no: string, query = '') {
    const page = await context.newPage()
    await page.goto(`https://www.baidu.com`)
    // await page.goto(`http://localhost:3333/${no}?shot=true${query}`)
    await page.waitForEvent('close')
    return page
  }

  // await take('', 1)
  // await take('001', 3, 800, 4)
  // await take('002', 8, 500)
  // await take('003', 1, 1500, 5)
  // await take('004', 1, 500)
  // await take('005', 5, 1000, 20, '&q=th%20-%20sin(r)%20*%20cos(t)')
  // await take('006', 4, 3000, 5, '&shake=true')
  // await take('007', 1, 500)
  // await take('008', 1, 500, 8)
  // await take('009', 10, 1500)
  // await take('010', 1, 500)
  // await take('011', 10, 500)
  // await take('012', 10, 500, 4)
  // await take('013', 20, 3000, 3)
  // await take('014', 1, 10000, 5)
  // await take('015', 2, 7000, 10, '', 1000)
  // await take('016', 1, 500, 10, '', 500)
  // await take('017', 1, 3000, 5)
  // await take('018', 1, 2000, 20, '', 900)
  // await take('019', 1, 1000, 1)
  // await take('020', 30, 1500, 1)
  // await take('021', 20, 1000, 1)
  // await take('022', 2, 2000, 1)
  // await Promise.all([
  //   take('023', 3, 10000, 1, '', 2000, 'c'),
  //   take('023', 3, 10000, 1, '', 2000, 'd'),
  //   take('023', 3, 10000, 1, '', 2000, 'e'),
  // ])
  // await take('024', 5, 3000, 3, '', 500)
  // await take('025', 5, 10000, 3, '', 1000)
  // await take('026', 1, 5000, 3, '', 1000)
  // await take('027', 1, 1000, 50, '', 1000)
  // await take('028', 4, 1000)
  // await open('028')
  // await take('029', 20, 1000)
  // await take('030', 10, 2000)
  // await open('030')
  // await take('031', 5, 1000)
  // await take('032', 5, 1000, 5)
  // await open('032')
  // await take('033', 1, 1000, 10, '', 1000)
  // await take('034', 5, 1000)
  // await take('035', 20, 8000)
  // await take('036', 1, 1000)
  await take('037', 1, 1000)
  // await open('037')

  await browser.close()
}

run()


async function run1(){
  const browser = await chromium.launch({ headless: false })
  // const browser = await playwright.firefox.launch();  // Or 'chromium' or 'webkit'.
  // Create a new incognito browser context.
  const context = await browser.newContext();
  // Create a new page in a pristine context.
  const page = await context.newPage();
  await page.goto('https://www.baidu.com');
}

// run1()