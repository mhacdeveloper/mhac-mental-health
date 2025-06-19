// popupData.js
/**
 * popupData.js
 *
 * This file contains the HTML content and "Learn More" links
 * for all job title popups used on the site.
 *
 * Usage:
 *   import { popupContent } from './popupData.js';
 *   const { content, link } = popupContent['job-slug'];
 *
 * Slug keys are lowercase, hyphen-separated versions of the job titles.
 */

export const popupContent = {
  "addiction-therapist": {
    content: `
      <div class="popup-body">
        <p>As an addiction therapist, you will help people who are struggling with drug or alcohol problems. You will listen, support, and teach them how to make healthy choices so they can feel better and live happier lives.</p>
        <p>Be someone who helps others find a fresh start and hope for the future!</p>
        <h5>Requirements</h5>
        <p>Master degree (or higher) in a Behavioral Health field or Nursing, with appropriate licensure through the Nursing Board, Ohio CSWMFT Board, Ohio CDP Board, or Ohio Board of Psychology.</p>
        <h5>Average Pay</h5>
        <p>$51,552/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/sud-treatment"
  },

  "advanced-practice-nurse": {
    content: `
      <div class="popup-body">
        <p>As an APRN in behavioral health, you will provide compassionate, expert care to individuals facing mental health and substance use challenges. You'll assess needs, offer treatment, and support recovery—helping people take meaningful steps toward healing and stability.</p>
        <p>Use your advanced skills to empower others and transform lives!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse (RN) with a Master of Science in Nursing (MSN).</p>
        <h5>Average Pay</h5>
        <p>$101,392/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/nursing"
  },

  "agency-director": {
    content: `
      <div class="popup-body">
        <p>Guide the vision and operations of a behavioral health organization, building strong programs, managing resources, inspiring teams, and expanding services to meet community needs.</p>
        <p>Drive change at the highest level and leave a lasting impact on countless lives!</p>
        <h5>Requirements</h5>
        <p>Master degree in any field.</p>
        <h5>Average Pay</h5>
        <p>$112,037/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/management"
  },

  "art-therapist": {
    content: `
      <div class="popup-body">
        <p>Use creative expression as a powerful therapeutic tool to help individuals explore emotions, process trauma, and build resilience in behavioral health settings.</p>
        <p>Turn creativity into a powerful path to healing!</p>
        <h5>Requirements</h5>
        <p>Master degree (or higher) in Art Therapy; licensed by the Ohio CSWMFT Board.</p>
        <h5>Average Pay</h5>
        <p>$63,051/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/art-therapy"
  },

  "behavior-analyst": {
    content: `
      <div class="popup-body">
        <p>As a behavior analyst, you will help people improve their lives by understanding their behavior and teaching new skills. Your work will make a real difference for individuals and families, helping them reach their goals and live more independently.</p>
        <p>Make a positive impact and help others thrive every day!</p>
        <h5>Requirements</h5>
        <p>Master degree in a behavioral health field; certification through the <a href="http://www.bacb.com">Behavior Analyst Certification Board</a>.</p>
        <h5>Average Pay</h5>
        <p>$84,684/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/behavioral-analysis"
  },

  "behavior-assistant": {
    content: `
      <div class="popup-body">
        <p>Help behavior specialists and therapists by following behavior plans, teaching kids how to manage their feelings, and keeping track of their progress.</p>
        <p>If you enjoy working directly with kids and want to see them grow, this job could be a great fit for you!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED, 18+ years of age; on-the-job training.</p>
        <h5>Optional Certification</h5>
        <p>With on-the-job training or college classes, you may become a <a href="http://www.bacb.org">Registered Behavior Technician (RBT)</a>.</p>
        <h5>Average Pay</h5>
        <p>$42,098/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/behavioral-analysis"
  },

  "behavioral-health-specialist": {
    content: `
      <div class="popup-body">
        <p>Provide direct support to individuals managing mental health and substance use disorders by implementing treatment plans, teaching coping strategies, and promoting emotional wellness.</p>
        <p>Use your skills and compassion to be a catalyst for real change!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse (RN) OR Bachelor Degree or higher.</p>
        <h5>Average Pay</h5>
        <p>$53,864/yr</p>
      </div>
    `,
    link: "#" // No Learn More page
  },

  "care-manager-coordinator": {
    content: `
      <div class="popup-body">
        <p>Support individuals living with mental illness or addiction by coordinating behavioral health, physical health, housing, and social services into a seamless, client-centered care plan.</p>
        <p>Help people move forward by connecting them to the care they deserve!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse (RN) OR Bachelor Degree or higher.</p>
        <h5>Average Pay</h5>
        <p>$44,727/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/care-coordination"
  },

  "case-manager": {
    content: `
      <div class="popup-body">
        <p>Develop individualized plans, connect clients to housing, medical care, therapy, and employment support, and monitor progress toward recovery goals. As a case manager, you’ll help individuals navigate challenges and move forward toward their goals.</p>
        <p>If you love solving problems and empowering others, this role is a perfect fit!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED AND 70 hours of chemical dependency training to become credentialed as a <a href="http://www.ocdp.ohio.gov">Chemical Dependency Counselor Assistant (CDCA)</a> OR Associate degree or higher.</p>
        <h5>Average Pay</h5>
        <p>$45,389/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/care-coordination"
  },

  "client-rights-officer": {
    content: `
      <div class="popup-body">
        <p>Safeguard the rights of individuals receiving mental health and addiction services by ensuring ethical treatment, investigating concerns, and advocating for client empowerment and dignity.</p>
        <p>Stand up for justice and dignity when it matters most!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse (BSN) OR Master degree in a Behavioral Health Field OR PhD in Psychology; licensure required through the <a href="http://www.nursing.ohio.gov">Ohio Nursing Board</a>, <a href="http://www.cswmft.ohio.gov">Ohio CSWMFT Board</a>, <a href="http://www.psychology.ohio.gov">Ohio Board of Psychology</a>, or <a href="http://www.cdp.ohio.gov">Ohio CDP Board</a>.</p>
        <h5>Average Pay</h5>
        <p>$42,958/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/advocacy"
  },

  "clinical-case-manager": {
    content: `
      <div class="popup-body">
        <p>Offer both clinical and case management support by assessing needs, creating treatment plans, providing therapy or psychoeducation, and linking clients to essential mental health and recovery resources.</p>
        <p>Be a trusted guide on the road to healing and independence!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse (BSN) OR Master degree in a Behavioral Health Field with appropriate licensure (<a href="http://www.nursing.ohio.gov">Nursing Board</a>, <a href="https://cswmft.ohio.gov">CSWMFT Board</a>, <a href="http://www.cdp.ohio.gov">CDP Board</a>).</p>
        <h5>Average Pay</h5>
        <p>$50,968/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/care-coordination"
  },

  "clinical-supervisor": {
    content: `
      <div class="popup-body">
        <p>Guide and mentor behavioral health clinicians by providing supervision, training, and support to ensure high-quality, ethical, and client-centered care.</p>
        <p>Shape the next generation of compassionate behavioral health providers!</p>
        <h5>Requirements</h5>
        <p>Master degree (or higher) in a Behavioral Health Field or Nursing (with mental health credential) OR Doctorate of Medicine or Osteopathic Medicine; licensure required through the <a href="http://www.nursing.ohio.gov">Ohio Nursing Board</a>, <a href="http://www.cswmft.ohio.gov">Ohio CSWMFT Board</a>, <a href="http://www.cdp.ohio.gov">Ohio CDP Board</a>, <a href="http://www.psychology.ohio.gov">Ohio Board of Psychology</a>, or <a href="http://www.med.ohio.gov">Ohio Medical Board</a>.</p>
        <h5>Average Pay</h5>
        <p>Not specified.</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/clinical-supervision"
  },

  "coalition-coordinator": {
    content: `
      <div class="popup-body">
        <p>Bring together agencies, organizations, and community partners to strengthen behavioral health systems, develop shared goals, and lead collaborative initiatives.</p>
        <p>If you love building connections to create big change, this role is for you!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse (RN) OR Bachelor Degree or higher AND credentialed as an <a href="http://www.cdp.ohio.gov">Ohio Certified Prevention Specialist (OCPS)</a>.</p>
        <h5>Average Pay</h5>
        <p>$53,627/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/prevention-careers" // Not on the Learn More list
  },

  "community-health-worker": {
    content: `
      <div class="popup-body">
        <p>Serve as a vital bridge between behavioral health services and the community by providing education, support, outreach, and advocacy for individuals facing mental health and substance use challenges.</p>
        <p>Be the connection that brings hope, care, and resources to your community!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED AND completion of an approved <a href="http://www.nursing.ohio.gov">Community Health Worker training program</a>.</p>
        <h5>Average Pay</h5>
        <p>$41,600/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/community-health"
  },

  "crisis-hotline-call-center-attendant": {
    content: `
      <div class="popup-body">
        <p>Be a critical first point of contact for individuals in mental health or substance use crises, offering compassionate listening, safety planning, emotional support, and referrals to appropriate services.</p>
        <p>Be the voice of hope when it matters most!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED, 18+ years of age; on-the-job training.</p>
        <h5>Average Pay</h5>
        <p>$42,799/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/crisis"
  },

  "crisis-responder": {
    content: `
      <div class="popup-body">
        <p>A Crisis Responder helps people who are going through a mental health or substance use emergency. They listen, stay calm, and make sure the person is safe. They may work on a phone line, in person, or with a mobile response team.</p>
        <p>Help people when they need it most!</p>
        <h5>Requirements</h5>
        <p>Bachelor degree in a human services field; some positions may require licensure as a social worker or counselor.</p>
        <h5>Average Pay</h5>
        <p>$42,799/yr</p>
      </div>
    `,
    link: "#" // Not on the Learn More list
  },

  "crisis-therapist": {
    content: `
      <div class="popup-body">
        <p>As a crisis therapist, you will support people during their most difficult moments, helping them feel heard, safe, and understood. You’ll provide immediate care, guidance, and hope to those facing emotional or mental health crises.</p>
        <p>If you thrive under pressure and want to be a lifeline for others, this is your calling!</p>
        <h5>Requirements</h5>
        <p>Bachelor in Social Work (BSW) OR Music Therapy OR Master degree in Music Therapy, Art Therapy, Counseling, Addiction Studies, Social Work OR PhD in Psychology; licensure required through <a href="http://www.cswmft.ohio.gov">Ohio CSWMFT Board</a>, <a href="http://www.cdp.ohio.gov">Ohio CDP Board</a>, or <a href="http://www.psychology.ohio.gov">Ohio Board of Psychology</a>.</p>
        <h5>Average Pay</h5>
        <p>$47,283/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/crisis"
  },

  "early-childhood-mental-health-consultant": {
    content: `
      <div class="popup-body">
        <p>Partner with early childhood educators, caregivers, and families to support the emotional and behavioral health of young children and strengthen early learning environments.</p>
        <p>Shape brighter futures by nurturing mental health from the very start!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse (RN) OR Bachelor degree or higher with education and experience in early childhood; credentialed as an <a href="http://www.occrra.org">Early Childhood Mental Health Consultant (ECMHC)</a>.</p>
        <h5>Average Pay</h5>
        <p>$62,156/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/early-childhood-mental-health"
  },

  "epidemiologist": {
    content: `
      <div class="popup-body">
        <p>An epidemiologist looks at how and why mental health problems and substance use happen in groups of people. They use this information to find ways to help keep communities healthier.</p>
        <p>Turn data into action that saves lives and strengthens communities!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse (RN) OR Bachelor degree or higher (Master degree often preferred).</p>
        <h5>Average Pay</h5>
        <p>$67,800/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/epidemiology"
  },

  "harm-reduction-specialist": {
    content: `
      <div class="popup-body">
        <p>Help people who are using drugs to stay safe by offering support without judgment and tools to protect their health.</p>
        <p>If you are compassionate, nonjudgmental, good at listening, and want to support people in making safer choices, no matter where they are in their journey, harm reduction may be the work for you!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED AND training as a Certified Peer, CDCA, or an Associate in Behavioral Health or Nursing (or higher).</p>
        <h5>Average Pay</h5>
        <p>$41,236/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/sud-treatment"
  },

  "health-education-specialist": {
    content: `
      <div class="popup-body">
        <p>Develop and deliver programs that teach individuals and communities about mental health, coping strategies, addiction prevention, and emotional wellness.</p>
        <p>Empower people with knowledge that transforms lives!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse (RN) OR Bachelor Degree or higher AND credentialed as a <a href="http://www.nchec.org">Certified Health Education Specialist (CHES)</a>.</p>
        <h5>Average Pay</h5>
        <p>$62,190/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/community-health"
  },

  "infant-mental-health-practitioner": {
    content: `
      <div class="popup-body">
        <p>Support the emotional and developmental needs of babies and young children by working directly with families to promote secure attachment, resilience, and early mental health.</p>
        <p>Help build the strongest foundations for a lifetime of mental well-being!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse OR Bachelor degree or higher with education and experience in early childhood; credentialed as an <a href="http://www.occrra.org">Ohio Infant Family Practitioner (OIFP-ll or OIFP-lll)</a>.</p>
        <h5>Average Pay</h5>
        <p>$72,482/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/early-childhood-mental-health"
  },

  "infant-mental-health-support-worker": {
    content: `
      <div class="popup-body">
        <p>Work with families to strengthen early emotional bonds, support healthy brain development, and promote nurturing environments that protect the mental health of babies and young children.</p>
        <p>Help lay the foundation for a lifetime of emotional health and resilience!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED, OR a CDA, OR an Associate Degree or higher with at least two years of experience working with infants and young children AND 20 hrs of <a href="http://www.occrra.org">approved training</a>; credentialed as an Ohio Infant Family Affiliate Level 1 – OIFA-I.</p>
        <h5>Average Pay</h5>
        <p>$60,677/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/early-childhood-mental-health"
  },

  "job-coach-employment-support": {
    content: `
      <div class="popup-body">
        <p>Help individuals in recovery or living with mental health challenges prepare for, obtain, and succeed in employment by providing individualized coaching, workplace advocacy, and skills development.</p>
        <p>Empower people to find purpose and independence through meaningful work!</p>
        <h5>Requirements</h5>
        <p>Bachelor Degree or higher.</p>
        <h5>Average Pay</h5>
        <p>$49,398/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/direct-client-care" // Not on the Learn More list
  },

  "licensed-practical-nurse": {
    content: `
      <div class="popup-body">
        <p>Deliver compassionate nursing care in behavioral health settings by giving medications, monitoring psychiatric symptoms, and assisting with therapeutic care under the supervision of RNs and physicians.</p>
        <p>Support healing and recovery at the heart of behavioral healthcare!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED AND completion of an approved <a href="http://www.odh.ohio.gov">State-Tested Nurse Aide (STNA)</a> training program AND pass the NCLEX-PN exam.</p>
        <h5>Average Pay</h5>
        <p>$38,030/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/assistant-nursing"
  },

  "licensed-professional-counselor": {
    content: `
      <div class="popup-body">
        <p>Provide therapy and support to individuals, families, or groups struggling with mental health challenges, guiding them toward healing and personal growth.</p>
        <p>Make every session an opportunity for someone to reclaim their story!</p>
        <h5>Requirements</h5>
        <p>Master degree (or higher) in Marriage and Family Therapy; licensed by the <a href="http://www.cswmft.ohio.gov">Ohio CSWMFT Board</a>.</p>
        <h5>Average Pay</h5>
        <p>$68,370/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/licensed-professional-counselor"
  },

  "marriage-and-family-therapist": {
    content: `
      <div class="popup-body">
        <p>Help couples and families navigate relational challenges, mental health struggles, and life transitions through compassionate, evidence-based therapy.</p>
        <p>Strengthen bonds, heal wounds, and help families grow together!</p>
        <h5>Requirements</h5>
        <p>Doctorate in Medicine, Osteopathic Medicine OR Psychiatry, with <a href="http://www.med.ohio.gov">appropriate licensure</a>.</p>
        <h5>Average Pay</h5>
        <p>$57,540/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/marriage-family-therapy"
  },

  "mental-health-treatment-support-staff": {
    content: `
      <div class="popup-body">
        <p>Create a safe and caring space for people getting treatment for their mental health. You’ll assist with daily tasks, help build new skills, support healthy ways to handle emotions, and be a positive part of their recovery.</p>
        <p>Be a steady source of encouragement and hope on someone's journey to wellness!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED, 18+ years of age; on-the-job training.</p>
        <h5>Average Pay</h5>
        <p>$34,189/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/direct-client-care"
  },

  "music-therapist": {
    content: `
      <div class="popup-body">
        <p>Incorporate music-based interventions to help individuals express emotions, develop coping skills, and promote mental and emotional recovery.</p>
        <p>Let the healing power of music open new doors for wellness!</p>
        <h5>Requirements</h5>
        <p>Bachelor degree (or higher) in Music Therapy; hold a Music Therapy Board Certification (MT-BC) in good standing to become a Licensed Professional Music Therapist in Ohio.</p>
        <h5>Average Pay</h5>
        <p>$54,088/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/music-therapy"
  },

  "nursing-assistant": {
    content: `
      <div class="popup-body">
        <p>Support care teams by assisting with daily living activities, monitoring mental health, and creating therapeutic environments.</p>
        <p>As a nursing assistant, you’ll be a crucial source of support in each client’s healing process!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED AND completion of an approved <a href="http://www.odh.ohio.gov">State-Tested Nurse Aide (STNA)</a> training program.</p>
        <h5>Average Pay</h5>
        <p>$38,030/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/assistant-nursing"
  },

  "occupational-therapy-assistant": {
    content: `
      <div class="popup-body">
        <p>Help individuals regain independence and build daily living skills by supporting occupational therapists in delivering personalized, recovery-focused treatment in behavioral health settings.</p>
        <p>Empower people to reclaim their lives through everyday victories!</p>
        <h5>Requirements</h5>
        <p>Occupational Therapy Assistant Associate Degree AND pass NCBOT exam to become <a href="http://www.otptat.ohio.gov">licensed in Ohio</a>.</p>
        <h5>Average Pay</h5>
        <p>$62,470/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/occupational-therapy"
  },

  "occupational-therapist": {
    content: `
      <div class="popup-body">
        <p>Help individuals with mental health conditions regain skills and engage in meaningful activities to improve their quality of life. You’ll focus on developing coping strategies, improving daily living skills, and adapting environments to support individuals' functioning and well-being.</p>
        <p>Bring creativity and care together to help people thrive in their everyday lives!</p>
        <h5>Requirements</h5>
        <p>Master degree (or higher) in Occupational Therapy, with <a href="http://www.otptat.ohio.gov">appropriate licensure</a>.</p>
        <h5>Average Pay</h5>
        <p>$90,620/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/occupational-therapy"
  },

  "peer-supporter": {
    content: `
      <div class="popup-body">
        <p>Use your lived experience with mental health or substance use recovery (either as an individual in recovery or a caregiver) to inspire, mentor, and walk alongside others on their healing journeys, offering hope and real-world guidance. Peer support helps individuals navigate complex systems and circumstances, empowering them to play an active role in their recovery.</p>
        <p>As a Peer Supporter, your story can be the spark that changes someone else’s life!</p>
        <h5>Requirements</h5>
        <p>Complete approved <a href="http://www.mha.ohio.gov">peer supporter training</a>.</p>
        <h5>Average Pay</h5>
        <p>$39,000/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/peer-support"
  },

  "pharmacy-technician": {
    content: `
      <div class="popup-body">
        <p>Support behavioral health teams by preparing and dispensing psychiatric medications, assisting with medication education, and ensuring clients have safe, reliable access to the treatments they need.</p>
        <p>Play a critical behind-the-scenes role in empowering recovery and wellness!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED AND completion of an approved <a href="http://pharmacy.ohio.gov">Pharmacy Tech training program</a>.</p>
        <h5>Average Pay</h5>
        <p>$38,290/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/pharmacy"
  },

  "pharmacist": {
    content: `
      <div class="popup-body">
        <p>Ensure clients in mental health and addiction recovery programs receive accurate medications to support treatment plans.</p>
        <p>Play a vital role in every client’s path toward stability and wellness!</p>
        <h5>Requirements</h5>
        <p>Doctorate in Pharmacy, with <a href="http://www.pharmacy.ohio.gov">appropriate licensure</a>.</p>
        <h5>Average Pay</h5>
        <p>$132,710/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/pharmacy"
  },

  "physician-associate": {
    content: `
      <div class="popup-body">
        <p>Work closely with psychiatrists and behavioral health teams to diagnose mental health conditions, support treatment plans, and provide integrated care for clients with complex behavioral health needs.</p>
        <p>Bring advanced clinical skills to a field where every decision can change a life!</p>
        <h5>Requirements</h5>
        <p>Master of Physician Assistant (or Associate) Studies, with <a href="http://www.med.ohio.gov">appropriate licensure</a>.</p>
        <h5>Average Pay</h5>
        <p>$122,180/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/physician-assistant-associate"
  },

  "prevention-consultant": {
    content: `
      <div class="popup-body">
        <p>Design and oversee programs that educate communities on promoting wellness and preventing substance misuse, suicide, problem gambling, and other issues.</p>
        <p>Be the proactive force that keeps communities healthy and thriving!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse (RN) OR Bachelor Degree or higher AND credentialed as an <a href="http://www.cdp.ohio.gov">Ohio Certified Prevention Consultant (OCPC)</a>.</p>
        <h5>Average Pay</h5>
        <p>$55,585/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/prevention-careers"
  },

  "prevention-educator": {
    content: `
      <div class="popup-body">
        <p>Teach individuals, families, and communities about mental health, substance use prevention, coping skills, and wellness strategies to reduce risks and build stronger, healthier lives.</p>
        <p>Empower individuals and communities with the knowledge and skills to make healthier, safer choices!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED AND <a href="http://ocdpb.ohio.gov">Ohio Certified Prevention Specialist Assistant (OCPSA)</a>.</p>
        <h5>Average Pay</h5>
        <p>$44,329/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/prevention-careers"
  },

  "prevention-specialist": {
    content: `
      <div class="popup-body">
        <p>Design and deliver programs aimed at preventing substance misuse, mental health issues, and other behavioral health challenges before they occur. Work with individuals and communities to promote healthy behaviors and environments.</p>
        <p>Play a crucial role in improving your community’s well-being!</p>
        <h5>Requirements</h5>
        <p>Associate Degree or higher AND <a href="http://ocdpb.ohio.gov">Ohio Certified Prevention Specialist (OCPS)</a>.</p>
        <h5>Average Pay</h5>
        <p>$55,585/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/prevention-careers" // No Learn More page
  },

  "program-manager-supervisor": {
    content: `
      <div class="popup-body">
        <p>Lead programs and teams by making sure daily tasks run smoothly, helping staff do their jobs well, ensuring clients get the care they need, and helping programs reach their goals.</p>
        <p>Step into leadership and help shape the future of behavioral healthcare!</p>
        <h5>Requirements</h5>
        <p>Registered Nurse (RN) OR Bachelor Degree or higher.</p>
        <h5>Average Pay</h5>
        <p>$56,325/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/management"
  },

  "psychiatric-mental-health-nurse": {
    content: `
      <div class="popup-body">
        <p>As a nurse, specialize in the unique needs of individuals living with mental health disorders, providing therapeutic interventions, medication management, crisis stabilization, and holistic support across a range of settings.</p>
        <p>Be a cornerstone of recovery for those facing mental health challenges!</p>
        <h5>Requirements</h5>
        <p>Licensed as a Registered Nurse (RN) AND completion of <a href="http://nursingworld.org/">Psychiatric-Mental Health Nursing Certification (PMH-BC™)</a>.</p>
        <h5>Average Pay</h5>
        <p>$101,631/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/nursing"
  },

  "psychiatrist": {
    content: `
      <div class="popup-body">
        <p>Diagnose and treat mental health and substance use disorders through comprehensive care, combining therapy, medication management, and whole-person support.</p>
        <p>Use your expertise to guide healing and transform lives!</p>
        <h5>Requirements</h5>
        <p>Doctorate in Medicine or Osteopathic Medicine with <a href="http://www.med.ohio.gov">appropriate licensure</a>.</p>
        <h5>Average Pay</h5>
        <p>$221,460/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/psychiatry"
  },

  "psychologist": {
    content: `
      <div class="popup-body">
        <p>Assess, diagnose, and treat mental health disorders through therapy, psychological testing, and innovative evidence-based interventions.</p>
        <p>Be a trusted guide helping individuals find clarity, strength, and transformation!</p>
        <h5>Requirements</h5>
        <p>Doctorate in Psychology, with <a href="http://www.psychology.ohio.gov">appropriate licensure</a>.</p>
        <h5>Average Pay</h5>
        <p>$118,410/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/psychology"
  },

  "psychometrician": {
    content: `
      <div class="popup-body">
        <p>Administer, score, and interpret psychological tests that assess cognitive, emotional, and behavioral functioning to inform treatment planning and diagnoses.</p>
        <p>Use precision and insight to help unlock the full picture of mental health needs!</p>
        <h5>Requirements</h5>
        <p>Master degree (or higher) in Educational Measurement, Quantitative Psychology, or Statistics.</p>
        <h5>Average Pay</h5>
        <p>$64,359/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/research"
  },

  "research-assistant": {
    content: `
      <div class="popup-body">
        <p>Support behavioral health research studies by collecting data, analyzing findings, and contributing to projects that expand understanding of mental health and substance use treatment.</p>
        <p>Be part of the discoveries that shape tomorrow’s care!</p>
        <h5>Requirements</h5>
        <p>Bachelor degree or higher (Master degree often preferred).</p>
        <h5>Average Pay</h5>
        <p>$43,324/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/research"
  },

  "researcher": {
    content: `
      <div class="popup-body">
        <p>Conduct groundbreaking studies that explore mental health trends, treatment approaches, and recovery outcomes to strengthen the field of behavioral health.</p>
        <p>Fuel innovation and change through evidence-based discoveries!</p>
        <h5>Requirements</h5>
        <p>Master degree (or higher) in a behavioral health field.</p>
        <h5>Average Pay</h5>
        <p>$73,858/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/research"
  },

  "registered-nurse": {
    content: `
      <div class="popup-body">
        <p>Help people by assessing their needs, giving medicine, offering counseling, and following treatment plans. You also work with other team members to support each person’s recovery and overall well-being.</p>
        <p>If you’re looking for a flexible degree that helps support whole-person health, this could be the right career for you!</p>
        <h5>Requirements</h5>
        <p>Associate or Bachelor degree in nursing; pass the NCLEX-RN exam.</p>
        <h5>Average Pay</h5>
        <p>$79,940/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/nursing"
  },

  "school-social-worker": {
    content: `
      <div class="popup-body">
        <p>Support students' emotional well-being by providing counseling, crisis intervention, and connection to mental health resources within school communities.</p>
        <p>Be a champion for young people’s mental health and academic success!</p>
        <h5>Requirements</h5>
        <p>Master of Social Work (MSW); licensure required through Ohio CSWMFT Board; Pupil Services Registration through the Ohio State Board of Education.</p>
        <h5>Average Pay</h5>
        <p>$48,250/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/social-work"
  },

  "social-worker": {
    content: `
      <div class="popup-body">
        <p>Help kids and adults who are going through tough times like mental health struggles, addiction, or family problems. Social workers listen, give support, connect people to resources, and help them create a plan to feel better and move forward.</p>
        <p>Be the steady advocate who helps people find stability, strength, and hope!</p>
        <h5>Requirements</h5>
        <p>Bachelor or Master of Social Work (BSW or MSW); licensure required through <a href="http://www.cswmft.ohio.gov">Ohio CSWMFT Board</a>.</p>
        <h5>Average Pay</h5>
        <p>$60,050/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/social-work"
  },

  "substance-abuse-counselor": {
    content: `
      <div class="popup-body">
        <p>Work directly with clients to develop individualized recovery plans, facilitate group and individual therapy, provide education on relapse prevention, and support long-term sobriety goals.</p>
        <p>Make a lasting impact by guiding individuals through one of life’s toughest journeys!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED AND Associate degree or higher in Behavioral Health or Nursing; experience and training in chemical dependency; credentialed by the <a href="http://www.cdpb.ohio.gov">Ohio Chemical Dependency Professionals Board</a>.</p>
        <h5>Average Pay</h5>
        <p>$50,580/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/sud-treatment"
  },

  "substance-abuse-counselor-aide": {
    content: `
      <div class="popup-body">
        <p>Work directly with individuals in chemical dependency treatment programs. They complete assessments, treatment plans, assist with crisis intervention, and various counseling and educational services. They also assist with case management and referrals to resources.</p>
        <p>As a substance abuse counselor aide, you’ll play a critical role in client success!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED AND 70 hours of chemical dependency training to become credentialed as a <a href="http://www.ocdp.ohio.gov">Chemical Dependency Counselor Assistant (CDCA)</a>.</p>
        <h5>Average Pay</h5>
        <p>$46,225/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/sud-treatment"
  },

  "substance-use-disorder-treatment-support-staff": {
    content: `
      <div class="popup-body">
        <p>Play an essential role in residential recovery settings by monitoring client progress, offering encouragement, supporting group activities, assisting in crisis response, and helping to maintain a safe, sober environment for healing.</p>
        <p>In this role, you’ll be a vital part of someone’s journey to recovery!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED, 18+ years of age; on-the-job training.</p>
        <h5>Average Pay</h5>
        <p>$41,864/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/direct-client-care"
  },

  "therapeutic-program-worker": {
    content: `
      <div class="popup-body">
        <p>Make a real impact by supporting individuals in therapeutic residential settings like state psychiatric hospitals.</p>
        <p>It’s a rewarding role where you’ll see the difference you’re making every day!</p>
        <h5>Requirements</h5>
        <p>H.S. diploma or GED, 18+ years of age; on-the-job training.</p>
        <h5>Average Pay</h5>
        <p>$37,070/yr</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/direct-client-care"
  },

  "therapist-counselor": {
    content: `
      <div class="popup-body">
        <p>Help individuals, families, and groups overcome challenges like anxiety, depression, and trauma. Therapists create safe spaces for growth, inspiring lasting change.</p>
        <p>If you're driven to make a real impact and help others heal, this could be the career for you!</p>
        <h5>Requirements</h5>
        <p>Bachelor in Social Work (BSW), Nursing, or Music Therapy OR Master degree in Music Therapy, Art Therapy, Counseling, Addiction Studies, Social Work OR PhD in Psychology; licensure required through the <a href="http://www.nursing.ohio.gov">Nursing Board</a>, <a href="https://cswmft.ohio.gov">CSWMFT Board</a>, <a href="http://www.psychology.ohio.gov">Psychology Board</a>, <a href="http://www.cdp.ohio.gov">CDP Board</a>.</p>
        <h5>Average Pay</h5>
        <p>$55,650/yr</p>
      </div>
    `,
    link: "http://www.buildbehavioralhealth.org/therapy-counseling"
  },

  "volunteer": {
    content: `
      <div class="popup-body">
        <p>Support behavioral health programs by assisting with client activities, events, or administrative tasks — helping to create welcoming, healing spaces for people receiving services.</p>
        <p>As a volunteer, you can discover your passions, get experience and build marketable skills while you give your time and heart to make a real difference in someone’s journey!</p>
        <h5>Requirements</h5>
        <p>Enthusiasm and commitment! Some organizations require a background check.</p>
      </div>
    `,
    link: "https://www.buildbehavioralhealth.org/volunteer"
  },

  "policy-advocate-analyst": {
    content: `
        <div class="popup-body">
            <p>Research, develop, and advocate for policies that expand access to mental health and substance use treatment, protect client rights, and strengthen behavioral health systems at local, state, and national levels.</p>
            <p>Shape a better future through bold, informed advocacy!</p>
            <h5>Requirements</h5>
            <p>Bachelor Degree or higher</p>
            <h5>Average Pay</h5>
            <p>$95,972/yr</p>
        </div>
    `,
    link: "http://www.buildbehavioralhealth.org/advocacy"
  },
  "chief-clinical-officer": {
    content: `
        <div class="popup-body">
            <p>Oversee all clinical services within a behavioral health agency, ensuring high-quality, evidence-based care, mentoring clinical staff, and guiding program development with a focus on best practices and innovation.</p>
            <p>Lead a dynamic clinical team and transform lives through expert care and compassionate leadership!</p>
            <h5>Requirements</h5>
            <p>Master degree (or higher) in a Behavioral Health Field or Nursing OR Doctorate of Medicine or Osteopathic Medicine; licensure required through the Ohio Nursing Board, Ohio CSWMFT Board, Ohio CDP Board, Ohio Board of Psychology, or Ohio Medical Board.</p>
            <h5>Average Pay</h5>
            <p>$131,103/yr</p>
        </div>
    `,
    link: "http://www.buildbehavioralhealth.org/clinical-supervision"
  },









  // Degree entry

  // Degree popups to add to popupData.js

  "high-school-diploma-ged": {
    content: `
        <div class="popup-body">
            <p>Working toward your High School diploma or GED?</p>
            <p>Both are key steps toward academic and career success in behavioral health.</p>
            <p>Both options lead to higher education, better jobs, and a brighter future.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/high-school-programs"
  },


  "industry-recognized-credential": {
    content: `
        <div class="popup-body">
            <p>Interested in making a real difference in people's lives?</p>
            <p>Ohio's Industry-Recognized Credentials (IRCs) help high school students build skills in behavioral health.</p>
            <p>Behavioral health IRCs can help you work in prevention services, addiction treatment, case management, and mobile crisis services after graduation.</p>
            <p>IRCs show employers you're committed to helping others.</p>
            <p>Credentials can count toward graduation.</p>
            <p>They can lead to jobs, internships, or further education after high school.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/high-school-programs"
  },

  "college-credit-plus": {
    content: `
        <div class="popup-body">
            <p>Available to students in grades 7–12 who meet admission requirements.</p>
            <p>Earn both high school and college credit simultaneously.</p>
            <p>Courses offered at all Ohio public and participating private colleges.</p>
            <p>Earn guaranteed transfer credit in fields like psychology and social work.</p>
            <p>Finish high school while advancing toward a college degree.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/high-school-programs"
  },

  "career-technical-assurance-guide": {
    content: `
        <div class="popup-body">
            <p>CTAGs award college credit for career-technical coursework.</p>
            <p>Available to students taking approved career-technical courses in high school or at an Ohio Technical Center.</p>
            <p>Complete the approved course and earn a qualifying score on the exam to be eligible for CTAG credit.</p>
            <p>You must enroll at an institution of higher education with an approved comparable program within three years after completing the approved secondary program.</p>
            <p>Transfer Credit Ohio keeps a comprehensive listing of approved CTAG programs and courses that can be transferred to Ohio public institutions.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/high-school-programs"
  },

  "early-childhood-training": {
    content: `
        <div class="popup-body">
            <p>Early childhood training is available through college courses, in-person/online sessions, and self-paced modules.</p>
            <p>Hands-on experience in early childhood settings is also required.</p>
            <h5>Common credentials include:</h5>
            <p><strong>OIFA-I:</strong> High School Diploma/GED, CDA, or higher; 2 years' experience; 20 training hours.</p>
            <p><strong>OIFP-II:</strong> Bachelor in Early Childhood; 2 years' experience; 30 training hours.</p>
            <p><strong>OIMHP-III:</strong> Master degree; 2 years' post-grad experience; 40 training hours.</p>
            <p><strong>CDA (Child Development Associate):</strong> Recognized entry-level credential in early childhood education.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/early-childhood-education"
  },

  "chemical-dependency-training": {
    content: `
        <div class="popup-body">
            <p>Chemical dependency training is available via college courses, in-person/online sessions, or self-paced modules.</p>
            <h5>CDCA (Entry-Level):</h5>
            <p>Requires High School Diploma/GED.</p>
            <p><strong>Step 1:</strong> CDCA-Preliminary – 40 hours of training.</p>
            <p><strong>Step 2:</strong> After 10 months + 30 more hours, apply for full CDCA.</p>
            <h5>Advanced Levels:</h5>
            <p><strong>LCDC II:</strong> Associate in behavioral health/nursing or any Bachelor + 2,000 work hours.</p>
            <p><strong>LCDC III:</strong> Bachelor in behavioral science/nursing + 2,000 work hours; can diagnose under supervision.</p>
            <p><strong>LICDC:</strong> Master in behavioral science/nursing + 2,000 work hours; can diagnose, treat, and supervise.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/addiction-counseling"
  },

  "pharmacy-technician-training": {
    content: `
        <div class="popup-body">
            <p>Pharmacy Technician training programs take 4 months to 1 year to complete.</p>
            <p>Optionally, pursue a 2-year Associate Degree in pharmacy technology.</p>
            <p>After training, apply for Certified Pharmacy Technician (CPhT) certification.</p>
            <p>Certification is issued by the Ohio Board of Pharmacy.</p>
            <h5>Approved training options include:</h5>
            <p>• ASHP-accredited pharmacy technician programs</p>
            <p>• U.S. Armed Forces, Indian Health Service, or VA training programs</p>
            <p>• Employer-based programs meeting Ohio Board standards</p>
            <p>• Career-technical programs at Ohio public high schools approved by the Ohio Department of Education</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/pharmacy-degrees-certifications"
  },

  "chw-training-program": {
    content: `
        <div class="popup-body">
            <p>Community Health Worker (CHW) training is regulated by the Ohio Board of Nursing.</p>
            <p>Programs last 14–15 weeks.</p>
            <p>Includes 100+ hours of classroom instruction and 130 hours of on-site practicum.</p>
            <p>Completion of an approved program qualifies individuals to apply for CHW certification.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/public-community-health"
  },

  "nurse-aide-training": {
    content: `
        <div class="popup-body">
            <p>Ohio Nurse Aide training programs require at least 75 hours of instruction.</p>
            <p>Includes classroom learning (some online), hands-on lab training, and 16+ hours of clinical experience.</p>
            <p>Clinicals take place in skilled nursing facilities.</p>
            <p>Programs are available through nursing homes, high schools, community colleges, nonprofits, and independent providers.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/nursing-degrees-certifications"
  },

  "practical-nursing-certificate": {
    content: `
        <div class="popup-body">
            <p>Practical Nursing programs last 1–2 years and lead to a certificate or diploma.</p>
            <p>Prepare students to become Licensed Practical Nurses (LPNs).</p>
            <p>Include classroom instruction, lab work, and supervised clinical experience.</p>
            <p>Graduates are eligible to take the NCLEX-PN for licensure.</p>
            <p>Licensure is issued by the Ohio Board of Nursing.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/nursing-degrees-certifications"
  },

  "peer-supporter-training": {
    content: `
        <div class="popup-body">
            <p>Certified Peer Supporter training in Ohio includes online and/or in-person education.</p>
            <p>Complete 11 free online modules via E-Based Academy.</p>
            <p>Follow with 40 hours of specialized training for Adult, Youth, or Family Peer roles.</p>
            <h5>Specializations:</h5>
            <p><strong>Adult Peer (CPRS):</strong> Must have personal lived experience with mental health/substance use recovery.</p>
            <p><strong>Youth Peer (CYPS):</strong> Ages 18–30 with lived behavioral health experience.</p>
            <p><strong>Family Peer (CFPS):</strong> Caregiver with at least 1 year navigating behavioral health services for a loved one.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/behavioral-health"
  },

  "prevention-training": {
    content: `
        <div class="popup-body">
            <p>Prevention training is available via college courses, in-person/online sessions, and self-paced modules.</p>
            <h5>Credential Levels:</h5>
            <p><strong>OCPSA (Assistant):</strong> Requires 45 hours of training in 8 content areas + 100 hours of prevention work (paid or volunteer).</p>
            <p><strong>OCPS (Specialist):</strong> Requires OCPSA held for 8+ months, Associate or higher, 2,000 hours of work, and 120 hours of prevention education (24 AOD-specific).</p>
            <p><strong>OCPC (Consultant):</strong> Requires active OCPS for 2+ years, Bachelor or higher, 30 education hours, and 4,000 hours of supervised experience.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/behavioral-health"
  },

  "behavior-technician-training": {
    content: `
        <div class="popup-body">
            <p>To become a Registered Behavior Technician (RBT), complete a 40-hour training based on the RBT Task List.</p>
            <p>Training covers ethics and behavior analysis principles.</p>
            <p>Must be provided by a certified Behavior Analyst.</p>
            <p>Certification is obtained through the Behavior Analyst Certification Board (BACB).</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/behavioral-health"
  },

  "associate-behavioral-health-human-services": {
    content: `
        <div class="popup-body">
    <p>2-year AA or AS degree in behavioral health and human services.</p>
    <h5>Areas of study:</h5>
    <p>Human services, Addiction/substance use disorders, Social work, Psychology, Sociology, Criminal Justice, Clinical, Counseling, School Counseling, Human development and family sciences, Public Health, Nursing.</p>
    <p>Some programs offer transfer to Bachelor in Social Work completion programs.</p>
    <h5>Available Credentials:</h5>
    <p>Chemical Dependency Counselor, Infant Family Affiliate, Prevention Specialist, Psychiatric Technician, Social Work Assistant.</p>
    <p>Many careers available with a 2-year degree (60-65 credits).</p>
    <p>Degree plus experience can lead to Ohio Certified Prevention Specialist credentials (OCPSA, OCPS).</p>
</div>

    `,
    link: "https://www.buildbehavioralhealth.org/behavioral-health"
  },

  "associate-any-field": {
    content: `
        <div class="popup-body">
            <p>An associate degree in any field will typically take 2 years (60 credit hours).</p>
            <h5>Types:</h5>
            <p><strong>Associate of Arts (AA):</strong> Focuses on liberal arts and humanities.</p>
            <p><strong>Associate of Science (AS):</strong> Emphasizes science and mathematics.</p>
            <p><strong>Associate of Applied Science (AAS):</strong> Designed for immediate workforce entry in technical fields.</p>
            <h5>Benefits:</h5>
            <p><strong>Transfer Opportunities:</strong> Credits often transferable to bachelor programs.</p>
            <p><strong>Cost-Effective:</strong> Generally more affordable than bachelor degrees.</p>
            <p><strong>Earning Potential:</strong> Many associate degree holders earn competitive salaries.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/other-degrees"
  },

  "associate-nursing": {
    content: `
        <div class="popup-body">
            <p>2-year Associate Degree in Nursing (ADN), also an Associate of Applied Science in Nursing (AAS-N).</p>
            <p>Special tracks for those with prior healthcare experience (e.g., LPNs, paramedics).</p>
            <h5>Coursework:</h5>
            <p>Nursing skills, documentation, case management, medication administration, data collection.</p>
            <p>Graduates eligible for the NCLEX-RN exam to become Registered Nurses.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/nursing-degrees-certifications"
  },

  "occupational-therapy-assistant-associate": {
    content: `
        <div class="popup-body">
            <p>Occupational Therapy Assistant (OTA) Associate Degree programs typically last 2 years.</p>
            <p>Graduates can take the national certification exam by the National Board for Certification in Occupational Therapy (NBCOT).</p>
            <p>Programs are accredited by the Accreditation Council for Occupational Therapy Education (ACOTE®).</p>
            <p>Licensure for OTAs in Ohio is issued by the Ohio Occupational Therapist, Physical Therapist, and Athletic Training Board.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/allied-health"
  },

  "associate-early-childhood-education": {
    content: `
        <div class="popup-body">
            <p>Associate Degree in Early Childhood Education (ECE) is a 2-year program.</p>
            <p>Prepares individuals to work with children from birth to age eight.</p>
            <h5>Area of Study:</h5>
            <p>Child development, teaching methods, and classroom management.</p>
            <h5>Available credentials include:</h5>
            <p>Ohio Infant Family Affiliate (OIFA-I), Ohio Certified Prevention Specialist (OCPSA, OCPS), and Child Development Associate (CDA).</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/early-childhood-education"
  },

  "bachelor-behavioral-science": {
    content: `
        <div class="popup-body">
    <p>Duration: 4-year degree.</p>
    <h5>Areas of Study:</h5>
    <p>Human services, Addiction/substance use disorders, Social work, Psychology, Sociology, Criminal Justice, Clinical, Counseling, School Counseling, Human development and family sciences, Public Health, Nursing.</p>
    <h5>Focus:</h5>
    <p>Understanding human behavior, decision-making, and social interactions.</p>
    <h5>Internship:</h5>
    <p>May include fieldwork or research projects for practical experience.</p>
    <h5>Career Prep:</h5>
    <p>Prepares graduates for roles in social services, case management, human resources, and public health.</p>
    <h5>Graduate Options:</h5>
    <p>Foundation for master programs in counseling, social work, or psychology.</p>
</div>

    `,
    link: "https://www.buildbehavioralhealth.org/behavioral-health"
  },

  "bachelor-addiction-counseling": {
    content: `
        <div class="popup-body">
            <p>Duration: 4-year degree.</p>
            <h5>Areas of Study:</h5>
            <p>Counseling techniques, addiction psychology, pharmacology, case management, ethics, and treatment planning.</p>
            <h5>Hands-On Experience:</h5>
            <p>Often includes supervised fieldwork or internship in treatment settings.</p>
            <h5>Career Prep:</h5>
            <p>Prepares graduates for entry-level roles in addiction treatment, rehabilitation centers, and community health programs.</p>
            <h5>Licensure:</h5>
            <p>May be eligible for Licensed Chemical Dependency Counselor III (LCDC III) in Ohio, if all requirements are met according to the Ohio Chemical Dependency Professionals Board (OCDPB).</p>
            <h5>Graduate Options:</h5>
            <p>Pathway to a Master in Counseling or Social Work.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/addiction-counseling"
  },

  "bachelor-early-childhood": {
    content: `
        <div class="popup-body">
            <p>Bachelor of Arts (BA) or Science (BS) in Early Childhood Education is a 4-year program.</p>
            <h5>Areas of Study:</h5>
            <p>Child development, teaching strategies, curriculum design, and classroom management.</p>
            <p>Prepares for careers in childcare and early education but does not lead to PreK–Grade 5 teacher licensure.</p>
            <h5>Available credentials include:</h5>
            <p>Ohio Infant Family Practitioner (OIFP-II, OIFP-III), Ohio Certified Prevention Specialist (OCPSA, OCPS, OCPC), and Child Development Associate (CDA).</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/early-childhood-education"
  },

  "bachelor-public-health": {
    content: `
        <div class="popup-body">
            <p>Bachelor of Public Health (BPH) is a 4-year program.</p>
            <h5>Focuses on:</h5>
            <p>Public health education, research, and policy advocacy.</p>
            <h5>Career Options:</h5>
            <p>Graduates can work in behavioral health as addiction therapists, behavioral health specialists, health educators, or harm reduction workers.</p>
            <p>Offers roles in clinical care, research, policy, and management within public health.</p>
            <p>Provides diverse career opportunities across the behavioral health and public health fields.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/public-community-health"
  },

  "bachelor-art-therapy": {
    content: `
        <div class="popup-body">
            <p>Bachelor of Arts (BA) in Art Therapy is a 4-year undergraduate program.</p>
            <p>Combines art education with psychology and counseling principles.</p>
            <p>Prepares students for graduate studies in art therapy.</p>
            <p>Provides a foundation for careers in mental health, wellness, and the arts.</p>
            <p><strong>Note:</strong> In Ohio, Licensed Art Therapists must hold a Master Degree.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/allied-health"
  },

  "bachelor-education": {
    content: `
        <div class="popup-body">
            <p>Bachelor of Education is a 4-year degree requiring about 120 credit hours.</p>
            <h5>Prepares students for:</h5>
            <p>Teacher licensure in areas like Primary (P-5), Early Childhood, Middle Childhood, and Adolescent-Young Adult Education.</p>
            <p>Leads to Ohio teaching licensure for public and private K-12 schools.</p>
            <p>Graduates are eligible to apply for a teaching license through the Ohio Department of Education upon program completion.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/early-childhood-education"
  },

  "bachelor-social-work-bsw": {
    content: `
        <div class="popup-body">
            <p>Bachelor of Social Work (BSW) is a 4-year degree.</p>
            <h5>Areas of Study:</h5>
            <p>Human behavior, social welfare policy, cultural diversity, psychology, research, ethics, and social work practice.</p>
            <p>Includes a two-semester internship for hands-on experience in social service agencies.</p>
            <h5>Career Prep:</h5>
            <p>Prepares graduates for entry-level social work roles, including supervised therapy.</p>
            <p>Graduates are eligible for licensure as Licensed Social Workers.</p>
            <h5>Advanced Option:</h5>
            <p>BSW holders can pursue an accelerated Master in Social Work within five years, completing it in one year.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/social-work-degrees"
  },

  "bachelor-science-nursing-bsn": {
    content: `
        <div class="popup-body">
            <p>Bachelor of Science in Nursing (BSN) is a 4-year degree preparing graduates to become Registered Nurses (RNs).</p>
            <h5>Areas of Study:</h5>
            <p>Nursing, anatomy, physiology, microbiology, chemistry, nutrition, and psychology.</p>
            <p>Programs feature clinical and simulation experiences.</p>
            <p>Graduates of Associate Degree in Nursing (ADN) programs may transfer credits toward a BSN.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/nursing-degrees-certifications"
  },

  "bsn-psychiatric-mental-health": {
    content: `
        <div class="popup-body">
            <p>This degree combines the Bachelor of Science in Nursing (BSN) with the Psychiatric-Mental Health Nursing Certification.</p>
            <p>Psychiatric-Mental Health Nursing Certification recognizes RNs with specialized mental health knowledge.</p>
            <h5>Eligibility:</h5>
            <p>Requires an active RN license plus clinical practice and continuing education.</p>
            <h5>Certified nurses duties:</h5>
            <p>Assess mental health, develop care plans, provide counseling, education, and may prescribe medication.</p>
            <h5>Work settings:</h5>
            <p>Hospitals, clinics, community centers, and schools.</p>
            <p>Provide compassionate, evidence-based care for mental health and substance use challenges across all ages.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/nursing-degrees-certifications"
  },

  "bachelor-music-therapy": {
    content: `
        <div class="popup-body">
            <p>Bachelor of Arts in Music Therapy is a 4-year degree.</p>
            <p>Combines coursework with clinical training for careers as Music Therapists.</p>
            <p>Ideal for those with a musical background interested in behavioral health.</p>
            <p><strong>Licensure:</strong> To become a Licensed Professional Music Therapist in Ohio, applicants must hold current Music Therapy Board Certification (MT-BC) from the Certification Board for Music Therapists (CBMT).</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/allied-health"
  },

  "bachelor-any-field": {
    content: `
        <div class="popup-body">
            <p>A bachelor degree is an undergraduate degree.</p>
            <p>Typically completed in four years at a college or university.</p>
            <p>Common entry-level qualification for many professions.</p>
            <p>Often required for admission to graduate programs.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/other-degrees"
  },

  "bachelor-psychology": {
    content: `
        <div class="popup-body">
            <p>Psychology bachelor degree (BA or BS) is a 4-year program.</p>
            <p><strong>BA</strong> focuses on liberal arts; <strong>BS</strong> emphasizes math and science.</p>
            <p>Does not directly lead to therapist licensure; clinical psychologists need doctoral degrees.</p>
            <h5>Advanced Credentials Available:</h5>
            <p>Graduates can pursue advanced credentials with post-grad training in:</p>
            <p>• Chemical Dependency Treatment (LCDC-III)</p>
            <p>• Infant Mental Health (OIFP-II)</p>
            <p>• Prevention (OCPS)</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/psychology-degrees"
  },

  "master-science-nursing-msn": {
    content: `
        <div class="popup-body">
            <p>Master of Nursing Science (MSN) is a 2- or 3-year graduate degree.</p>
            <p>Often requires RN licensure as a prerequisite.</p>
            <p>Prepares nurses for advanced practice, specialization, and leadership roles.</p>
            <p>Leads to expanded career options and higher salaries.</p>
            <h5>Concentrations may include:</h5>
            <p>Psychiatric Mental Health Nurse Practitioner (PMHNP) and Certified Registered Nurse Anesthetist (CRNA).</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/nursing-degrees-certifications"
  },

  "msn-psychiatric-mental-health": {
    content: `
        <div class="popup-body">
            <p>This degree combines the Master of Science in Nursing (MSN) with the Psychiatric-Mental Health Nursing Certification.</p>
            <p>Psychiatric-Mental Health Nursing Certification recognizes RNs with specialized mental health knowledge.</p>
            <h5>Eligibility:</h5>
            <p>Requires an active RN license plus clinical practice and continuing education.</p>
            <h5>Certified nurses duties:</h5>
            <p>Assess mental health, develop care plans, provide counseling, education, and may prescribe medication.</p>
            <h5>Work settings:</h5>
            <p>Hospitals, clinics, community centers, and schools.</p>
            <p>Provide compassionate, evidence-based care for mental health and substance use challenges across all ages.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/nursing-degrees-certifications"
  },

  "master-social-work-msw": {
    content: `
        <div class="popup-body">
            <p>Master of Social Work (MSW) typically takes 2 years; 1 year with Advanced Standing for BSW holders.</p>
            <p>Offers specializations in clinical practice, community organization, and policy advocacy.</p>
            <p>Flexible study options available, including online and part-time.</p>
            <h5>Licensure:</h5>
            <p>MSW graduates from CSWE-accredited programs can apply for Licensed Social Worker (LSW) licensure.</p>
            <p>LSW requires passing the ASWB exam and background checks.</p>
            <p>Licensed Independent Social Worker (LISW) requires 3,000 supervised hours over 24 months.</p>
            <p>Licensure overseen by Ohio Counselor, Social Work and Marriage and Family Therapist Board.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/social-work-degrees"
  },

  "master-behavioral-science": {
    content: `
        <div class="popup-body">
    <p>Master Degree in Behavioral Science fields typically takes 2 years.</p>
    <h5>Fields include:</h5>
    <p>Human services, Addiction/substance use disorders, Social work, Psychology, Sociology, Criminal Justice, Clinical, Counseling, School Counseling, Human development and family sciences, Public Health, and Nursing.</p>
    <h5>Available Credentials:</h5>
    <p>Graduates qualify for credentials like Licensed Chemical Dependency Counselor III (LCDC-III) and Certified Prevention Specialist (OCPSA, OCPS, OCPC).</p>
    <p>Master of Social Work (MSW) graduates are eligible for Licensed Social Worker (LSW) and Licensed Independent Social Worker (LISW) licensure.</p>
</div>

    `,
    link: "https://www.buildbehavioralhealth.org/behavioral-health"
  },

  "master-counseling": {
    content: `
        <div class="popup-body">
            <p>Master in Counseling (MA or MS) takes 1.5 to 2 years.</p>
            <p><strong>MS</strong> focuses on research and evidence-based practices; <strong>MA</strong> emphasizes theory and therapeutic approaches.</p>
            <p>Prepares graduates to become Licensed Professional Counselors (LPC).</p>
            <p>With supervision and experience, can advance to Licensed Professional Clinical Counselor (LPCC).</p>
            <h5>Requirements:</h5>
            <p>Licensure requires a CACREP-accredited program or an accredited counseling degree.</p>
            <p>Licensure granted by the Ohio Counselor, Social Work, and Marriage and Family Therapist Board.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/counseling-degrees"
  },

  "master-addiction-counseling": {
    content: `
        <div class="popup-body">
            <p>Duration: Typically 2–3 years.</p>
            <h5>Areas of Study:</h5>
            <p>Advanced counseling theories, addiction treatment, co-occurring disorders, clinical assessment, ethics, and research.</p>
            <h5>Clinical Training:</h5>
            <p>Includes supervised practicum and internship hours.</p>
            <h5>Career Prep:</h5>
            <p>Prepares graduates for clinical roles in rehab centers, hospitals, and private practice.</p>
            <h5>Licensure in Ohio:</h5>
            <p>Meets requirements for Licensed Independent Chemical Dependency Counselor (LICDC) through the Ohio Chemical Dependency Professionals Board.</p>
            <h5>Graduate Outcome:</h5>
            <p>Eligible to diagnose and treat substance use disorders independently.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/addiction-counseling"
  },

  "master-occupational-therapy": {
    content: `
        <div class="popup-body">
            <p>Master of Science in Occupational Therapy (MSOT) takes 2 to 4 years.</p>
            <h5>Coursework includes:</h5>
            <p>Anatomy, neurobiology, kinesiology, psychology, sociology, statistics, and medical terminology.</p>
            <p>Graduates become Occupational Therapists (OTR).</p>
            <p>Licensure in Ohio is through the Ohio Occupational Therapy, Physical Therapy, and Athletic Trainers Board.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/allied-health"
  },

  "master-art-therapy": {
    content: `
        <div class="popup-body">
            <p>2-year graduate degree: MA or MS in Art Therapy.</p>
            <h5>Coursework may include:</h5>
            <p>Dance-movement therapy, drama therapy, family therapy, trauma, addiction, vocational development, and medical art therapy.</p>
            <p>Programs should be approved by the American Art Therapy Association (AATA) or accredited by CAAHEP.</p>
            <h5>Licensure:</h5>
            <p>Licensure in Ohio is through the Ohio Counselor, Social Work, and Marriage and Family Therapist Board.</p>
            <p>Licensed Professional Art Therapists must hold Board Certified Art Therapist (ATR-BC) certification from the Art Therapy Credential Board (ATCB).</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/allied-health"
  },

  "master-physician-assistant-studies": {
    content: `
        <div class="popup-body">
            <p>2-year graduate degree (36–45 credits).</p>
            <p>Prepares students to become licensed Physician Assistants (PAs).</p>
            <p>PAs work with physicians to provide patient care.</p>
            <h5>Licensure:</h5>
            <p>Licensure is through the Ohio Board of Medicine.</p>
            <p>Applicants must pass the Physician Assistant National Certifying Exam (PANCE).</p>
            <p>Certification maintained via the National Commission on Certification of Physician Assistants (NCCPA).</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/medical"
  },

  "master-marriage-family-therapy": {
    content: `
        <div class="popup-body">
            <p>2- or 3-year graduate degree.</p>
            <p><strong>Master of Arts (MA) in Marriage and Family Therapy (MFT)</strong> emphasizes theory, personal/professional growth, clinical work, and supervision.</p>
            <p><strong>Master of Science (MS) in Marriage & family Therapy (MFT)</strong> emphasizes research, specializations, coursework, and licensure training.</p>
            <p>Prepares graduates to counsel individuals, couples, and families.</p>
            <p>Graduates are eligible for MFT licensure through the Ohio Counselor, Social Worker, and Marriage and Family Therapist Board.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/counseling-degrees"
  },

  "master-educational-measurement": {
    content: `
        <div class="popup-body">
            <h5>2-year graduate degrees:</h5>
            <p><strong>MA in Educational Measurement:</strong> Research methods, educational measurement, program evaluation.</p>
            <p><strong>MS in Quantitative Psychology:</strong> Advanced statistics, data analysis for social sciences, preparation for doctoral studies.</p>
            <p><strong>MS in Statistics:</strong> Terminal degree or pathway to PhD.</p>
            <p>Prepares graduates for careers in education, industry, research, and further academic study.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/psychology-degrees"
  },

  "master-education": {
    content: `
        <div class="popup-body">
            <p>2-year graduate degrees.</p>
            <p><strong>Master of Education (MEd):</strong> Focuses on educational leadership and policy development.</p>
            <p><strong>Master of Arts in Teaching (MAT):</strong> Prepares for teaching in a specific field, emphasizing teaching and classroom management.</p>
            <p><strong>Master of Science in Teaching (MST):</strong> Prepares for teaching in a specific field, emphasizing teaching methods.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/early-childhood-education"
  },

  "master-public-health": {
    content: `
        <div class="popup-body">
            <p>Typically a 2-year graduate degree (full-time) with part-time and accelerated options.</p>
            <h5>Areas of Study:</h5>
            <p>Population health, disease prevention, health promotion, and health equity.</p>
            <p>Prepares graduates for public health careers and related credentials.</p>
            <p>Graduates may pursue Certified in Public Health (CPH) or other specialty certifications.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/public-community-health"
  },

  "doctor-medicine": {
    content: `
        <div class="popup-body">
            <h5>Medical Doctor (MD) degree requires:</h5>
            <p>4 years of medical school plus 3–7 years of residency.</p>
            <p>Passing the United States Medical Licensing Examination (USMLE).</p>
            <p>Meeting eligibility and application requirements for the Ohio State Medical Board.</p>
            <p>MDs are licensed physicians authorized to prescribe medications within legal limits.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/medical"
  },

  "doctor-osteopathic-medicine": {
    content: `
        <div class="popup-body">
            <h5>Doctor of Osteopathic Medicine (DO) requires:</h5>
            <p>4 years of osteopathic medical school (includes 200 hours of manipulative medicine training).</p>
            <p>3–7 years of residency.</p>
            <p>Passing the COMLEX-USA exam by the National Board of Osteopathic Medical Examiners.</p>
            <p>DOs are licensed physicians in Ohio, regulated by the Ohio Board of Medicine.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/medical"
  },

  "doctor-pharmacy": {
    content: `
        <div class="popup-body">
            <p>Doctor of Pharmacy (PharmD) is a 6-year graduate program.</p>
            <p><strong>First 2 years:</strong> Pre Professional Phase (liberal arts, communications, basic sciences).</p>
            <p><strong>Next 4 years:</strong> Professional Phase (pharmaceutical science, pharmacy practice).</p>
            <h5>Licensure:</h5>
            <p>Graduates are eligible to take the NAPLEX exam.</p>
            <p>Licensure in Ohio requires passing both NAPLEX and MPJE exams.</p>
            <p>Pharmacists are licensed by the Ohio Board of Pharmacy.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/pharmacy-degrees-certifications"
  },

  "phd-psychology": {
    content: `
        <div class="popup-body">
            <h5>Ph.D. in Psychology (5–7 years):</h5>
            <p>Research-focused; emphasizes critical thinking and scholarship.</p>
            <p>Requires dissertation, research, practicum, and internship.</p>
            <p>Specialized areas: neuropsychology, forensic psychology.</p>
            <p>Careers: clinical, forensic, I/O, academic psychology.</p>
            
            <h5>Psy.D. in Psychology (4–5 years):</h5>
            <p>Practice-focused; emphasizes clinical training and service delivery.</p>
            <p>Includes coursework, practicum, APA-accredited internship.</p>
            <p>Topics: research design, human development, specialty electives</p>
            <p>Careers: mental health, medical, schools, private practice.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/psychology-degrees"
  },

  "phd-psychiatry": {
    content: `
        <div class="popup-body">
            <h5>Ph.D. in Psychiatry (5–7 years):</h5>
            <p>Optional for MD/DO Psychiatrists.</p>
            <p>Research and coursework combined with psychiatry residency.</p>
            <p>Focus on clinical practice and research methodologies</p>
            <p>Ends with a dissertation on a psychiatric topic.</p>
            
            <h5>Psy.D. in Psychiatry (4–5 years):</h5>
            <p>Optional for MD/DO Psychiatrists.</p>
            <p>Emphasizes applied clinical skills over research.</p>
            <p>Includes coursework, supervised practicums, and clinical internship.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/psychiatry-doctorate"
  },

  "phd-educational-measurement": {
    content: `
        <div class="popup-body">
            <h5>Ph.D. in Educational Measurement</h5>
            <p>Duration: 3 to 6 years.</p>
            <p>Focus: Research methodology, measurement, and evaluation.</p>
            <p>Coursework: Test theory, instrument development, statistical analysis.</p>
            <p>Career: Experts in educational research and assessment.</p>

            <h5>Ph.D. in Quantitative Psychology</h5>
            <p>Duration: 5 to 7 years.</p>
            <p>Focus: Research and methods to measure human behavior.</p>
            <p>Combines psychology and mathematics.</p>
            <p>Coursework: Statistics, math, psychometrics.</p>

            <h5>Ph.D. in Statistics</h5>
            <p>Duration: 3 to 4 years.</p>
            <p>Focus: Theory and application of statistics.</p>
            <p>Career options: Academia, government, financial services, bio-pharmaceutical industries.</p>

            <h5>Ph.D. in Educational Statistics and Measurement (combined degree)</h5>
            <p>Duration: 4 to 5 years.</p>
            <p>Combines educational measurement and statistics.</p>
            <p>Prepares graduates to research, develop, and apply new methodologies in education and statistics.</p>
        </div>
    `,
    link: "https://www.buildbehavioralhealth.org/psychology-degrees"
  }








  // Add more entries with content and links
};

