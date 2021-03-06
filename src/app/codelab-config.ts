import {MilestoneConfig} from './milestone-config';
export interface AppConfig {
  test: boolean;
  name: string,
  page: string,
  user: string,
  auth: string,
  feedbackEnabled: boolean,
  preserveState: boolean,
  debug: boolean,
  presentationMode: boolean
}

export interface AppState {
  codelab: CodelabState,
  config: AppConfig,
  local: LocalState
}
export interface LocalState {
  debugTrackTime?: number;
  runId: number;
  page: 'milestone'|'feedback',
  autorun: boolean,
  user: string,
  auth: {}
}

export interface CodelabState {
  name: string,
  selectedMilestoneIndex: number,
  milestones: Array<MilestoneConfig>
}
