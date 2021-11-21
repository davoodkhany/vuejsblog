import {ref} from 'vue'

export default function ModalHook() {

    const ActiveModal = ref(false);

    function ShowModals() {
        ActiveModal.value = true;
    }

    function CloseModal() {
        ActiveModal.value = false;
    }
    return [
        ActiveModal, ShowModals, CloseModal
    ]
}