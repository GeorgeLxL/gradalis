/**
 * AsyncRoutes
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';

// Home
const AsyncHomePageComponent = React.lazy(() => import('../routes/home'));

// LogIn
const AsyncLogInPageComponent = React.lazy(() => import('../routes/login'));

// SignUp
const AsyncSignUpPageComponent = React.lazy(() => import('../routes/signup'));

// Subscription
const AsyncSubscriptionPageComponent = React.lazy(() => import('../routes/subscription'));

// Success
const AsyncSuccessPageComponent = React.lazy(() => import('../routes/subscription/success'));

// About
const AsyncAboutPageComponent = React.lazy(() => import('../routes/about'));

// Schedule
const AsyncSchedulePageComponent = React.lazy(() => import('../routes/schedule'));

// Player
const AsyncPlayerPageComponent = React.lazy(() => import('../routes/schedule/player'));

// Restore Access
const AsyncRestoreAccessPageComponent = React.lazy(() => import('../routes/login/restoreAccess'));

// Log Out
const AsyncLogoutPageComponent = React.lazy(() => import('../routes/logout'));

// My Page
const AsyncMyPageComponent = React.lazy(() => import('../routes/mypage'));

// Leave Page
const AsyncLeavePageComponent = React.lazy(() => import('../routes/leave'));

// Leave Success Page
const AsyncLeaveSuccessPageComponent = React.lazy(() => import('../routes/leave/success'));

// Profile
const AsyncProfilePageComponent = React.lazy(() => import('../routes/profile'));

// Frequently asked questions
const AsyncQuestionsComponent = React.lazy(() => import('../routes/questions'));

// Privacy Policy
const AsyncPrivacyPolicyComponent = React.lazy(() => import('../routes/privacypolicy'));

// Terms Of Use
const AsyncTermsOfUseComponent = React.lazy(() => import('../routes/termsofuse'));

// Help
const AsyncHelpComponent = React.lazy(() => import('../routes/help'));

// Summary
const AsyncSummaryComponent = React.lazy(() => import('../routes/summary'));

// Summary
const AsyncNoticeComponent = React.lazy(() => import('../routes/notice'));

export {
    AsyncHomePageComponent,
    AsyncLogInPageComponent,
    AsyncSignUpPageComponent,
    AsyncSubscriptionPageComponent,
    AsyncSuccessPageComponent,
    AsyncAboutPageComponent,
    AsyncSchedulePageComponent,
    AsyncPlayerPageComponent,
    AsyncRestoreAccessPageComponent,
    AsyncLogoutPageComponent,
    AsyncMyPageComponent,
    AsyncLeavePageComponent,
    AsyncLeaveSuccessPageComponent,
    AsyncProfilePageComponent,
    AsyncQuestionsComponent,
    AsyncPrivacyPolicyComponent,
    AsyncTermsOfUseComponent,
    AsyncHelpComponent,
    AsyncSummaryComponent,
    AsyncNoticeComponent,
};