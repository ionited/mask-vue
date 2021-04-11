import { Mask } from '@ionited/mask';
import { Directive } from 'vue';

function addMask(el: HTMLElement, input: HTMLInputElement, options: any) {
  (el as any).mask = Mask(input, options);
}

export const mask: Directive = {
  mounted(el: HTMLElement, binding) {
    let input: HTMLInputElement;

    if (el.nodeName === 'INPUT') {
      input = el as HTMLInputElement;

      addMask(el, input, binding.value);
    } else {
      input = el.querySelector('input') as HTMLInputElement;

      if (input) {
        addMask(el, input, binding.value);
      } else if ((el as any).getInputElement) {
        (el as any).getInputElement()
        .then((input: HTMLInputElement) => addMask(el, input, binding.value));
      }
    }
  },

  unmounted(el: any) {
    el.mask.instance.destroy();
  }
}

export function register(name: string, mask: any) {
  return Mask.register(name, mask);
}

export { MaskCore } from '@ionited/mask/core';
