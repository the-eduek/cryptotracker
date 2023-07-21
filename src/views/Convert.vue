<template>
    <div class="py-16 h-screen min-w-full md:pt-20">
        <form class="m-auto py-6 max-w-5xl relative">
            <div class="w-10/12 m-auto">
                <input type="number" ref="amtInput" placeholder="Enter amount here" min="0" v-model="amount">
            </div>
            <transition name="toast">            
                <Toast v-if="emptyValue"/>
            </transition>

            <div class="flex flex-col md:flex-row items-center py-10 md:justify-center">
                <select class="p-1 rounded border" v-model="convertFrom">
                    <option value="NGN">Nigerian Naira [NGN]</option>
                    <option value="USD">US Dollar [USD]</option>
                    <option value="GBP">British Pound [GBP]</option>
                    <option value="EUR">Euro [EUR]</option>
                </select>
                
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-24 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-8 md:hidden" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                    </svg>
                </p>

                <select class="p-1 rounded border" v-model="convertTo">
                    <option value='BNB'>Binance [BNB]</option>
                    <option value='BTC'>Bitcoin [BTC]</option>
                    <option value="ADA">Cardano [ADA]</option>
                    <option value="DOGE">Dogecoin [DOGE]</option>
                    <option value="ETH">Ethereum [ETH]</option>
                    <option value="XRP">Ripple [XRP]</option>
                    <option value="SHIB">Shiba Inu [SHIB]</option>
                    <option value="SOL">Solana [SOL]</option>
                </select>
            </div>

            <div>
                <button class="py-1 w-1/2 text-lg font-bold rounded bg-purple-700 text-white" @click="toggleModal">Convert</button>
            </div>
        </form>
        <ConvertModal v-if="showModal" @closeEvent="toggleModal" :amt="convertedAmt" :coin="convertTo" @clearEvent="clearInput"/>
    </div>
</template>

<script>
import ConvertModal from '../components/ConvertModal.vue'
import Toast from '../components/Toast.vue'
import getRates from '../api/getRates.js'
import { ref, onMounted } from 'vue'

export default {
    components: { ConvertModal, Toast },
    setup() {
        const amount = ref(null)
        const amtInput = ref(null)
        const emptyValue = ref(false)
        const convertedAmt = ref()
        const convertFrom = ref('NGN')
        const convertTo = ref('BTC')
        const rates = ref()
        const showModal = ref(false)

        onMounted(() => {
            getRates().then(data => {     
                rates.value = data
            }).catch(err => {
                console.log(err)
            }) 
        })

        const calculate = (number) => {
            const coin = convertTo.value;
            const currency = convertFrom.value;
            const rateList = rates.value;

            convertedAmt.value = number / rateList[coin][currency]
        }

        const toggleModal = () => {
            if (amount.value) {
                showModal.value = !showModal.value
                calculate(amount.value)
            } else emptyValue.value = true
            setTimeout(()=> {
                emptyValue.value = false
            }, 3500)
            amtInput.value.focus()
        }

        const clearInput = () => {
            amount.value = ''
        }
        
        return { showModal, amount, toggleModal, emptyValue, amtInput, convertFrom, convertTo, convertedAmt, clearInput }
    }
}
</script>

<style scoped>
@keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}

input[type="number"] {
    -moz-appearance: textfield;
    @apply border w-full p-2 pt-2.5 rounded-lg text-lg;
}

.toast-enter-active {
    animation: fade 300ms ease-in-out;
}
    
.toast-leave-to {
    opacity: 0;
}

.toast-leave-active {
    transition: all 300ms ease-in-out;
}
</style>