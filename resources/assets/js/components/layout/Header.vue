<template>
    <header>

        <section class="flex justify-between">
            <!-- for admin/employee -->
            <!-- <div v-if="user.isClient">
                <div>Cabinet</div>
                <div>Dashboard</div>
                <div>Checklist</div>
                <div>Download document</div>
                <div>Chat</div>
                <div>Notification</div>
            </div> -->

            <!-- for client -->
            <div class="flex justify-between w-full">
                <button v-for="link in links">
                    <router-link :to="link.route">{{ link.text }}</router-link>
                </button>
            </div>
        </section>

    </header>
</template>

<script setup>
import { links } from '../../../constants/links';

</script>

<style>

</style>
