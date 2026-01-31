const { test, expect } = require('@playwright/test');

// You can expand this array to include all 34+ required scenarios
const scenarios = [
 

   {
    id: 'Neg_Fun_0001',
    name: 'Handling email addresses within a sentence',
    input: 'mage email eka nimal123@gmail.com.',
    expected: 'මගේ ඊමේල් එක nimal123@gmail.කොම්.'

  },

   {
    id: 'Neg_Fun_0002',
    name: 'Handling file extensions (.jpg) within a sentence',
    input: 'meeke photo.jpg eka evanna.',
    expected: 'මේකෙ photo.jpg එක එවන්න.'

  },

  {
    id: 'Neg_Fun_0003',
    name: 'Ambiguity of the "w" character (v vs w)',
    input: 'wathura bonna oonee.',
    expected: 'වතුර බොන්න ඕනේ.'

  },

   {
    id: 'Neg_Fun_0004',
    name: 'URL web address conversion failure',
    input: 'website eka www.google.com balanna.',
    expected: 'වෙබ්සයිට් එක www.google.com බලන්න.'

  },

  {
    id: 'Neg_Fun_0005',
    name: 'Complex w mapping in middle of word',
    input: 'api sanduda thawa yamu.',
    expected: 'අපි සඳුදා තව යමු.'

  },

  {
    id: 'Neg_Fun_0007',
    name: 'Incorrect "Hal-Kirima" (stop sign) on nasal soundst',
    input: 'ammaage praarthana.',
    expected: 'අම්මාගේ ප්‍රාර්ථනා.'

  },

  {
    id: 'Neg_Fun_0008',
    name: 'Convert complex conditional sentence with contrast',
    input: 'meeke 60v bulb ekak thiyenne.',
    expected: 'මේකේ 60v බල්බ් එකක් තියෙන්නේ.'

  },

  {
    id: 'Neg_Fun_0009',
    name: 'Convert complex conditional sentence with contrast',
    input: 'oyaage cv.pdf eka evannadha?',
    expected: 'ඔයාගේ cv.pdf එක එවන්නද?'

  },

  {
    id: 'Neg_Fun_0010',
    name: 'Convert complex conditional sentence with contrast',
    input: 'giya saDHAaudhaa mama mahanuvara giyaa. ehee hariyatama vaessa nisaa mata yanna hithan hitiya keethugala balanna baeri vunaa..',
    expected: 'ගිය සඳුදා මම මහනුවර ගියා. එහේ හරියටම වැස්ස නිසා මට යන්න හිතන් හිටිය කේතුගල බලන්න බැරි වුනා.'

  },

  

   

  



];

for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    // Input: Singlish text box [cite: 303]
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    await inputArea.pressSequentially(scenario.input, { delay: 30 });

    // Output: The specific results div we found in your DevTools
    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();

    // Verification: Real-time update check [cite: 372, 392]
    await expect(outputDiv).not.toBeEmpty({ timeout: 10000 });

    const actualOutput = await outputDiv.innerText();
    console.log(`TC ID: ${scenario.id} | Actual: ${actualOutput}`);

    // Requirements check: Save a screenshot for your report evidence
    await page.screenshot({ path: `screenshots/${scenario.id}.png` });

    // Status Check
    // Note: For Neg_Fun tests, you might expect the output to be messy
    if (scenario.id.startsWith('Neg')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}
