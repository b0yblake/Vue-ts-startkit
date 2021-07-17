import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// add custom fa free brand & solid types (...)
// https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=search
import { faGithub, faSearchengin } from "@fortawesome/free-brands-svg-icons";
import {
	faPlay,
	faCog,
	faChevronLeft,
	faMicrophone,
	faSearch,
	faHeart,
	faArrowLeft,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faGithub,
	faPlay,
	faCog,
	faChevronLeft,
	faMicrophone,
	faSearchengin,
	faSearch,
	faHeart,
	faArrowLeft,
	faTimes
);

// Excute the libs
// createApp(App).component("fa", FontAwesomeIcon).mount("#app");
export default function loadComponent(app: any) {
	app.component("fa", FontAwesomeIcon);
}
