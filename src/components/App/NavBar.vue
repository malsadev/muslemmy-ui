<script setup>
import { UserService } from '@/services/UserService';
import { ref, computed } from 'vue';


function handleLogout() {
    console.log("inside handle logout");
    UserService.Instance.logout();
}

// const person = user
// const computedPerson = computed(() => person)

// if (UserService.Instance.userInfo.value === undefined) {
//     console.log("userInfo is undefined");
// } else {
//     console.log(UserService.Instance.userInfo.value);
//     const person = UserService.Instance.userInfo.value.local_user_view.person;
// }

const person = computed(() => UserService.Instance.userInfo.value?.local_user_view.person);

</script>

<template>
    <BNavbar v-b-color-mode="'dark'" toggleable="lg" variant="primary">
        <BNavbarBrand tag="RouterLink" to="/">SiteName</BNavbarBrand>
        <BNavbarToggle target="nav-collapse" />
        <BCollapse id="nav-collapse" is-nav>
            <BNavbarNav>
                <BNavItem tag="RouterLink" to="/Communities">Communities</BNavItem>
                <BNavItem tag="RouterLink" to="/CreatePost">Create Post</BNavItem>
                <BNavItem tag="RouterLink" to="/CreateCommunity">Create Community</BNavItem>
            </BNavbarNav>
            <!-- Right aligned nav items -->
            <BNavbarNav class="ms-auto mb-2 mb-lg-0">
                <!-- <BNavItemDropdown text="Lang" right>
        <BDropdownItem href="#">EN</BDropdownItem>
        <BDropdownItem href="#">ES</BDropdownItem>
        <BDropdownItem href="#">RU</BDropdownItem>
        <BDropdownItem href="#">FA</BDropdownItem>
      </BNavItemDropdown> -->
                <template v-if="person">
                    <BNavItemDropdown right>
                        <!-- Using 'button-content' slot -->

                        <template #button-content>
                            <em>{{ person.name }}</em>
                        </template>
                        <BDropdownItem tag="RouterLink" to="/u/{{ person.name }}">Profile</BDropdownItem>
                        <BDropdownItem tag="Button" @click="handleLogout">Sign Out</BDropdownItem>
                    </BNavItemDropdown>
                </template>
                <template v-else>
                    <h1>{{ person }}</h1>
                    <BNavItem tag="RouterLink" to="/SignIn">Sign In</BNavItem>
                    <BNavItem tag="RouterLink" to="/AdminRegistration">Register</BNavItem>
                </template>
            </BNavbarNav>
            <BNavForm class="d-flex">
                <BFormInput class="me-2" placeholder="Search" />
                <BButton type="submit" variant="outline-success">Search</BButton>
            </BNavForm>
        </BCollapse>
    </BNavbar>
</template>