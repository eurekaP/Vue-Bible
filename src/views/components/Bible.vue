<template>
    <div class="col bible" style="height: 95%;overflow-y: scroll;padding-bottom: 46px;">
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
            <i class="fa strong-button" v-bind:class="{'active-align': strongShow == true}" v-on:click="switchStrong()">S</i>
            <i class="fa fa-align-left align-button" v-bind:class="{'active-align': alignment == 'left'}" v-on:click="setAlignment('left')"></i>
            <i class="fa fa-align-center align-button" v-bind:class="{'active-align': alignment == 'center'}" v-on:click="setAlignment('center')"></i>
            <i class="fa fa-align-right align-button" v-bind:class="{'active-align': alignment == 'right'}" v-on:click="setAlignment('right')"></i>
            <i class="fa fa-list-ol align-button" v-bind:class="{'active-align': alignment == 'justify'}" v-on:click="setAlignment('justify')"></i>
        </div>
        <p v-bind:class="[(strongShow ? 'high-height' : ''), (alignment == 'left' || alignment == 'justify') ? 'text-start' : (alignment == 'center' ? 'text-center' : 'text-end')]" style="margin-top: 1rem;">
            <span v-for="(verse) in verseList" @click="addNote(verse.verse + 1)" :key="verse.verseID">
                <span style="font-size: 14px; font-weight: bold; margin: 4px; color: #0067ff;">{{verse.verse}}. </span>
                
                <template v-for="fragment in verse.fragments" >
                    <span :key="fragment.fragmentNumber" class="fragment" style="position: relative">
                        {{fragment.text}}
                        <span v-show="strongShow" style="color: green;position: absolute; left: 0px; top: -16px; font-size:12px;font-weight:bold; line-height: 17px;">{{fragment.strongsNumber.id}}</span>
                    </span>
                </template>
                <br v-if="alignment == 'justify' ? true : false">
            </span>
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
            strongShow: false,
            verseList: [],
        }
    },
    components: {
    },
    mounted(){
        this.gensis_filter = 'Genisis 1:1';

        // this.axios.get('://biblify.worshify.com/strongs/strongsFrags_v3/genesis1:1', {
        //     headers: {
        //         // 'Access-Control-Allow-Origin': '*',
        //     }
        // })
        // .then((response) => {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error) // error log
        // })

        this.verseList = [
                {
                    "chapter": 1,
                    "translation": "kjv",
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "697BBEBB-4A49-4673-AD79-B91A395BF722",
                            "book": 1,
                            "verse": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7225"
                            },
                            "fragmentNumber": 1,
                            "verseID": 1001001,
                            "text": "In the beginning"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 1,
                            "id": "676F3F2E-6590-4D27-A3B8-76F783ED52FD",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "translation": "kjv",
                            "verseID": 1001001,
                            "fragmentNumber": 2,
                            "text": "God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "E0987D30-3155-4CE6-AB6E-C8D134D46B34",
                            "verse": 1,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1254"
                            },
                            "text": "created",
                            "fragmentNumber": 3,
                            "verseID": 1001001
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 1,
                            "id": "E78EE00E-0B0B-478B-B5ED-DA9836624F49",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "verseID": 1001001,
                            "text": "the heaven",
                            "fragmentNumber": 6
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "8D614CDF-E702-4D7A-BF73-77AB3B20915F",
                            "book": 1,
                            "verse": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H853"
                            },
                            "translation": "kjv",
                            "text": "and",
                            "fragmentNumber": 7,
                            "verseID": 1001001
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "id": "C28A568A-7372-47F5-992E-9A0C447FC86A",
                            "verse": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "verseID": 1001001,
                            "fragmentNumber": 8,
                            "text": "the earth."
                        }
                    ],
                    "book": 1,
                    "verse": 1
                },
                {
                    "translation": "kjv",
                    "chapter": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "DA438934-0B4D-4D55-9A7F-300322AE1A20",
                            "book": 1,
                            "verse": 2,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "fragmentNumber": 1,
                            "text": "And the earth",
                            "verseID": 1001002
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 2,
                            "id": "D5E41896-9606-4306-BB0F-ED2788F74FFD",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H1961"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 2,
                            "text": "was",
                            "verseID": 1001002
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 2,
                            "id": "3BE30822-9C9C-4D37-A506-A8491F8B442B",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "text": "without form",
                            "fragmentNumber": 4,
                            "verseID": 1001002
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "3FA72148-5814-4460-BC64-C8B2815DECDE",
                            "verse": 2,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H922"
                            },
                            "verseID": 1001002,
                            "text": ", and void",
                            "fragmentNumber": 5
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "DD2D472E-A08F-41B1-A39C-4A9C48C2DD27",
                            "verse": 2,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2822"
                            },
                            "fragmentNumber": 6,
                            "text": "; and darkness",
                            "verseID": 1001002
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "FC2E52CE-7E19-4B04-9E27-F5D90E02B631",
                            "verse": 2,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6440"
                            },
                            "translation": "kjv",
                            "text": "was upon the face",
                            "fragmentNumber": 7,
                            "verseID": 1001002
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "96D48200-2D97-4807-B873-12927CB7B971",
                            "verse": 2,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": null
                            },
                            "text": "of the deep",
                            "fragmentNumber": 8,
                            "verseID": 1001002
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 2,
                            "id": "6128DB46-39B3-457A-ADCD-3124DA33DDF6",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7307"
                            },
                            "verseID": 1001002,
                            "fragmentNumber": 9,
                            "text": ". And the Spirit"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 2,
                            "id": "0F900F23-9463-4713-A28D-30E1B4D3034E",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "fragmentNumber": 10,
                            "text": "of God",
                            "verseID": 1001002
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "F22F53E0-405E-4E92-AF67-841C139FC223",
                            "verse": 2,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7363"
                            },
                            "translation": "kjv",
                            "text": "moved",
                            "verseID": 1001002,
                            "fragmentNumber": 11
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 2,
                            "id": "9DBA1CAF-614F-4A9B-A528-54AACCBAC38E",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H5921"
                            },
                            "translation": "kjv",
                            "verseID": 1001002,
                            "fragmentNumber": 13,
                            "text": "upon"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "8A78EE7C-ACF5-4964-8830-B8BE422F18A0",
                            "book": 1,
                            "verse": 2,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6440"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 14,
                            "verseID": 1001002,
                            "text": "the face"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "24EA673D-21DB-4582-AEF7-327A881586CF",
                            "verse": 2,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4325"
                            },
                            "translation": "kjv",
                            "verseID": 1001002,
                            "fragmentNumber": 15,
                            "text": "of the waters."
                        }
                    ],
                    "book": 1,
                    "verse": 2
                },
                {
                    "translation": "kjv",
                    "book": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "5619895F-FD61-4DE9-9083-F1BB8F029B15",
                            "verse": 3,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "translation": "kjv",
                            "verseID": 1001003,
                            "fragmentNumber": 1,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 3,
                            "id": "37592E90-EE4E-463F-972A-289D52D7E8B7",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H559"
                            },
                            "translation": "kjv",
                            "text": "said",
                            "fragmentNumber": 2,
                            "verseID": 1001003
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "6AB5BCFB-E484-4869-A025-CEE408311E74",
                            "verse": 3,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1961"
                            },
                            "text": ", Let there be",
                            "fragmentNumber": 4,
                            "verseID": 1001003
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "050E500B-5871-4E5B-AB4C-3412F8151833",
                            "verse": 3,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H216"
                            },
                            "translation": "kjv",
                            "text": "light",
                            "verseID": 1001003,
                            "fragmentNumber": 6
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "0791E61E-D390-4C3F-8320-5F75A3B22A33",
                            "verse": 3,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H216"
                            },
                            "translation": "kjv",
                            "verseID": 1001003,
                            "fragmentNumber": 7,
                            "text": ": and there was light."
                        }
                    ],
                    "chapter": 1,
                    "verse": 3
                },
                {
                    "translation": "kjv",
                    "book": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 4,
                            "id": "DE5EBD93-2B3B-4863-88A9-0321880EFBCE",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "fragmentNumber": 1,
                            "verseID": 1001004,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "72BFAE6A-A736-4E58-B7B6-69AB5771D387",
                            "verse": 4,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7200"
                            },
                            "fragmentNumber": 2,
                            "text": "saw",
                            "verseID": 1001004
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "60655422-D480-49AD-8156-371808CED46B",
                            "verse": 4,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H216"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 5,
                            "verseID": 1001004,
                            "text": "the light"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "B20C5626-6BD1-496F-A1FC-D89FF3952513",
                            "verse": 4,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3588"
                            },
                            "fragmentNumber": 6,
                            "verseID": 1001004,
                            "text": ", that"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "625D51F2-95B3-4C07-8AAC-050132140F49",
                            "verse": 4,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2896"
                            },
                            "fragmentNumber": 7,
                            "text": "it was good",
                            "verseID": 1001004
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "id": "8DF884A3-39C6-4EC9-8B3E-2FF879C63900",
                            "verse": 4,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "text": ": and God",
                            "fragmentNumber": 8,
                            "verseID": 1001004
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "0907C430-524B-4954-8A16-B6BF33EB330A",
                            "book": 1,
                            "verse": 4,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H914"
                            },
                            "text": "divided",
                            "fragmentNumber": 9,
                            "verseID": 1001004
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 4,
                            "id": "050E184F-9E4E-4990-ACF1-0342DA0E4F45",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H216"
                            },
                            "translation": "kjv",
                            "text": "the light",
                            "verseID": 1001004,
                            "fragmentNumber": 12
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 4,
                            "id": "47522FBD-76FD-4B94-8E48-261F6B46D256",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H996"
                            },
                            "translation": "kjv",
                            "verseID": 1001004,
                            "fragmentNumber": 13,
                            "text": "from"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "9DC5CC43-729C-4DA3-8E37-0E0ADD7B5FF9",
                            "book": 1,
                            "verse": 4,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2822"
                            },
                            "text": "the darkness.",
                            "verseID": 1001004,
                            "fragmentNumber": 14
                        }
                    ],
                    "chapter": 1,
                    "verse": 4
                },
                {
                    "translation": "kjv",
                    "book": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 5,
                            "id": "522C838D-58B1-43A7-80BC-9281ED3C3AE1",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "verseID": 1001005,
                            "text": "And God",
                            "fragmentNumber": 1
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "6757CD28-EB80-4ECC-9E66-BC2FBA60035E",
                            "verse": 5,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7121"
                            },
                            "translation": "kjv",
                            "verseID": 1001005,
                            "text": "called",
                            "fragmentNumber": 2
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "id": "12CBAD3D-1932-4DE8-8419-2A893D8D23BD",
                            "verse": 5,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H216"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 4,
                            "verseID": 1001005,
                            "text": "the light"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "449FB4CB-B382-4B6A-BB1F-22B1911C2CA4",
                            "book": 1,
                            "verse": 5,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3117"
                            },
                            "fragmentNumber": 5,
                            "text": "Day",
                            "verseID": 1001005
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "7CBDD347-4C9C-4637-A146-DFF0BC747339",
                            "verse": 5,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2822"
                            },
                            "text": ", and the darkness",
                            "fragmentNumber": 6,
                            "verseID": 1001005
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 5,
                            "id": "95E5ECF5-0550-4B74-808F-CA33356BABF7",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7121"
                            },
                            "fragmentNumber": 7,
                            "text": "he called",
                            "verseID": 1001005
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "AE08D299-A19C-4E14-AD38-B930149558C8",
                            "verse": 5,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3915"
                            },
                            "verseID": 1001005,
                            "text": "Night",
                            "fragmentNumber": 9
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 5,
                            "id": "07212F56-5CFE-48ED-988D-CF8BFBEE1597",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6153"
                            },
                            "fragmentNumber": 10,
                            "text": ". And the evening",
                            "verseID": 1001005
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "5FDA7A23-F9FF-4A40-86A3-FA33CB27A2A6",
                            "verse": 5,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H1242"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 11,
                            "text": "and the morning",
                            "verseID": 1001005
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 5,
                            "id": "CEF1A63F-EFBE-4112-BF47-BD12EB36C9D7",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H259"
                            },
                            "translation": "kjv",
                            "verseID": 1001005,
                            "fragmentNumber": 12,
                            "text": "were the first"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "3BF6B2BD-0C5E-4D04-9B8A-ED3E80161B68",
                            "verse": 5,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3117"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 13,
                            "verseID": 1001005,
                            "text": "day."
                        }
                    ],
                    "chapter": 1,
                    "verse": 5
                },
                {
                    "translation": "kjv",
                    "verse": 6,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 6,
                            "id": "8F96B2FB-335C-4D24-ACF7-F27001CFED30",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "translation": "kjv",
                            "verseID": 1001006,
                            "fragmentNumber": 1,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 6,
                            "id": "C56623ED-D842-4880-B9CD-6201B6D895FC",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H559"
                            },
                            "translation": "kjv",
                            "text": "said",
                            "verseID": 1001006,
                            "fragmentNumber": 2
                        },
                        {
                            "numberOfWordsInFragment": 5,
                            "book": 1,
                            "id": "DF45D40F-FE15-49CD-981B-C0777713F695",
                            "verse": 6,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7549"
                            },
                            "translation": "kjv",
                            "verseID": 1001006,
                            "text": ", Let there be a firmament",
                            "fragmentNumber": 4
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 6,
                            "id": "5776B1A9-20A5-484F-9372-D076F9C7005F",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "verseID": 1001006,
                            "text": "in the midst",
                            "fragmentNumber": 5
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "E5758EF5-0ABC-411A-9066-51CD8DFB531C",
                            "book": 1,
                            "verse": 6,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4325"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 6,
                            "text": "of the waters",
                            "verseID": 1001006
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "10C5D2F9-5E70-4466-9794-219F071562D5",
                            "verse": 6,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H914"
                            },
                            "translation": "kjv",
                            "text": ", and let it divide",
                            "fragmentNumber": 7,
                            "verseID": 1001006
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "748EB951-79CD-4609-ABAD-56B84EA255A2",
                            "book": 1,
                            "verse": 6,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4325"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 9,
                            "verseID": 1001006,
                            "text": "the waters"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 6,
                            "id": "07786402-46EF-4458-A342-097E61449B17",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4325"
                            },
                            "text": "from the waters.",
                            "fragmentNumber": 10,
                            "verseID": 1001006
                        }
                    ],
                    "book": 1,
                    "chapter": 1
                },
                {
                    "verse": 7,
                    "book": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "294A5E3A-2060-423A-88D1-110A4728F40A",
                            "verse": 7,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "verseID": 1001007,
                            "fragmentNumber": 1,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 7,
                            "id": "4F32D06C-B81C-4149-A7BD-54E006A1ED13",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6213"
                            },
                            "verseID": 1001007,
                            "fragmentNumber": 2,
                            "text": "made"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 7,
                            "id": "A81D93AC-0242-49C5-8F31-5FFABEE1935B",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7549"
                            },
                            "fragmentNumber": 4,
                            "verseID": 1001007,
                            "text": "the firmament"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "BB63EBD6-A6F9-4D1A-99FF-06FFD2231E9E",
                            "book": 1,
                            "verse": 7,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H914"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 5,
                            "text": ", and divided",
                            "verseID": 1001007
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "id": "4A493CE2-4318-48CB-8EFA-43FB26959EB4",
                            "verse": 7,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4325"
                            },
                            "verseID": 1001007,
                            "text": "the waters",
                            "fragmentNumber": 7
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "1D596467-DBE1-4C90-B94B-906324CF520A",
                            "verse": 7,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H834"
                            },
                            "fragmentNumber": 8,
                            "verseID": 1001007,
                            "text": "which"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "944BD9E0-7428-4DDA-A1B3-5FC5F7D26E47",
                            "book": 1,
                            "verse": 7,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": null
                            },
                            "verseID": 1001007,
                            "text": "were under",
                            "fragmentNumber": 9
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "89103BA8-7057-4902-BE1D-C17E11535437",
                            "book": 1,
                            "verse": 7,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7549"
                            },
                            "translation": "kjv",
                            "verseID": 1001007,
                            "fragmentNumber": 10,
                            "text": "the firmament"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "EB33DC7E-8845-40D6-A270-259793D8AA63",
                            "verse": 7,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4325"
                            },
                            "fragmentNumber": 11,
                            "text": "from the waters",
                            "verseID": 1001007
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "D928FBAE-A2E4-469E-876F-C302E59433D1",
                            "verse": 7,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H834"
                            },
                            "verseID": 1001007,
                            "fragmentNumber": 12,
                            "text": "which"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "9FCD77CD-3615-4285-919B-377BABD595A8",
                            "book": 1,
                            "verse": 7,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H5921"
                            },
                            "text": "were above",
                            "verseID": 1001007,
                            "fragmentNumber": 13
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "77D0A441-FDB4-4D5F-A5F0-E5AD5903E999",
                            "book": 1,
                            "verse": 7,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7549"
                            },
                            "translation": "kjv",
                            "verseID": 1001007,
                            "text": "the firmament",
                            "fragmentNumber": 14
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "book": 1,
                            "verse": 7,
                            "id": "562B884F-559D-456B-B438-C5376C185BAD",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3651"
                            },
                            "translation": "kjv",
                            "verseID": 1001007,
                            "text": ": and it was so.",
                            "fragmentNumber": 15
                        }
                    ],
                    "chapter": 1,
                    "translation": "kjv"
                },
                {
                    "verse": 8,
                    "chapter": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "220BD8C0-5FFB-4D29-856F-D6120676EF4E",
                            "verse": 8,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "fragmentNumber": 1,
                            "verseID": 1001008,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "E579A94F-86C1-4D86-A8AF-B6C634162B79",
                            "verse": 8,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7121"
                            },
                            "verseID": 1001008,
                            "fragmentNumber": 2,
                            "text": "called"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "C5993669-47A6-466D-834B-C0B57454F5D8",
                            "verse": 8,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7549"
                            },
                            "translation": "kjv",
                            "text": "the firmament",
                            "verseID": 1001008,
                            "fragmentNumber": 4
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "B8498B48-AF33-4522-B5A6-1FF4A15F70EE",
                            "verse": 8,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": null
                            },
                            "fragmentNumber": 5,
                            "text": "Heaven",
                            "verseID": 1001008
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "27A91537-2B5F-4AF1-AF9E-F0151764A626",
                            "book": 1,
                            "verse": 8,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6153"
                            },
                            "text": ". And the evening",
                            "verseID": 1001008,
                            "fragmentNumber": 6
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "8C91E009-630C-4785-BFF8-EFC670013546",
                            "verse": 8,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1242"
                            },
                            "fragmentNumber": 7,
                            "verseID": 1001008,
                            "text": "and the morning"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 8,
                            "id": "2421A487-6802-431A-AA73-73618794BF5B",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "text": "were the second",
                            "verseID": 1001008,
                            "fragmentNumber": 8
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "397F9F67-BBE1-4D6C-834C-C966A6D59B2C",
                            "verse": 8,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3117"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 9,
                            "text": "day.",
                            "verseID": 1001008
                        }
                    ],
                    "book": 1,
                    "translation": "kjv"
                },
                {
                    "verse": 9,
                    "book": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "478E98DD-8A7C-4B9B-96DB-6392C782B9D2",
                            "verse": 9,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "text": "And God",
                            "fragmentNumber": 1,
                            "verseID": 1001009
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 9,
                            "id": "A075A519-BB2B-4733-AAF9-1F0CEBF73CC6",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H559"
                            },
                            "translation": "kjv",
                            "text": "said",
                            "verseID": 1001009,
                            "fragmentNumber": 2
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 9,
                            "id": "5BBC229E-6F84-4BEB-81D7-A1F43A66047F",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4325"
                            },
                            "text": ", Let the waters",
                            "verseID": 1001009,
                            "fragmentNumber": 4
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "02730E8B-1B8B-4F07-B367-478953EB32E8",
                            "verse": 9,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": null
                            },
                            "verseID": 1001009,
                            "text": "under the heaven",
                            "fragmentNumber": 5
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "FA3658FD-6275-4CD2-A552-6F02996C9E79",
                            "book": 1,
                            "verse": 9,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6960"
                            },
                            "verseID": 1001009,
                            "text": "be gathered together",
                            "fragmentNumber": 6
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "4FDDAFC9-9F68-424E-BE36-0C5F677F800D",
                            "verse": 9,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H413"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 8,
                            "text": "unto",
                            "verseID": 1001009
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 9,
                            "id": "A8F943EC-7F27-4AA0-9DD3-3422E97B69D4",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H259"
                            },
                            "verseID": 1001009,
                            "fragmentNumber": 9,
                            "text": "one"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "3E44BD63-6405-4ACB-AC7B-53E79A0255B4",
                            "verse": 9,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4725"
                            },
                            "translation": "kjv",
                            "text": "place",
                            "fragmentNumber": 10,
                            "verseID": 1001009
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "AEA84D7C-2E89-43FB-9519-AA5B2C7A4802",
                            "book": 1,
                            "verse": 9,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3004"
                            },
                            "verseID": 1001009,
                            "fragmentNumber": 11,
                            "text": ", and let the dry"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "B8BBA026-C038-44AB-B0EA-39FF3291FEFC",
                            "book": 1,
                            "verse": 9,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7200"
                            },
                            "text": "land appear",
                            "fragmentNumber": 12,
                            "verseID": 1001009
                        },
                        {
                            "numberOfWordsInFragment": 5,
                            "id": "3BD14A4F-592F-4382-A3BA-01448E755764",
                            "verse": 9,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "fragmentNumber": 13,
                            "text": "",
                            "verseID": 1001009
                        }
                    ],
                    "chapter": 1,
                    "translation": "kjv"
                },
                {
                    "verse": 10,
                    "chapter": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 10,
                            "id": "F6A282F2-E445-4754-961C-A616F12221D4",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "verseID": 1001010,
                            "text": "And God",
                            "fragmentNumber": 1
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "9E343451-7CE6-42B9-8095-A325D2830959",
                            "verse": 10,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7121"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 2,
                            "verseID": 1001010,
                            "text": "called"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "A9F76BCE-B5D0-43E1-A0DB-2075CE63D2EF",
                            "verse": 10,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3004"
                            },
                            "verseID": 1001010,
                            "text": "the dry",
                            "fragmentNumber": 4
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "id": "0F988938-809F-4973-8860-0467F1A218DD",
                            "verse": 10,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "text": "land Earth",
                            "fragmentNumber": 5,
                            "verseID": 1001010
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "book": 1,
                            "verse": 10,
                            "id": "F820778F-37A9-4EB2-B533-C949B559D6C8",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4723"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 6,
                            "verseID": 1001010,
                            "text": "; and the gathering together"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 10,
                            "id": "BAA06B60-7007-4F33-AA2F-803B75E95835",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4325"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 7,
                            "text": "of the waters",
                            "verseID": 1001010
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "0A6D3EAF-5E91-4068-AD11-1F51407DE329",
                            "verse": 10,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7121"
                            },
                            "verseID": 1001010,
                            "fragmentNumber": 8,
                            "text": "called"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "D62CD994-C7B8-4C61-B60D-74711D57E6AE",
                            "book": 1,
                            "verse": 10,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3220"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 10,
                            "verseID": 1001010,
                            "text": "he Seas"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "83C2B010-D77E-4D26-9A10-0777733E238E",
                            "verse": 10,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "translation": "kjv",
                            "text": ": and God",
                            "verseID": 1001010,
                            "fragmentNumber": 11
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "51A705EA-2196-40A2-8A38-CE41334BCEF9",
                            "book": 1,
                            "verse": 10,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7200"
                            },
                            "text": "saw",
                            "verseID": 1001010,
                            "fragmentNumber": 12
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "BDE26747-7CEA-445C-8DE8-51F8D9DB7E42",
                            "book": 1,
                            "verse": 10,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2896"
                            },
                            "translation": "kjv",
                            "text": "that it was good.",
                            "verseID": 1001010,
                            "fragmentNumber": 14
                        }
                    ],
                    "book": 1,
                    "translation": "kjv"
                },
                {
                    "chapter": 1,
                    "verse": 11,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "81414454-D854-4B14-AAA7-138B2F0E32E7",
                            "book": 1,
                            "verse": 11,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "fragmentNumber": 1,
                            "text": "And God",
                            "verseID": 1001011
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "AF768C17-4D7E-46A2-A6D0-A72DC6E56BAE",
                            "verse": 11,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H559"
                            },
                            "fragmentNumber": 2,
                            "text": "said",
                            "verseID": 1001011
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 11,
                            "id": "5C67E8EF-A52A-4C17-81BF-2F3EE3A3BBAC",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 4,
                            "text": ", Let the earth",
                            "verseID": 1001011
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "F0DECD58-9B2F-4014-B4B4-FB96DE62C337",
                            "book": 1,
                            "verse": 11,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H1876"
                            },
                            "translation": "kjv",
                            "verseID": 1001011,
                            "text": "bring forth",
                            "fragmentNumber": 5
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 11,
                            "id": "96182C05-5B34-4E19-A334-767916C007EE",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H1877"
                            },
                            "translation": "kjv",
                            "text": "grass",
                            "fragmentNumber": 7,
                            "verseID": 1001011
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 11,
                            "id": "D020A028-22D4-4F8F-B61E-85F5388C747E",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6212"
                            },
                            "fragmentNumber": 8,
                            "text": ", the herb",
                            "verseID": 1001011
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "DC0F5B58-348A-4254-9DF6-2F333A122433",
                            "verse": 11,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2232"
                            },
                            "text": "yielding",
                            "fragmentNumber": 9,
                            "verseID": 1001011
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "B2DD5ED0-8DE5-4680-86CF-9D55308F1145",
                            "book": 1,
                            "verse": 11,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2233"
                            },
                            "translation": "kjv",
                            "verseID": 1001011,
                            "text": "seed",
                            "fragmentNumber": 11
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "542EDAAC-662F-493F-BDB2-8A1B082A3357",
                            "verse": 11,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6529"
                            },
                            "verseID": 1001011,
                            "text": ", and the fruit",
                            "fragmentNumber": 12
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "0BB409DC-13AB-4D65-BCB2-92B904659AF6",
                            "verse": 11,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6086"
                            },
                            "translation": "kjv",
                            "text": "tree",
                            "verseID": 1001011,
                            "fragmentNumber": 13
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "B5899EA3-861B-4D2D-9A34-1689EA5A8E77",
                            "verse": 11,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6213"
                            },
                            "translation": "kjv",
                            "verseID": 1001011,
                            "fragmentNumber": 14,
                            "text": "yielding"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "9ADD41E3-54FE-4E00-95D4-1FF3AC40DF50",
                            "verse": 11,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6529"
                            },
                            "verseID": 1001011,
                            "text": "fruit",
                            "fragmentNumber": 16
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "FA1FCEF3-97BF-4BCB-8D9A-15603026D50F",
                            "verse": 11,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4327"
                            },
                            "translation": "kjv",
                            "text": "after his kind",
                            "fragmentNumber": 17,
                            "verseID": 1001011
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "97CBE5ED-4EF8-48E2-AC78-A44AAE0B791F",
                            "verse": 11,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H834"
                            },
                            "text": ", whose",
                            "fragmentNumber": 18,
                            "verseID": 1001011
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "09A505DD-70A7-4F56-B31E-76216A87E2B3",
                            "verse": 11,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2233"
                            },
                            "verseID": 1001011,
                            "fragmentNumber": 19,
                            "text": "seed"
                        },
                        {
                            "numberOfWordsInFragment": 10,
                            "book": 1,
                            "verse": 11,
                            "id": "3A459F5D-3724-45F1-951B-3B1E95E8676D",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "text": "is in itself, upon the earth: and it was so.",
                            "fragmentNumber": 20,
                            "verseID": 1001011
                        }
                    ],
                    "book": 1,
                    "translation": "kjv"
                },
                {
                    "translation": "kjv",
                    "book": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 12,
                            "id": "362EFB9B-CE63-4776-8908-A3D3D430100F",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "fragmentNumber": 1,
                            "verseID": 1001012,
                            "text": "And the earth"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "BAB92D4F-0A50-4FB7-B733-7E63E519EB7C",
                            "book": 1,
                            "verse": 12,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3318"
                            },
                            "text": "brought forth",
                            "fragmentNumber": 2,
                            "verseID": 1001012
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "B75F1322-E456-4A2F-8CDC-8C64EE2F87DE",
                            "verse": 12,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H1877"
                            },
                            "translation": "kjv",
                            "text": "grass",
                            "fragmentNumber": 4,
                            "verseID": 1001012
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "id": "66EDBE4A-4D9F-4D7B-99D7-FF298938B9E6",
                            "verse": 12,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6212"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 5,
                            "verseID": 1001012,
                            "text": ", and herb"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 12,
                            "id": "ECFD555A-B933-4BA4-9634-13A5499147AF",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2232"
                            },
                            "translation": "kjv",
                            "verseID": 1001012,
                            "text": "yielding",
                            "fragmentNumber": 6
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 12,
                            "id": "8E61964A-57CF-444A-A8E9-B4F7969EE890",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2233"
                            },
                            "text": "seed",
                            "verseID": 1001012,
                            "fragmentNumber": 8
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "F894D42D-E98B-40BF-941F-7B5F07275852",
                            "book": 1,
                            "verse": 12,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4327"
                            },
                            "verseID": 1001012,
                            "text": "after his kind",
                            "fragmentNumber": 9
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "DA3AF040-1027-4EED-B54D-992ACE217DB5",
                            "verse": 12,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6086"
                            },
                            "fragmentNumber": 10,
                            "text": ", and the tree",
                            "verseID": 1001012
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 12,
                            "id": "5199A351-3E36-4731-9CDD-704465D307B8",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6213"
                            },
                            "fragmentNumber": 11,
                            "text": "yielding",
                            "verseID": 1001012
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "584ADA39-5B27-4BE3-AFED-F3FF0C96B193",
                            "book": 1,
                            "verse": 12,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6529"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 13,
                            "verseID": 1001012,
                            "text": "fruit"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "id": "84D6CE10-19A6-4DA3-966F-C60513F5F720",
                            "verse": 12,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2233"
                            },
                            "fragmentNumber": 14,
                            "verseID": 1001012,
                            "text": ", whose seed"
                        },
                        {
                            "numberOfWordsInFragment": 6,
                            "book": 1,
                            "verse": 12,
                            "id": "9B512BC3-12CA-4DAD-837E-018C76AC9B27",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4327"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 15,
                            "text": "was in itself, after his kind",
                            "verseID": 1001012
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 12,
                            "id": "AC6D0648-554D-4C5F-BD9D-BA42944DFF07",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "fragmentNumber": 16,
                            "verseID": 1001012,
                            "text": ": and God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 12,
                            "id": "FEE7E8D1-C698-41C1-B37A-3DCA6AE595E0",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7200"
                            },
                            "text": "saw",
                            "fragmentNumber": 17,
                            "verseID": 1001012
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "book": 1,
                            "verse": 12,
                            "id": "F084BB09-3492-43D4-8D52-BB37792C7993",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2896"
                            },
                            "verseID": 1001012,
                            "fragmentNumber": 19,
                            "text": "that it was good."
                        }
                    ],
                    "chapter": 1,
                    "verse": 12
                },
                {
                    "translation": "kjv",
                    "verse": 13,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "DD936B04-E73F-4F02-AA65-A31819B9204D",
                            "verse": 13,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6153"
                            },
                            "translation": "kjv",
                            "text": "And the evening",
                            "fragmentNumber": 1,
                            "verseID": 1001013
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "5880CB9F-15D0-4241-BD2A-C1B35A92A5BA",
                            "verse": 13,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1242"
                            },
                            "fragmentNumber": 2,
                            "verseID": 1001013,
                            "text": "and the morning"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "A28D984E-3977-4457-BDC3-96A833C15295",
                            "verse": 13,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7992"
                            },
                            "text": "were the third",
                            "fragmentNumber": 3,
                            "verseID": 1001013
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 13,
                            "id": "280A79E2-2D61-49B8-959B-7FE57F6E9F4C",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3117"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 4,
                            "verseID": 1001013,
                            "text": "day."
                        }
                    ],
                    "book": 1,
                    "chapter": 1
                },
                {
                    "verse": 14,
                    "translation": "kjv",
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 14,
                            "id": "38DE6435-E1EA-4174-9C8C-2DCE52208224",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "verseID": 1001014,
                            "fragmentNumber": 1,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "A2D2DEFC-96A2-415A-A45D-1E4BAD81EC0C",
                            "verse": 14,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H559"
                            },
                            "translation": "kjv",
                            "verseID": 1001014,
                            "fragmentNumber": 2,
                            "text": "said"
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "2F2D8137-FE39-41AC-A1AE-356590688F38",
                            "book": 1,
                            "verse": 14,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3974"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 4,
                            "verseID": 1001014,
                            "text": ", Let there be lights"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "D60163CC-E452-4C5A-BFCE-7B3A323C90F6",
                            "verse": 14,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7549"
                            },
                            "translation": "kjv",
                            "text": "in the firmament",
                            "verseID": 1001014,
                            "fragmentNumber": 5
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 14,
                            "id": "8C1F46C1-6E6A-4ABD-80DB-90D85622F63B",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "text": "of the heaven",
                            "fragmentNumber": 6,
                            "verseID": 1001014
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "9C711229-BBBC-456B-AAD6-5E46B8FEEECE",
                            "verse": 14,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H914"
                            },
                            "verseID": 1001014,
                            "fragmentNumber": 7,
                            "text": "to divide"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "349A1463-4CB6-4729-8559-484448609839",
                            "book": 1,
                            "verse": 14,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3117"
                            },
                            "verseID": 1001014,
                            "text": "the day",
                            "fragmentNumber": 9
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "EFDFBD84-1355-403D-A30D-DC1C8F1AF6E6",
                            "verse": 14,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3915"
                            },
                            "verseID": 1001014,
                            "fragmentNumber": 10,
                            "text": "from the night"
                        },
                        {
                            "numberOfWordsInFragment": 6,
                            "id": "13170D41-A397-424C-ADE6-5908F49D5F2F",
                            "verse": 14,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H226"
                            },
                            "text": "; and let them be for signs",
                            "verseID": 1001014,
                            "fragmentNumber": 11
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "F1543ECA-B5C3-4334-A667-2C8470ADCA7F",
                            "verse": 14,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4150"
                            },
                            "fragmentNumber": 12,
                            "verseID": 1001014,
                            "text": ", and for seasons"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "5C0BD8C9-932A-4667-9525-AF43B1353B84",
                            "verse": 14,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3117"
                            },
                            "translation": "kjv",
                            "text": ", and for days",
                            "verseID": 1001014,
                            "fragmentNumber": 13
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "DB888B9E-7A90-4901-A83F-F5D03051EAC4",
                            "book": 1,
                            "verse": 14,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "verseID": 1001014,
                            "fragmentNumber": 14,
                            "text": ", and years:"
                        }
                    ],
                    "book": 1,
                    "chapter": 1
                },
                {
                    "translation": "kjv",
                    "book": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 6,
                            "id": "B13F6796-30D1-4B8F-894D-885470F59F80",
                            "verse": 15,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3974"
                            },
                            "translation": "kjv",
                            "text": "And let them be for lights",
                            "verseID": 1001015,
                            "fragmentNumber": 1
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "934A8AEA-1518-4A43-B196-58DE898ADC54",
                            "book": 1,
                            "verse": 15,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7549"
                            },
                            "translation": "kjv",
                            "verseID": 1001015,
                            "fragmentNumber": 2,
                            "text": "in the firmament"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 15,
                            "id": "1E038EDA-1298-4509-8AD3-510658E7E5B7",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": null
                            },
                            "fragmentNumber": 3,
                            "text": "of the heaven",
                            "verseID": 1001015
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 15,
                            "id": "A9EA95EA-9670-4708-B5D7-607EDA13C28C",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H215"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 4,
                            "verseID": 1001015,
                            "text": "to give light"
                        },
                        {
                            "numberOfWordsInFragment": 7,
                            "book": 1,
                            "id": "C1563622-81B9-4027-9F3E-EC677210F297",
                            "verse": 15,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "text": "upon the earth: and it was so.",
                            "fragmentNumber": 6,
                            "verseID": 1001015
                        }
                    ],
                    "chapter": 1,
                    "verse": 15
                },
                {
                    "chapter": 1,
                    "verse": 16,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 16,
                            "id": "89110BF6-0901-4785-B123-61E8C180A744",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "text": "And God",
                            "fragmentNumber": 1,
                            "verseID": 1001016
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "0E8D8C0D-3B08-4123-989A-CCB1D5D08DE2",
                            "book": 1,
                            "verse": 16,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6213"
                            },
                            "translation": "kjv",
                            "verseID": 1001016,
                            "fragmentNumber": 2,
                            "text": "made"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "2C4E26DD-7F90-4E04-BAD1-D30C2AD9BC46",
                            "verse": 16,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": null
                            },
                            "fragmentNumber": 4,
                            "text": "two",
                            "verseID": 1001016
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "0936FEE0-50CF-4C91-90FA-7E96C6819836",
                            "verse": 16,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1419"
                            },
                            "text": "great",
                            "fragmentNumber": 5,
                            "verseID": 1001016
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 16,
                            "id": "BF702768-E027-4CF8-8ECC-49D6AEBC5C54",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3974"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 6,
                            "verseID": 1001016,
                            "text": "lights"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 16,
                            "id": "7E7AACB8-B3C1-4E74-AD18-ABB38C9E7B04",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1419"
                            },
                            "text": "; the greater",
                            "verseID": 1001016,
                            "fragmentNumber": 7
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "AB6FAB4B-F7DD-4464-874B-EA7B9DEDE886",
                            "book": 1,
                            "verse": 16,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3974"
                            },
                            "fragmentNumber": 8,
                            "verseID": 1001016,
                            "text": "light"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 16,
                            "id": "D69AA432-1263-479C-8BE9-B1306FF811F1",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4475"
                            },
                            "verseID": 1001016,
                            "text": "to rule",
                            "fragmentNumber": 9
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "F90914F0-3B80-489D-914F-A854F89652A5",
                            "book": 1,
                            "verse": 16,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3117"
                            },
                            "text": "the day",
                            "fragmentNumber": 10,
                            "verseID": 1001016
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "11A0ED8E-F3BE-4733-A563-A902162A4AD7",
                            "book": 1,
                            "verse": 16,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6996"
                            },
                            "text": ", and the lesser",
                            "fragmentNumber": 11,
                            "verseID": 1001016
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "367E5A82-9537-4EF8-A41A-B208371E4A3A",
                            "verse": 16,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3974"
                            },
                            "verseID": 1001016,
                            "fragmentNumber": 12,
                            "text": "light"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 16,
                            "id": "3840C707-3B10-4BB6-A53B-57FB269A5385",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4475"
                            },
                            "fragmentNumber": 13,
                            "verseID": 1001016,
                            "text": "to rule"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "DD61A885-086F-429E-93E5-F24D210C14F8",
                            "verse": 16,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3915"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 14,
                            "text": "the night",
                            "verseID": 1001016
                        },
                        {
                            "numberOfWordsInFragment": 5,
                            "id": "03E722F5-72CD-42B7-B30D-560861A59F38",
                            "verse": 16,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3556"
                            },
                            "translation": "kjv",
                            "verseID": 1001016,
                            "text": ": he made the stars also.",
                            "fragmentNumber": 15
                        }
                    ],
                    "book": 1,
                    "translation": "kjv"
                },
                {
                    "book": 1,
                    "verse": 17,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "id": "2F157E92-8182-4D2E-BB13-BAB4ED690EAB",
                            "verse": 17,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "fragmentNumber": 1,
                            "verseID": 1001017,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "BFC889F9-C1D9-4E13-A5A3-A05E0C272B8A",
                            "verse": 17,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H5414"
                            },
                            "translation": "kjv",
                            "text": "set",
                            "fragmentNumber": 2,
                            "verseID": 1001017
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "F903A443-BD25-415E-9F16-4839CDDB997E",
                            "book": 1,
                            "verse": 17,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7549"
                            },
                            "fragmentNumber": 4,
                            "verseID": 1001017,
                            "text": "them in the firmament"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 17,
                            "id": "35EABC91-1ABF-455C-8E03-E67E9FE34DAF",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": null
                            },
                            "fragmentNumber": 5,
                            "text": "of the heaven",
                            "verseID": 1001017
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "21E601DD-B26B-417C-87B0-BFDFCF68F2AC",
                            "verse": 17,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H215"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 6,
                            "verseID": 1001017,
                            "text": "to give light"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "20E38DBD-8DF2-433D-B9F0-71B63CB9E8D1",
                            "verse": 17,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "translation": "kjv",
                            "verseID": 1001017,
                            "fragmentNumber": 8,
                            "text": "upon the earth,"
                        }
                    ],
                    "chapter": 1,
                    "translation": "kjv"
                },
                {
                    "verse": 18,
                    "chapter": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "B7C05905-ECF7-453F-975F-0A20B1987167",
                            "book": 1,
                            "verse": 18,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4910"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 1,
                            "verseID": 1001018,
                            "text": "And to rule"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 18,
                            "id": "D36A9BB6-E1DD-4F11-A074-F6FBB96149AD",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3117"
                            },
                            "translation": "kjv",
                            "verseID": 1001018,
                            "fragmentNumber": 3,
                            "text": "over the day"
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "book": 1,
                            "id": "C171A2CC-172F-46D1-8541-F9E527DE4E30",
                            "verse": 18,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3915"
                            },
                            "text": "and over the night",
                            "verseID": 1001018,
                            "fragmentNumber": 4
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "B87E06EC-CA74-4AE5-BA9B-DAD5609B28EC",
                            "verse": 18,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H914"
                            },
                            "translation": "kjv",
                            "text": ", and to divide",
                            "fragmentNumber": 5,
                            "verseID": 1001018
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 18,
                            "id": "858F6860-09C6-46E4-85DE-3682097B2098",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H216"
                            },
                            "fragmentNumber": 7,
                            "verseID": 1001018,
                            "text": "the light"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "FC5DEAE9-94A5-49DE-B512-D7CD5DDF5B90",
                            "verse": 18,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2822"
                            },
                            "verseID": 1001018,
                            "text": "from the darkness",
                            "fragmentNumber": 8
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "id": "C0BB7392-0447-420D-93D7-39BF43052322",
                            "verse": 18,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "translation": "kjv",
                            "text": ": and God",
                            "fragmentNumber": 9,
                            "verseID": 1001018
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "E63A4FD1-9B2E-48D3-83CA-5EA52D78F357",
                            "verse": 18,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7200"
                            },
                            "translation": "kjv",
                            "text": "saw",
                            "verseID": 1001018,
                            "fragmentNumber": 10
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "FA8CF120-5029-48AA-A1D9-0CCA09D213E9",
                            "verse": 18,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2896"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 12,
                            "text": "that it was good.",
                            "verseID": 1001018
                        }
                    ],
                    "book": 1,
                    "translation": "kjv"
                },
                {
                    "translation": "kjv",
                    "chapter": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 19,
                            "id": "7E841C0B-1C6F-4A24-A023-F7B44DE564E5",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6153"
                            },
                            "fragmentNumber": 1,
                            "text": "And the evening",
                            "verseID": 1001019
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 19,
                            "id": "F5F9560B-C8A1-4E7C-A8CD-BC7C512412FA",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H1242"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 2,
                            "verseID": 1001019,
                            "text": "and the morning"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 19,
                            "id": "5355A83B-8550-4919-8215-1DAAF8EF7A9B",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7243"
                            },
                            "fragmentNumber": 3,
                            "text": "were the fourth",
                            "verseID": 1001019
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "561DF3F7-6F82-4BB3-B9E0-0696F1D0232D",
                            "book": 1,
                            "verse": 19,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3117"
                            },
                            "translation": "kjv",
                            "verseID": 1001019,
                            "text": "day.",
                            "fragmentNumber": 4
                        }
                    ],
                    "book": 1,
                    "verse": 19
                },
                {
                    "verse": 20,
                    "chapter": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "46BCC9FA-5FE3-443D-B1DF-C0D6ED8A326C",
                            "verse": 20,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "translation": "kjv",
                            "verseID": 1001020,
                            "fragmentNumber": 1,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "534967A9-84EE-4F34-8EE3-871A201B4A22",
                            "verse": 20,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H559"
                            },
                            "translation": "kjv",
                            "verseID": 1001020,
                            "text": "said",
                            "fragmentNumber": 2
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "62B79292-75A6-41B0-8D45-45D44E7BB1C7",
                            "book": 1,
                            "verse": 20,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4325"
                            },
                            "translation": "kjv",
                            "verseID": 1001020,
                            "text": ", Let the waters",
                            "fragmentNumber": 4
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "697C12F1-3EEC-4A3B-AEB0-1EC723545E76",
                            "verse": 20,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": null
                            },
                            "verseID": 1001020,
                            "text": "bring forth abundantly",
                            "fragmentNumber": 5
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 20,
                            "id": "4CBE8D4A-A66B-4171-829D-FA2546820628",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": null
                            },
                            "verseID": 1001020,
                            "fragmentNumber": 7,
                            "text": "the moving creature"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "E40658D0-88E8-43FC-AD8F-D2A0071A9B83",
                            "book": 1,
                            "verse": 20,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H5315"
                            },
                            "translation": "kjv",
                            "text": "that hath",
                            "verseID": 1001020,
                            "fragmentNumber": 8
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "BE1519F7-56A3-4271-9955-69B28FF343FF",
                            "verse": 20,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2416"
                            },
                            "text": "life",
                            "fragmentNumber": 9,
                            "verseID": 1001020
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 20,
                            "id": "C2BBFAA9-9844-41AB-B286-EC05F4E77662",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H5775"
                            },
                            "text": ", and fowl",
                            "fragmentNumber": 10,
                            "verseID": 1001020
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 20,
                            "id": "AB5896D3-98B2-424D-AE41-075F211D75D1",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H5774"
                            },
                            "translation": "kjv",
                            "text": "that may fly",
                            "verseID": 1001020,
                            "fragmentNumber": 11
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "0239E72A-89FF-4D1E-8A64-0F9702FAB4B0",
                            "verse": 20,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H5921"
                            },
                            "fragmentNumber": 13,
                            "text": "above",
                            "verseID": 1001020
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "F340F9AE-0A3F-4E0B-A904-953015355F7B",
                            "verse": 20,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "fragmentNumber": 14,
                            "verseID": 1001020,
                            "text": "the earth"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 20,
                            "id": "10BB050C-4958-4D85-8E70-8224FD206C34",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6440"
                            },
                            "translation": "kjv",
                            "verseID": 1001020,
                            "text": "in the open",
                            "fragmentNumber": 15
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 20,
                            "id": "A72BD95D-FD1D-4FEF-A359-4D440250A795",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7549"
                            },
                            "translation": "kjv",
                            "verseID": 1001020,
                            "text": "firmament",
                            "fragmentNumber": 16
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 20,
                            "id": "906952A5-862A-4E13-8B37-10B2E347B1A1",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": null
                            },
                            "text": "of heaven.",
                            "verseID": 1001020,
                            "fragmentNumber": 17
                        }
                    ],
                    "book": 1,
                    "translation": "kjv"
                },
                {
                    "verse": 21,
                    "translation": "kjv",
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "43C83F49-C935-41BD-B51C-C613876521FB",
                            "verse": 21,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "fragmentNumber": 1,
                            "text": "And God",
                            "verseID": 1001021
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 21,
                            "id": "3335C056-CFF4-4322-916B-7E1BCF60EB67",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H1254"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 2,
                            "verseID": 1001021,
                            "text": "created"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "C319AA4F-A4C1-4743-8A4B-C20DB5E4DC01",
                            "verse": 21,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1419"
                            },
                            "text": "great",
                            "verseID": 1001021,
                            "fragmentNumber": 4
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 21,
                            "id": "97638445-3B50-4776-B320-089A41FE674A",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "text": "whales",
                            "verseID": 1001021,
                            "fragmentNumber": 5
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "EBA7AADD-DE7D-4D2A-AB7A-47E9EAB8891D",
                            "verse": 21,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2416"
                            },
                            "fragmentNumber": 6,
                            "verseID": 1001021,
                            "text": ", and every living"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "D5E70CF5-65F3-47EB-ACB2-DD4DB6BB4DE5",
                            "book": 1,
                            "verse": 21,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H5315"
                            },
                            "verseID": 1001021,
                            "fragmentNumber": 7,
                            "text": "creature"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 21,
                            "id": "7C4D6397-3DA0-445A-B582-8C2AEB614BEE",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7430"
                            },
                            "translation": "kjv",
                            "verseID": 1001021,
                            "text": "that moveth",
                            "fragmentNumber": 8
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "64C617C9-BF1E-4F60-A1E2-302B1CA30946",
                            "verse": 21,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4325"
                            },
                            "translation": "kjv",
                            "verseID": 1001021,
                            "text": ", which the waters",
                            "fragmentNumber": 10
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "75CF6E92-F8F9-47B6-8A9C-5BF3CD54C96C",
                            "verse": 21,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "verseID": 1001021,
                            "fragmentNumber": 11,
                            "text": "brought forth abundantly"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 21,
                            "id": "7BB91F54-FEAE-4B28-BDD3-22C22ECF5DE9",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4327"
                            },
                            "verseID": 1001021,
                            "text": ", after their kind",
                            "fragmentNumber": 13
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 21,
                            "id": "6BD00423-C718-465B-A969-D2A45F31072A",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3671"
                            },
                            "fragmentNumber": 14,
                            "verseID": 1001021,
                            "text": ", and every winged"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 21,
                            "id": "70DB7AA0-3020-44EB-B83A-2749093C7D29",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H5775"
                            },
                            "translation": "kjv",
                            "verseID": 1001021,
                            "text": "fowl",
                            "fragmentNumber": 15
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "A0D4F3DB-D82B-448A-BDF4-C7396CBF3D41",
                            "book": 1,
                            "verse": 21,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4327"
                            },
                            "translation": "kjv",
                            "text": "after his kind",
                            "fragmentNumber": 16,
                            "verseID": 1001021
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "CBDEA449-AE6F-4F8F-98BD-0D3C538CE97F",
                            "book": 1,
                            "verse": 21,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "verseID": 1001021,
                            "fragmentNumber": 17,
                            "text": ": and God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "DA4D02DC-B59C-4786-AEEC-E2519B35DF65",
                            "verse": 21,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7200"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 18,
                            "text": "saw",
                            "verseID": 1001021
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "DE7B5F4C-000B-4B44-9116-9B57670B36DC",
                            "verse": 21,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2896"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 20,
                            "verseID": 1001021,
                            "text": "that it was good."
                        }
                    ],
                    "chapter": 1,
                    "book": 1
                },
                {
                    "translation": "kjv",
                    "chapter": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "1FA0826B-35ED-461E-A45D-E0AA369F7F3E",
                            "verse": 22,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "fragmentNumber": 1,
                            "text": "And God",
                            "verseID": 1001022
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 22,
                            "id": "6E204D41-27ED-4463-A23C-87D0023516B2",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1288"
                            },
                            "text": "blessed",
                            "fragmentNumber": 2,
                            "verseID": 1001022
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "396AD872-3598-4BC6-A71A-2F160A262922",
                            "book": 1,
                            "verse": 22,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H559"
                            },
                            "fragmentNumber": 4,
                            "text": "them, saying",
                            "verseID": 1001022
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "id": "200EAEA4-6351-451C-ABFB-C977B866FC6B",
                            "verse": 22,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6509"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 6,
                            "verseID": 1001022,
                            "text": ", Be fruitful"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "174D354B-404E-47E2-ACC8-F8FE7A4AEDEB",
                            "verse": 22,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7235"
                            },
                            "verseID": 1001022,
                            "fragmentNumber": 8,
                            "text": ", and multiply"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 22,
                            "id": "234A29F1-03CC-47A0-858B-2E4FAEA6BDAC",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4390"
                            },
                            "fragmentNumber": 10,
                            "verseID": 1001022,
                            "text": ", and fill"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 22,
                            "id": "648EB828-ED7D-446D-838E-CDF4E49C4D79",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4325"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 12,
                            "text": "the waters",
                            "verseID": 1001022
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "79949A87-EAE0-426B-8C9B-9283F525DAF4",
                            "verse": 22,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3220"
                            },
                            "verseID": 1001022,
                            "text": "in the seas",
                            "fragmentNumber": 13
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "D052FFA8-1BBE-4B9B-AE66-654456792CC5",
                            "book": 1,
                            "verse": 22,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H5775"
                            },
                            "translation": "kjv",
                            "verseID": 1001022,
                            "text": ", and let fowl",
                            "fragmentNumber": 14
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "6833541B-A86F-497F-B852-7480C7700082",
                            "book": 1,
                            "verse": 22,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7235"
                            },
                            "translation": "kjv",
                            "verseID": 1001022,
                            "text": "multiply",
                            "fragmentNumber": 15
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 22,
                            "id": "D8D30305-D94A-4CD8-929F-4EA33D1A9E3E",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "translation": "kjv",
                            "verseID": 1001022,
                            "fragmentNumber": 17,
                            "text": "in the earth."
                        }
                    ],
                    "book": 1,
                    "verse": 22
                },
                {
                    "book": 1,
                    "translation": "kjv",
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "6AB73732-62B8-400B-8F8C-47AEC03BB638",
                            "book": 1,
                            "verse": 23,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6153"
                            },
                            "verseID": 1001023,
                            "fragmentNumber": 1,
                            "text": "And the evening"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "25990E9A-EF56-45C0-908D-B4AE3CB7C751",
                            "verse": 23,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1242"
                            },
                            "fragmentNumber": 2,
                            "verseID": 1001023,
                            "text": "and the morning"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "0580D19F-3796-4ED0-844B-C3E3E4E81CDA",
                            "verse": 23,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2549"
                            },
                            "verseID": 1001023,
                            "text": "were the fifth",
                            "fragmentNumber": 3
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "D9DF9DD6-CE61-46DA-A69C-48D0418D61A9",
                            "verse": 23,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3117"
                            },
                            "text": "day.",
                            "fragmentNumber": 4,
                            "verseID": 1001023
                        }
                    ],
                    "chapter": 1,
                    "verse": 23
                },
                {
                    "book": 1,
                    "translation": "kjv",
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 24,
                            "id": "721B9DE9-610E-4E7A-A04D-252EFF594277",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "verseID": 1001024,
                            "fragmentNumber": 1,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 24,
                            "id": "21D9BB12-E38B-4448-9D5C-FDB2D2F6447A",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H559"
                            },
                            "translation": "kjv",
                            "text": "said",
                            "fragmentNumber": 2,
                            "verseID": 1001024
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "3D54A696-59E0-4284-99E1-577058636148",
                            "book": 1,
                            "verse": 24,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "translation": "kjv",
                            "text": ", Let the earth",
                            "verseID": 1001024,
                            "fragmentNumber": 4
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "4D1C02D1-C1DC-4F78-9102-1E9433BBAD4B",
                            "book": 1,
                            "verse": 24,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3318"
                            },
                            "text": "bring forth",
                            "verseID": 1001024,
                            "fragmentNumber": 5
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 24,
                            "id": "A71943BB-19BB-44CD-9CC2-CB333AEBD8A7",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2416"
                            },
                            "translation": "kjv",
                            "verseID": 1001024,
                            "text": "the living",
                            "fragmentNumber": 7
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 24,
                            "id": "FB7E8A69-EA1E-49F3-A36E-AF07745D1502",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H5315"
                            },
                            "translation": "kjv",
                            "verseID": 1001024,
                            "fragmentNumber": 8,
                            "text": "creature"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "CA0EC0DF-B066-4810-BA62-85D927CCE47C",
                            "book": 1,
                            "verse": 24,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4327"
                            },
                            "translation": "kjv",
                            "verseID": 1001024,
                            "fragmentNumber": 9,
                            "text": "after his kind"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "038C67FC-51B7-4C50-8145-41C768D50C06",
                            "book": 1,
                            "verse": 24,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H929"
                            },
                            "verseID": 1001024,
                            "text": ", cattle",
                            "fragmentNumber": 10
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 24,
                            "id": "E68F8EDE-5BFF-46B1-8411-7BCBBB9FE384",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7431"
                            },
                            "fragmentNumber": 11,
                            "text": ", and creeping thing",
                            "verseID": 1001024
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 24,
                            "id": "23BB4076-6D77-481A-AD94-3AF493A137AA",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2416"
                            },
                            "translation": "kjv",
                            "text": ", and beast",
                            "verseID": 1001024,
                            "fragmentNumber": 12
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "7122C421-DED9-4094-81B4-B19215E5DE04",
                            "verse": 24,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "translation": "kjv",
                            "text": "of the earth",
                            "fragmentNumber": 13,
                            "verseID": 1001024
                        },
                        {
                            "numberOfWordsInFragment": 7,
                            "book": 1,
                            "verse": 24,
                            "id": "DD955541-84E4-43A1-9C9B-F97241FAF548",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4327"
                            },
                            "fragmentNumber": 14,
                            "verseID": 1001024,
                            "text": "after his kind: and it was so."
                        }
                    ],
                    "chapter": 1,
                    "verse": 24
                },
                {
                    "verse": 25,
                    "translation": "kjv",
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "F96254CA-7C9D-4AFA-AC18-25423418CEE0",
                            "verse": 25,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "text": "And God",
                            "verseID": 1001025,
                            "fragmentNumber": 1
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "F758E7BA-8FCE-4085-8F27-2F062C86927C",
                            "verse": 25,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6213"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 2,
                            "text": "made",
                            "verseID": 1001025
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "3D392985-4DD8-46F3-A5B2-F85D051F3709",
                            "verse": 25,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2416"
                            },
                            "fragmentNumber": 4,
                            "verseID": 1001025,
                            "text": "the beast"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "346348FF-8DA5-4FDD-8027-4FFB30B37990",
                            "verse": 25,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "fragmentNumber": 5,
                            "text": "of the earth",
                            "verseID": 1001025
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 25,
                            "id": "230124A5-7F8D-46B7-973E-55584BEABFEB",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H4327"
                            },
                            "verseID": 1001025,
                            "fragmentNumber": 6,
                            "text": "after his kind"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 25,
                            "id": "88102BFF-CC67-4A3A-A9FB-FAF6F232FA07",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H929"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 7,
                            "text": ", and cattle",
                            "verseID": 1001025
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 25,
                            "id": "F4C017DD-2D48-45F7-BC0B-A68CF39D5475",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4327"
                            },
                            "translation": "kjv",
                            "text": "after their kind",
                            "verseID": 1001025,
                            "fragmentNumber": 8
                        },
                        {
                            "numberOfWordsInFragment": 5,
                            "id": "950527BC-E5D7-4C12-BE85-0A5E6302D206",
                            "verse": 25,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7431"
                            },
                            "verseID": 1001025,
                            "fragmentNumber": 9,
                            "text": ", and every thing that creepeth"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "59D43426-08F8-4AD3-B6C0-0C463B773887",
                            "verse": 25,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H127"
                            },
                            "text": "upon the earth",
                            "verseID": 1001025,
                            "fragmentNumber": 10
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 25,
                            "id": "5A31298B-AFE7-46A3-B053-0A979830006C",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4327"
                            },
                            "translation": "kjv",
                            "text": "after his kind",
                            "fragmentNumber": 11,
                            "verseID": 1001025
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "F25A9B4D-95C3-4BE8-9535-B76445A75839",
                            "verse": 25,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "verseID": 1001025,
                            "fragmentNumber": 12,
                            "text": ": and God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "1D9089D8-227C-43A6-9FA0-7788D5B2E3CD",
                            "verse": 25,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7200"
                            },
                            "fragmentNumber": 13,
                            "text": "saw",
                            "verseID": 1001025
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "book": 1,
                            "verse": 25,
                            "id": "883F4A74-3AE8-4C16-A2D4-801A228DA9EC",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2896"
                            },
                            "text": "that it was good.",
                            "verseID": 1001025,
                            "fragmentNumber": 15
                        }
                    ],
                    "chapter": 1,
                    "book": 1
                },
                {
                    "verse": 26,
                    "book": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "904B9E92-BAAC-41D1-B803-0687867C51D1",
                            "verse": 26,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "translation": "kjv",
                            "verseID": 1001026,
                            "fragmentNumber": 1,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 26,
                            "id": "6116A619-C6CA-4798-9DAB-6C6FFC856326",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H559"
                            },
                            "verseID": 1001026,
                            "fragmentNumber": 2,
                            "text": "said"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "920D5683-2504-4F8F-AD7B-C2FEFA8A408B",
                            "verse": 26,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6213"
                            },
                            "text": ", Let us make",
                            "verseID": 1001026,
                            "fragmentNumber": 4
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "704966A2-307B-401D-B4BC-6BCDB9B956B5",
                            "book": 1,
                            "verse": 26,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H120"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 6,
                            "verseID": 1001026,
                            "text": "man"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "17BD7DFE-D018-46BF-BF26-31285FAC379C",
                            "verse": 26,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6754"
                            },
                            "translation": "kjv",
                            "text": "in our image",
                            "fragmentNumber": 7,
                            "verseID": 1001026
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "94667B44-6CBB-4B1B-9328-2E2AE24E396B",
                            "verse": 26,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1823"
                            },
                            "verseID": 1001026,
                            "fragmentNumber": 8,
                            "text": ", after our likeness"
                        },
                        {
                            "numberOfWordsInFragment": 5,
                            "book": 1,
                            "verse": 26,
                            "id": "986CEB59-F021-44C1-A27F-866AF8782579",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7287"
                            },
                            "translation": "kjv",
                            "text": ": and let them have dominion",
                            "fragmentNumber": 9,
                            "verseID": 1001026
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "2CE4C3CA-7EA6-4D5B-97C8-150CCC1B3B8A",
                            "verse": 26,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1710"
                            },
                            "fragmentNumber": 11,
                            "verseID": 1001026,
                            "text": "over the fish"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "A9C8C3D8-2E77-4D13-8AAA-A34280CD01D2",
                            "verse": 26,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3220"
                            },
                            "verseID": 1001026,
                            "fragmentNumber": 12,
                            "text": "of the sea"
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "B44788B2-565C-41F6-8153-D8638ECD1A81",
                            "verse": 26,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H5775"
                            },
                            "fragmentNumber": 13,
                            "text": ", and over the fowl",
                            "verseID": 1001026
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "1B604703-DBD5-4B0E-BE06-DCCC11EA5500",
                            "verse": 26,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "text": "of the air",
                            "fragmentNumber": 14,
                            "verseID": 1001026
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "book": 1,
                            "verse": 26,
                            "id": "49F969D3-89D8-4798-8A03-CABC3E6DF357",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H929"
                            },
                            "fragmentNumber": 15,
                            "text": ", and over the cattle",
                            "verseID": 1001026
                        },
                        {
                            "numberOfWordsInFragment": 5,
                            "id": "6C5E0E25-0C93-4961-A3B4-23B601573664",
                            "verse": 26,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "text": ", and over all the earth",
                            "verseID": 1001026,
                            "fragmentNumber": 16
                        },
                        {
                            "numberOfWordsInFragment": 5,
                            "book": 1,
                            "id": "9A61461C-5963-494C-A6A4-B626D76CB396",
                            "verse": 26,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7431"
                            },
                            "text": ", and over every creeping thing",
                            "verseID": 1001026,
                            "fragmentNumber": 17
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "D88D26E5-D8C6-4291-8D8C-9EBA1F59B5E6",
                            "book": 1,
                            "verse": 26,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7430"
                            },
                            "translation": "kjv",
                            "text": "that creepeth",
                            "verseID": 1001026,
                            "fragmentNumber": 18
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "FFAA7C57-6C22-4D2B-A27D-139D26238828",
                            "book": 1,
                            "verse": 26,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "verseID": 1001026,
                            "text": "upon the earth.",
                            "fragmentNumber": 20
                        }
                    ],
                    "chapter": 1,
                    "translation": "kjv"
                },
                {
                    "translation": "kjv",
                    "verse": 27,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "927A7963-0310-4832-8220-10982A587A55",
                            "verse": 27,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "verseID": 1001027,
                            "fragmentNumber": 1,
                            "text": "So God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 27,
                            "id": "D04370C4-462A-4821-AC7F-F10AF06ADFDB",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1254"
                            },
                            "text": "created",
                            "verseID": 1001027,
                            "fragmentNumber": 2
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "0757D408-06FA-4B0F-8F4B-003AA391608E",
                            "book": 1,
                            "verse": 27,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H120"
                            },
                            "fragmentNumber": 4,
                            "verseID": 1001027,
                            "text": "man"
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "366A768D-8867-48E6-ABE4-D36EDDD438B5",
                            "book": 1,
                            "verse": 27,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6754"
                            },
                            "text": "in his own image",
                            "verseID": 1001027,
                            "fragmentNumber": 5
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "2D45E36D-7546-4DD3-B65E-8DABF59123BA",
                            "verse": 27,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6754"
                            },
                            "verseID": 1001027,
                            "fragmentNumber": 6,
                            "text": ", in the image"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "AA498E00-E1FA-4118-9F31-15413BF2866C",
                            "verse": 27,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "fragmentNumber": 7,
                            "verseID": 1001027,
                            "text": "of God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 27,
                            "id": "971FBF59-1AAC-433B-B755-686D9B1AD9BA",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H1254"
                            },
                            "translation": "kjv",
                            "verseID": 1001027,
                            "text": "created",
                            "fragmentNumber": 8
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "0BE94949-3DCA-449D-9E66-2F2922A97C40",
                            "verse": 27,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2145"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 10,
                            "verseID": 1001027,
                            "text": "he him; male"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "87256F5E-79C8-4C87-8321-A752118FF1B1",
                            "verse": 27,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H5347"
                            },
                            "translation": "kjv",
                            "text": "and female",
                            "verseID": 1001027,
                            "fragmentNumber": 11
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 27,
                            "id": "F33C6FC7-16F8-4CBA-8CF3-AC1D8E338933",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H1254"
                            },
                            "translation": "kjv",
                            "text": "created",
                            "verseID": 1001027,
                            "fragmentNumber": 12
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "9D096597-98A3-4DE9-A5D8-5CF54FEAD329",
                            "verse": 27,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "text": "",
                            "verseID": 1001027,
                            "fragmentNumber": 13
                        }
                    ],
                    "chapter": 1,
                    "book": 1
                },
                {
                    "translation": "kjv",
                    "book": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "verse": 28,
                            "id": "920E5D5E-E323-4EFE-B268-F95D1832FCF9",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "fragmentNumber": 1,
                            "verseID": 1001028,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 28,
                            "id": "8D5FB3E6-5026-45E5-9DA1-93F7AF85E003",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1288"
                            },
                            "text": "blessed",
                            "fragmentNumber": 2,
                            "verseID": 1001028
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "58A8F654-1123-4DED-9EFE-20E8FA19247F",
                            "verse": 28,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 4,
                            "text": "them, and God",
                            "verseID": 1001028
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 28,
                            "id": "2F597AF0-319C-4735-BE65-7EB8D06D7848",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H559"
                            },
                            "translation": "kjv",
                            "verseID": 1001028,
                            "fragmentNumber": 5,
                            "text": "said"
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "A57CF9D3-3DC7-4770-9DEA-6476BD67FFB4",
                            "verse": 28,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6509"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 7,
                            "text": "unto them, Be fruitful",
                            "verseID": 1001028
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "31030BE6-3B6F-4F56-AB56-CD24BD1F20B9",
                            "verse": 28,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7235"
                            },
                            "text": ", and multiply",
                            "verseID": 1001028,
                            "fragmentNumber": 9
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "F737D98E-69D1-405E-9646-1CA373259466",
                            "verse": 28,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H4390"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 11,
                            "verseID": 1001028,
                            "text": ", and replenish"
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "33B0A4B7-5518-4522-95AF-02C18FF278BB",
                            "book": 1,
                            "verse": 28,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "text": "the earth",
                            "fragmentNumber": 13,
                            "verseID": 1001028
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 28,
                            "id": "40C7C88C-15CD-4F49-9FDB-84160280D632",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H3533"
                            },
                            "verseID": 1001028,
                            "fragmentNumber": 14,
                            "text": ", and subdue it"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 28,
                            "id": "0890760D-E754-44E0-9BF1-7BE3067CFA8A",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7287"
                            },
                            "fragmentNumber": 16,
                            "text": ": and have dominion",
                            "verseID": 1001028
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "F00EC739-24D7-4839-A841-5CBB4F46E52D",
                            "book": 1,
                            "verse": 28,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1710"
                            },
                            "fragmentNumber": 18,
                            "text": "over the fish",
                            "verseID": 1001028
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "id": "3E9BEC92-BD58-4205-8A75-91998F42E033",
                            "verse": 28,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3220"
                            },
                            "translation": "kjv",
                            "text": "of the sea",
                            "fragmentNumber": 19,
                            "verseID": 1001028
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "F0856EDB-9088-46AE-9861-DF06F51B4036",
                            "verse": 28,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H5775"
                            },
                            "translation": "kjv",
                            "text": ", and over the fowl",
                            "fragmentNumber": 20,
                            "verseID": 1001028
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "CB36E188-13E4-43D1-A2AB-295A3125F291",
                            "verse": 28,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": null
                            },
                            "translation": "kjv",
                            "fragmentNumber": 21,
                            "text": "of the air",
                            "verseID": 1001028
                        },
                        {
                            "numberOfWordsInFragment": 5,
                            "book": 1,
                            "verse": 28,
                            "id": "26EB38F8-A833-4D2E-8B5E-76B19295FC5D",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2416"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 22,
                            "text": ", and over every living thing",
                            "verseID": 1001028
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "book": 1,
                            "id": "E00A7199-7D11-446C-99DA-BA2569115C2B",
                            "verse": 28,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H7430"
                            },
                            "fragmentNumber": 23,
                            "verseID": 1001028,
                            "text": "that moveth"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "AB5B98E0-08E9-4C00-9D6D-FD4D19B7BA23",
                            "verse": 28,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 25,
                            "text": "upon the earth.",
                            "verseID": 1001028
                        }
                    ],
                    "chapter": 1,
                    "verse": 28
                },
                {
                    "translation": "kjv",
                    "book": 1,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "2A00C68B-FBFB-4CBD-9F27-E885B27BAEB7",
                            "book": 1,
                            "verse": 29,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H430"
                            },
                            "verseID": 1001029,
                            "fragmentNumber": 1,
                            "text": "And God"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "59BDBFA8-6120-4EB0-9E80-3A218A23B9EC",
                            "verse": 29,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H559"
                            },
                            "fragmentNumber": 2,
                            "text": "said",
                            "verseID": 1001029
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "97892B1E-51F2-4129-BCCD-645BB160BE64",
                            "verse": 29,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2009"
                            },
                            "text": ", Behold",
                            "verseID": 1001029,
                            "fragmentNumber": 4
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 29,
                            "id": "EE40F38A-7475-4A37-A278-0753E7324699",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H5414"
                            },
                            "fragmentNumber": 5,
                            "text": ", I have given",
                            "verseID": 1001029
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "594A5965-705B-49B6-80AF-5D3341329FEC",
                            "verse": 29,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6212"
                            },
                            "translation": "kjv",
                            "verseID": 1001029,
                            "fragmentNumber": 7,
                            "text": "you every herb"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "id": "7C2FFDC1-E2F7-43DD-9916-CCBC339BAF41",
                            "verse": 29,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2232"
                            },
                            "translation": "kjv",
                            "text": "bearing",
                            "fragmentNumber": 8,
                            "verseID": 1001029
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 29,
                            "id": "A8958DA8-B061-4992-BC1A-34DB229E6503",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2233"
                            },
                            "text": "seed",
                            "verseID": 1001029,
                            "fragmentNumber": 10
                        },
                        {
                            "numberOfWordsInFragment": 5,
                            "book": 1,
                            "verse": 29,
                            "id": "8D91E167-66D8-4844-B10A-362BD155C997",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6440"
                            },
                            "fragmentNumber": 11,
                            "verseID": 1001029,
                            "text": ", which is upon the face"
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "book": 1,
                            "id": "43F554A9-D2A8-4FDB-B0E7-A6A033520B7D",
                            "verse": 29,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 12,
                            "text": "of all the earth",
                            "verseID": 1001029
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "1604E0E3-2BF2-4E69-AABE-5B79BE44FD61",
                            "verse": 29,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6086"
                            },
                            "text": ", and every tree",
                            "fragmentNumber": 13,
                            "verseID": 1001029
                        },
                        {
                            "numberOfWordsInFragment": 6,
                            "id": "F7F3635A-2063-4D8C-9B92-946B27A1306D",
                            "verse": 29,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6529"
                            },
                            "fragmentNumber": 14,
                            "text": ", in the which is the fruit",
                            "verseID": 1001029
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 29,
                            "id": "D00233EC-0471-41FE-8A54-D6B8CCBE2531",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H6086"
                            },
                            "translation": "kjv",
                            "text": "of a tree",
                            "verseID": 1001029,
                            "fragmentNumber": 15
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "4B2DB4E2-3D51-480F-954D-50EAF045B883",
                            "verse": 29,
                            "book": 1,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2232"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 16,
                            "verseID": 1001029,
                            "text": "yielding"
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "book": 1,
                            "verse": 29,
                            "id": "C149C49C-159D-4821-B1ED-D5473F987988",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2233"
                            },
                            "fragmentNumber": 18,
                            "text": "seed",
                            "verseID": 1001029
                        },
                        {
                            "numberOfWordsInFragment": 5,
                            "id": "29B50EF7-0888-4382-87EB-BC9CC18C338E",
                            "verse": 29,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H1961"
                            },
                            "fragmentNumber": 19,
                            "text": "; to you it shall be",
                            "verseID": 1001029
                        },
                        {
                            "numberOfWordsInFragment": 2,
                            "id": "AD1D05A3-3455-43CE-85FF-017181C51AC5",
                            "book": 1,
                            "verse": 29,
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H402"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 21,
                            "text": "for meat.",
                            "verseID": 1001029
                        }
                    ],
                    "chapter": 1,
                    "verse": 29
                },
                {
                    "book": 1,
                    "verse": 30,
                    "fragments": [
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "955BD98D-1FCB-4B9E-B2C4-86075DB95A52",
                            "book": 1,
                            "verse": 30,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H2416"
                            },
                            "fragmentNumber": 1,
                            "verseID": 1001030,
                            "text": "And to every beast"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 30,
                            "id": "55E623A4-3811-4A41-949C-2C0851104586",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "verseID": 1001030,
                            "text": "of the earth",
                            "fragmentNumber": 2
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "id": "F4594B5D-3DC5-4A4B-9DF1-C7C706A705FF",
                            "verse": 30,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H5775"
                            },
                            "verseID": 1001030,
                            "fragmentNumber": 3,
                            "text": ", and to every fowl"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "id": "73758AAD-263B-4462-AD62-FA37574871DC",
                            "verse": 30,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": null
                            },
                            "text": "of the air",
                            "fragmentNumber": 4,
                            "verseID": 1001030
                        },
                        {
                            "numberOfWordsInFragment": 6,
                            "book": 1,
                            "verse": 30,
                            "id": "73633637-904F-49E4-99CF-2D6DB9D519B1",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H7430"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 5,
                            "verseID": 1001030,
                            "text": ", and to every thing that creepeth"
                        },
                        {
                            "numberOfWordsInFragment": 3,
                            "book": 1,
                            "verse": 30,
                            "id": "43FB4673-97B2-4105-946F-E2FD56D91D9E",
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H776"
                            },
                            "fragmentNumber": 7,
                            "text": "upon the earth",
                            "verseID": 1001030
                        },
                        {
                            "numberOfWordsInFragment": 4,
                            "book": 1,
                            "verse": 30,
                            "id": "3BC54A3F-8A0B-4C14-8A27-778647D704DD",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H2416"
                            },
                            "translation": "kjv",
                            "fragmentNumber": 8,
                            "text": ", wherein there is life",
                            "verseID": 1001030
                        },
                        {
                            "numberOfWordsInFragment": 5,
                            "book": 1,
                            "verse": 30,
                            "id": "39330ED6-52F5-4318-AEEA-CF25C49352A3",
                            "chapter": 1,
                            "strongsNumber": {
                                "id": "H3418"
                            },
                            "translation": "kjv",
                            "text": ", I have given every green",
                            "verseID": 1001030,
                            "fragmentNumber": 10
                        },
                        {
                            "numberOfWordsInFragment": 1,
                            "id": "35AC836D-ACED-4342-9B61-5BAA1F703200",
                            "verse": 30,
                            "book": 1,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H6212"
                            },
                            "verseID": 1001030,
                            "text": "herb",
                            "fragmentNumber": 11
                        },
                        {
                            "numberOfWordsInFragment": 6,
                            "book": 1,
                            "id": "923B9F06-A4F0-4402-B512-B05FFD53FA6C",
                            "verse": 30,
                            "chapter": 1,
                            "translation": "kjv",
                            "strongsNumber": {
                                "id": "H402"
                            },
                            "text": "for meat: and it was so.",
                            "fragmentNumber": 12,
                            "verseID": 1001030
                        }
                    ],
                    "chapter": 1,
                    "translation": "kjv"
                }
            ]
        
        this.axios.get(config.API_LOCATION + 'bible-book-numbers',{
            headers: {
                // 'Access-Control-Allow-Origin': '*',
            }    
        })
        .then((response) => {
            this.bookLabel = response.data;
            console.log('Mounted', this.bookLabel);
            this.updateBibleArea(this.gensis_filter);

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
            this.axios.get(config.API_LOCATION + 'bible-input2/' + this.translation + '/' + filter_str, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
                .then((response) => {
                    console.log(response);
                    if(response.data.length > 0)
                        _chapter = response.data[0]['chapter'];

                    var chapterLabel = this.bookLabel[response.data[0]['book']] + ' ' + _chapter;
                    this.chapterLabel = chapterLabel;

                    this.verseList = response.data;
                    console.log(this.verseList);

                    this.$root.$emit('updateNoteList', this.bookLabel, response.data[0]['book'], response.data[0]['chapter'], 0); 
                    this.$root.$emit('setBibbleInfo', this.bookLabel[response.data[0]['book']], response.data[0]['book'], response.data[0]['chapter'], response.data.length);
                })
                .catch(function (error) {
                    console.log(error) // error log
                })
        },
        setAlignment: function(_alignment) {
            this.alignment = _alignment;
        },
        switchStrong: function() {
            this.strongShow = 1 - this.strongShow;
        },
        addNote: function(verse) {
            var _mode = 0;
            var _verse = verse;
            this.$root.$emit('setNoteModalMode', _mode, _verse);
            this.$root.$emit('openCommentModal');
        }
    }

}
</script>

<style lang="scss">
    .strong-button {
        border: solid 1px gray;
        padding: 0px;
        margin: 5px;
        font-size: 22px;
        font-weight: bold;
        width: 28px;
        text-align: center;
        padding-top: 1px;
        border-radius: 5px;
        cursor: pointer;
    }
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

    .high-height {
        line-height: 300%;
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
