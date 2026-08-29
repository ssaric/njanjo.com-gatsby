import Philipa from './images/philipa.png';
import Comtrade from './images/ct_logo.png';
import Evomecs from './images/evomecs_logo.png';
import Socex from './images/socialexplorer_logo.png';
import GlobalGPS from './images/globalgps_logo.png';
import Journee from './images/journee.png';
import Prezi from './images/prezi.png';
import { experience } from './cv';

type Logo = { src: string };

const logos: Record<string, Logo> = {
    'Prezi': Prezi,
    'Journee Technologies GmbH': Journee,
    'Philipa Legal Tech': Philipa,
    'Comtrade': Comtrade,
    'Evomecs GmbH': Evomecs,
    'Social Explorer Inc.': Socex,
    'GlobalGPS BH': GlobalGPS,
};

export default experience.map(e => ({ ...e, logo: logos[e.title] }));
