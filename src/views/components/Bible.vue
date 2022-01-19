<template>
    <div class="col bible" style="height: 100%;overflow-y: scroll;padding-bottom: 46px;">
        <div class="sticky-top sticky" style="background: #ffffff;padding-top: 4px;">
            <div class="row sticky-top">
                <div class="col"><button class="btn btn-light" type="button"><i class="icon ion-ios-arrow-back"></i></button></div>
                <div class="col d-lg-flex justify-content-lg-center">
                    <input type="search" placeholder="Genesis 1" style="border-style: none;border-bottom: 1px solid rgb(111,165,245);" v-model="gensis_filter" @change="filterChange">
                </div>
                <div class="col text-end">
                    <select style="opacity: 0.53;border-style: none;" v-model="translation">
                        <option value="kjv" selected="">KJV</option>
                        <option value="ylt">YLT</option>
                        <option value="dby">DBY</option>
                    </select><button class="btn btn-light" type="button"><i class="icon ion-ios-arrow-forward"></i></button></div>
            </div>
        </div>
        <div class="d-flex" style="justify-content: right;">
            <i class="fa fa-align-left align-button" v-bind:class="{'active-align': alignment == 'left'}" v-on:click="setAlignment('left')"></i>
            <i class="fa fa-align-center align-button" v-bind:class="{'active-align': alignment == 'center'}" v-on:click="setAlignment('center')"></i>
            <i class="fa fa-align-right align-button" v-bind:class="{'active-align': alignment == 'right'}" v-on:click="setAlignment('right')"></i>
            <i class="fa fa-list-ol align-button" v-bind:class="{'active-align': alignment == 'justify'}" v-on:click="setAlignment('justify')"></i>

        </div>
        <p id="bible-text" v-bind:class="[(alignment == 'left' || alignment == 'justify') ? 'text-start' : (alignment == 'center' ? 'text-center' : 'text-end')]" v-html="bibble_text">&nbsp;
            <span>
                <span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">1</span>
                In the beginning God created the heaven and the earth.
            </span>
            <span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">2</span>And the earth was without form, and void; and darkness&nbsp;<em>was</em>&nbsp;upon the face of the deep. And the Spirit of God moved upon the face of the waters.</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">3</span>And God said, Let there be light: and there was light</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">4</span>And God saw the light, that&nbsp;<em>it was</em>&nbsp;good: and God divided the light from the darkness</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">5</span>And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">6</span>And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">7</span>And God made the firmament, and divided the waters which&nbsp;<em>were</em>&nbsp;under the firmament from the waters which&nbsp;<em>were</em>&nbsp;above the firmament: and it was so.</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">8</span>And God called the firmament Heaven. And the evening and the morning were the second day.</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">9</span>And God said, Let the waters under the heaven be gathered together unto one place, and let the dry&nbsp;<em>land</em>&nbsp;appear: and it was so.</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">10</span>And God called the dry&nbsp;<em>land</em>&nbsp;Earth; and the gathering together of the waters called he Seas: and God saw that&nbsp;<em>it was</em>&nbsp;good.</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">11</span>And God said, Let the earth bring forth grass, the herb yielding seed,&nbsp;<em>and</em>&nbsp;the fruit tree yielding fruit after his kind, whose seed&nbsp;<em>is</em>&nbsp;in itself, upon the earth: and it was so.&nbsp;</span><span id="12"><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">12</span>And the earth brought forth grass,&nbsp;<em>and</em>&nbsp;herb yielding seed after his kind, and the tree yielding fruit, whose seed&nbsp;<em>was</em>&nbsp;in itself, after his kind: and God saw that&nbsp;<em>it was</em>&nbsp;good.&nbsp;</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">13</span>And the evening and the morning were the third day.</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">14</span>And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:</span><span><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">15</span>and let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.</span>
        </p>
        <div class="sticky-top" style="background: #ffffff;">
            <div class="row sticky-top">
                <div class="col"><button class="btn btn-light" type="button"><i class="icon ion-ios-arrow-back"></i></button></div>
                <div class="col">
                    <h4 class="text-center text-info sticky-top" style="background: #ffffff;" >{{ chapterLabel }}</h4>
                </div>
                <div class="col text-end"><button class="btn btn-light" type="button"><i class="icon ion-ios-arrow-forward"></i></button></div>
            </div>
        </div>
    </div>
</template>

<script>    
import config from "../../config";

export default {
    name: 'Bibble',
    data(){
        return {
            gensis_filter : '',
            bibble_text: '&nbsp;',
            translation: 'kjv',
            alignment: 'center',
            bookLabel: [],
            chapterLabel: 'Genesis 1',
        }
    },
    components: {

    },
    mounted(){
        this.gensis_filter = 'Genisis 1:1';
        this.updateBibleArea(this.gensis_filter);

        this.axios.get(config.API_LOCATION + 'bible-book-numbers')
        .then((response) => {
            this.bookLabel = response.data;
            console.log(this.bookLabel[1]);
        })
        .catch(function (error) {
            console.log(error) // error log
        })
    },
    methods: {
        filterChange: function(){
            console.log('changed:', this.gensis_filter);
            console.log('changed:', this.translation);

            this.updateBibleArea(this.gensis_filter);
        },
        updateBibleArea: function(filter_str) {
            var _chapter = '';
            this.axios.get(config.API_LOCATION + 'bible-input2/' + this.translation + '/' + filter_str)
                .then((response) => {
                    // this.college_detail = response.data;  //put into data variable
                    // console.log(response.data);
                    var _bibble_text =  '&nbsp';
                    if(response.data.length > 0)
                        _chapter = response.data[0]['chapter'];

                    var chapterLabel = this.bookLabel[response.data[0]['book']] + ' ' + _chapter;
                    this.chapterLabel = chapterLabel;

                    for(var i = 0; i < response.data.length; i++)
                    {
                        _bibble_text += '<span class="single-bible"><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">' + response.data[i]['verse'] + '</span>' + response.data[i]['text'] + '</span>';   
                    }
                    this.bibble_text = _bibble_text;
                })
                .catch(function (error) {
                    console.log(error) // error log
                })
        },
        setAlignment: function(_alignment) {
            this.alignment = _alignment;
            
            if(_alignment == 'justify')
            {
                this.axios.get(config.API_LOCATION + 'bible-input2/' + this.translation + '/' + this.gensis_filter)
                    .then((response) => {
                        var _bibble_text =  '&nbsp';

                        for(var i = 0; i < response.data.length; i++)
                        {
                            _bibble_text += '<span class="single-bible"><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">' + response.data[i]['verse'] + '</span>' + response.data[i]['text'] + '</span><br>';   
                        }
                        this.bibble_text = _bibble_text;
                    })
                    .catch(function (error) {
                        console.log(error) // error log
                    })
            }else {
                this.axios.get(config.API_LOCATION + 'bible-input2/' + this.translation + '/' + this.gensis_filter)
                    .then((response) => {
                        var _bibble_text =  '&nbsp';

                        for(var i = 0; i < response.data.length; i++)
                        {
                            _bibble_text += '<span class="single-bible"><span style="font-size: 9px;font-weight: bold;margin: 4px;color: #0067ff;">' + response.data[i]['verse'] + '</span>' + response.data[i]['text'] + '</span>';   
                        }
                        this.bibble_text = _bibble_text;
                    })
                    .catch(function (error) {
                        console.log(error) // error log
                    })
            }
            // if(_alignment == 'justify')
            // {   
            //     var div = document.getElementsByClassName("single-bible");
            //     for(var i = 0; i < div.length - 1; i++)
            //     {
            //         var el = document.createElement("br");
            //         div[i].parentNode.insertBefore(el, div[i].nextSibling);
            //     }
            // } else {
            //     const bibleText = document.getElementById("bible-text");
            //     var spans = bibleText.children;
            //     for(var i = 0; i < spans.length; i++){
            //         if(spans[i].tagName == "BR")
            //             spans[i].remove();
            //     }
            // }
        }
    }

}
</script>

<style lang="scss">
    .align-button {
        border: solid 1px gray;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        cursor: pointer;
    }

    .active-align {
        color: var(--bs-blue) !important;
    }

    .bible {
        max-width: 66.6666667%;
    }
    @media(max-width:992px) {
        .bible {
            max-width: 100% !important;
        }    
    }
</style>
