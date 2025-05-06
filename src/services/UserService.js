// this user service should handle autheticattion of the user
// and holds basic user data
// it should handle things like settings cookies clearing them etc
import Cookies from "js-cookie";
import { lemmyClient } from "./lemmyService";
import router from "@/router";
import { ref } from "vue";

// const router = useRouter();

const authCookieName = "jwt"
function setAuthCookie(jwt) {
    document.cookie = Cookies.set(authCookieName, jwt, { path: "/", sameSite: "Lax" })
}

export class UserService {
    userInfo = ref(undefined);
    authInfo = undefined;

    constructor() {
        this.#setAuthInfo(); //We only do this if needed, for example a cookie could not be stored
    }

    // function to login
    login(serverAuth) {

        // need to set cookie and call set auth info
        setAuthCookie(serverAuth.jwt);
        this.#setAuthInfo()
    }


    // function to logout
    logout() {
        this.userInfo.value = undefined;
        this.authInfo = undefined;

        // remove sesssion with backend
        lemmyClient.logout().then(res => console.log(res));
        // clear cookies
        Cookies.remove(authCookieName);

        router.replace({ path: "/" });

        // check if a redirect is necessary
    }

    // we also need a function that allows us to check the authentication state of the user
    auth() {
        if (this.authInfo) {
            return true
        }

        return false;
    }


    #setAuthInfo() {
        // if there is a cookie already, we set the authIfo
        // use a variable for cookie name
        const auth = Cookies.get(authCookieName)

        if (auth) {
            // use previous jwt token for backend interactions

            lemmyClient.setHeaders({ Authorization: `Bearer ${auth}` });
            console.log(lemmyClient.getHeaders())
            // don't need claims
            this.authInfo = auth;
        }

    }


    static get Instance() {
        if (!this.instance) {
            this.instance = new UserService();
        }
        return this.instance;

    }
}