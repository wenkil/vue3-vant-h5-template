<template>
	<div class="home">
		<h3>{{ $t("home") }}</h3>
		<van-button type="primary" @click="goToLogin" size="small">{{
			$t("login")
		}}</van-button>
		<van-button type="primary" @click="goToSession" size="small">{{
			$t("session_test")
		}}</van-button>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

const goToLogin = () => {
	router.push("/login")
}

const goToSession = () => {
	router.push("/session")
}
</script>

<style lang="less" scoped>
.home {
	padding: 20px;
}

.van-button {
	margin-right: 10px;
}
</style>
