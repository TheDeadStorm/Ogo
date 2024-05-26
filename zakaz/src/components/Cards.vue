<script setup lang="ts">
import Divider from 'primevue/divider'
import { ref } from 'vue'

interface Card {
	id: number
	name: string
	isEnd: boolean
	isFirstAgreement: boolean
	isSecondAgreement: boolean
}

const cards = ref<Card[]>([
	{
		id: 0,
		name: 'Формирование грузовой базы',
		isEnd: true,
		isFirstAgreement: true,
		isSecondAgreement: true,
	},
	{
		id: 1,
		name: 'Расчет потоков',
		isEnd: false,
		isFirstAgreement: false,
		isSecondAgreement: false,
	},
	{
		id: 2,
		name: 'Данил сосал дымные палки',
		isEnd: true,
		isFirstAgreement: true,
		isSecondAgreement: false,
	},
])
</script>

<template>
	<div h-200 w-180 b-solid b-blue flex flex-col>
		<div text-3 bg-black text-white w-full mb-3>
			<p pl-4 p-2 font-100>Сводная информация по проекту</p>
		</div>
		<!-- Шаблон для карточек -->
		<DataView data-key="cards" v-for="card in cards">
			<!-- Карточка -->
			<div
				:class="card.isEnd ? 'b-l-green-500' : 'b-l-red-500'"
				:key="card.id"
				m-3
				b-solid
				rounded-2
				p-3
				b-gray-200
				shadow-xl
				flex
				flex-row
			>
				<!-- Основная часть -->
				<div me-auto>
					<!-- Header boolean -->
					<span
						v-if="card.isFirstAgreement"
						text-green-700
						text-3
						bg-green-100
						inline
						rounded-2
						px-2
					>
						<i class="pi pi-check-circle" text-3></i>
						Расчет произведен
					</span>
					<span
						v-else
						text-red-700
						font-700
						text-3
						bg-red-100
						inline
						rounded-2
						px-2
					>
						<i class="pi pi-info-circle" text-3></i>
						Доработать
					</span>
					<!-- Название карточки -->
					<div font-bold font-1000 text-4.3>{{ card.name }}</div>
					<!-- Сыылка на карточку -->
					<a href="#" underline color-dark font-bold text-3
						>Посмотреть расчет</a
					>
					<!-- Footer boolean -->
					<div>
						<span text-3 mr-5 text-gray-400>
							Согласован мною
							<span v-if="card.isFirstAgreement" text-green-700>
								<i class="pi pi-check" text-3 inline rounded></i>
								Согласован
							</span>
							<span v-else>
								<span text-red-700 text-3 inline rounded>
									<i class="pi pi-exclamation-circle" text-3 inline rounded>
									</i>
									Не согласован
								</span>
							</span>
						</span>
						<span text-3 mr-5 text-gray-400>
							Согласован тобою
							<span
								v-if="card.isSecondAgreement"
								text-green-700
								text-3
								mr-2
								text-gray-400
							>
								<i class="pi pi-check" text-3 inline rounded></i>
								Cогласован
							</span>
							<span v-else text-3 mr-2 text-gray-400>
								<span text-3 text-red-700>Не согласован </span>
								<i class="pi pi-question-circle" text-3 inline rounded></i>
							</span>
						</span>
					</div>
				</div>
				<Divider layout="vertical" text-color-gray-300 border-solid border-1 />
				<div w-35>
					<div text-3>Выполнено в срок</div>
					<div font-600>30 февраля 2021 г.</div>
					<div text-3>Срок исполенения</div>
					<div font-600>30 июня 2022 г.</div>
				</div>
			</div>
		</DataView>
	</div>
</template>

<style scoped></style>
