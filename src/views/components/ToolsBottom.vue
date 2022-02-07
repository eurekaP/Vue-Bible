<template>
    <div>
        <div id="notes-tool" class="fixed-bottom" style="height: 45%;box-shadow: 0px 0px 10px 3px rgb(217,217,217);/*left: 20%;*/">
            <div class="sticky sticky-top" style="background: #ffffff;">
                <div class="row">
                    <div class="col">
                        <h5 class="text-start text-info" style="margin-top: 8px;margin-bottom: 0px;margin-left: 10px;">Notes</h5>
                    </div>
                    <div class="col d-flex d-lg-flex justify-content-end align-items-center justify-content-lg-end align-items-lg-center"><button class="btn btn-outline-primary btn-sm" type="button" style="border-style: none;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-people-fill">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"></path>
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                            </svg></button><button class="btn btn-outline-primary btn-sm" type="button" style="border-style: none;" onclick="notesFullScreen()"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrows-expand">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"></path>
                            </svg></button><button class="btn btn-outline-primary btn-sm" type="button" style="border-style: none;margin-right: 5px;" onclick="hideNotesBottom()"><i class="fa fa-angle-down"></i></button></div>
                </div>
                <hr style="margin: 0px;">
            </div>
            <div id="notes-table" style="overflow-x: scroll;height: 100%;padding-bottom: 60px; background:white;">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <tbody>
                            <tr>
                                <td id="notes-cell-2" onclick="toggleNoteLines(&#39;2&#39;)">
                                    <div><small style="font-size: 11px;">Gen 1:1</small><small class="float-end" style="font-size: 11px;margin-left: 8px;">John Jibs</small></div>
                                    <p class="text-break" id="note-2" style="margin-bottom: -8px;line-height: 1.5em;height: 3em;overflow: hidden;">If a note is selected then it will be highlighted in blue. The entire contents of the note will then be displayed. When the user clicks on another note this will collapse and show only two lines.</p><small class="float-end" style="font-size: 11px;margin-left: 8px;">1 Jan 22</small>
                                </td>
                            </tr>
                            <tr>
                                <td id="notes-cell-1" onclick="toggleNoteLines(&#39;1&#39;)">
                                    <div><small style="font-size: 11px;">Gen 1:1</small><small class="float-end" style="font-size: 11px;margin-left: 8px;">John Jibs</small></div>
                                    <p class="text-break" id="note-1" style="margin-bottom: -8px;line-height: 1.5em;height: 3em;overflow: hidden;">If a note is selected then it will be highlighted in blue. The entire contents of the note will then be displayed. When the user clicks on another note this will collapse and show only two lines.</p><small class="float-end" style="font-size: 11px;margin-left: 8px;">1 Jan 22</small>
                                </td>
                            </tr>
                            <tr>
                                <td id="notes-cell-4" class="friend" onclick="toggleNoteLines(&#39;4&#39;)">
                                    <div><small style="font-size: 11px;">Gen 1:1</small><small class="float-end" style="font-size: 11px;margin-left: 8px;">John Jibs</small></div>
                                    <div class="d-flex justify-content-start"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar2.jpg" style="width: 30px;height: 30px;margin-right: 5px;">
                                        <p class="text-break" id="note-4" style="margin-bottom: -8px;line-height: 1.5em;height: 3em;overflow: hidden;">If a note is selected then it will be highlighted in blue. The entire contents of the note will then be displayed. When the user clicks on another note this will collapse and show only two lines.</p>
                                    </div><small class="float-end" style="font-size: 11px;margin-left: 8px;">1 Jan 22</small>
                                </td>
                            </tr>
                            <tr>
                                <td id="notes-cell-3" onclick="toggleNoteLines(&#39;3&#39;)">
                                    <div><small style="font-size: 11px;">Gen 1:1</small><small class="float-end" style="font-size: 11px;margin-left: 8px;">John Jibs</small></div>
                                    <p class="text-break" id="note-3" style="margin-bottom: -8px;line-height: 1.5em;height: 3em;overflow: hidden;">If a note is selected then it will be highlighted in blue. The entire contents of the note will then be displayed. When the user clicks on another note this will collapse and show only two lines.</p><small class="float-end" style="font-size: 11px;margin-left: 8px;">1 Jan 22</small>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div id="chat-tool" class="fixed-bottom" style="display:none;height: 45%;box-shadow: 0px 0px 10px 3px rgb(217,217,217);">
            <div class="sticky sticky-top" style="background: #ffffff;">
                <div class="row">
                    <div class="col">
                        <h5 class="text-start text-info" style="margin-top: 8px;margin-bottom: 0px;margin-left: 10px;">Group Study</h5>
                    </div>
                    <div class="col d-flex d-lg-flex justify-content-end align-items-center justify-content-lg-end align-items-lg-center"><button class="btn btn-outline-primary btn-sm" type="button" style="border-style: none;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-menu-down">
                                <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
                            </svg></button><button class="btn btn-outline-primary btn-sm" type="button" style="border-style: none;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-person-plus">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path>
                            </svg></button><button class="btn btn-outline-primary btn-sm" type="button" style="border-style: none;" onclick="chatsFullScreen()"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrows-expand">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"></path>
                            </svg></button><button class="btn btn-outline-primary btn-sm" type="button" style="border-style: none;margin-right: 5px;" onclick="hideChatsBottom()"><i class="fa fa-angle-down"></i></button></div>
                </div>
                <hr style="margin: 0px;">
            </div>
            <div id="chats-area" style="overflow: scroll; height: 100%;padding-bottom: 50px; background: white;">
                <div id="all-chats" style="overflow: scroll;height: 85%;padding-top: 10px;">
                    <div class="d-flex d-md-flex justify-content-start justify-content-md-center justify-content-lg-start"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar1.jpg" style="width: 27px;height: 25px;margin: 4px;">
                        <div>
                            <div style="background: #5aa6ff;border-radius: 8px;">
                                <p class="text-break" style="margin-bottom: 0px;color: rgb(255,255,255);padding: 5px;">Thats a great thought</p>
                            </div><small style="color: rgb(126,133,140);font-size: 11px;">John Sims</small>
                        </div>
                    </div>
                    <div class="d-flex d-md-flex justify-content-start justify-content-md-center justify-content-lg-start"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar1.jpg" style="width: 27px;height: 25px;margin: 4px;">
                        <div>
                            <div style="background: #5aa6ff;border-radius: 8px;">
                                <p class="text-break" style="margin-bottom: 0px;color: rgb(255,255,255);padding: 5px;">Thats a great thought</p>
                            </div><small style="color: rgb(126,133,140);font-size: 11px;">John Sims</small>
                        </div>
                    </div>
                    <div class="d-flex d-md-flex justify-content-start justify-content-md-center justify-content-lg-start"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar2.jpg" style="width: 27px;height: 25px;margin: 4px;">
                        <div>
                            <div style="background: #5aa6ff;border-radius: 8px;">
                                <p class="text-break" style="margin-bottom: 0px;color: rgb(255,255,255);padding: 5px;">I thought so too</p>
                            </div><small style="color: rgb(126,133,140);font-size: 11px;">John Sims</small>
                        </div>
                    </div>
                    <div class="d-flex d-md-flex justify-content-start justify-content-md-center justify-content-lg-start"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar2.jpg" style="width: 27px;height: 25px;margin: 4px;">
                        <div>
                            <div style="background: #5aa6ff;border-radius: 8px;">
                                <p class="text-break" style="margin-bottom: 0px;color: rgb(255,255,255);padding: 5px;">I thought so too</p>
                            </div><small style="color: rgb(126,133,140);font-size: 11px;">John Sims</small>
                        </div>
                    </div>
                    <div class="d-flex d-md-flex justify-content-start justify-content-md-center justify-content-lg-start"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar3.jpg" style="width: 27px;height: 25px;margin: 4px;">
                        <div>
                            <div style="background: #5aa6ff;border-radius: 8px;">
                                <p class="text-break" style="margin-bottom: 0px;color: rgb(255,255,255);padding: 5px;">I guess you are right...&nbsp;I guess you are right...&nbsp;I guess you are right...</p>
                            </div><small style="color: rgb(126,133,140);font-size: 11px;">John Sims</small>
                        </div>
                    </div>
                    <div class="d-flex d-md-flex justify-content-start justify-content-md-center justify-content-lg-start"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar3.jpg" style="width: 27px;height: 25px;margin: 4px;">
                        <div>
                            <div style="background: #5aa6ff;border-radius: 8px;">
                                <p class="text-break" style="margin-bottom: 0px;color: rgb(255,255,255);padding: 5px;">I guess you are right...&nbsp;I guess you are right...&nbsp;I guess you are right...</p>
                            </div><small style="color: rgb(126,133,140);font-size: 11px;">John Sims</small>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center" id="sendchats" style="height:15%;">
                    <textarea class="form-control-sm col-10" id="chatsTextArea" rows="1" placeholder="New Message" name="groupChat" style="border-style: none;background: rgb(248,249,250); height:100%;"></textarea>
                    <button class="btn btn-primary btn-sm col-2" id="chatsSend" type="button" style="height:100%;">Send</button>
                </div>
                <div class="modal fade" role="dialog" tabindex="-1" id="invite-friend">
                    <div class="modal-dialog modal-fullscreen" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Start A Group Discussion</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>You can invite as many people as you would like to a group discussion.</p>
                                <div class="row">
                                    <div class="col col-12 col-md-6">
                                        <h5 class="text-start text-info">My Friends</h5>
                                        <div id="contacts">
                                            <div></div>
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="row">
                                                                    <div class="col d-lg-flex align-items-lg-center"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar1.jpg" width="30px" style="width: 30px;height: 30px;margin-right: 12px;">
                                                                        <p>John Jibs</p>
                                                                    </div>
                                                                    <div class="col d-lg-flex justify-content-lg-end"><button class="btn btn-outline-success btn-sm" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-person-check-fill">
                                                                                <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
                                                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                                                            </svg></button></div>
                                                                </div>
                                                                <div class="d-flex d-lg-flex align-items-center align-items-lg-center"></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="row">
                                                                    <div class="col d-lg-flex align-items-lg-center"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar1.jpg" width="30px" style="width: 30px;height: 30px;margin-right: 12px;">
                                                                        <p>John Jibs</p>
                                                                    </div>
                                                                    <div class="col d-lg-flex justify-content-lg-end"><button class="btn btn-outline-primary btn-sm" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-person-plus-fill">
                                                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                                                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path>
                                                                            </svg></button></div>
                                                                </div>
                                                                <div class="d-flex d-lg-flex align-items-center align-items-lg-center"></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="row">
                                                                    <div class="col d-lg-flex align-items-lg-center"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar1.jpg" width="30px" style="width: 30px;height: 30px;margin-right: 12px;">
                                                                        <p>John Jibs</p>
                                                                    </div>
                                                                    <div class="col d-lg-flex justify-content-lg-end"><button class="btn btn-outline-primary btn-sm" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-person-plus-fill">
                                                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                                                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path>
                                                                            </svg></button></div>
                                                                </div>
                                                                <div class="d-flex d-lg-flex align-items-center align-items-lg-center"></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="row">
                                                                    <div class="col d-lg-flex align-items-lg-center"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar1.jpg" width="30px" style="width: 30px;height: 30px;margin-right: 12px;">
                                                                        <p>John Jibs</p>
                                                                    </div>
                                                                    <div class="col d-lg-flex justify-content-lg-end"><button class="btn btn-outline-primary btn-sm" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-person-plus-fill">
                                                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                                                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"></path>
                                                                            </svg></button></div>
                                                                </div>
                                                                <div class="d-flex d-lg-flex align-items-center align-items-lg-center"></div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div>
                                            <div></div>
                                            <div class="d-lg-flex align-items-lg-center"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar1.jpg" width="30px" style="width: 30px;height: 30px;margin-right: 12px;">
                                                <p>John Jibs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer"><button class="btn btn-light" type="button" data-bs-dismiss="modal">Close</button><button class="btn btn-primary" type="button">Save</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="strongs-tool" class="fixed-bottom" style="display:none;height: 45%;overflow-x: scroll;box-shadow: 0px 0px 14px 1px rgb(224,224,224); background:white;">
            <div class="sticky-top sticky" style="background: #ffffff; z-index: 9999">
                <div class="row">
                    <div class="col">
                        <h5 class="text-start text-info" style="margin-top: 8px;margin-bottom: 0px;">Strongs Concordance</h5>
                    </div>
                    <div class="col d-flex d-lg-flex justify-content-end align-items-center justify-content-lg-end align-items-lg-center"><button class="btn btn-outline-primary btn-sm" type="button" style="border-style: none;" data-toggle="modal" data-target="#searchStrongs"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-search">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg></button><button class="btn btn-outline-primary btn-sm" type="button" style="border-style: none;" onclick="strongsFullScreen()"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrows-expand" style="margin-right: 0px;">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"></path>
                            </svg></button><button class="btn btn-outline-primary btn-sm" type="button" style="border-style: none;" onclick="hideStrongsBottom()"><i class="fa fa-angle-down" id="hide-strongs-icon-bottom" style="margin-right: 0px;"></i></button></div>
                </div>
                <hr style="margin: 0px;">
            </div>
            <h1 id="you-selected" class="sticky-top" style="background: #ffffff;font-size: 13px;margin-top: 5px;">You Selected "<strong>God</strong>" #H2256</h1>
            <div id="strongs-books">
                <div class="row">
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;" onclick="showStrongsChapter(1)">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Gen&nbsp;</small><small style="font-size: 10px;color: var(--bs-red);">130</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Ex&nbsp;</small><small style="font-size: 10px;color: var(--bs-red);">130</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Lev&nbsp;</small><small style="font-size: 10px;color: var(--bs-red);">130</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Num&nbsp;</small><small style="font-size: 10px;color: var(--bs-red);">130</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Josh&nbsp;</small><small style="font-size: 10px;color: var(--bs-red);">130</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Judg&nbsp;</small><small style="font-size: 10px;color: var(--bs-red);">23</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Ruth&nbsp;</small><small style="font-size: 10px;color: var(--bs-red);">4</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>1Sam&nbsp;</small><small style="font-size: 10px;color: var(--bs-red);">9</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>2Sam</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>1King</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>2King</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>1Chr</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>2Chr</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Ez</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Neh</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Est</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Job</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Ps</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Pr</small></div>
                        </div>
                    </div>
                    <div class="col col-3 bible-button" style="border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Ecc</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>SoS</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Is</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Jer</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Lam</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Eze</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Da</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Hb</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Jo</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Am</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Oba</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Jon</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Mi</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Na</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Ha</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Zep</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Hag</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Zec</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Mal</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Mat</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Mar</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Lu</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>John</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Acts</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Rom</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>1Cho</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>2Cho</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Gal</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Eph</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Phil</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Col</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>1Thes</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>2Thes</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>1Tim</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>2Tim</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Titus</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Phil</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Heb</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>James</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>1Pet</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>2Pet</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>1John</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>2John</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>3John</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Jude</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Rev</small></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="strongs-chapters" style="display:none;">
                <div class="col col-12"><button class="btn btn-outline-primary btn-sm sticky-top sticky" type="button" style="border-style: none;margin-bottom: 5px;" onclick="backStrongsChapter()"><i class="icon ion-ios-arrow-back"></i>Back</button><small>Genesis</small></div>
                <div class="col col-2 bible-button" style="border: 1px solid rgb(214,227,254) ;" onclick="showStrongsVerse(1)">
                    <div>
                        <div class="d-lg-flex justify-content-lg-center"><small>1</small><small style="font-size: 10px;color: var(--bs-red);">23</small></div>
                    </div>
                </div>
                <div class="col col-2" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                    <div>
                        <div class="d-lg-flex justify-content-lg-center"><small>2</small><small style="font-size: 10px;color: var(--bs-red);">4</small></div>
                    </div>
                </div>
                <div class="col col-2" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                    <div>
                        <div class="d-lg-flex justify-content-lg-center"><small>3</small><small style="font-size: 10px;color: var(--bs-red);">18</small></div>
                    </div>
                </div>
                <div class="col col-2" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                    <div>
                        <div class="d-lg-flex justify-content-lg-center"><small>4</small><small style="font-size: 10px;color: var(--bs-red);">0</small></div>
                    </div>
                </div>
                <div class="col col-2" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                    <div>
                        <div class="d-lg-flex justify-content-lg-center"><small>5</small><small style="font-size: 10px;color: var(--bs-red);">130</small></div>
                    </div>
                </div>
                <div class="col col-2" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                    <div>
                        <div class="d-lg-flex justify-content-lg-center"><small>6</small><small style="font-size: 10px;color: var(--bs-red);">23</small></div>
                    </div>
                </div>
                <div class="col col-2" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                    <div>
                        <div class="d-lg-flex justify-content-lg-center"><small>7</small><small style="font-size: 10px;color: var(--bs-red);">4</small></div>
                    </div>
                </div>
                <div class="col col-2" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                    <div>
                        <div class="d-lg-flex justify-content-lg-center"><small>8</small><small style="font-size: 10px;color: var(--bs-red);">9</small></div>
                    </div>
                </div>
                <div class="col col-2" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                    <div>
                        <div class="d-lg-flex justify-content-lg-center"><small>9</small></div>
                    </div>
                </div>
            </div>
            <div class="row" id="strongs-verses" style="display:none;">
                <div class="col col-12"><button class="btn btn-outline-primary btn-sm" type="button" style="border-style: none;margin-top: 5px;" onclick="backStrongsVerse()"><i class="icon ion-ios-arrow-back"></i>Back</button>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Genesis 1 "God" Found 2 Items</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>...the beginning<span class="circle-sketch-highlight" style="font-size: 22px;">God</span>&nbsp;created the..</td>
                                </tr>
                                <tr>
                                    <td>...the Spirit of&nbsp;<span class="circle-sketch-highlight" style="font-size: 22px;">God</span>moved upon the...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div id="tools-bottom" class="fixed-bottom" style="width: 100%;">
            <div class="btn-group" role="group" style="width: 100%;">
                <button class="btn btn-dark" type="button" onclick="ShowNotes()">Notes</button>
                <button class="btn btn-dark" type="button" onclick="ShowChats()">Group Study</button>
                <button class="btn btn-dark" type="button" onclick="ShowStrongs()">Strongs</button>
            </div>
        </div>
    </div>
</template>

<script>    
import config from "../../config";

export default {
    name: 'ToolBottom',
    data(){
        return {
           
        }
    },
    components: {

    },
    mounted(){
       
    },
    methods: {
    }

}
</script>

<style lang="scss">
    
</style>
