import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TLogo from "../../../assets/images/tongstonlogo.png";
import { Link } from "react-router-dom";
import { LoginIcon } from "@heroicons/react/solid";

const TCNN = ({ onClose }) => {
  return (
    <>
      <div className="terms-container fixed inset-0 z-50 top-[4rem] flex items-center justify-center bg-light-brown">
        <div className="absolute inset-0 opacity-75">
          <button
            onClick={() => onClose()}
            className="relative top-7 left-[8rem]   md:left-[18rem] p-2 bg-red hover:bg-gold text-white rounded-t-lg"
          >
            <FontAwesomeIcon icon={faTimes} times-icon />
          </button>

          <span className="terms-conditions-heading flex flex-col justify-center items-center">
            <div className="logo-container bg-black ">
              <Link
                to="https://tongston.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo w-full h-11" src={TLogo} alt="logo" />
              </Link>
            </div>
            <br />
            <p className=" text-sm text-red font-bold font-ger text-left px-4 lg:text-base ">
              Tongston Group Terms & Conditions for Non-Nigerian Entities
            </p>

            <br />
            <div className="terms-content bg-white h-[30rem]  w-full overflow-y-auto py-4 px-8">
              <p className="text-dark text-xl px-4 font-sans text-justify font-normal md:px-8">
                This Agreement is entered into the date indicated in the form on
                <a
                  href="https://t-ventures.tongston.com/"
                  className="text-blue-700"
                >
                  www.t-ventures.tongston.com
                </a>
                , between the name of the enterprise on the form on{" "}
                <a
                  href="https://t-ventures.tongston.com/"
                  className="text-blue-700"
                >
                  {" "}
                  www.t-ventures.tongston.com
                </a>
                , incorporated and existing, and the TONGSTON ENTREPRENEURSHIP
                HOLDINGS, a company limited by shares incorporated and existing
                under the laws of the Federal Republic of Nigeria, having its
                headquarters at 16 Emeka Anyaoku St, Garki, Area 11, Abuja
                (“TEH"). For the purposes of this document, all references to [
                ] are references to the enterprise that completed the form on
                www.t-ventures.tongston.com. All notice information shall be
                replaced with the contact information provided in the form
                completed on
                <a
                  href="https://t-ventures.tongston.com/"
                  className="text-blue-700"
                >
                  {" "}
                  www.t-ventures.tongston.com
                </a>
                .
                <br />
                <br />
                <b className="   md:text-[30px]"> WHEREAS:</b>
                <br />
                <span className="alphabetical-numbering list-disc  pl-8 ">
                  <li> [ ] is engaged in the business of [ ];</li>
                  <br />
                  <li>
                    TEH is a multi-award winning pan-African holdings company of
                    enterprise, media, education and finance businesses
                    operating globally.{" "}
                  </li>
                  <br />
                  <li>
                    TEH and [ ] are engaged in discussions on collaborating with
                    a view to [insert area/sector/ project/activity], in the
                    context of which both Parties will exchange Confidential
                    Information (as defined in Clause 1.2);{" "}
                  </li>
                  <br />
                  <li>
                    {" "}
                    Each Party acknowledges that it is of the utmost importance
                    to the other Party that the Confidential Information remains
                    confidential and that its disclosure to persons other than
                    as permitted under the terms hereof may prejudice the other
                    Party’s operations and business; and
                  </li>
                  <br />
                  <li>
                    {" "}
                    The Parties wish to set out their obligations regarding such
                    Confidential Information.
                  </li>
                </span>
                <br />
                <b className="   md:text-[30px] font-sans">
                  NOW THEREFORE THE PARTIES HEREBY AGREE AS FOLLOWS:
                </b>
                <br />
                <br />
                <li className=" list-decimal md:pl-6">
                  {" "}
                  FOR THE PURPOSES OF THIS AGREEMENT:
                </li>
                <br />
                <ul className="undenumbered-item list-none md:pl-[5rem] ">
                  <li>
                    {" "}
                    <b>1.1</b> An "affiliate" means, with respect to the
                    Discloser:
                  </li>
                </ul>
                <br />
                <ul className="undenumbered-item list-none md:pl-[8rem] ">
                  <li>
                    {" "}
                    <b>1.1.1</b>a company which controls it directly or
                    indirectly;
                  </li>
                  <br />
                  <li>
                    {" "}
                    <b>1.1.2</b> a company which it controls directly or
                    indirectly; or{" "}
                  </li>
                  <br />
                  <li>
                    {" "}
                    <b> 1.2.3 </b> a company which is controlled directly or
                    indirectly by a third company which also controls the
                    Discloser directly or indirectly.
                  </li>
                </ul>
                <br />
                <b className="md:pl-[5rem]"> 1.2</b>{" "}
                <p className="md:pl-[8rem]">
                  "Confidential Information" shall mean all written information,
                  data and other material in whatever form including information
                  in a document, electronic file or captured in any other way of
                  representing or recording information which contains or is
                  derived or copied from such information, relating to the
                  Project or the activities of a Party (hereinafter referred to
                  as the “Discloser”) or any of the Discloser’s affiliates,
                  their interests and/or business, which is disclosed by the
                  Discloser or any of the Discloser’s Representatives to the
                  other Party (hereinafter referred to as the “Recipient) or any
                  of the Recipient’s Representatives after the date hereof, and
                  also including any analyses, compilations and other material
                  prepared by the Recipient or its Representatives which contain
                  or reflect such information, but{" "}
                  <u> excluding any information,</u>
                </p>
                <br />
                <p className="md:pl-[1rem]">
                  {" "}
                  <b className="md:pl-[7rem]"> 1.2.1</b>
                  which was known to the Recipient prior to disclosure in the
                  terms hereof; and/or
                </p>
                <br />
                <p className="md:pl-[1rem]">
                  {" "}
                  <b className="md:pl-[7rem]"> 1.2.2</b>
                  which is or becomes public knowledge through no breach of the
                  Recipient of the obligations as to confidentiality herein;
                  and/o
                </p>
                <br />
                <p className="md:pl-[1rem]">
                  {" "}
                  <b className="md:pl-[7rem]"> 1.2.3</b>
                  which is identified in writing at the time of delivery as
                  non-confidential by the Discloser or its advisers; or
                </p>
                <br />
                <b className="md:pl-[5rem]"> 1.3</b>{" "}
                <p className="md:pl-[8rem]">
                  The "Parties" means the TEH and [ ] and “Party” means either
                  TEH or [ ], as the context requires.
                </p>
                <br />
                <b className="md:pl-[5rem]"> 1.4</b>{" "}
                <p className="md:pl-[8rem]">
                  The "Project" means the framework within which the Parties
                  will collaborate with a view to [insert
                  area/project/activity], and the term “Project” includes each
                  such transaction or project.
                </p>
                <br />
                <b className="md:pl-[5rem]"> 1.5</b>{" "}
                <p className="md:pl-[8rem]">
                  {" "}
                  “Representatives” means the affiliates, directors, officers,
                  employees, consultants, advisors, auditors, attorneys or
                  agents of a Party.
                </p>
                <br />
                <li className=" list-decimal md:pl-6">
                  {" "}
                  By virtue of the exchange of information, each Party will
                  become possessed of and have access to certain of the other
                  Party’s Confidential Information and accordingly the Recipient
                  undertakes in favour of the Discloser that it shall procure
                  and ensure that its Representatives shall:
                </li>
                <br />
                <b className="md:pl-[5rem]"> 2.1</b>{" "}
                <p className="md:pl-[8rem]">
                  keep secret and confidential and not, without the consent of
                  the Discloser, disclose to any person (other than persons
                  permitted herein, or as required by law, by any court, or
                  pursuant to enquiry or investigation, by any governmental, or
                  regulatory body which is lawfully entitled to require such
                  disclosure), any Confidential Information that it may acquire
                  as a result of such disclosure and its participation in and/or
                  association with the Project; and
                </p>
                <br />
                <b className="md:pl-[5rem]"> 2.2</b>{" "}
                <p className="md:pl-[8rem]">
                  not disclose to any third party (other than as permitted
                  herein) the fact that the Discloser has approached the
                  Recipient regarding the Project, or that discussions or
                  negotiations are taking place between the parties, save with
                  the consent of the Discloser (which consent shall not be
                  unreasonably withheld), or to the extent required by law.
                </p>
                <br />
                <b className="md:pl-[5rem]"> 2.3</b>{" "}
                <p className="md:pl-[8rem]">
                  use the Confidential Information only for the applicable
                  Project.
                </p>
                <br />
                <li className=" list-decimal md:pl-6">
                  The Recipient undertakes to ensure that disclosure of the
                  Confidential Information is made to its Representatives only
                  to the extent necessary for the purposes of assessing the
                  Project, it being understood that those Representatives shall
                  be informed by Recipient of the confidential nature of such
                  information and shall be directed to treat such information
                  confidentially.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  The Recipient undertakes to inform the Discloser upon becoming
                  aware that Confidential Information has been disclosed in
                  breach of this letter. Where disclosure of Confidential
                  Information is required by law, by any court, or pursuant to
                  enquiry or investigation, by any governmental, or regulatory
                  body which is lawfully entitled to require such disclosure,
                  the Recipient shall to the extent permitted by law, promptly
                  inform the Discloser of such request, so that the Discloser
                  may seek a protective order or other appropriate remedy, as
                  may be necessary.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  Either Party undertakes that if it and/or any of its
                  Representatives becomes legally compelled to disclose any of
                  the Confidential Information or the existence of the Project,
                  the Party shall, to the extent permitted by law, notify the
                  other Party so that it may seek a protective order or other
                  appropriate remedy. If such protective order or remedy is not
                  obtained, the Party undertakes that it shall disclose (in a
                  manner reasonably designed to preserve its confidential
                  nature) only that portion of the Confidential Information tha
                  is legally required.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  Nothing in this Agreement shall, unless otherwise agreed
                  between the Parties, be construed as making one Party the
                  agent of the other. Neither Party shall be entitled to commit
                  the other party to any arrangement or agreement without the
                  express written consent of the other Party.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  The Recipient undertakes to return to the Discloser within
                  twenty-one (21) days of receipt of written demand from the
                  Discloser, all documents or other materials containing
                  Confidential Information, and expunge or procure the
                  expurgation of all Confidential Information from all computer
                  and other devices in its control, including all copies or
                  reproductions thereof.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  This Agreement and the confidentiality undertakings contained
                  herein shall continue for as long as the Confidential
                  Information disclosed to the Recipient remains Confidential
                  Information in terms hereof, but in any case not later than
                  one (1) year from the date of this Agreement.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  The Parties acknowledge that while each Party may rely on the
                  Confidential Information for purposes of assessing the Project
                  or the transactions thereunder, each Party in accordance with
                  its procedures may conduct its own due diligence in relation
                  to any transaction under the Project and make its own
                  independent decision concerning any financing of any
                  transaction under the Project, which financing shall be
                  subject to, inter alia, the processing and approval procedures
                  of the Parties.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  Nothing contained in this Agreement may be construed as
                  binding or committing either of the Parties to negotiate or
                  conclude any other agreement in connection with the applicable
                  Project.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  The Parties acknowledge and agree that neither Party nor any
                  of its Representatives (i) make any representation or
                  warranty, express or implied, as to, or assume any
                  responsibility for, the accuracy, reliability or completeness
                  of any of the Confidential Information or any other
                  information supplied by the other Party or any of its
                  Representatives or the assumptions upon which it is based; and
                  (ii) shall be under any obligation to update or correct any
                  inaccuracy in the Confidential Information or any other
                  information supplied by the other Party or any of its
                  Representatives or be otherwise liable to the Recipient or any
                  other person in respect of the Confidential Information or
                  such information.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  The provisions of this Agreement are not intended to benefit,
                  and shall not be enforceable by, any party that is not a Party
                  hereto, pursuant to the Contracts (Rights of Third Parties)
                  Act 1999 or otherwise.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  This Agreement constitutes the entire agreement between the
                  Parties hereto relating to the subject matter hereof, and no
                  terms or provisions of this Agreement shall be varied or
                  modified by any prior or subsequent statement, conduct or act
                  of any of the Parties except that the Parties may amend this
                  Agreement by written instruments specifically referred to and
                  executed in the same manner as this Agreement, which
                  instrument shall be signed by the duly authorised
                  representatives of the Parties.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  The interpretation, implementation, enforcement and
                  termination of this Agreement shall be governed in accordance
                  with the laws of England, which shall, for all purposes of
                  this Agreement be the governing law of this Agreement. Any
                  dispute or difference arising out of or in connection with
                  this Agreement which cannot be settled amicably between the
                  Parties shall be settled by arbitration in accordance with the
                  existing rules of the London Court of International
                  Arbitration before a panel of three arbitrators, one to be
                  appointed by each party and one by the two arbitrators so
                  appointed. The place and legal seat of arbitration will be
                  London, England and the language of the arbitration shall be
                  English. The resulting award shall be final and binding on the
                  Parties and shall be in lieu of any other remedy.
                </li>
                <br />
                <li className=" list-decimal md:pl-6">
                  For purposes of receiving any notice or communication under
                  this Agreement, the Recipient and Discloser hereby provide the
                  following addresses:
                </li>
                <br />
              </p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};
export default TCNN;
