import Welcome from "./components/HelloWorld.vue"
import ContactForm from "./components/ContactForm.vue"
import CorporativeEvents from "./components/CorporativeEvents.vue"
import YoutubersText from "./components/YoutubersText.vue"
import AdvertisingText from "./components/AdvertisingText.vue"


export default[
    { path: '/', name: 'Welcome', component: Welcome },
    { path: '/contacto', name: 'ContactForm', component: ContactForm },
    { path: '/eventos', name: 'CorporativeEvents', component: CorporativeEvents },
    { path: '/creadores', name: 'YoutubersText', component: YoutubersText },
    { path: '/publicidad', name: 'AdvertisingText', component: AdvertisingText }
]