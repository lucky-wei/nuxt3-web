<template>
    <n-drawer v-model:show="active" :width="502" :placement="placement">
        <n-drawer-content title="颜色选择器">
            <n-form :model="model">
                <n-form-item label="颜色（#18A058）" path="color">
                    <n-color-picker v-model:value="model.color" @update:value="changeColor" />
                </n-form-item>
            </n-form>
        </n-drawer-content>
    </n-drawer>
    <n-button @click="activate('right')">
        右
    </n-button>
</template>
<script>
import { NDrawer, NDrawerContent, NForm, NFormItem, NColorPicker, NButton } from 'naive-ui'
import { defineComponent, reactive } from 'vue'
export default defineComponent({
    components: {
        NDrawer,
        NDrawerContent,
        NForm,
        NFormItem,
        NColorPicker,
        NButton
    },
    setup() {
        const model = reactive({
            color: '#18A058'
        })
        const theme = useTheme()
        const changeColor = (value) => {
            theme.value["--primary-menu-bg"] = value
        }
        const active = ref(false)
        const placement = ref('right')
        const activate = (place) => {
            active.value = true
            placement.value = place
        }
        return {
            changeColor,
            active,
            placement,
            activate,
            model,
            colorRule: {
                trigger: 'change',
                validator(_, value) {
                    if (value !== '#18A058') return new Error('不许改颜色')
                }
            }
        }
    }
})
</script>
