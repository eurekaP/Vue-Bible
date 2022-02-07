<template>
    <div class="container" style="height: 100vh;padding-top: 50px; padding-right:0px; padding-left: 0px;">
        <div class="row d-flex justify-content-center" style="height: 100vh;">
            <bible></bible>
            <bible v-if="layoutMode > 1 ? true : false"></bible>
            <bible v-if="layoutMode > 2 ? true : false"></bible>
            <tools-right v-show="toolMode == 1"></tools-right>
            <tools-bottom v-show="toolMode == 2"></tools-bottom>
            <coment-modal v-show="isModalVisible"></coment-modal>
        </div>
    </div>
</template>

<script>    // Home screen vue - no scripts (There are only UI)
import Bible from './components/Bible.vue';
import ToolsRight from './components/ToolsRight.vue';
import ToolsBottom from './components/ToolsBottom.vue';
import ComentModal from './components/ComentModal.vue';

export default {
    name: 'Home',
    data () {
        return {
            layoutMode : 1,
            toolMode: 0,
            isModalVisible: false,
            bookLabel: 'Genesis',
            book: 1,
            chapter: 1,
            verse: 1,
        }
    },
    components: {
        Bible,
        ToolsRight,
        ToolsBottom,
        ComentModal,
    },
    mounted(){
        this.showComentModal = false;

        this.$root.$on('layoutChangeEvent', _layoutMode => {
            // console.log(layoutMode);
            this.layoutMode = _layoutMode;
        });
        this.$root.$on('toolModeChangeEvent', _toolMode => {
            this.toolMode = _toolMode;
        });

        this.$root.$on('closeComentModal', ()=>{
            this.isModalVisible = false;
        })

        this.$root.$on('openCommentModal', ()=>{
            this.isModalVisible = true;
        })
    },
    methods: {
      showModal() {
        this.isModalVisible = true;

      },
      closeModal() {
        
      }
    },
}
</script>
