<template>
  <div class="modal-backdrop">
    <div class="cusotm-modal">
      <header class="modal-header">
        <slot name="header">
          Add a Note
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <form>
            <div class="form-check" style="margin-bottom: 7px;">
              <input class="form-check-input" type="checkbox" id="formCheck-1" v-model="isPublic">
              <label class="form-check-label" for="formCheck-1">Make Public</label>
            </div>
            <p class="text-info" style="margin-bottom:0px;">What Verse will this note be applied to</p>

            <p class="text-info" style="margin-bottom:20px;" v-if="startVerse == endVerse ? true : false">&nbsp; {{bookLabel + ' ' + chapter + ':' + startVerse}}</p>
            <p class="text-info" style="margin-bottom:20px;" v-if="startVerse != endVerse ? true : false">&nbsp; {{bookLabel + ' ' + chapter + ':' + startVerse + '-' + endVerse}}</p>
            <p class="text-danger" style="margin-bottom:10px; font-weight:bold;" v-if="error">End verse number can't be lower than start verse number.</p>
            
            <div class="d-lg-flex justify-content-lg-center align-items-lg-start" v-if="noteMode == 0 ? false : true">
                <p style="margin-top: 2px; min-width: 50%;">Select Verse Number:</p>

                <p style="margin-top: 2px;margin-right: 10px;margin-left: 10px;"> From </p>
                <select class="form-select" v-model="startVerse" @change="changeVerseLimit">
                    <option v-for="n in verseCnt" :value="n">{{ n }}</option>
                </select>
                <p style="margin-top: 2px;margin-right: 10px;margin-left: 10px;"> To </p>
                <select class="form-select" v-model="endVerse" @change="changeVerseLimit">
                    <option v-for="n in verseCnt" :value="n">{{ n }}</option>
                </select>
            </div><small class="text-info">Note</small><textarea class="form-control" placeholder="Note" v-model="note"></textarea>
        </form>
      </section>

      <footer class="modal-footer">
        <button class="btn btn-light" type="button" @click="close">Close</button>
        <button class="btn btn-primary" type="button" @click="save">Save</button>
      </footer>
    </div>
  </div>
</template>
<script>
    import config from "../../config";
    export default {
        name: 'ComentModal',
        data () {
            return {
                noteMode : 1, // 0 : when click verse in bibble area, 1: when click plus button in bibble area
                bookLabel: 'Genesis',
                book: 1,
                chapter: 1,
                // verse: 1,
                verseCnt : 1,
                startVerse: 1,
                endVerse: 1,
                error: false,
                note: '',
                isPublic: false,
            }
        },
        methods: {
            close() {
                this.$root.$emit('closeComentModal');
            },
            pad(n, length) {
              var len = length - (''+n).length;
              return (len > 0 ? new Array(++len).join('0') : '') + n
            },
            save() {
              const params = new URLSearchParams();       // Add params for post...
              params.append('note', this.note);
              params.append('visibility', this.isPublic);
              var bibleLocations = '';
              for(var i = this.startVerse; i <= this.endVerse; i++)
              {
                bibleLocations += this.book + this.pad(this.chapter, 3) + this.pad(i, 3);
                if(i != this.endVerse)
                  bibleLocations += ',';
              }
              params.append('bibleLocations', bibleLocations);
              console.log(this.note, ':', this.isPublic, ':', bibleLocations);

              this.axios.post(config.API_LOCATION + 'notes', params, {headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  Authorization: 'Bearer ' + localStorage.getItem("accessToken"),
              }})
              .then((response) => {
                  this.$root.$emit('closeComentModal');
                  
                  this.axios.get(config.API_LOCATION + 'bible-book-numbers',{
                  })
                  .then((response) => {
                      this.$root.$emit('updateNoteList', response.data, this.book, this.chapter); 
                  })
                  .catch(function (error) {
                      console.log(error) // error log
                  })
                  

                  if(response.data != "failed"){  // If the adding note success,

                  }else{  // If Failed
                  }
              })
              .catch(function (error) {
                  console.log(error);
              });
            },
            changeVerseLimit() {
              if(this.startVerse > this.endVerse)
                this.error = true;
              else
                this.error = false;
            }
        },
        mounted() {
          this.$root.$on('setBibbleInfo', (_bookLabel, _book, _chapter, _verseCnt) => {
              console.log('bible info update');
              this.bookLabel = _bookLabel;
              this.book = _book;
              this.chapter = _chapter;
              this.verseCnt = _verseCnt;
          });

          this.$root.$on('setNoteModalMode', (_mode, _verse) => {
              this.noteMode = _mode;
              this.startVerse = _verse;
              this.endVerse = _verse;
          });

          this.$root.$on('openCommentModal', ()=>{
            this.note = '';
          })
        }
    }
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cusotm-modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  @media (max-width:450px) {
    .cusotm-modal{
      width: 100%;
    }
  }
  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: center;
    justify-content: center;
  }
  .btn {
      padding: 5px 15px;
  }

  .modal-body {
    position: relative;
    padding: 20px;
  }

  .btn-close {
    margin: 0px !important;

    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
