/**
 * BTDT (Been There, Done That) — Automated Google Form Generator
 * 
 * INSTRUCTIONS:
 * 1. Go to https://script.new in your web browser.
 * 2. Delete any existing code in the editor.
 * 3. Copy and paste all the code in this file into the editor.
 * 4. Click the "Run" button (▶) at the top of the page.
 * 5. When prompted, click "Review Permissions" -> Choose your Google Account -> "Advanced" -> "Go to Untitled project (unsafe)" -> "Allow".
 * 6. In the Execution log at the bottom, your Google Form links will be printed!
 */

function createBTDTFeedbackForm() {
  // 1. Initialize Form
  var form = FormApp.create('BTDT (Been There, Done That) — Alpha Testing Feedback');
  form.setDescription(
    'Thank you for testing the early alpha of BTDT!\n\n' +
    'We are building a peer mentorship network that connects incoming international students with verified seniors who have already "been there and done that".\n\n' +
    'Please explore the website and the live interactive phone demo before answering:\n' +
    '👉 Live Prototype: https://sarthakmalla.github.io/btdt-alpha-upgraded/\n\n' +
    'Your honest thoughts will help us polish the product before launch!'
  );
  form.setAllowResponseEdits(true);
  form.setCollectEmail(false);

  // ==========================================
  // SECTION 1: TESTER CONTEXT
  // ==========================================
  var sec1 = form.addPageBreakItem().setTitle('Section 1: Tester Context & Device');
  sec1.setHelpText('Help us understand what environment you tested on.');

  form.addTextItem()
    .setTitle('Your Name (or Nickname)')
    .setHelpText('Optional, but helps us follow up on your suggestions.')
    .setRequired(false);

  var devItem = form.addMultipleChoiceItem();
  devItem.setTitle('What device did you use to view the website?')
    .setChoices([
      devItem.createChoice('Mac / PC Laptop or Desktop'),
      devItem.createChoice('iPhone / iOS Smartphone'),
      devItem.createChoice('Android Smartphone'),
      devItem.createChoice('iPad / Tablet')
    ])
    .showOtherOption(true)
    .setRequired(true);

  var browserItem = form.addMultipleChoiceItem();
  browserItem.setTitle('Which browser did you use?')
    .setChoices([
      browserItem.createChoice('Apple Safari'),
      browserItem.createChoice('Google Chrome'),
      browserItem.createChoice('Mozilla Firefox'),
      browserItem.createChoice('Brave / Arc / Edge')
    ])
    .showOtherOption(true)
    .setRequired(false);

  // ==========================================
  // SECTION 2: FIRST IMPRESSIONS & VALUE PROPOSITION
  // ==========================================
  var sec2 = form.addPageBreakItem().setTitle('Section 2: First Impressions & Concept');
  sec2.setHelpText('Tell us about your immediate reaction to the homepage.');

  var clarItem = form.addMultipleChoiceItem();
  clarItem.setTitle('When you landed on the page, was it clear what BTDT does?')
    .setChoices([
      clarItem.createChoice('Yes, immediately clear — connects incoming students with seniors who guide them'),
      clarItem.createChoice('Somewhat clear, but I had to scroll a bit to understand the exact concept'),
      clarItem.createChoice('Neutral / Not immediately obvious'),
      clarItem.createChoice('No, it was confusing or too wordy')
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addScaleItem()
    .setTitle('How would you rate the overall visual aesthetic (colors, typography, feel)?')
    .setBounds(1, 5)
    .setLabels('1 = Needs serious work', '5 = World-class & premium')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('What stood out to you (positive or negative) on the homepage?')
    .setHelpText('Tell us anything about the atmosphere, colors, text, or layout.')
    .setRequired(false);

  // ==========================================
  // SECTION 3: UNIVERSITY BRANDING & MARQUEE
  // ==========================================
  var sec3 = form.addPageBreakItem().setTitle('Section 3: Universities & Campuses');
  sec3.setHelpText('Feedback on the university logos and campus presentations.');

  var uniLogoItem = form.addMultipleChoiceItem();
  uniLogoItem.setTitle('How did the university logos and names in the ticker/directory look to you?')
    .setChoices([
      uniLogoItem.createChoice('Looked clean, sharp, and authentic'),
      uniLogoItem.createChoice('Recognizable, but some logos or text could be bigger/clearer'),
      uniLogoItem.createChoice('Did not like the presentation or layout'),
      uniLogoItem.createChoice('Did not notice or pay attention to them')
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Any specific suggestions regarding university logos, fonts, or names?')
    .setHelpText('Did any logo look distorted or missing on your screen?')
    .setRequired(false);

  // ==========================================
  // SECTION 4: INTERACTIVE MOBILE APP DEMO
  // ==========================================
  var sec4 = form.addPageBreakItem().setTitle('Section 4: Interactive Mobile App Demo');
  sec4.setHelpText('Feedback on the iPhone simulator embedded on the page.');

  var demoUsedItem = form.addMultipleChoiceItem();
  demoUsedItem.setTitle('Did you test the interactive phone simulator on the page?')
    .setChoices([
      demoUsedItem.createChoice('Yes, I tapped into the BTDT app and tested student features (Chat, Peers, Arrival, Wallet)'),
      demoUsedItem.createChoice('Yes, I tested both student and mentor modes'),
      demoUsedItem.createChoice('Yes, I tested the built-in phone utilities (Calculator, Calendar, Mail)'),
      demoUsedItem.createChoice('I saw it, but did not interact with it much'),
      demoUsedItem.createChoice('I could not find it or it did not load on my screen')
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addScaleItem()
    .setTitle('How realistic did the phone simulator feel?')
    .setBounds(1, 5)
    .setLabels('1 = Clunky / felt fake', '5 = Felt like a real native iOS app')
    .setRequired(true);

  var demoFeelItem = form.addCheckboxItem();
  demoFeelItem.setTitle('Which aspects of the app demo worked well? (Select all that apply)')
    .setChoices([
      demoFeelItem.createChoice('Phone hardware bezel and lockscreen feel authentic'),
      demoFeelItem.createChoice('Interactive chat conversation with PDF attachment preview'),
      demoFeelItem.createChoice('Student Pass Wallet with boarding passes'),
      demoFeelItem.createChoice('Arrival perks and checklist tabs'),
      demoFeelItem.createChoice('Quick role switcher between Student and Mentor views')
    ])
    .showOtherOption(true);

  form.addParagraphTextItem()
    .setTitle('What would make the phone demo feel even more realistic and useful?')
    .setHelpText('Did you experience any lag, click failure, or confusing buttons?')
    .setRequired(false);

  // ==========================================
  // SECTION 5: PRICING & TRUST
  // ==========================================
  var sec5 = form.addPageBreakItem().setTitle('Section 5: Pricing & Service Trust');
  sec5.setHelpText('Feedback on the peer pricing model (€20–€120) and mentor concept.');

  var priceItem = form.addMultipleChoiceItem();
  priceItem.setTitle('What is your opinion on the €20 to €120 fixed session pricing model?')
    .setChoices([
      priceItem.createChoice('Very fair & accessible compared to expensive study-abroad consultants (€2,000+)'),
      priceItem.createChoice('Reasonable, provided mentors are strictly verified students'),
      priceItem.createChoice('A bit expensive for students on a tight budget'),
      priceItem.createChoice('Too cheap — might make people wonder about mentor quality')
    ])
    .showOtherOption(true)
    .setRequired(true);

  var trustItem = form.addMultipleChoiceItem();
  trustItem.setTitle('Would you recommend BTDT to a friend or relative planning to study abroad?')
    .setChoices([
      trustItem.createChoice('Definitely yes — having someone who has already been there is invaluable'),
      trustItem.createChoice('Likely yes, if they have their specific university enrolled'),
      trustItem.createChoice('Maybe / Need to see it live with real mentors first'),
      trustItem.createChoice('Unlikely')
    ])
    .showOtherOption(true)
    .setRequired(true);

  // ==========================================
  // SECTION 6: BUGS & ISSUES
  // ==========================================
  var sec6 = form.addPageBreakItem().setTitle('Section 6: Bugs, Performance & Broken Elements');

  var bugItem = form.addMultipleChoiceItem();
  bugItem.setTitle('Did you encounter any bugs, broken buttons, or formatting glitches?')
    .setChoices([
      bugItem.createChoice('No, everything ran smoothly with no glitches'),
      bugItem.createChoice('Yes, some text or images looked misaligned on my screen'),
      bugItem.createChoice('Yes, a button or modal did not respond when clicked'),
      bugItem.createChoice('Yes, scrolling or performance felt sluggish')
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('If you encountered any bug or glitch, please describe it here:')
    .setHelpText('What happened, what did you click, and what did you see?')
    .setRequired(false);

  // ==========================================
  // SECTION 7: FINAL THOUGHTS & ADVICE
  // ==========================================
  var sec7 = form.addPageBreakItem().setTitle('Section 7: Final Advice');

  form.addParagraphTextItem()
    .setTitle('What is the single best thing about BTDT so far?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('What is the single biggest thing that needs improvement before launch?')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Any parting words, advice, or suggestions?')
    .setRequired(false);

  // Log Form Links
  Logger.log('====================================================');
  Logger.log('BTDT GOOGLE FORM CREATED SUCCESSFULLY!');
  Logger.log('1. EDIT LINK (for you): ' + form.getEditUrl());
  Logger.log('2. SHARE LINK (for friends/family): ' + form.getPublishedUrl());
  Logger.log('====================================================');
}
