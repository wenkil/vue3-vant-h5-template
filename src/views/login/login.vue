<template>
	<div class="login-container">
		<van-form @submit="onSubmit">
			<van-cell-group inset>
				<van-field
					v-model="username"
					:name="$t('username')"
					:label="$t('username')"
					:placeholder="$t('username_placeholder')"
					:rules="[{ required: true, message: $t('username_required') }]"
				/>
				<van-field
					v-model="password"
					type="password"
					:name="$t('password')"
					:label="$t('password')"
					:placeholder="$t('password_placeholder')"
					:rules="[{ required: true, message: $t('password_required') }]"
				/>
			</van-cell-group>
			<div style="margin: 16px">
				<van-button round block type="primary" native-type="submit">
					{{ $t("login") }}
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const username = ref("")
const password = ref("")

const onSubmit = () => {
	// 这里应该有登录逻辑,但现在我们直接跳转到home页
	router.push("/home")
}
</script>

<style scoped>
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
</style>
