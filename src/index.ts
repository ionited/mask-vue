import { Mask } from '@ionited/mask';
import { Directive } from 'vue';

export const mask: Directive = {
  mounted(el: HTMLElement, binding) {
    let input: HTMLInputElement;

    if (el.nodeName === 'INPUT') {
      input = el as HTMLInputElement;
    } else {
      input = el.querySelector('input') as HTMLInputElement;
    }

    (el as any).mask = Mask(input, binding.value);
  },

  unmounted(el: any) {
    el.mask.instance.destroy();
  }
}

export function register(name: string, mask: any) {
  return Mask.register(name, mask);
}

export { MaskCore } from '@ionited/mask/core';
