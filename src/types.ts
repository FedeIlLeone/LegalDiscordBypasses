export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
export { ReactElement } from "react";
export interface GenericModule extends Record<string, DefaultTypes.AnyFunction> {}
export interface ElectronModule {
  architecture: string;
  asyncify: DefaultTypes.AnyFunction;
  beforeUnload: DefaultTypes.AnyFunction;
  blockDisplaySleep: DefaultTypes.AnyFunction;
  blur: DefaultTypes.AnyFunction;
  bounceDock: DefaultTypes.AnyFunction;
  buildNumber: DefaultTypes.AnyFunction;
  canBootstrapNewUpdater: DefaultTypes.AnyFunction;
  canCopyImage: DefaultTypes.AnyFunction;
  cleanupDisplaySleep: DefaultTypes.AnyFunction;
  clearCandidateGamesCallback: DefaultTypes.AnyFunction;
  close: DefaultTypes.AnyFunction;
  copy: DefaultTypes.AnyFunction;
  copyImage: DefaultTypes.AnyFunction;
  crash: DefaultTypes.AnyFunction;
  cut: DefaultTypes.AnyFunction;
  detectPid: DefaultTypes.AnyFunction;
  ensureModule: DefaultTypes.AnyFunction;
  flashFrame: DefaultTypes.AnyFunction;
  flushCookies: DefaultTypes.AnyFunction;
  flushDNSCache: DefaultTypes.AnyFunction;
  flushStorageData: DefaultTypes.AnyFunction;
  focus: DefaultTypes.AnyFunction;
  fullscreen: DefaultTypes.AnyFunction;
  generateSessionFromPid: DefaultTypes.AnyFunction;
  getAudioPid: DefaultTypes.AnyFunction;
  getCloudSync: DefaultTypes.AnyFunction;
  getCrashReporterMetadata: DefaultTypes.AnyFunction;
  getDesktopSourceFromPid: DefaultTypes.AnyFunction;
  getDiscordMemoryUsage: DefaultTypes.AnyFunction;
  getDiscordUtils: DefaultTypes.AnyFunction;
  getDispatch: DefaultTypes.AnyFunction;
  getEnableHardwareAcceleration: DefaultTypes.AnyFunction;
  getGPUDriverVersions: DefaultTypes.AnyFunction;
  getGameUtils: DefaultTypes.AnyFunction;
  getIdleMilliseconds: DefaultTypes.AnyFunction;
  getPidFromDesktopSource: DefaultTypes.AnyFunction;
  getSetting: DefaultTypes.AnyFunction;
  getVoiceEngine: DefaultTypes.AnyFunction;
  inputEventRegister: DefaultTypes.AnyFunction;
  inputEventUnregister: DefaultTypes.AnyFunction;
  invoke: DefaultTypes.AnyFunction;
  isAlwaysOnTop: DefaultTypes.AnyFunction;
  isSystemDarkMode: DefaultTypes.AnyFunction;
  makeChunkedRequest: DefaultTypes.AnyFunction;
  maximize: DefaultTypes.AnyFunction;
  minimize: DefaultTypes.AnyFunction;
  moduleVersions: DefaultTypes.AnyFunction;
  on: DefaultTypes.AnyFunction;
  paste: DefaultTypes.AnyFunction;
  purgeMemory: DefaultTypes.AnyFunction;
  readClipboard: DefaultTypes.AnyFunction;
  relaunch: DefaultTypes.AnyFunction;
  releaseChannel: DefaultTypes.AnyFunction;
  requireModule: DefaultTypes.AnyFunction;
  restore: DefaultTypes.AnyFunction;
  saveFile: DefaultTypes.AnyFunction;
  saveImage: DefaultTypes.AnyFunction;
  send: DefaultTypes.AnyFunction;
  setAlwaysOnTop: DefaultTypes.AnyFunction;
  setApplicationBackgroundColor: DefaultTypes.AnyFunction;
  setBackgroundThrottling: DefaultTypes.AnyFunction;
  setBadge: DefaultTypes.AnyFunction;
  setCandidateGamesCallback: DefaultTypes.AnyFunction;
  setCrashInformation: DefaultTypes.AnyFunction;
  setEnableHardwareAcceleration: DefaultTypes.AnyFunction;
  setFocused: DefaultTypes.AnyFunction;
  setForegroundProcess: DefaultTypes.AnyFunction;
  setGameCandidateOverrides: DefaultTypes.AnyFunction;
  setObservedGamesCallback: DefaultTypes.AnyFunction;
  setOnInputEventCallback: DefaultTypes.AnyFunction;
  setSystemTrayApplications: DefaultTypes.AnyFunction;
  setSystemTrayIcon: DefaultTypes.AnyFunction;
  setThumbarButtons: DefaultTypes.AnyFunction;
  setZoomFactor: DefaultTypes.AnyFunction;
  shouldDisplayNotifications: DefaultTypes.AnyFunction;
  showOpenDialog: DefaultTypes.AnyFunction;
  submitLiveCrashReport: DefaultTypes.AnyFunction;
  supportsFeature: DefaultTypes.AnyFunction;
  unblockDisplaySleep: DefaultTypes.AnyFunction;
  undetectPid: DefaultTypes.AnyFunction;
  updateCrashReporter: DefaultTypes.AnyFunction;
}
export interface User {
  avatar: string;
  avatarDecoration: undefined | string;
  bot: boolean;
  desktop: boolean;
  discriminator: string;
  email: null | string;
  flags: number;
  guildMemberAvatars: {
    [key: number]: string;
  };
  hasBouncedEmail: boolean;
  hasFlag: DefaultTypes.AnyFunction;
  id: string;
  isStaff: DefaultTypes.AnyFunction;
  isStaffPersonal: DefaultTypes.AnyFunction;
  mfaEnabled: boolean;
  mobile: boolean;
  nsfwAllowed: undefined | boolean;
  personalConnectionId: null | string;
  phone: null | string;
  premiumType: undefined | number;
  premiumUsageFlags: number;
  publicFlags: number;
  purchasedFlags: number;
  system: boolean;
  username: string;
  verified: boolean;
  createdAt: Date;
  tag: string;
}
export interface Permissions {
  ADD_REACTIONS: bigint;
  ADMINISTRATOR: bigint;
  ATTACH_FILES: bigint;
  BAN_MEMBERS: bigint;
  CHANGE_NICKNAME: bigint;
  CONNECT: bigint;
  CREATE_EVENTS: bigint;
  CREATE_GUILD_EXPRESSIONS: bigint;
  CREATE_INSTANT_INVITE: bigint;
  CREATE_PRIVATE_THREADS: bigint;
  CREATE_PUBLIC_THREADS: bigint;
  DEAFEN_MEMBERS: bigint;
  EMBED_LINKS: bigint;
  KICK_MEMBERS: bigint;
  MANAGE_CHANNELS: bigint;
  MANAGE_EVENTS: bigint;
  MANAGE_GUILD: bigint;
  MANAGE_GUILD_EXPRESSIONS: bigint;
  MANAGE_MESSAGES: bigint;
  MANAGE_NICKNAMES: bigint;
  MANAGE_ROLES: bigint;
  MANAGE_THREADS: bigint;
  MANAGE_WEBHOOKS: bigint;
  MENTION_EVERYONE: bigint;
  MODERATE_MEMBERS: bigint;
  MOVE_MEMBERS: bigint;
  MUTE_MEMBERS: bigint;
  PRIORITY_SPEAKER: bigint;
  READ_MESSAGE_HISTORY: bigint;
  REQUEST_TO_SPEAK: bigint;
  SEND_MESSAGES: bigint;
  SEND_MESSAGES_IN_THREADS: bigint;
  SEND_TTS_MESSAGES: bigint;
  SEND_VOICE_MESSAGES: bigint;
  SPEAK: bigint;
  STREAM: bigint;
  USE_APPLICATION_COMMANDS: bigint;
  USE_EMBEDDED_ACTIVITIES: bigint;
  USE_EXTERNAL_EMOJIS: bigint;
  USE_EXTERNAL_SOUNDS: bigint;
  USE_EXTERNAL_STICKERS: bigint;
  USE_SOUNDBOARD: bigint;
  USE_VAD: bigint;
  VIEW_AUDIT_LOG: bigint;
  VIEW_CHANNEL: bigint;
  VIEW_CREATOR_MONETIZATION_ANALYTICS: bigint;
  VIEW_GUILD_ANALYTICS: bigint;
}
export interface DiscordConstants {
  Permissions: Permissions;
}
export interface ClientThemesExperimentConfig {
  getCurrentConfig: () => {
    hasClientThemes: boolean;
    hasSidebarEditor: boolean;
  };
}
export interface Timeout extends DefaultTypes.AnyFunction {
  prototype: TimeoutPrototype;
}
export interface TimeoutPrototype {
  isStarted: DefaultTypes.AnyFunction;
  start: DefaultTypes.AnyFunction;
  stop: DefaultTypes.AnyFunction;
}
export interface PermissionStore {
  can: DefaultTypes.AnyFunction;
  canAccessGuildSettings: DefaultTypes.AnyFunction;
  canBasicChannel: DefaultTypes.AnyFunction;
  canImpersonateRole: DefaultTypes.AnyFunction;
  canManageUser: DefaultTypes.AnyFunction;
  canWithPartialContext: DefaultTypes.AnyFunction;
  computePermissions: DefaultTypes.AnyFunction;
  getChannelPermissions: DefaultTypes.AnyFunction;
  getChannelsVersion: DefaultTypes.AnyFunction;
  getGuildPermissionProps: DefaultTypes.AnyFunction;
  getPermissionUtils: DefaultTypes.AnyFunction;
  getGuildVersion: DefaultTypes.AnyFunction;
  getHighestRole: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isRoleHigher: DefaultTypes.AnyFunction;
  clearVars: DefaultTypes.AnyFunction;
}
export interface StreamPreviewStore {
  getIsPreviewLoading: DefaultTypes.AnyFunction;
  getPreviewURL: DefaultTypes.AnyFunction;
  getPreviewURLForStreamKey: DefaultTypes.AnyFunction;
}
export interface ClientThemesBackgroundStore {
  getLinearGradient: DefaultTypes.AnyFunction;
  initializev;
  __getLocalVars: DefaultTypes.AnyFunction;
  constructor: DefaultTypes.AnyFunction;
  gradientAngle: number | null | undefined;
  gradientPreset: object | null | undefined;
  isEditorOpen: boolean;
  isPreview: boolean;
  mobilePendingThemeIndex: number | null | undefined;
  setGradientPreset: DefaultTypes.AnyFunction;
}
export interface CurrentUserIdle {
  getIdleSince: DefaultTypes.AnyFunction;
  isAFK: DefaultTypes.AnyFunction;
  isIdle: DefaultTypes.AnyFunction;
}
export interface CloseButtonProps {
  size?: string;
  className?: string;
  style?: object;
  onClick?: () => void;
}
export interface ImagePickerProps {
  title?: string;
  note: string;
  children?: string;
  value: string;
  disabled?: boolean;
  onChange: (newvalue: string) => void;
}
export interface ImagePickerState {
  showClearButton: boolean;
  img: string;
}

export interface Settings {
  PTT: boolean;
  setBadge: boolean;
  streamPreview: boolean;
  fakePreview: string;
  noAFK: boolean;
  spotifyPremium: boolean;
  spotifyPause: boolean;
  maxAccounts: boolean;
  clientThemes: boolean;
  plainFolderIcon: boolean;
  favIMG: boolean;
}
