const { test, expect } = require('@playwright/test');

// You can expand this array to include all 34+ required scenarios
const scenarios = [
 

  {
    id: 'Pos_Fun_0001',
    name: 'Convert a simple present-tense statement about going to see the sea/beach',
    input: 'api muhudha balanna yanavaa.',
    expected: 'අපි මුහුද බලන්න යනවා.'

  },

  
  {
    id: 'Pos_Fun_0002',
    name: 'Convert casual interrogative question',
    input: 'Oyaa adha enavadha?',
    expected: 'ඔයා අද එනවද?'

  },

  
   {
    id: 'Pos_Fun_0003',
    name: 'Convert simple imperative command',
    input: 'eeka balanna.',
    expected: 'ඒක බලන්න.'

  },

  {
    id: 'Pos_Fun_0004',
    name: 'Convert polite request / imperative',
    input: 'karuNaakara methaenin vaadi venna.',
    expected: 'කරුණාකර මෙතැනින් වාඩි වෙන්න.'

  },

  {
    id: 'Pos_Fun_0005',
    name: 'Medium conversational paragraph – mixed elements',
    input: 'api gedhara yanavaa. mama pothak kiyavanna oone. oyaata enna puluvan dha? suba raathriyak veevaa.',
    expected: 'අපි ගෙදර යනවා. මම පොතක් කියවන්න ඕනෙ. ඔයාට එන්න පුලුවන් ද? සුබ රාත්‍රියක් වේවා.'

  },

  {
    id: 'Pos_Fun_0006',
    name: 'Emphasis via word repetitions',
    input: 'hari hari lassanayi',
    expected: 'හරි හරි ලස්සනයි'

  },

   {
    id: 'Pos_Fun_0007',
    name: 'Convert a simple descriptive sentence with an adjective',
    input: 'eyaa harima lassana gaeeNu Lamayek.',
    expected: 'එයා හරිම ලස්සන ගෑණු ළමයෙක්.'

  },


   {
    id: 'Pos_Fun_0008',
    name: 'Long paragraph style input (daily routine)',
    input: 'mama adha udhaeesana paasala giyaa. ehee hitiya magee yaaLuvoo haemooma hamuvunaa. api sellam kaleth ekatama. passee mama gedhara aevillaa kaeema kaeevaa. dhaen mama tikak nidhaaganna yanavaa. heta aayeth vaeda thiyee. suba raathriyak veevaa haemootama!',
    expected: 'මම අද උදෑසන පාසල ගියා. එහේ හිටිය මගේ යාළුවෝ හැමෝම හමුවුනා. අපි සෙල්ලම් කලෙත් එකටම. පස්සේ මම ගෙදර ඇවිල්ලා කෑම කෑවා. දැන් මම ටිකක් නිදාගන්න යනවා. හෙට ආයෙත් වැඩ තියේ. සුබ රාත්‍රියක් වේවා හැමෝටම!'

  },

 {
    id: 'Pos_Fun_0009',
    name: 'Weather-based narrative with negation',
    input: 'adha hariyata vaessa. mama paasal yanna hithan hitiyee namuth vaessa nisaa mata yanna baeri unaa. gedhara idhan mama vaeda kalaa. heta vaessa naethi veyi kiyalaa mama hithanavaa. ehenam api heta hamuvemu needha? oyath ikmanata vaeda ivara karanna. suba raathriyak veevaa!',
    expected: 'අද හරියට වැස්ස. මම පාසල් යන්න හිතන් හිටියේ නමුත් වැස්ස නිසා මට යන්න බැරි උනා. ගෙදර ඉදන් මම වැඩ කලා. හෙට වැස්ස නැති වෙයි කියලා මම හිතනවා. එහෙනම් අපි හෙට හමුවෙමු නේද? ඔයත් ඉක්මනට වැඩ ඉවර කරන්න. සුබ රාත්‍රියක් වේවා!'

  },

  {
    id: 'Pos_Fun_0010',
    name: 'Repeated word for emphasis',
    input: 'ikmanata ikmanata yanavaa.',
    expected: 'ඉක්මනට ඉක්මනට යනවා.'

  },

 {
    id: 'Pos_Fun_0011',
    name: 'Aspirated consonant (Dh) and infinitive verb',
    input: 'Dharmaya dhaenaganna.',
    expected: 'ධර්මය දැනගන්න.'

  },

  {
    id: 'Pos_Fun_0012',
    name: 'Rare vowel & negation handling',
    input: 'aeththatama mama eevaa dhennea naee.',
    expected: 'ඇත්තටම මම ඒවා දෙන්නේ නෑ.'

  },

  {
    id: 'Pos_Fun_0013',
    name: 'Interrogative pronoun variation',
    input: 'eyaalaa koheadha inne?',
    expected: 'එයාලා කොහේද ඉන්නේ?'

  },

  {
    id: 'Pos_Fun_0014',
    name: 'Mixed numbers and measurement units',
    input: 'mata paan gedi 2k dhenna.',
    expected: 'මට පාන් ගෙඩි 2ක් දෙන්න.'

  },

  {
    id: 'Pos_Fun_0015',
    name: 'Robustness check for long input with mixed English and technical jargon',
    input: 'magee aluth Project eka gaena dhaenuvath karanna meeka liyannee. mama hithannee api Zoom meeting ekak ganna ooni. eekee link eka mama email karannam. oyaalagee feedback dhenna. hardware issues thiyenavaanam mata kiyanna. meeka godak complex vaedak nisaa api ekathu velaa karamu. meeka ivara karanna thava sathi thunak yayi.',
    expected: 'මගේ අලුත් Project එක ගැන දැනුවත් කරන්න මේක ලියන්නේ. මම හිතන්නේ අපි Zoom meeting එකක් ගන්න ඕනි. ඒකේ link එක මම email කරන්නම්. ඔයාලගේ feedback දෙන්න. hardware issues තියෙනවානම් මට කියන්න. මේක ගොඩක් complex වැඩක් නිසා අපි එකතු වෙලා කරමු. මේක ඉවර කරන්න තව සති තුනක් යයි.'

  },

  {
    id: 'Pos_Fun_0016',
    name: 'Future tense with plural form',
    input: 'Lamayi heta sellam karaavi',
    expected: 'ළමයි හෙට සෙල්ලම් කරාවි'

  },


  {
    id: 'Pos_Fun_0017',
    name: 'Mixed numbers and measurement units',
    input: 'api thavama kaeema kaeevee naee.',
    expected: 'අපි තවම කෑම කෑවේ නෑ.'

  },

  {
    id: 'Pos_Fun_0018',
    name: 'Convert a medium-length polite request with a reason',
    input: 'karuNaakara mata kiyanna puLuvandha treen eka ennee kiiyatadha kiyalaa? mama adha hariyatama velaavata yanna ooni.',
    expected: 'කරුණාකර මට කියන්න පුළුවන්ද ට්‍රේන් එක එන්නේ කීයටද කියලා? මම අද හරියටම වෙලාවට යන්න ඕනි.'

  },

  {
    id: 'Pos_Fun_0019',
    name: 'Convert a simple sentence with plural forms',
    input: 'poth kiyavanna mama aasayi.',
    expected: 'පොත් කියවන්න මම ආසයි.'

  },

   {
    id: 'Pos_Fun_0020',
    name: 'Complex sentence with conditional "if" logic',
    input: 'oyaa adha enavaanam mama kaeema hadhalaa thiyannam.',
    expected: 'ඔයා අද එනවානම් මම කෑම හදලා තියන්නම්.'

  },

  
   {
    id: 'Pos_Fun_0021',
    name: 'Medium length narrative with paragraph formatting',
    input: 'api giya badhaadhaa mahanuvara giyaa. ehee hariyata vaessaa. namuth api godak sathutu vunaa.',
    expected: 'අපි ගිය බදාදා මහනුවර ගියා. එහේ හරියට වැස්සා. නමුත් අපි ගොඩක් සතුටු වුනා.'

  },

   {
    id: 'Pos_Fun_0022',
    name: 'Complex sentence with reason',
    input: 'mama kaNagaatu venavaa mokadha mata enna baeri unaa.',
    expected: 'මම කණගාටු වෙනවා මොකද මට එන්න බැරි උනා.'

  },

   {
    id: 'Pos_Fun_0023',
    name: 'Compound sentence with two clauses',
    input: 'mama paasal giyaa thavama gedhara aavee naee.',
    expected: 'මම පාසල් ගියා තවම ගෙදර ආවේ නෑ.'

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
    if (scenario.id.startsWith('Pos')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}
