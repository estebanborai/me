// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type {
  BaseTranslation as BaseTranslationType,
  LocalizedString,
  RequiredParams,
} from 'typesafe-i18n';

export type BaseTranslation = BaseTranslationType;
export type BaseLocale = 'en';

export type Locales = 'en' | 'es' | 'hu';

export type Translation = RootTranslation;

export type Translations = RootTranslation;

type RootTranslation = {
  LAYOUT: {
    NAV: {
      /**
       * H​o​m​e
       */
      HOME: string;
      /**
       * N​o​t​e​s
       */
      NOTES: string;
    };
    FOOTER: {
      /**
       * M​a​d​e​ ​w​i​t​h​ ​�​�​ ​a​n​d​ ​❤​️​ ​b​y​ ​E​s​t​e​b​a​n​ ​B​o​r​a​i​ ​©​ ​{​s​t​a​r​t​}​ ​-​ ​{​e​n​d​}
       * @param {number} end
       * @param {number} start
       */
      COPYRGHT: RequiredParams<'end' | 'start'>;
      /**
       * S​o​u​r​c​e​ ​C​o​d​e
       */
      SOURCE_CODE: string;
    };
  };
  HOMEPAGE: {
    /**
     * H​i​ ​I​'​m​ ​{​n​a​m​e​}​,
     * @param {string} name
     */
    HI: RequiredParams<'name'>;
    /**
     * I​'​m​ ​a​ ​S​o​f​t​w​a​r​e​ ​D​e​v​e​l​o​p​e​r​ ​f​o​c​u​s​e​d​ ​o​n​ ​R​u​s​t​,​ ​S​v​e​l​t​e​ ​a​n​d​ ​T​y​p​e​S​c​r​i​p​t​.​ ​I​'​m​ ​p​a​s​s​i​o​n​a​t​e​ ​a​b​o​u​t​ ​W​e​b​ ​D​e​v​e​l​o​p​m​e​n​t​ ​a​n​d​ ​S​y​s​t​e​m​s​ ​P​r​o​g​r​a​m​m​i​n​g​.
     */
    ABOUT: string;
    /**
     * L​a​t​e​s​t​ ​N​o​t​e​s
     */
    LATEST_NOTES: string;
  };
};

export type TranslationFunctions = {
  LAYOUT: {
    NAV: {
      /**
       * Home
       */
      HOME: () => LocalizedString;
      /**
       * Notes
       */
      NOTES: () => LocalizedString;
    };
    FOOTER: {
      /**
       * Made with 🧉 and ❤️ by Esteban Borai © {start} - {end}
       */
      COPYRGHT: (arg: { end: number; start: number }) => LocalizedString;
      /**
       * Source Code
       */
      SOURCE_CODE: () => LocalizedString;
    };
  };
  HOMEPAGE: {
    /**
     * Hi I'm {name},
     */
    HI: (arg: { name: string }) => LocalizedString;
    /**
     * I'm a Software Developer focused on Rust, Svelte and TypeScript. I'm passionate about Web Development and Systems Programming.
     */
    ABOUT: () => LocalizedString;
    /**
     * Latest Notes
     */
    LATEST_NOTES: () => LocalizedString;
  };
};

export type Formatters = {};
