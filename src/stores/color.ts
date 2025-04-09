import { defineStore } from 'pinia';

export const useColorStore = defineStore('color', {
    state: () => ({}),
    actions: {
        getColorClasses(color: string) {
            switch (color) {
                default:
                    return {
                        bgClass: `bg-gray-100`,
                        textClass: `text-gray-800`,
                    };
                case 'pink':
                    return {
                        bgClass: `bg-pink-100`,
                        textClass: `text-pink-800`,
                    };
                case 'yellow':
                    return {
                        bgClass: `bg-yellow-100`,
                        textClass: `text-yellow-800`,
                    };
                case 'teal':
                    return {
                        bgClass: `bg-teal-100`,
                        textClass: `text-teal-800`,
                    };
                case 'red':
                    return {
                        bgClass: `bg-red-100`,
                        textClass: `text-red-800`,
                    };
                case 'blue':
                    return {
                        bgClass: `bg-blue-100`,
                        textClass: `text-blue-800`,
                    };
                case 'green':
                    return {
                        bgClass: `bg-green-100`,
                        textClass: `text-green-800`,
                    };
                case 'indigo':
                    return {
                        bgClass: `bg-indigo-100`,
                        textClass: `text-indigo-800`,
                    };
                case 'purple':
                    return {
                        bgClass: `bg-purple-100`,
                        textClass: `text-purple-800`,
                    };
                case 'orange':
                    return {
                        bgClass: `bg-orange-100`,
                        textClass: `text-orange-800`,
                    };
                case 'amber':
                    return {
                        bgClass: `bg-amber-100`,
                        textClass: `text-amber-800`,
                    };
                case 'lime':
                    return {
                        bgClass: `bg-lime-100`,
                        textClass: `text-lime-800`,
                    };
                case 'emerald':
                    return {
                        bgClass: `bg-emerald-100`,
                        textClass: `text-emerald-800`,
                    };
                case 'cyan':
                    return {
                        bgClass: `bg-cyan-100`,
                        textClass: `text-cyan-800`,
                    };
                case 'sky':
                    return {
                        bgClass: `bg-sky-100`,
                        textClass: `text-sky-800`,
                    };
                case 'violet':
                    return {
                        bgClass: `bg-violet-100`,
                        textClass: `text-violet-800`,
                    };
                case 'fuchsia':
                    return {
                        bgClass: `bg-fuchsia-100`,
                        textClass: `text-fuchsia-800`,
                    };
                case 'rose':
                    return {
                        bgClass: `bg-rose-100`,
                        textClass: `text-rose-800`,
                    };
                case 'stone':
                    return {
                        bgClass: `bg-stone-100`,
                        textClass: `text-stone-800`,
                    };
                case 'zinc':
                    return {
                        bgClass: `bg-zinc-100`,
                        textClass: `text-zinc-800`,
                    };
                case 'neutral':
                    return {
                        bgClass: `bg-neutral-100`,
                        textClass: `text-neutral-800`,
                    };
                case 'slate':
                    return {
                        bgClass: `bg-slate-100`,
                        textClass: `text-slate-800`,
                    };
            }
        }

    }
});