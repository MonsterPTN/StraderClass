import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import NonIcon from '../../Icons/NonIcon'
import DownIcon from '../../Icons/DownIcon'
import GoBack from '../../Components/GoBack'
const TermsConditionsScreen = (props) => {
    const [term1, setTerm1] = useState(true);
    const [term2, setTerm2] = useState(true);
    const [term3, setTerm3] = useState(true);
    const [term4, setTerm4] = useState(true);

    return (
        <View style={{ flex: 1, backgroundColor: '#171921', paddingTop: 15,paddingHorizontal:15 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, justifyContent: 'space-between' }}>
            <GoBack navigation={props.navigation}/>
                <Text style={styles.textHeader}>Term & Conditions</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <ScrollView >

                <TouchableOpacity style={styles.touch} onPress={() => setTerm1(!term1)}>
                    <Text style={styles.textTouch}>
                        1. Welcome to TraderClass!
                    </Text>
                    <DownIcon />
                </TouchableOpacity>
                {
                    !term1 && (
                        <View style={styles.textDes2}>
                            <Text style={styles.textDes}>1.1 Introduction: Yanka Industries, Inc. d/b/a TraderClass (“TraderClass,” “we,” “us,” “our”) provides its services (described below) to you through its website located at traderclass.com (the “Site”) and through its mobile applications and related services (collectively, such services, including any new features and applications, and the Site, the “Service(s)”), subject to the following Terms of Service (the “Terms of Service”).PLEASE READ THESE TERMS OF SERVICE CAREFULLY, AS THEY GOVERN YOUR USE OF THE SITE AND SERVICES, PARTICULARLY SECTION 10 (BINDING ARBITRATION; CLASS ACTION WAIVER), WHICH AFFECTS YOUR RIGHTS IN THE EVENT OF A DISPUTE BETWEEN US.</Text>
                            <Text style={styles.textDes}>1.2 Modifications to Terms of Service: We reserve the right, at our sole discretion, to change or modify portions of these Terms of Service at any time. If we do this, depending on the nature of the change, we will post the changes on this page and indicate at the top of this page the date these terms were last revised and/or notify you, either through the Services' user interface, in an email notification or through other reasonable means and as required by applicable law. Any such changes will become effective no earlier than fourteen (14) days after they are posted, except that changes addressing new functions of the Services or changes made for legal reasons will be effective immediately. Your continued use of the Service after the date any such changes become effective constitutes your acceptance of the new Terms of Service. In addition, when using certain Services, you will be subject to any additional terms applicable to such Services that may be posted on the Service from time to time.</Text>
                            <Text style={styles.textDes}>1.3 Privacy: At TraderClass, we respect the privacy of our users. For details please see our Privacy Policy. By using the Service, you consent to our collection and use of personal data as outlined therein.</Text>
                        </View>
                    )
                }
                <TouchableOpacity style={styles.touch} onPress={() => setTerm2(!term2)}>
                    <Text style={styles.textTouch}>
                        2. Access and Use of the Service
                    </Text>
                    <DownIcon />
                </TouchableOpacity>
                {
                    !term2 && (
                        <View style={styles.textDes2}>
                            <Text style={styles.textDes}>2.1 Use Description: The TraderClass service, and any content viewed through our service, is solely for your personal and non-commercial use. With your TraderClass purchase we grant you a limited, non-exclusive, non-transferable, license to access the TraderClass content and view your course(s) through the service on a streaming-only basis for that purpose. Except for the foregoing limited license, no right, title or interest shall be transferred to you. You agree not to use the service for public performances. TraderClass may revoke your license at any time in its sole discretion. Upon such revocation, you must promptly destroy all content downloaded or otherwise obtained through the service, as well as copies of such materials, whether made in accordance with these Terms of Service or otherwise.</Text>
                            <Text style={styles.textDes}>2.2 Your Registration Obligations: You may be required to register with TraderClass in order to access and use certain features of the Service. If you choose to register for the Service, you agree to provide and maintain true, accurate, current and complete information about yourself as prompted by the Service’s registration form. Registration data and certain other information about you are governed by our Privacy Policy. If you are under 13 years of age, you are not authorized to use the Service, with or without registering. In addition, if you are under 18 years old, you may use the Service, with or without registering, only with the approval of your parent or guardian.</Text>
                            <Text style={styles.textDes}>2.3 Member Account, Password and Security: You may never use another's account, and you may not provide another person with the username and password to access your account. You are fully responsible for any and all activities that occur under your password or account, and it is your responsibility to ensure that your password remains confidential and secure. You agree to (a) immediately notify TraderClass of any unauthorized use of your password or account or any other breach of security, and (b) ensure that you exit from your account at the end of each session when accessing the Service. TraderClass will not be liable for any loss or damage arising from your failure to comply with this Section.</Text>
                            <Text style={styles.textDes}>2.4 Modifications to Service: TraderClass reserves the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that TraderClass will not be liable to you or to any third party for any modification, suspension or discontinuance of the Service. We have no obligation to retain any of Your Account or Submitted Content for any period of time beyond what may be required by applicable law.t</Text>
                            <Text style={styles.textDes}>2.5 General Practices Regarding Use and Storage: You acknowledge that TraderClass may establish general practices and limits concerning use of the Service, including without limitation the maximum period of time that data or other content will be retained by the Service and the maximum storage space that will be allotted on TraderClass’s servers on your behalf. You agree that TraderClass has no responsibility or liability for the deletion or failure to store any data or other content maintained or uploaded by the Service. You acknowledge that TraderClass reserves the right to terminate accounts that are inactive for an extended period of time. You further acknowledge that TraderClass reserves the right to change these general practices and limits at any time, in its sole discretion, with or without notice.tttt</Text>
                            <Text style={styles.textDes}>2.6 Mobile Services: The Service may include certain services that are available via a mobile device, including (i) the ability to upload content to the Service via a mobile device, (ii) the ability to browse the Service and the Site from a mobile device and (iii) the ability to access certain features through an application downloaded and installed on a mobile device (collectively, the “Mobile Services”). To the extent you access the Service through a mobile device, your wireless service carrier’s standard charges, data rates and other fees may apply. In addition, downloading, installing, or using certain Mobile Services may be prohibited or restricted by your carrier, and not all Mobile Services may work with all carriers or devices. In using the Mobile Services, you may provide your telephone number. By providing your telephone number, you consent to receive calls and/or SMS, MMS, or text messages at that number. We may share your phone numbers with our affiliates or with our service providers (such as customer support, billing or collections companies, and text message service providers) who we have contracted with to assist us in pursuing our rights or providing our Services under these Terms of Service, our policies, applicable law, or any other agreement we may have with you. You agree these parties may also contact you using autodialed or prerecorded calls and text messages, as authorized by us to carry out the purposes we have identified above, and not for their own purposes. In the event you change or deactivate your mobile telephone number, you agree to promptly update your TraderClass account information to ensure that your messages are not sent to the person that acquires your old number.</Text>
                            <Text style={styles.textDes}>2.7 Money Back Guarantee: Unless otherwise noted during your purchase of the Service you choose, as required by applicable law in your jurisdiction, or as set forth in the refund policy applicable to any Service you purchase through a third-party marketplace (see Section 3.3 below), should you become dissatisfied with the Service within the first 30 days after purchase, TraderClass will refund the full amount of your purchase and subsequently terminate your access. Refunds are not available for customers 30 days after a purchase. Refunds are not available for accounts which have violated the terms of service; violations are determined at TraderClass sole discretion. If TraderClass determines that you are abusing our refund policy, we reserve the right to suspend or terminate your account and refuse or restrict any and all current or future use of the Service without delivering a refund. To request a refund or to ask a question regarding the 30-day money back guarantee, email Support at support@TraderClass.com.
                            </Text>
                        </View>
                    )
                }

                <TouchableOpacity style={styles.touch} onPress={() => setTerm3(!term3)}>
                    <Text style={styles.textTouch}>
                        3. Conditions of Use
                    </Text>
                    <DownIcon />
                </TouchableOpacity>
                {
                    !term3 && (
                        <View style={styles.textDes2}>
                            <Text style={styles.textDes}>3.1 User Conduct: You are solely responsible for all code, video, images, information, data, text, software, music, sound, photographs, graphics, messages or other materials (“content”) that you upload, post, publish or display (hereinafter, “upload”) or email or otherwise use via the Service. TraderClass reserves the right to investigate and take appropriate legal action against anyone who, in TraderClass sole discretion, violates this provision, including without limitation, removing the offending content from the Service, suspending or terminating the account of such violators and reporting you to the law enforcement authorities. You agree to not use the Service to:
                            </Text>
                            <Text style={styles.textDes}>   email or otherwise upload any content that (i) infringes any intellectual property or other proprietary rights of any party; (ii) you do not have a right to upload under any law or under contractual or fiduciary relationships; (iii) contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment; (iv) poses or creates a privacy or security risk to any person; (v) constitutes unsolicited or unauthorized advertising, promotional materials, commercial activities and/or sales, “junk mail,” “spam,” “chain letters,” “pyramid schemes,” “contests,” “sweepstakes,” or any other form of solicitation; (vi) is unlawful, harmful, threatening, abusive, harassing, tortious, excessively violent, defamatory, vulgar, obscene, pornographic, libelous, invasive of another’s privacy, hateful racially, ethnically or otherwise objectionable; or (vii) in the sole judgment of TraderClass, is objectionable or which restricts or inhibits any other person from using or enjoying the Service, or which may expose TraderClass or its users to any harm or liability of any type;
                            </Text>
                            <Text style={styles.textDes}>   interfere with or disrupt the Service or servers or networks connected to the Service, or disobey any requirements, procedures, policies or regulations of networks connected to the Service;
                            </Text>
                            <Text style={styles.textDes}>   violate any applicable local, state, national or international law, or any regulations having the force of law;
                            </Text>
                            <Text style={styles.textDes}>   impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity; solicit personal information from anyone under the age of 18;
                            </Text>
                            <Text style={styles.textDes}>   harvest or collect email addresses or other contact information of other users from the Service by electronic or other means for the purposes of sending unsolicited emails or other unsolicited communications;
                            </Text>
                            <Text style={styles.textDes}>   advertise or offer to sell or buy any goods or services for any business purpose that is not specifically authorized;
                            </Text>
                            <Text style={styles.textDes}>   further or promote any criminal activity or enterprise or provide instructional information about illegal activities; or</Text>
                            <Text style={styles.textDes}>   obtain or attempt to access or otherwise obtain any materials or information through any means not intentionally made available or provided for through the Service.</Text>
                            <Text style={styles.textDes}>3.2 Fees: To the extent the Service or any portion thereof is made available for any fee, you will be required to select a payment plan and provide TraderClass information regarding your credit card or other payment instrument. You represent and warrant to TraderClass that such information is true and that you are authorized to use the payment instrument. You will promptly update your account information with any changes (for example, a change in your billing address or credit card expiration date) that may occur. You agree to pay TraderClass the amount that is specified in the payment plan (as well as any applicable taxes) in accordance with the terms of such plan and this Terms of Service. You hereby authorize TraderClass to bill your payment instrument in accordance with the terms of the applicable payment plan (as well as any applicable taxes) until you terminate your account, and you further agree to pay any charges so incurred. If you dispute any charges you must let TraderClass know within sixty (60) days after the date that TraderClass charges you. We reserve the right to change TraderClass prices. Your continued use of the Service after the price change becomes effective constitutes your agreement to pay the changed amount. You shall be responsible for all taxes associated with the Services other than U.S. taxes based on TraderClass net income.
                            </Text>
                            <Text style={styles.textDes}>3.3 Recurring Subscriptions: If you select a Service with an auto renewal feature (“Recurring Subscription”), you authorize TraderClass to maintain your account information and charge that account automatically upon the renewal of the Service you choose with no further action required by you. In the event that TraderClass is unable to charge your account as authorized by you when you enrolled in a Recurring Subscription, TraderClass, may, in its sole discretion: (i) bill you for your Service and suspend your access to the Service until payment is received, and/or (ii) seek to update your account information through third party sources (i.e., your bank or a payment processor) to continue charging your account as authorized by you.</Text>
                            <Text style={styles.textDes}>TraderClass may change the price for Recurring Subscriptions from time to time and will communicate any price changes to you in advance and, if applicable, how to accept those changes. Price changes for Recurring Subscriptions will take effect at the start of the next subscription period following the date of the price change. As permitted by local law, you accept the new price by continuing to use your Recurring Subscription after the price change takes effect. If you do not agree with the price changes, you have the right to reject the change by cancelling your Recurring Subscription before the price change goes into effect. Please therefore make sure you read any such notification of price changes carefully.</Text>
                            <Text style={styles.textDes}>Payments are nonrefundable and there are no refunds or credits for partially used periods. You may cancel a Recurring Subscription at any time, but if you cancel your subscription before the end of the current subscription period, we will not refund any subscription fees already paid to us. Following any cancellation, however, you will continue to have access to the service through the end of your current subscription period. At any time, and for any reason, we may provide a refund, discount, or other consideration to some or all of our users ("credits"). The amount and form of such credits, and the decision to provide them, are at our sole and absolute discretion. The provision of credits in one instance does not entitle you to credits in the future for similar instances, nor does it obligate us to provide credits in the future, under any circumstance.</Text>
                            <Text style={styles.textDes}>If you purchase any Service through a mobile purchase or third-party marketplace (e.g., through the Apple App Store or Google Play Store), the refund policy applicable to that third-party marketplace will apply, unless otherwise explicitly stated by TraderClass. Except as otherwise explicitly stated by TraderClass, the third-party marketplace will be solely responsible for making refunds under its refund policy, and TraderClass will have no refund obligations. TraderClass disclaims any responsibility or liability related to any third-party marketplace's refund policy or the third party's compliance or noncompliance with such policy.</Text>
                            <Text style={styles.textDes}>If you subscribed via iTunes on your Apple mobile device, you can cancel by going to your Account Settings in the App Store. You can find Subscriptions in the Settings app on your device under iTunes & App Store, and then select your Apple ID.</Text>
                            <Text style={styles.textDes}>If you subscribed via the Google Play Store on your Android mobile device, you can cancel by opening the Google Play Store and selecting Menu Subscription. You can select the subscription you want to cancel or update and then follow the onscreen instructions.</Text>
                            <Text style={styles.textDes}>If you subscribed on our website, you can cancel by contacting Support at support@TraderClass.com or by going to Settings in your account, selecting Cancel under the Subscription box and then following the onscreen instructions to continue and cancel subscription.</Text>
                            <Text style={styles.textDes}>3.4 Special Notice for International Use; Export Controls:Software (defined below) available in connection with the Service and the transmission of applicable data, if any, is subject to United States export controls. No Software may be downloaded from the Service or otherwise exported or re-exported in violation of U.S. export laws. Downloading or using the Software is at your sole risk. Recognizing the global nature of the Internet, you agree to comply with all local rules and laws regarding your use of the Service, including as it concerns online conduct and acceptable content.</Text>
                            <Text style={styles.textDes}>3.5 Commercial Use: Unless otherwise expressly authorized herein or by TraderClass in writing, you agree not to display, distribute, license, perform, publish, reproduce, duplicate, copy, create derivative works from, modify, sell, resell, exploit, transfer or upload for any commercial purposes, any portion of the Service, use of the Service, or access to the Service.</Text>
                        </View>
                    )
                }
                <TouchableOpacity style={styles.touch} onPress={() => setTerm4(!term4)}>
                    <Text style={styles.textTouch}>
                        4. Intellectual Property Rights
                    </Text>
                    <DownIcon />
                </TouchableOpacity>
                {
                    !term4 && (
                        <View style={styles.textDes2}>
                            <Text style={styles.textDes}>4.1 Service Content, Software and Trademarks: You acknowledge and agree that the Service may contain content or features (“Service Content”) that are protected by copyright, patent, trademark, trade secret or other proprietary rights and laws. Except as expressly authorized by TraderClass, you agree not to modify, copy, frame, scrape, rent, lease, loan, sell, distribute or create derivative works based on the Service or the Service Content, in whole or in part, except that the foregoing does not apply to your own User Content (as defined below) that you legally upload to the Service. In connection with your use of the Service you will not engage in or use any data mining, robots, scraping or similar data gathering or extraction methods. If you are blocked by TraderClass from accessing the Service (including blocking your IP address), you agree not to implement any measures to circumvent such blocking (e.g., by masking your IP address or using a proxy IP address). Any use of the Service or the Service Content other than as specifically authorized herein is strictly prohibited. The technology and software underlying the Service or distributed in connection therewith are the property of TraderClass, our affiliates and our partners (the “Software”). You agree not to copy, modify, create a derivative work of, reverse engineer, reverse assemble or otherwise attempt to discover any source code, sell, assign, sublicense, or otherwise transfer any right in the Software. Any rights not expressly granted herein are reserved by TraderClass.</Text>
                            <Text style={styles.textDes}>The TraderClass name and logos are trademarks and service marks of TraderClass (collectively the “TraderClass Trademarks”). Other TraderClass, product, and service names and logos used and displayed via the Service may be trademarks or service marks of their respective owners who may or may not endorse or be affiliated with or connected to TraderClass. Nothing in this Terms of Service or the Service should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any of TraderClass Trademarks displayed on the Service, without our prior written permission in each instance. All goodwill generated from the use of TraderClass Trademarks will inure to our exclusive benefit.
                            </Text>
                            <Text style={styles.textDes}>4.2 Third Party Material: Under no circumstances will TraderClass be liable in any way for any content or materials of any third parties (including users), including, but not limited to, for any errors or omissions in any content, or for any loss or damage of any kind incurred as a result of the use of any such content. You acknowledge that TraderClass does not pre-screen content, but that TraderClass and its designees will have the right (but not the obligation) in their sole discretion to refuse or remove any content that is available via the Service. Without limiting the foregoing, TraderClass and its designees will have the right to remove any content that violates these Terms of Service or is deemed by TraderClass, in its sole discretion, to be otherwise objectionable. You agree that you must evaluate, and bear all risks associated with, the use of any content, including any reliance on the accuracy, completeness, or usefulness of such content.</Text>
                            <Text style={styles.textDes}>4.3 User Content Transmitted: Through the Service: With respect to the content or other materials you upload through the Service or share with other users or recipients (collectively, “User Content”), you represent and warrant that you own all right, title and interest in and to such User Content, including, without limitation, all copyrights and rights of publicity contained therein, and that you have all required rights to post or transmit such content or other materials without violation of any third-party rights. By uploading any User Content you hereby grant and will grant TraderClass, its affiliated companies and partners (including but not limited to TraderClass instructors, practitioners and other third parties providing instructional information through the Services, collectively “partners”) a nonexclusive, worldwide, royalty free, fully paid up, transferable, sublicensable, perpetual, irrevocable license to copy, display, upload, adapt, perform, publish, distribute (through multiple tiers of distribution and partnerships), store, modify and otherwise use and fully exploit your User Content in any and all media, form, medium, technology or distribution methods now known or later developed and for any and all purposes (commercial or otherwise).</Text>
                            <Text style={styles.textDes}>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback or other information relevant to the Service (“Submissions”), provided by you to TraderClass, its affiliated companies or partners are non-confidential and TraderClass, its affiliated companies and partners will be entitled to the unrestricted use and dissemination of these Submissions for any purpose, commercial or otherwise, without acknowledgment or compensation to you.</Text>
                            <Text style={styles.textDes}>You acknowledge and agree that TraderClass may preserve content and may also disclose content if required to do so by law or in the good faith belief that such preservation or disclosure is reasonably necessary to: (a) comply with legal process, applicable laws or government requests; (b) enforce these Terms of Service; (c) respond to claims that any content violates the rights of third parties; or (d) protect the rights, property, or personal safety of TraderClass, its users and the public. You understand that the technical processing and transmission of the Service, including your content, may involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.</Text>
                            <Text style={styles.textDes}>4.4 Copyright Complaints: TraderClass respects the intellectual property of others, and we ask our users to do the same. If you believe that your work has been copied in a way that constitutes copyright infringement, or that your intellectual property rights have been otherwise violated, you should notify TraderClass of your infringement claim in accordance with the procedure set forth below.</Text>
                            <Text style={styles.textDes}>You may also contact us by mail at: TraderClass 9 Floor, Vien Dong Building, 14  Phan Ton, Da Kao, 1 District, Ho Chi Minh City .</Text>
                            <Text style={styles.textDes}>To be effective, the notification must be in writing and contain the following information: an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest; a description of the copyrighted work or other intellectual property that you claim has been infringed; a description of where the material that you claim is infringing is located on the Service, with enough detail that we may find it on the Service; your address, telephone number, and email address; a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright or intellectual property owner, its agent, or the law; a statement by you, made under penalty of perjury, that the above information in your Notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner’s behalf.</Text>
                            <Text style={styles.textDes}>4.5 Counter-Notice: If you believe that your User Content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner’s agent, or pursuant to the law, to upload and use the content in your User Content, you may send a written counter-notice containing the following information to the Copyright Agent: your physical or electronic signature; identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled; a statement that you have a good faith belief that the content was removed or disabled as a result of mistake or a misidentification of the content; and your name, address, telephone number, and email address, a statement that you consent to the jurisdiction of the federal court located within Northern District of California and a statement that you will accept service of process from the person who provided notification of the alleged infringement.</Text>
                            <Text style={styles.textDes}>If a counter-notice is received by the Copyright Agent, TraderClass will send a copy of the counter-notice to the original complaining party informing that person that it may replace the removed content or cease disabling it in 10 business days. Unless the copyright owner files an action seeking a court order against the content provider, member or user, the removed content may be replaced, or access to it restored, in 10 to 14 business days or more after receipt of the counter-notice, at our sole discretion.</Text>
                            <Text style={styles.textDes}>4.6 Repeat Infringer Policy: In accordance with the DMCA and other applicable law, TraderClass has adopted a policy of terminating, in appropriate circumstances and at TraderClass sole discretion, users who are deemed to be repeat infringers. TraderClass may also at its sole discretion limit access to the Service and/or terminate the memberships of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.</Text>
                        </View>
                    )
                }


            </ScrollView>
        </View>
    )
}
export default TermsConditionsScreen;
const styles = StyleSheet.create({
    textHeader: {
        // height: 40,
        textAlign: 'center',
        color: 'white',
        fontSize: 19,
        fontFamily: 'Poppins',
        fontWeight: 'bold',


    },
    iconHeader: {
        paddingTop: 25,
    },
    touch: {
        backgroundColor: '#272A38',
        marginTop: 16,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight:10
    },
    textTouch: {
        color: '#FF8600',
        paddingVertical: 22,
        marginLeft: 10,
        fontSize: 16
    },
    textDes: {
        color: 'white',
        padding: 5,
        textAlign:'justify'
    },
    textDes2:{
         flexDirection: 'column',
          backgroundColor: '#3E4359',
          paddingHorizontal:10 ,
          paddingVertical:5,
        }
})