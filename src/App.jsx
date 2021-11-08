import React, { Fragment } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// material ui

// custom hooks
import { useASelector } from './utilities/recipies.util';

// components
import {
  AsyncHomePageComponent,
  AsyncLogInPageComponent,
  AsyncSignUpPageComponent,
  AsyncSubscriptionPageComponent,
  AsyncSuccessPageComponent,
  AsyncAboutPageComponent,
  AsyncSchedulePageComponent,
  AsyncPlayerPageComponent,
  AsyncMyPageComponent,
  AsyncLeavePageComponent,
  AsyncLeaveSuccessPageComponent,
  AsyncProfilePageComponent,
  AsyncLogoutPageComponent,
  AsyncRestoreAccessPageComponent,
  AsyncQuestionsComponent,
  AsyncPrivacyPolicyComponent,
  AsyncTermsOfUseComponent,
  AsyncHelpComponent,
  AsyncSummaryComponent,
  AsyncNoticeComponent,
} from './utilities/AsyncRoutes';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import AlertDialog from './components/global/AlertDialog';
import SnackBar from './components/global/SnackBar';
import './lib/Css.js';

function App() {
  const profile = useASelector((state) => state.auth.profile, []);

  return (
    <Fragment>
      <Header />
      {profile ?
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={AsyncHomePageComponent} />
          <Route exact path="/subscription" component={AsyncSubscriptionPageComponent} />
          <Route exact path="/success" component={AsyncSuccessPageComponent} />
          <Route exact path="/about" component={AsyncAboutPageComponent} />
          <Route exact path="/notice" component={AsyncNoticeComponent} />
          <Route exact path="/questions" component={AsyncQuestionsComponent} />
          <Route exact path="/privacypolicy" component={AsyncPrivacyPolicyComponent} />
          <Route exact path="/termsofuse" component={AsyncTermsOfUseComponent} />
          <Route exact path="/help" component={AsyncHelpComponent} />
          <Route exact path="/summary" component={AsyncSummaryComponent} />
          <Route exact path="/mypage" component={AsyncMyPageComponent} />
          <Route exact path="/leave" component={AsyncLeavePageComponent} />
          <Route exact path="/leavesuccess" component={AsyncLeaveSuccessPageComponent} />
          <Route exact path="/profile" component={AsyncProfilePageComponent} />
          {profile.subscribed ?
            <Route exact path="/schedule" component={AsyncSchedulePageComponent} />
            :
            <Redirect exact from="/schedule" to="/subscription" />
          }
          {profile.subscribed ?
            <Route exact path="/play" component={AsyncPlayerPageComponent} />
            :
            <Redirect exact from="/play" to="/subscription" />
          }
          <Route exact path="/logout" component={AsyncLogoutPageComponent} />
          {profile.readyToRedirect &&
            <Route exact path="/signup" component={AsyncSignUpPageComponent} />
          }
          <Redirect to="/home"></Redirect>
        </Switch>
        :
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/subscription" component={AsyncSubscriptionPageComponent} />
          <Redirect exact from="/schedule" to="/subscription" />
          <Redirect exact from="/play" to="/login" />
          <Route exact path="/home" component={AsyncHomePageComponent} />
          <Route exact path="/login" component={AsyncLogInPageComponent} />
          <Route exact path="/signup" component={AsyncSignUpPageComponent} />
          <Route exact path="/about" component={AsyncAboutPageComponent} />
          <Route exact path="/notice" component={AsyncNoticeComponent} />
          <Route exact path="/questions" component={AsyncQuestionsComponent} />
          <Route exact path="/privacypolicy" component={AsyncPrivacyPolicyComponent} />
          <Route exact path="/termsofuse" component={AsyncTermsOfUseComponent} />
          <Route exact path="/help" component={AsyncHelpComponent} />
          <Route exact path="/summary" component={AsyncSummaryComponent} />
          <Route exact path="/restore/access/:password_reset_key" component={AsyncRestoreAccessPageComponent} />
          <Route exact path="/leavesuccess" component={AsyncLeaveSuccessPageComponent} />
          <Redirect to="/home"></Redirect>
        </Switch>
      }
      <Footer />
      <SnackBar />
      <AlertDialog />
    </Fragment>
  );
}

export default App;
