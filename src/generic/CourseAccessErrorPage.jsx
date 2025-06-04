import { LearningHeader as Header } from '@edx/frontend-component-header';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import useActiveEnterpriseAlert from '../alerts/active-enteprise-alert';
import { LOADED, LOADING } from '../course-home/data/slice';
import { fetchDiscussionTab } from '../course-home/data/thunks';
import MyFooter from '../Footer/MyFooter';
import messages from '../tab-page/messages';
import PageLoading from './PageLoading';
import { AlertList } from './user-messages';

const CourseAccessErrorPage = ({ intl }) => {
  const { courseId } = useParams();

  const dispatch = useDispatch();
  const activeEnterpriseAlert = useActiveEnterpriseAlert(courseId);
  useEffect(() => {
    dispatch(fetchDiscussionTab(courseId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  const {
    courseStatus,
  } = useSelector(state => state.courseHome);

  if (courseStatus === LOADING) {
    return (
      <>
        <Header />
        <PageLoading
          srMessage={intl.formatMessage(messages.loading)}
        />
        <MyFooter />
        {/* <FooterSlot /> */}
      </>
    );
  }
  if (courseStatus === LOADED) {
    return <Navigate to={`/redirect/home/${courseId}`} replace />;
  }
  return (
    <>
      <Header />
      <main id="main-content" className="container my-5 text-center" data-testid="access-denied-main">
        <AlertList
          topic="outline"
          className="mx-5 mt-3"
          customAlerts={{
            ...activeEnterpriseAlert,
          }}
        />
      </main>
      <MyFooter />
      {/* <FooterSlot /> */}
    </>
  );
};

CourseAccessErrorPage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(CourseAccessErrorPage);
