import Interface from '@directus/extensions-sdk/Interface';
import { ref, onMounted } from 'vue';

export default Interface({
  id: 'hide-companies',
  name: 'Hide Companies',
  icon: 'eye-slash',
  description: 'Hides the Companies collection for non-admin users',
  component: {
    template: `<div v-if="!isHidden"><slot /></div>`,
    setup() {
      const { getUser } = useAuth();
      const isHidden = ref(false);

      onMounted(async () => {
        const user = await getUser();
        const userRole = user.role;

        if (userRole !== 'admin') {
          isHidden.value = true;
        }
      });

      return {
        isHidden,
      };
    },
  },
});
