import { useSpinnerStore } from '../stores/spinnerStore';
const spinnerStore = useSpinnerStore();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['loader']} */ ;
// CSS variable injection 
// CSS variable injection end 
if (__VLS_ctx.spinnerStore.isVisible) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "loader" },
    });
}
/** @type {__VLS_StyleScopedClasses['loader']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            spinnerStore: spinnerStore,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
