// Block: plain string = paragraph; { list } = bulleted list; { sub } = indented sub-clauses
export type TermsBlock = string | { list: string[] } | { sub: string[] }
export type TermsSection = { title: string; blocks: TermsBlock[] }

const userContentPromise = 'You promise that, with respect to any User Content you post on mxr.ai!, (1) you have all rights necessary to upload such User Content to the mxr.ai Service and to grant the above license to mxr.ai!, and (2) such User Content, or its use by mxr.ai as contemplated by the Agreements, does not violate the Agreements, applicable law, or the intellectual property (including without limitation copyright), publicity, personality, or other rights of others or imply any affiliation with or endorsement of you or your User Content by mxr.ai or any rights holder without express written consent from such individual or entity.'
const userContentReview = 'mxr.ai may review, monitor, edit or remove User Content in our sole discretion, but is under no obligation to do so. In all cases, mxr.ai reserves the right to remove or disable access to any User Content for any or no reason, including but not limited to, User Content that, in mxr.ai sole discretion, violates the Agreements. mxr.ai may take these actions without prior notification to you or any third party. Removal or disabling of access to User Content shall be at our sole discretion, and we do not promise to remove or disable access to any specific User Content.'
const userContentResponsibility = 'You are solely responsible for all User Content that have published on mxr.ai!. mxr.ai does not endorse the correctness of the User Content or any opinion contained in any User Content. You will, to the greatest possible extent permissible under applicable law, indemnify and hold mxr.ai and its licensors harmless from and against any third party claim asserting that the User Content violates any third party rights or applicable laws, regulations or legal requirements anywhere in the world, including any loss, costs and expenses arising out of such third party claim.'

export const termsSections: TermsSection[] = [
  {
    title: 'Welcome to MXR',
    blocks: [
      'Thank you for using mxr.ai (“mxr”, “we”, “us”, “our”). These Terms and Conditions (“Terms”) are applicable to websites (including mxr.ai) and software applications (‘apps’), all owned and operated by mxr.ai AS and from or in connection with which you are accessing this document. We refer to such websites and apps in this agreement as the “mxr.ai Service” or “Service”. By using the Services or accessing any content or material that is made available by mxr.ai or its users through the Service you understand and agree to accept and adhere to the following terms and conditions as stated herein.',
      'Your agreement with us includes these Terms, our Acceptable Use Policy and our Privacy Policy which can be reviewed and accessed The Terms, the Acceptable Use Policy, Privacy Policy, and any additional terms or agreements that you have agreed to are referred to as the “Agreements”.) If you wish to review the terms of the Agreements, the effective version of the Agreements can be found on mxr.ai website.',
      'Please read the Agreements carefully as they contain important information about mxr.ai Services provided to you and any fees and charges applicable to the Services. You acknowledge that you have read and understood the Agreements, accept these Agreements, and agree to be bound by them. If you don’t agree with (or cannot comply with) the Agreements, then you may not use the mxr.ai Service or consume any Resources.',
      'You promise that your registration information, payment details (if you have signed up for a Paid Subscription, conf. section 4.2) and any other information that you submit to us are true, accurate, and complete, and you agree to keep it that way at all times. If you have provided incorrect or inaccurate information, you should return to the log-in screen or correct such information in your account settings. You promise that no other person shall be allowed to use or access your account, or in any other way make use of the rights conferred to you pursuant to the agreements.',
    ],
  },
  {
    title: 'Responsible Use And Conduct',
    blocks: [
      'By visiting our Services and accessing the information, resources, services, products, and tools we provide for you, either directly or indirectly (hereafter referred to as ‘Resources’), you agree to use these Resources only for the purposes intended as permitted by (a) these Terms, (b) our Acceptable Use Policy and (c) applicable laws, regulations and generally accepted online practices or guidelines (“Acceptable Use”). The current Acceptable Use Policy is available here: http://www.mxr.ai/mxr_dev/terms-and-conditions We reserve the right to change the Acceptable Use Policy at any time without notice.',
      'You understand and agree that in the event of a violation of the Acceptable Use we may immediate terminate or suspend your mxr.ai account.',
    ],
  },
  {
    title: 'Changes To The Agreements',
    blocks: [
      'We reserve the right to change these Terms from time to time without notice. You acknowledge and agree that it is your responsibility to review the Terms periodically to familiarise yourself with any modifications. In the event of material changes to the Terms, we will notify you at least 30 days before these new Terms apply to you, by issuing notice accessible through your use of the Services or by email to your registered email account. Please therefore make sure you read any such notice carefully. Your continued use of the Services after such modifications will constitute acknowledgment and agreement of the modified Terms. If you do not wish to continue using the Service under the new version of the Terms, you may terminate the Agreements by contacting us.',
    ],
  },
  {
    title: 'Licensed Rights',
    blocks: [
      'The mxr.ai Service and the Resources are the property of mxr.ai or mxr.ai licensors. We grant you a limited, non-exclusive, revocable license to make use of the mxr.ai Service for non-commercial, educational and/or entertainment use of the Service (the “License”). This License shall remain in effect until and unless terminated by you or mxr.ai!. You promise and agree that you are using the Services and the Resources for non-commercial, educational and/or entertainment purposes and that you will not broadcast the Services or the Resources. For the avoidance of doubt, you may not charge any fees or require any payment as part of your use of the Service or the Resources. If you have signed up for Paid Subscription, you may also use the Services for certain commercial purposes if and to the extent permitted in accordance with the applicable Service Program specified in your mxr.ai account, conf. section 4.2. Except for the rights expressly granted to you in these Agreements, mxr.ai grants no right, title, or interest to you in the mxr.ai Service or Resources.',
      'The mxr.ai software applications and the Resources are licensed, not sold, to you, and mxr.ai and its licensors retain ownership of all copies of the mxr.ai software applications and Resources even if you have downloaded such Resources to your personal computers, mobile handsets, tablets, and/or other relevant devices.',
      'All mxr.ai trademarks, service marks, trade names, logos, domain names, and any other features of the mxr.ai brand (“mxr.ai Brands”) are the sole property of mxr.ai or its licensors. The Agreements do not grant you any rights to use any mxr.ai Brand for any purpose, whether for commercial or non-commercial use.',
    ],
  },
  {
    title: 'Third Party Applications',
    blocks: [
      'The mxr.ai Service is integrated with third party applications, websites, and services (“Third Party Applications”) to make available content, products, and/or services to you. These Third Party Applications may have their own terms and conditions of use and privacy policies and your use of these Third Party Applications will be governed by and subject to such terms and conditions and privacy policies. You understand and agree that mxr.ai does not endorse and is not responsible or liable for the behavior, features, or content of any Third Party Application or for any transaction you may enter into with the provider of any such Third Party Applications.',
    ],
  },
  {
    title: 'User-Generated Content',
    blocks: [
      'The mxr.ai Service is based on user content and relies on users contributing content to the Service, including without limitation quizes, pictures, video, text, messages, information, user feedback and any other content (“User Content”). You hereby grant to mxr.ai a perpetual (or, for as long as permitted under applicable law), non-exclusive, sub-licensable, transferable, royalty-free, irrevocable, fully paid, universal license to commercialise, use, reproduce, make available to the public (e.g. perform or display), publish, translate, modify, create derivative works from, and distribute any of your User Content you have made available to the public in connection with the Service through any medium, whether alone or in combination with other content or materials, in any manner and by any means, method or technology, whether now known or hereafter created. Aside from the rights specifically granted herein, you retain ownership of all rights, including intellectual property rights, in the User Content. Where applicable and permitted under applicable law, you also agree to waive any “moral rights” (or the equivalent under applicable law) such as your right to be identified as the author of any User Content, including Feedback, and your right to object to derogatory treatment of such User Content.',
      userContentPromise,
      userContentReview,
      userContentResponsibility,
    ],
  },
  {
    title: 'DMCA And User Content Reporting',
    blocks: [
      'The Digital Millennium Copyright Act of 1998 (the “DMCA”) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If you believe in good faith that material available in the Service infringes your copyright, you (or your agent) may send to mxr.ai a written notice by mail or e-mail, requesting that mxr.ai removes such material or blocks access to it. If you believe in good faith that someone has wrongly filed a notice of copyright infringement against you, the DMCA permits you to send to mxr.ai a counter-notice. Notices and counter-notices must meet the then-current statutory requirements imposed by the DMCA. See http://www.copyright.gov/ for details. Notices and counter-notices must be sent in writing Dil khaira as follows: By e-mail to Dil Khaira mxr.ai AS, or by e-mail to info@mxr.ai. We suggest that you consult your legal advisor before filing a DMCA notice or counter-notice. Please note that mxr.ai may, in appropriate circumstances, terminate or suspend users and accountholders who are repeat infringers.',
      'Notwithstanding the foregoing, mxr.ai may in its sole discretion take such actions as it deems fit in order to protect the intellectual property rights of any intellectual property owner, including but not limited to removing User Content.',
      'If you believe that any Resources do not comply with the Acceptable Use, feel free to report this to mxr.ai support desk.',
      userContentPromise,
      userContentReview,
      userContentResponsibility,
    ],
  },
  {
    title: 'Organisations',
    blocks: [
      'If you establish a mxr.ai account on behalf of a company, organisation, entity, or brand (an “Organisation”, and such account an “Organisation Account”), the terms “you” and “your”, as used throughout the Agreements, apply to both you and the Organisation, as applicable.',
      'If you open an Organisation Account, you represent and warrant that you are authorised to grant all permissions and licenses provided in the Agreements and to bind the Organisation to the Agreements.',
    ],
  },
  {
    title: 'Term And Termination',
    blocks: [
      'The Agreements will continue to apply to you until terminated by either you or mxr.ai!. You may terminate the Agreements at any time. mxr.ai may terminate the Agreements or suspend your access to the mxr.ai Service at any time, including in the event of your actual or suspected unauthorised use of the mxr.ai Service and/or Resources, or non-compliance with the Agreements. If you or mxr.ai terminate the Agreements, or if mxr.ai suspends your access to the mxr.ai Service, you agree that mxr.ai shall have no liability or responsibility to you and mxr.ai will not refund any amounts that you have already paid, to the fullest extent permitted under applicable law.',
      'You hereby acknowledge and agree that the perpetual license granted to mxr.ai by you in relation to User Content will continue after expiry or termination of any of the Agreements for any reason.',
      'Sections 2, 8, 12, 13, 14, 15 and 16 and all other sections of the Agreements that, either explicitly or by their nature, must remain in effect even after termination of the Agreements, shall survive termination.',
    ],
  },
  {
    title: 'Warranty And Disclaimer',
    blocks: [
      'Although mxr.ai will endeavor to provide the mxr.ai Service in the best possible way without interruptions, you understand and agree that the mxr.ai Service is provided “as is” and “as available”, without any express or implied warranty, condition or assurance of any kind. This means that we do not represent or warrant to you that:',
      { list: [
        'the use of the mxr.ai Service and the Resources will meet your needs or requirements.',
        'the use of the mxr.ai Service and the Resources will be uninterrupted, timely, secure or free from errors.',
        'the information obtained by using the mxr.ai Service and the Resources will be accurate or reliable, or',
        'any defects in the operation or functionality of mxr.ai Service or any Resources we provide will be repaired or corrected.',
      ] },
      'You are using the mxr.ai Service and the Resources at your own risk and for your own account. Any Resources downloaded or otherwise obtained through the use of the mxr.ai Service is done at your own discretion and risk, and you are solely responsible for any damage to your computer or other devices for any loss of data that may result from the download of such Resources. mxr.ai and all owners of the Resources make no representations and disclaim any warranties or conditions of satisfactory quality, merchantability, fitness for a particular purpose, or non-infringement. Neither mxr.ai!, its licensors, partners nor any owner of Resources warrants that the mxr.ai Service is free of malware or other harmful components. In addition, mxr.ai makes no representation nor does it warrant, endorse, guarantee, or assume responsibility for any third party applications (or the resources thereof), User Content, or any other product or service offered by a third party on or through the mxr.ai Service or any hyperlinked website, or featured in any banner or other advertising. You understand and agree that mxr.ai is not responsible or liable for any communication between users or any transaction between you and third party through the mxr.ai Service. No information or advice, whether expressed, implied, oral or written, obtained by you from mxr.ai AS or through any Resources we provide shall create any warranty, guarantee, or conditions of any kind, except for those expressly outlined in these Terms.',
      'This section shall apply to the greatest possible extent permitted under applicable law.',
    ],
  },
  {
    title: 'Limitation',
    blocks: [
      'YOU HEREBY AGREE THAT, TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY PROBLEMS OR DISSATISFACTION WITH THE mxr.ai SERVICE IS TO UNINSTALL ANY mxr.ai SOFTWARE AND TO STOP USING THE mxr.ai SERVICE. WHILE mxr.ai ACCEPTS NO RESPONSIBILITY FOR THIRD PARTY APPLICATIONS OR THE RESOURCES THEREOF, AND WHILE YOUR RELATIONSHIP WITH SUCH THIRD PARTY APPLICATIONS MAY BE GOVERNED BY SEPARATE AGREEMENTS WITH SUCH THIRD PARTIES, TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOUR SOLE AND EXCLUSIVE REMEDY, AS WITH RESPECT TO mxr.ai!, FOR ANY PROBLEMS OR DISSATISFACTION WITH THIRD PARTY APPLICATIONS OR THE RESOURCES THEREOF, IS TO UNINSTALL AND/OR STOP USING ANY SUCH THIRD PARTY APPLICATIONS.',
      'TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL mxr.ai!, ITS OFFICERS, SHAREHOLDERS, EMPLOYEES, AGENTS, DIRECTORS, SUBSIDIARIES, AFFILIATES, SUCCESSORS, ASSIGNS, SUPPLIERS, OR LICENSORS BE LIABLE FOR (1) ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES; (2) ANY LOSS OF USE, DATA, BUSINESS, OR PROFITS (WHETHER DIRECT OR INDIRECT), IN ALL CASES ARISING OUT OF THE USE OR INABILITY TO USE THE mxr.ai SERVICE, THIRD PARTY APPLICATIONS, OR THIRD PARTY APPLICATION CONTENT, REGARDLESS OF LEGAL THEORY, WITHOUT REGARD TO WHETHER mxr.ai HAS BEEN MADE AWARE OF THE POSSIBILITY OF THOSE DAMAGES, AND EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE; OR (3) AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE mxr.ai SERVICE, THIRD PARTY APPLICATIONS, OR THIRD PARTY APPLICATION CONTENT MORE THAN THE AMOUNTS PAID BY YOU TO mxr.ai FOR THE PRECEDING TWELVE MONTHS PRIOR TO THE RELEVANT LIABILITY AROSE, TO THE EXTENT PERMISSIBLE BY APPLICABLE LAW.',
      'Nothing in the Agreements removes or limits mxr.ai liability for fraud, fraudulent misrepresentation, death or personal injury caused by its negligence, and, if required by applicable law, gross negligence.',
    ],
  },
  {
    title: 'Third Party Rights',
    blocks: [
      'In addition to the sections above, and notwithstanding anything to the contrary in Terms, this section applies with respect to your use of any version of our app compatible with the iOS operating system of Apple Inc. (“Apple”). Apple is not a party to this Terms and does not own and is not responsible for the app. Apple is not providing any warranty for the app except, if applicable, to refund the purchase price for it. Apple is not responsible for maintenance or other support services for the app and shall not be responsible for any other claims, losses, liabilities, damages, costs or expenses with respect to the app, including any third-party product liability claims, claims that the app fails to conform to any applicable legal or regulatory requirement, claims arising under consumer protection or similar legislation, and claims with respect to intellectual property infringement. Any inquiries or complaints relating to the use of the app, including those pertaining to intellectual property rights, must be directed to mxr.ai. The license you have been granted in these Terms is limited to a non-transferable license to use the app on an Apple-branded product that runs Apple’s iOS operating system and is owned or controlled by you, or as otherwise permitted by the Usage Rules set out in Apple’s App Store Terms of Service. In addition, you must comply with the terms of any third-party agreement applicable to you when using the App, such as your wireless data service agreement. Apple and Apple’s subsidiaries are third-party beneficiaries of these Terms and, upon your acceptance of the terms and conditions of these Terms, will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary of these Terms. Notwithstanding these rights of Apple and Apple’s subsidiaries, mxr.ai right to enter into, rescind or terminate any variation, waiver or settlement under these Terms is not subject to the consent of any third party.',
    ],
  },
  {
    title: 'Acceptable Use Policy',
    blocks: [
      'By visiting our Services and accessing the information, resources, services, products, and tools we provide for you, either directly or indirectly (hereafter referred to as “Resources”), you agree to use the Services and these Resources only for the purposes intended as permitted by (a) the Terms, (b) this Acceptable Use Policy and (c) applicable laws, regulations and generally accepted online practices or guidelines (“Acceptable Use”). Wherein, you understand that:',
      'a. In order to access our Services and Resources, you may be required to provide certain information about yourself (such as identification, contact details, etc.) as part of the registration process, or as part of your ability to use the Services and Resources. You agree that any information you provide will always be accurate, correct, and up to date.',
      'b. You are responsible for maintaining the confidentiality of any login information associated with any account you use to access our Services and Resources. Accordingly, you are responsible for all activities that occur under your account/s.',
      'c. Accessing (or attempting to access) any of our Services and Resources by any means other than through the means we provide, is strictly prohibited. You specifically agree not to access (or attempt to access) any of our Services and Resources through any automated, unethical or unconventional means.',
      'd. Engaging in any activity that disrupts or interferes with our Services and Resources, including the servers and/or networks to which our Services and Resources are located or connected, is strictly prohibited.',
      'e. Attempting to copy, duplicate, reproduce, sell, trade, or resell our Resources is strictly prohibited.',
      'f. You are solely responsible any consequences, losses, or damages that we may directly or indirectly incur or suffer due to any unauthorised activities conducted by you, as explained above, and may incur criminal or civil liability.',
      'g. We may provide various open communication tools on our Services, such as blog comments, blog posts, public chat, forums, message boards, newsgroups, product ratings and reviews, various social media services, etc. You understand that generally we do not pre-screen or monitor the content posted by users of these various communication tools, which means that if you choose to use these tools to submit any type of content to our Services, then it is your personal responsibility to use these tools in a responsible and ethical manner. By posting information or otherwise using any open communication tools as mentioned, you agree that you will not upload, post, share, or otherwise distribute any content that:',
      { sub: [
        'i. Is illegal, threatening, defamatory, abusive, harassing, degrading, intimidating, fraudulent, deceptive, invasive, racist, or contains any type of suggestive, inappropriate, or explicit language;',
        'ii. Infringes on any trademark, patent, trade secret, copyright, or other proprietary right of any party;',
        'iii. Contains any type of unauthorised or unsolicited advertising;',
        'iiii. Impersonates any person or entity, including any mxr.ai employees or representatives.',
      ] },
      'We have the right at our sole discretion to remove any content that we feel in our judgment does not comply with the Agreements, along with any content that we feel is otherwise offensive, harmful, objectionable, inaccurate, or violates any 3rd party copyrights or trademarks. We are not responsible for any delay or failure in removing such content. If you post content that we choose to remove, you hereby consent to such removal, and consent to waive any claim against us.',
      'h. You agree to indemnify and hold harmless mxr.ai and its parent company and affiliates, and their directors, officers, managers, employees, donors, agents, and licensors, from and against all losses, expenses, damages and costs, including reasonable attorneys’ fees, resulting from any violation of this Acceptable Use Policy or the failure to fulfill any obligations relating to your account incurred by you or any other person using your account. We reserve the right to take over the exclusive defense of any claim for which we are entitled to indemnification under this Acceptable Use Policy. In such event, you shall provide us with such cooperation as is reasonably requested by us.',
    ],
  },
]
