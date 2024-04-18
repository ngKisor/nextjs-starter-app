import mixpanel from 'mixpanel-browser';

const enabled = JSON.parse(process.env.MIXPANEL_ENABLED || 'true');
const debugMode = localStorage.getItem('mixpanelDebug') === 'true';
const mixpanelToken = process.env.MIXPANEL_TOKEN;

const initializeMixpanel = () => {
  try {
    if (!mixpanelToken) {
      throw new Error('Mixpanel token is missing');
    }
    mixpanel.init(mixpanelToken, {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage',
    });
  } catch (error) {
    console.error('Error initializing Mixpanel:', error);
  }
};
const identify = (id: any) => {
  if (enabled) mixpanel.identify(id);
  if (debugMode) console.info('[MIXPANEL] id:', id);
};

const track = (propertyName: string, props: any) => {
  if (enabled) mixpanel.track(propertyName, props);
  if (debugMode) console.info('[MIXPANEL] track:', propertyName, props);
};

const cohort = (props: any) => {
  if (enabled) mixpanel.people.set(props);
  if (debugMode) console.info('[MIXPANEL] cohort', props);
};

const reset = () => {
  if (enabled) mixpanel.reset();
  if (debugMode) console.info('[MIXPANEL] reset');
};

const eventNames = {
  initializeMixpanel,
  identify,
  track,
  cohort,
  reset,
};
export default eventNames;
