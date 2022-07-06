import { Mask } from '@ionited/mask';
import { Directive, DirectiveBinding } from 'vue';

const addMask = (el: any, input: HTMLInputElement, options: any) => el.mask = Mask(input, options);

const getInput = (el: HTMLElement, binding: DirectiveBinding) => {
  if (el.nodeName === 'INPUT') addMask(el, el as HTMLInputElement, binding.value);
  else {
    const input = el.querySelector('input') as HTMLInputElement;

    if (input) addMask(el, input, binding.value);
    else setTimeout(() => getInput(el, binding));
  }
}

export const mask: Directive = {
  mounted(el: HTMLElement, binding) {
    getInput(el, binding);
  },

  unmounted(el) {
    el.mask.instance.destroy();
  }
}

export const register = (name: string, mask: any) => Mask.register(name, mask);

export { MaskCore } from '@ionited/mask/core';
