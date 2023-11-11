import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrivacyPolicy = ({ onClose }) => {
  return (
    <>
      <div className="terms-container fixed inset-0 z-50 top-[4rem] flex items-center justify-center bg-light-brown">
        <div className="absolute inset-0 opacity-75">
          <button
            onClick={() => onClose()}
            className="relative top-0 left-[10rem]   md:left-[24rem] p-2 bg-red hover:bg-gold text-white rounded-t-lg"
          >
            <FontAwesomeIcon icon={faTimes} times-icon />
          </button>

          <span className="terms-conditions-heading flex flex-col justify-center items-center">
              <p className="text-base  font-bold font-sans text-left px-4   md:text-xl md:text-center text-red">
                Tongston Group Privacy Notice, Cookie Policy & Terms and Conditions. 

              </p>
            <div className="terms-content bg-white h-[30rem]  w-full overflow-y-auto py-7 px-8">
           

              <p className="text-dark text-xl px-4 font-sans text-justify font-normal md:px-8">
                We at Tongston Group, including our relevant affiliate entities,
                respect your concerns about privacy.
                <br />
                <br />
                For the purposes of this Notice, Tongston Group comprises of the
                Holdings Company, Tongston Entrepreneurship Holdings (“Tongston
                Holdings”) and the 4 subsidiary companies: Tongston
                Entrepreneurship College (“Tongston College”), Tongston
                Entrepreneurial Teachers Hub trading as Tongston
                Entrepreneurship Institute (“Tongston Institute”), Tongston
                Entrepreneurship Media (“Tongston Media”) and Tongston
                Entrepreneurship Ventures (“Tongston Ventures”).
                <br />
                <br />
                This Privacy Notice describes how we process the Personal Data:
                <br />
                <br />
                <div className="relative left-[1rem]  md:left-[5rem] w-[50%]">
                  <span className="text-base font-normal  text-black ">
                    <ul className="list-disc">
                      <li>
                        <p className="tracking-widest flex gap-6">
                          {" "}
                          That we collect on{" "}
                        </p>
                        <a
                          href="www.tongston.com"
                          className="text-blue-800"
                          target="_blank"
                        >
                          {" "}
                          www.tongston.com
                        </a>{" "}
                        <a
                          href="www.t-ventures.tongston.com"
                          className="text-blue-800"
                          target="_blank"
                        >
                          {" "}
                          www.t-ventures.tongston.com
                        </a>
                        <a
                          href="www.t-media.tongston.com"
                          className="text-blue-800"
                          target="_blank"
                        >
                          {" "}
                          www.t-media.tongston.com
                        </a>{" "}
                        <a
                          href="www.t-college.tongston.com"
                          className="text-blue-800"
                          target="_blank"
                        >
                          {" "}
                          www.t-college.tongston.com
                        </a>
                        <a
                          href="www.t-institute.tongston.com"
                          className="text-blue-800"
                          target="_blank"
                        >
                          {" "}
                          www.t-institute.tongston.com
                        </a>{" "}
                        that are accessible through{" "}
                        <a
                          href="www.tongston.com"
                          className="text-blue-800"
                          target="_blank"
                        >
                          {" "}
                          www.tongston.com
                        </a>
                        other websites or applications that may link to this
                        Privacy Notice (the “Sites“);
                      </li>
                      <br />
                      <li>
                        {" "}
                        • where you visit our premises, centres, or affiliate
                        centres;
                      </li>
                      <li>
                        {" "}
                        where you submit any documentation to access our
                        products and services;
                      </li>
                      <li>
                        {" "}
                        where you share information to subscribe to our
                        newsletter;
                      </li>
                      <li>
                        {" "}
                        where you share information in attending our events;
                      </li>
                      <li>
                        {" "}
                        where you are a contact at one of our suppliers or other
                        business partners; and through other data collection
                        points or notices that reference this Privacy Notice.
                      </li>
                    </ul>
                  </span>
                </div>
                <br />
                <br />
                <div>
                  We provide information on the types of Personal Data we
                  collect, how we use the information, with whom we may share it
                  and the choices available to you regarding our use of the
                  information. We also describe the measures we take to protect
                  the security of the information and how you can contact us
                  about our privacy practices.
                  <br />
                  <br />
                  “Personal Data” is any information that relates to, describes,
                  identifies or can be used, directly or indirectly, to identify
                  an individual, such as name, address, date of birth, personal
                  identification numbers, sensitive personal information, and
                  economic information).
                  <br />
                  <br />
                  Key Terms
                  <br />
                  <br />
                  In this Notice, these terms have the following meanings:
                  <br />
                  <br />
                  "Affiliate" means an entity that directly or indirectly
                  Controls, is Controlled by or is under common Control with an
                  entity.
                  <br />
                  <br />
                  <span className="relative left-3"> "Contact" </span>is a
                  person a Member may contact through our Service. In other
                  words, a Contact is anyone on a Member's Distribution List
                  about whom a Member has given us information or is anyone who
                  has otherwise interacted with a Member via the Service. For
                  example, if you are a Member, a Client, a subscriber to your
                  email marketing campaigns or a shopper to your Website or
                  Landing Page would be considered a Contact.
                  <br />
                  <br />
                  "Control" means an ownership, voting or similar interest
                  representing fifty percent (50%) or more of the total
                  interests then outstanding of the entity in question. The term
                  "Controlled" shall be construed accordingly.
                  <br />
                  <br />
                  "Distribution List" is a list of Contacts a Member may upload
                  or manage on our platform and all associated information
                  related to those Contacts (for example, email addresses).
                  <br />
                  <br />
                  "Member" means any person or entity that is registered with us
                  to use the Service.
                  <br />
                  <br />
                  “Mobile App(s)” means any one or all of the Tongston
                  applications available for Members to use on their mobile
                  devices.
                  <br />
                  <br />
                  "Personal Information" means any information that identifies
                  or can be used to identify an individual directly or
                  indirectly. Examples of Personal Information include, but are
                  not limited to, first and last name, date of birth, email
                  address, gender, occupation, or other demographic information.
                  <br />
                  <br />
                  “Service” is any access to any product or service.
                  <br />
                  <br />
                  "Visitor" means, depending on the context, any person who
                  visits any of our Mailchimp Sites, offices, or otherwise
                  engages with us at our events or in connection with our
                  marketing or recruitment activities.
                  <br />
                  <br />
                  "you" and "your" means, depending on the context, either a
                  Member, a Contact, or a Visitor. Click on one of the links
                  below to jump to the listed section:
                  <br />
                  <br />
                  <b> Information We Obtain</b>
                  <br />
                  <br />
                  Information that you give us
                  <br />
                  <br />
                  The types of information we collect concerning individuals
                  includes:
                  <br />
                  <br />
                </div>
                <div className="relative left-[1rem]   md:left-[5rem] w-[90%] ">
                  <section className=" text-black font-normal text-base">
                    <ul className="list-decimal">
                    <li>
                      {" "}
                      business and personal contact information (such as name,
                      postal and email addresses, and telephone number);
                    </li>
                    <br />
                    <li>
                      {" "}
                      other information you provide to us (such as information
                      provided by registering for email alerts, filling in
                      forms, and online registration details);
                    </li>
                    <br />
                    <li>
                      {" "}
                      information we need in order to identify you and complete
                      necessary security and safety checks, where you visit one
                      of our buildings (such as a form of ID, and your image for
                      closed-circuit television (CCTV) purposes);
                    </li>
                    <br />
                    <li>
                      {" "}
                      information about the device and applications you use to
                      access the Service, such as your IP address, your
                      operating system, your browser ID, viewfinder size, and
                      other information about your system and connection. If you
                      are using our Mobile App that we create, we may also
                      collect information about the cellular network associated
                      with your mobile device, your mobile device’s operating
                      system or platform, the type of mobile device you use,
                      your mobile device’s name and unique device ID, and
                      information about the features of our Mobile App that you
                      accessed;
                    </li>
                    <br />
                    <li>
                      {" "}
                      Information on the log files from web servers that record
                      data each time a device accesses those servers and the
                      nature of each access, including originating IP addresses
                      and your activity in the Service (such as the date/time
                      stamps associated with your usage, pages and files viewed,
                      searches and other actions you take (for example, which
                      features you used)), device event information (such as
                      system activity, error reports (sometimes called ‘crash
                      dumps’)), and hardware settings. We may also access
                      metadata and other information associated with files that
                      you upload into our Service;
                    </li>
                    <br />
                    <li>
                      usage data about you whenever you interact with our
                      Service, which may include the dates and times you access
                      the Service and your browsing activities (such as what
                      portions of the Service you used, session duration, links
                      clicked, non-sensitive text entered, and mouse movements).
                      We also collect information regarding the performance of
                      the Service, including metrics related to the
                      deliverability of emails and other communications you send
                      through the Service. If you are using any Mobile App to be
                      created, we may collect information about how often you
                      use the Mobile App and other performance data. This
                      information allows us to improve the content and operation
                      of the Service, and facilitate research and analysis of
                      the Service.
                      </li>
                      </ul>
                  </section>
                </div>
                <br />
                <br />
                In connection with a job inquiry or application on our careers
                page or on any third party google docs forms, you may provide:
                login credentials, information regarding your work authorization
                status, education history, current or past job/employment
                history and professional designations, answers to competency
                based questions, location, social media handles, state of
                origin, nationality, CV, references, performance evaluations;
                and other information about your background, competencies and
                qualifications.
                <br />
                <br />
                In addition, where legally permissible, you may provide
                information regarding your gender, age, marital status,
                religion, national origin, citizenship status, race/ethnicity,
                and your and disability status. Blackstone will not consider
                either this information or your choice to decline to provide it
                in evaluating your qualifications for employment with us. This
                information will be used only for Equal Employment Opportunity
                tracking and other legal and compliance purposes as per our
                staff handbook.
                <br />
                <br />
                In some cases, you will have previously provided your personal
                information to Tongston (if, for example, you are a former
                employee, intern, consultant or otherwise). If you choose to
                register or login to a Tongston web site using a third party
                single sign-in service that authenticates your identity and
                connects your social media login information (e.g. LinkedIn,
                Google, or Twitter) with Tongston, we will collect any
                information or content needed for the registration or log-in
                that you have permitted the social media provider to share with
                us, such as your name and email address.
                <br />
                <br />
                In some cases, the personal data that we collect will also
                include special categories of data, such as diversity related
                information (including data about racial and ethnic origin,
                political opinions, religious beliefs and other beliefs of a
                similar nature, trade union membership and data about sexual
                life and sexual orientation), or health data and data about
                alleged or proven criminal offenses, in each case, where
                permitted by law.
                <br />
                <br />
                Depending on the nature of our relationship with you, in the
                past, we may have collected Personal Data concerning you in the
                following categories:
                <br />
                <br />
                <div className="relative left-[1rem]  md:left-[5rem] w-[90%]">
                  <ul className="list-disc">
                    <li>
                      {" "}
                      Identifiers (e.g., real name, postal address, email
                      address, government ID, financial information);
                    </li>
                    <br />
                    <li>
                      Sensitive/protected characteristic information (e.g., age,
                      race, citizenship, gender);
                    </li>
                    <br />
                    <li>
                      {" "}
                      Commercial information (e.g., products or services
                      purchased, obtained, or considered, personal information
                      disclosed in a sale or acquisition process);
                    </li>
                    <br />
                    <li>
                      Internet or other network activity (e.g. browsing or
                      search history, information regarding interaction with an
                      internet website, application, or advertisement);
                    </li>
                    <br />
                    <li> Geolocation data (e.g. physical location);</li>
                    <br />
                    <li>
                      {" "}
                      Professional or employment-related information (e.g. job
                      history, performance evaluations);
                    </li>
                    <br />
                    <li>
                      {" "}
                      Non-public education information (e.g. education records);
                      and
                    </li>
                    <br />
                    <li>
                      Inferences drawn from other personal information (e.g.
                      profiles reflecting preferences and trends).
                    </li>
                  </ul>
                </div>
                <br />
                <br />
                Other information:
                <br />
                <br />
                In connection with electronic interactions you have with us or
                our service providers (including by email, phone or other forms
                of electronic communication), we may record and monitor details
                of those interactions, including their content, to the extent
                permitted or required by applicable law.
                <br />
                <br />
                In connection with information from other sources, from time to
                time, we may obtain information about you from third-party
                sources, such as public databases, social media platforms,
                third-party data providers, and our joint marketing partners.
                <br />
                <br />
                Examples of the information we receive from other sources
                include but not limited to demographic information (such as age
                and gender), device information (such as IP addresses), location
                (such as city and state), and online behavioral data (such as
                information about your use of social media websites, page view
                information and search results and links). We use this
                information, alone or in combination with other Personal
                Information we collect, to enhance our ability to provide
                relevant marketing and content to you and to develop and provide
                you with more relevant products, features, and service.
                <br />
                <br />
                We may also collect some information from other sources,
                including but not limited to:
                <br />
                <br />
                <div className="relative   left-[1rem] md:left-[5rem] w-[80%]">
                  <ul className="list-disc">
                    <li>
                      {" "}
                      if we have a business relationship with the organization
                      that you represent, your colleagues or other business
                      contacts may give us information about you such as your
                      contact details or details of your role in the
                      relationship; and
                    </li>
                    <br />
                    <li>
                      {" "}
                      information from third party data providers or publicly
                      available sources for anti-money laundering, background
                      checking and similar purposes, and to protect our business
                      and comply with our legal and regulatory obligations.
                    </li>
                  </ul>
                </div>
                If you provide information to us about another person, you
                should ensure that you comply with any legal obligations that
                may apply to your provision of the information to us.
                <br />
                <br />
                Information We Obtain By Automated Means
                <br />
                <br />
                When you visit our Sites or open our emails, we may collect
                certain information by automated means (such as by cookies, web
                server logs, web beacons and JavaScript). The information we
                collect in this manner includes your IP address, network
                location, browser characteristics, device characteristics,
                operating system, referring URLs, information on actions taken
                on our Sites, and dates and times of website visits. Cookies are
                files that websites send to your computer or other
                Internet-connected device to uniquely identify your browser or
                to store information or settings on your device. Cookies are
                small text files that are placed on your computer by websites
                that you visit. They are widely used in order to make websites
                work, or work more efficiently, as well as to provide
                information to the owners of the site. Most web browsers allow
                some control of most cookies through the browser settings. To
                find out more about cookies, including how to see what cookies
                have been set and how to manage and delete them, visit
                <a
                  href="www.allaboutcookies.org"
                  className="text-blue-800"
                  target="_blank"
                >
                  {" "}
                  www.allaboutcookies.org
                </a>{" "}
                . Please see our cookie policy information about what cookies
                are and how we use cookies and similar technology.
                <br />
                <br />
                We also may use these and similar technology in emails we send
                you to collect certain information, such as whether you opened
                or clicked on links in our email. Our Sites may use cookies
                (such as HTTP, HTML5 and Flash cookies) as well as other types
                of local storage (such as browser-based or plugin-based local
                storage). Some of these cookies may be placed by third parties
                such as our service providers. Your browser may tell you how to
                be notified when you receive certain types of cookies and how to
                restrict or disable certain cookies. You also may be able to
                delete your Flash cookies or adjust your Flash cookie settings
                by visiting the Adobe Flash Website Storage Settings Panel and
                Global Storage Settings Panel. Please note, however, that
                without cookies you may not be able to use all of the features
                of our Sites or other websites and online services.
                <br />
                <br />
                In conjunction with gathering information through cookies, our
                web servers may log information such as your device type,
                operating system type, browser type, domain, and other system
                settings, as well as the language your system uses and the
                country and time zone in which your device is located. We also
                may record information such as the address of the web page that
                referred you to our Sites and the IP address of the device you
                used to connect to our Sites. We may log information about your
                interaction with the Site, such as which pages you visit. To
                control which web servers collect information by automated
                means, we may place tags on our web pages called “web beacons”,
                which are small files that link web pages to particular web
                servers and their cookies. We also may send instructions to your
                device using JavaScript or other computer languages to gather
                the sorts of information described above and other details about
                your interactions with the Sites.
                <br />
                <br />
                We may use third-party web analytics services on our Sites, such
                as those of Google Analytics. These service providers help us
                analyze how visitors use the Sites. The information obtained for
                this purpose (including your IP address and other information
                collected by automated means) may be disclosed to or collected
                directly by these service providers. To learn about opting out
                of Google Analytics, please click here.
                <br />
                <br />
                The providers of third-party plugins and widgets on our Sites,
                such as embedded videos and social media sharing tools, may use
                automated means to collect information regarding your use of the
                Sites and your interactions with the plugins and widgets. This
                information is subject to the privacy policies or notices of the
                providers of the plugins and widgets.
                <br />
                <br />
                <b> How We Use the Information We Obtain</b>
                <br />
                <br />
                Tongston generally collects the personal information necessary
                to fulfill your request and meet our internal requirements.
                Where additional optional information is sought, you will be
                notified of this at the point of collection.
                <br />
                <br />
                We may use, process, disclose or otherwise handle the
                information described in this Notice for the following purposes
                to:
                <div className="relative left-[1rem] md:left-[5rem] w-[60%]">
                  <ul className="list-disc">
                    <li>
                      {" "}
                      operate, evaluate, develop, promote, and improve our
                      business (including developing new products and services;
                      enhancing, improving and analyzing our products and
                      services; managing our communications; managing our
                      premises; and performing accounting, auditing and other
                      internal functions);
                    </li>
                    <br />
                    <li> create and manage your account;</li>
                    <br />
                    <li> manage your investments;</li>
                    <br />
                    <li>
                      {" "}
                      comply with and enforce applicable legal requirements,
                      relevant industry standards and our policies;
                    </li>
                    <br />
                    <li>
                      {" "}
                      protect against, identify and prevent fraud,
                      money-laundering, breach of confidence, cyber attack,
                      theft of proprietary materials, financial or business
                      crimes, and other unlawful activity;
                    </li>
                    <br />
                    <li>
                      {" "}
                      in some cases, in order to operate, administer and improve
                      the user’s experience of the Sites;
                    </li>
                    <br />
                    <li>
                      {" "}
                      provide our products and services to you, such as market
                      commentary and email alerts;
                    </li>
                    <br />
                    <li>
                      {" "}
                      send you (or produce) promotional materials, newsletters
                      and other communications, including in visual and audio
                      form (such as videos, podcasts and online seminars);
                    </li>
                    <br />
                    <li>
                      {" "}
                      communicate with you about, and administer your
                      participation in, special events, programs, promotions,
                      offers, surveys and market research;
                    </li>
                    <br />
                    <li> respond to your inquiries;</li>
                    <br />
                    <li>
                      {" "}
                      manage your employment application, assess your
                      qualifications and manage your employment with us;
                    </li>
                    <br />
                    <li> verify your information;</li>
                    <br />
                    <li>
                      {" "}
                      perform data analyses (including market and consumer
                      research, demographic analyses and anonymization and
                      aggregation of information);
                    </li>
                    <br />
                    <li>
                      {" "}
                      operate, schedule and facilitate online meetings, webinars
                      and (video) conferences (for example, using Zoom and other
                      online meeting platforms);
                    </li>
                    <br />
                    <li>
                      {" "}
                      record audio and video content (for example, of our
                      in-person or online events, training, and meetings where
                      permitted by, and collected in accordance with, applicable
                      data protection law);
                    </li>
                    <br />
                    <li>
                      {" "}
                      Perform a contract: this is when the processing of your
                      personal information is necessary in order to perform our
                      obligations under a contract;
                    </li>
                    <br />
                    <li>
                      {" "}
                      discharge a Legal obligation: this is when we are required
                      to process your personal information in order to comply
                      with a legal obligation, such as keeping records for tax
                      purposes or providing information to a public body or law
                      enforcement agency;
                    </li>
                    <br />
                    <li>
                      {" "}
                      or for Legitimate interests: we may process information
                      about you where it is in our legitimate interest in
                      running a lawful business to do so in order to further
                      that business, so long as it doesn’t outweigh your
                      interests; or
                    </li>
                    <br />
                    <li>
                      {" "}
                      do so with Your consent: in some cases, we will ask you
                      for specific permission to process some of your personal
                      information, and we will only process your personal
                      information in this way if you agree to us doing so.
                    </li>
                    <br />
                  </ul>
                </div>
                Examples of the ‘legitimate interests’ referred to above are but
                not limited to:
                <br />
                <br />
                <div className="relative left-[1rem] md:left-[5rem] w-[70%]">
                  <ul className="list-disc">
                    <li>
                      {" "}
                      To offer information and/or services to individuals who
                      visit our website or offer information about employment
                      opportunities.
                    </li>
                    <br />
                    <li>
                      To prevent fraud or criminal activity and to safeguard our
                      IT systems.
                    </li>
                    <br />
                    <li>
                      {" "}
                      To customize individuals’ online experience and improve
                      the performance usability and effectiveness of Tongston’s
                      online presence.
                    </li>
                    <br />
                    <li>
                      {" "}
                      To conduct, and to analyze, our marketing activities.
                    </li>
                    <br />
                    <li>
                      {" "}
                      To meet our corporate and social responsibility
                      obligations.
                    </li>
                    <br />
                  </ul>
                </div>
                In addition, we use information collected through cookies, web
                beacons, web server logs and other automated means for purposes
                such as (i) customizing our users’ visits to our Sites, (ii)
                delivering content tailored to our users’ interests and the
                manner in which our users browse our Sites, and (iii) managing
                our Sites and other aspects of our business.
                <br />
                <br />
                CCTV may operate in some of our buildings for security and
                safety purposes, in accordance with applicable data protection
                law. Where CCTV is not operated by us, the CCTV will be under
                the control of the relevant building landlord, manager or
                operator.
                <br />
                <br />
                We or the third party may also use the information in other ways
                for which we provide specific notice at the time of collection.
                <br />
                <br />
                We will only process your Personal Data as necessary so that we
                can pursue the purposes described above. Where we process your
                Personal Data for our legitimate interests as a business or
                those of a third party, we do so only where we have concluded
                that our processing does not prejudice you or your privacy in a
                way that would override our legitimate interest in pursuing
                those purposes.
                <br />
                <br />
                When we collect Personal Data from you, unless indicated
                otherwise, if we ask you for information, we need it for our
                business or compliance purposes. In limited circumstances, we
                are required to collect Personal Data to comply with a legal
                obligation and/or might ask you to provide information which is
                purely voluntary; in either case, this will be indicated to you.
                <br />
                <br />
                If you are a former employee, worker, contractor or member of
                Tongston, we will continue to process your Personal Data for a
                reasonable period following the end of your employment or
                engagement for our legitimate business, alumni database, due
                diligence and/or our legal compliance purposes and/or for the
                establishment or defense of a legal claim. Further, in some
                instances, we may process your data to perform our obligations
                under the contract between us (e.g. to pay you your final salary
                payment after your termination date). We only carry out such
                processing where we have concluded that our processing does not
                prejudice you or your privacy in a way that would override our
                legitimate interests in pursuing those purposes. Your data will
                be retained and deleted in accordance with our retention
                policies and procedures (as discussed further below and in our
                documentation policy).
                <br />
                <br />
                <b> Online Tracking and Interest-Based Advertising</b>
                <br />
                <br />
                We and third parties acting on our behalf (such as Facebook,
                Twitter and LinkedIn) may collect information about your online
                activities over time and across third-party websites to provide
                you with advertising about products and services tailored to
                your interests. Where required by applicable law, we will obtain
                your consent for the processing of your Personal Data for direct
                marketing purposes. If you do receive direct marketing
                communications from us (for example, by post, email, fax or
                telephone), you may opt-out by clicking the link in the relevant
                communication, completing the forms provided to you (where
                relevant).
                <br />
                <br />
                You may see our ads on other websites or mobile apps because we
                participate in advertising networks. Ad networks allow us to
                target our messaging to users by considering demographic data,
                users’ inferred interests and browsing context. These networks
                track users’ online activities over time by collecting
                information through automated means (such as by cookies, web
                server logs, web beacons and other similar technologies). The
                networks use this information to show ads that may be tailored
                to individuals’ interests, to track users’ browsers or devices
                across multiple websites or apps, and to build a profile of
                users’ online browsing activities. The information our ad
                networks may collect includes data about users’ visits to
                websites and apps that participate in the relevant ad networks,
                such as the pages or ads viewed and the actions taken on the
                websites or apps. This data collection takes place both on the
                Sites and on third-party websites and apps that participate in
                the ad networks. This process also helps us track the
                effectiveness of our marketing efforts
                <br />
                <br />
                The Sites are not designed to respond to “do not track” signals
                received from browsers. To learn how to opt out of ad network
                interest-based advertising, please visit
                <a
                  href=" www.aboutads.info/choices"
                  className="text-blue-800"
                  target="_blank"
                >
                  {" "}
                  www.aboutads.info/choices,
                </a>{" "}
                <a
                  href=" http://www.networkadvertising.org/choices/ "
                  className="text-blue-800"
                  target="_blank"
                >
                  {" "}
                  http://www.networkadvertising.org/choices/,{" "}
                </a>{" "}
                or
                <a
                  href=" http://www.youronlinechoices.eu/"
                  className="text-blue-800"
                  target="_blank"
                >
                  {" "}
                  http://www.youronlinechoices.eu/
                </a>
                <br />
                <br />
                <b>Information We Disclose to Others</b>
                <br />
                <br />
                We do not disclose Personal Data we obtain about you through the
                Sites or other channels covered by this Privacy Notice, except
                as described in this Privacy Notice. We may share your Personal
                Data with our affiliates, partners, clients and subsidiaries.
                Depending on the nature of our relationship with you, we also
                share Personal Data with service providers who perform services
                on our behalf (including cloud services), our financial and
                transaction counterparties, our professional advisors, and your
                agents and representatives. We do not authorize these persons to
                use or disclose the information except as necessary for the
                purposes for which it is provided or to comply with the relevant
                requirements.
                <br />
                <br />
                We also may disclose information about you (i) if we are
                required to do so by law or legal process, (ii) to law
                enforcement authorities, regulators and/or other government
                entities and/or other competent authorities based on a lawful
                disclosure request, or (iii) when we believe disclosure is
                necessary or appropriate to prevent harm or financial loss, or
                in connection with an investigation of suspected or actual
                fraudulent or illegal activity. We reserve the right to transfer
                Personal Data we have about you or otherwise process in the
                event that we sell or transfer all or a portion of our business
                or assets (including in the event of a reorganization, spin-off,
                dissolution or liquidation).in addition, we may share
                anonymous/aggregated information with third parties, such as
                service providers, in order to facilitate our business
                operations. Information collected through third-party plug-ins
                and widgets on the Sites (such as information relating to your
                use of a social media sharing tool) is collected directly by the
                providers of the plug-ins and widgets. This information is
                subject to the privacy policies of the providers of the plug-ins
                and widgets, and Tongston is not responsible for those providers
                information practices.
                <br />
                <br />
                <b> Statistics</b>
                <br />
                <br />
                This website uses simple web statistical analytics to help the
                website analysis and monitor how users use the site. The
                information generated is solely used for the purpose of
                evaluating your use of the website, compiling reports on website
                activity for website operators and providing other services
                relating to website activity and internet usage. This
                information is not user specific and no user specific
                information is stored or passed onto any third parties as
                required by law. You may refuse the use of cookies by selecting
                the appropriate settings on your browser.
                <br />
                <br />
                However, please note that if you do this you may not be able to
                use the full functionality of this website. By using this
                website, you consent to the processing of any data about you
                that is collected in the manner and for the purposes set out
                above. Tongston is registered in Nigeria and in the process of
                being registered in Mauritius.
                <br />
                <br />
                <b> Intellectual property</b>
                <br />
                <br />
                All materials within the site or linked to the site are the
                intellectual property of Tongston except as otherwise stated.
                Such materials may not be copied save to the extent necessary to
                view them online. You may not print complete pages of the site
                as hard copies or as pdf versions or similar edited e - readable
                versions for your own personal or any other use.
                <br />
                <br />
                You may not copy, reproduce, distribute, publish, display,
                perform, modify, create derivative works, transmit, or in any
                way exploit any such content, nor may you distribute any part of
                this content over any network, including a local area network,
                sell or offer it for sale, or use such content to construct any
                kind of database. You may not alter or remove any copyright or
                other notice from copies of the content on the document or any
                other platforms. Copying or storing any content except as
                provided above is expressly prohibited without prior written
                permission of Tongston or the copyright holder identified in the
                individual content’s copyright notice. For permission to use the
                contents, please contact the legal, policy, regulatory and
                governance team{" "}
                <a
                  href="mailto:lprg@tongston.com"
                  className="text-blue-800"
                  target="_blank"
                >
                  {" "}
                  lprg@tongston.com,{" "}
                </a>
                with business development, stakeholder management and strategy
                team in copy,
                <a
                  href="mailto:bdsms@tongston.com"
                  className="text-blue-800"
                  target="_blank"
                >
                  {" "}
                  bdsms@tongston.com.{" "}
                </a>
                <br />
                <br />
                <b>Accuracy of information</b>
                <br />
                <br />
                Whilst Tongston uses reasonable endeavors to ensure that the
                contents of this site are accurate and up to date, it does not
                accept any liability for any information which may not be
                accurate. Tongston is reliant upon third parties for much of the
                information provided (see below) and reserves the right to
                change data, references and product specifications at any time.
                The contents of this site are for general information and public
                relations purposes only and do not purport to provide advice,
                make any offer or otherwise create or lead to the creation of
                any legally enforceable relationship between Tongston and you.
                No reliance should be placed on any statements made on the site,
                whether for investment purposes or otherwise. Tongston excludes
                to the fullest extent permitted by law all liability resulting
                from your access to the site including (without limitation) any
                loss (financial or otherwise) or damage resulting directly or
                indirectly from any such reliance. Tongston accepts no liability
                or responsibility whatsoever for any other websites which may be
                accessed through the site or other subsidiary or affiliate
                sites.
                <br />
                <br />
                Given that the Internet is a global environment, using the
                Internet to collect and process personal data necessarily
                involves the transmission of data on an international basis.
                Therefore, by browsing this website and communicating
                electronically with us, you acknowledge and agree to our
                processing of personal data in this way. In some cases, we may
                collect information about you that is not personally
                identifiable. This type of information includes the type of
                Internet browser you are using, the type of computer operating
                system you are using and the domain name of the website from
                which you linked to our site or advertisement. Cookies are small
                text files that are placed on your computer by websites that you
                visi
                <br />
                <br />
                <b>Data Transfers</b>
                <br />
                <br />
                We may transfer the Personal Data we collect about you to
                recipients in countries other than the country in which the
                information was originally collected. Where you are based in the
                UK, the EU, or another country which imposes data transfer
                restrictions outside of its territory. This includes transfers
                outside of the UK and the European Economic Area (“EEA“) or that
                geographical area, including to those countries in which our
                affiliates, group members, service providers and business
                partners operate. Those countries may not have the same data
                protection laws as the country in which you initially provided
                the information.
                <br />
                <br />
                <b>Retention and Deletion of your Information</b>
                <br />
                <br />
                We intend to keep your Personal Data accurate and up-to-date. We
                will delete the information that we hold about you when we no
                longer need it. We retain your Personal Data for as long as it
                is required by us for our legitimate purposes, to perform our
                contractual obligations, or where longer, such longer period as
                is required or permitted by law or regulatory obligations which
                apply to us.
                <br />
                <br />
                We will retain your information in line with our retention
                policies and, in any event, for no longer than is necessary
                given the purpose for which it was collected, after which it
                will be deleted or anonymized. Note that we may retain some
                limited information about you (even when we know that you have
                left the organization that you represent) so that we can
                maintain a continuous relationship with you if and when we are
                in contact with you again.
                <br />
                <br />
                <b>Your Rights and Choices</b>
                <br />
                <br />
                We offer you certain choices in connection with the Personal
                Data we collect from you. To update your preferences or submit a
                request, please contact us as indicated in the “How to Contact
                Us” section of this Privacy Notice. To the extent provided by
                the law of your jurisdiction or otherwise applicable to our
                processing of your information, you may request access to the
                Personal Data we maintain about you or request that we correct,
                amend, delete or block the information by contacting us as
                indicated below. Where provided by law, you may withdraw any
                consent you previously provided to us or object at any time on
                legitimate grounds to the processing of your Personal Data, and
                we will apply your preferences going forward. These rights,
                subject to certain limitations, may include:
                <br />
                <br />
                Rights of access, correction and deletion. You may have a right
                of access to the Personal Data that we hold about you, and to
                some related information, including the purpose for processing
                the Personal Data, the categories of recipients of that Personal
                Data to the extent it has been transferred internationally, and,
                where the Personal Data has not been collated directly from you,
                the source (the “category information“). You may also have the
                right to require any inaccurate Personal Data to be corrected or
                deleted. You must contact us accordingly on{" "}
                <a
                  href="mailto:it@tongston.com"
                  className="text-blue-800"
                  target="_blank"
                >
                  {" "}
                  it@tongston.com
                </a>
                copying
                <a
                  href="mailto:lprg@tongston.com"
                  className="text-blue-800"
                  target="_blank"
                >
                  {" "}
                  lprg@tongston.com
                </a>{" "}
                should you wish to do so explicitly stating this request.
                <br />
                <br />
                Right to object, and portability. You can object to our use of
                your Personal Data for direct marketing purposes at any time in
                writing providing details of such request and justification and
                you may have the right to object to our processing of some or
                all of your Personal Data in some other circumstances.
                <br />
                <br />
                We review and verify requests to protect your Personal Data, and
                will action data protection requests fairly and in accordance
                with applicable data protection laws and principles and our
                policies and procedures. If you wish to exercise any of these
                rights, please contact us as set out below.
                <br />
                <br />
                <b>How We Protect Personal Data</b>
                <br />
                <br />
                We maintain administrative, technical and physical safeguards
                designed to protect Personal Data we obtain through the Sites
                against accidental, unlawful or unauthorized destruction, loss,
                alteration, access, disclosure or use.
                <br />
                <br />
                <b>Links To Other Websites</b>
                <br />
                <br />
                Our Sites may provide links to other websites for your
                convenience and information. These websites may operate
                independently from us. Linked websites may have their own
                privacy notices or policies, which we strongly suggest you
                review. To the extent any linked websites are not owned or
                controlled by us, we are not responsible for their content, any
                use of the websites, or the privacy practices of the websites.
                <br />
                <br />
                <b> Updates To Our Privacy Notice</b>
                <br />
                <br />
                This Privacy Notice may be updated periodically and without
                prior notice to you to reflect changes in our Personal Data
                practices. We will post the updated version on the Sites and
                indicate at the top of the Notice when it was most recently
                updated. Please check for any updates regularly.
                <br />
                <br />
                Tongston reserves the right to from time to time request for
                information through surveys, monitoring and evaluation
                assessments, requests for testimonials and other such forms of
                information and data collection request. You are obliged to
                answer any such requests. You may however opt out of surveys
                should you wish to by contacting{" "}
                <a href="mailto:lprg@tongston.com" className="text-blue-800">
                  {" "}
                  lprg@tongston.com.{" "}
                </a>
                <br />
                <br />
                <b>How To Contact Us</b>
                <br />
                <br />
                If you have any questions or comments about this Privacy Notice,
                or if you would like us to update information we have about you
                or your preferences, please email us at{" "}
                <a href="mailto:lprg@tongston.com" className="text-blue-800">
                  lprg@tongston.com
                </a>{" "}
                with the subject Privacy Notice Queries with a letter signed and
                written by you detailing the requests. We will not be able to
                process the request unless it is sent in this exact format.
                <br />
                <br />
                Please also contact us via our head office in FCT Nigeria if you
                have a disability and require an alternative format of this
                Privacy Notice at{" "}
                <a href="mailto:info@tongston.com" className="text-blue-800">
                  {" "}
                  info@tongston.com{" "}
                </a>{" "}
                copying{" "}
                <a href="mailto:lprg@tongston.com" className="text-blue-800">
                  {" "}
                  lprg@tongston.com
                </a>
              </p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};
export default PrivacyPolicy;
