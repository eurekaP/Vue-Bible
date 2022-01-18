<template>
    <div class="container" style="height: 100vh;padding-top: 39px;">
        <div class="row d-flex justify-content-lg-center" style="height: 100vh;">
            <!-- <bible></bible> -->
            <bible></bible>
            <!-- <div class="col-md-4 col-2" id="content" style="border-bottom-color: rgb(0,128,255);height: 95vh;padding-bottom: 50px;">
                <div>
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <h6 class="text-start text-info sticky-top" style="background: #ffffff;">
                                            <div class="btn-group dropdown"><button class="btn btn-light btn-sm" type="button">Notes</button><button class="btn btn-light btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" type="button"></button>
                                                <div class="dropdown-menu"><a class="dropdown-item" href="#">Show Friends Notes</a><a class="dropdown-item" href="#">Second Item</a><a class="dropdown-item" href="#">Third Item</a></div>
                                            </div>
                                        </h6>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p style="margin-bottom: -8px;">This is my note about...</p><small style="font-size: 11px;margin-bottom: -4px;">Gen 1:1</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style="margin-bottom: 0px;">This is my note about...</p><small style="font-size: 11px;">Gen 1:1</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style="margin-bottom: 0px;">This is my note about...</p><small style="font-size: 11px;">Gen 1:5</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style="margin-bottom: 0px;">This is my note about...</p><small style="font-size: 11px;">Gen 1:11</small>
                                    </td>
                                </tr>
                                <tr></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h6 class="text-start text-info sticky-top" style="background: #ffffff;">Group Study</h6>
                    <div class="text-end d-md-flex justify-content-md-center justify-content-lg-end"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar1.jpg" style="width: 27px;height: 25px;margin: 4px;">
                        <div>
                            <div style="background: #5aa6ff;border-radius: 8px;">
                                <p style="margin-bottom: 0px;color: rgb(255,255,255);padding: 5px;">Thats a great thought</p>
                            </div><small style="color: rgb(126,133,140);font-size: 11px;">John Sims</small>
                        </div>
                    </div>
                    <div class="text-end d-md-flex justify-content-md-center justify-content-lg-end"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar2.jpg" style="width: 27px;height: 25px;margin: 4px;">
                        <div>
                            <div style="background: #5aa6ff;border-radius: 8px;">
                                <p style="margin-bottom: 0px;color: rgb(255,255,255);padding: 5px;">I thought so too</p>
                            </div><small style="color: rgb(126,133,140);font-size: 11px;">John Sims</small>
                        </div>
                    </div>
                    <div class="text-end d-md-flex justify-content-md-center justify-content-lg-end"><img class="rounded-circle img-fluid" src="assets/img/avatars/avatar3.jpg" style="width: 27px;height: 25px;margin: 4px;">
                        <div>
                            <div style="background: #5aa6ff;border-radius: 8px;">
                                <p style="margin-bottom: 0px;color: rgb(255,255,255);padding: 5px;">I guess you are right...</p>
                            </div><small style="color: rgb(126,133,140);font-size: 11px;">John Sims</small>
                        </div>
                    </div>
                    <div class="text-center d-lg-flex justify-content-lg-center"><textarea style="background: rgb(248,249,250);border-style: none;" placeholder="Make a Comment"></textarea><button class="btn btn-light" type="button">Send</button></div>
                </div>
                <h6 class="text-start text-info sticky-top" style="background: #ffffff;">Strongs Concordance</h6>
                <h6 class="text-start text-info sticky-top" style="background: #ffffff;font-size: 13px;">You Selected the word "God"</h6>
                <div class="row">
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Gen</small><small style="font-size: 10px;color: var(--bs-red);">23</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Ex</small><small style="font-size: 10px;color: var(--bs-red);">4</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Lev</small><small style="font-size: 10px;color: var(--bs-red);">18</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Num</small><small style="font-size: 10px;color: var(--bs-red);">0</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Josh</small><small style="font-size: 10px;color: var(--bs-red);">130</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Judg</small><small style="font-size: 10px;color: var(--bs-red);">23</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Ruth</small><small style="font-size: 10px;color: var(--bs-red);">4</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>1Sam</small><small style="font-size: 10px;color: var(--bs-red);">9</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>2Sam</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>1King</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>2King</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>1Chr</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>2Chr</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Ez</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Neh</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Est</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Job</small></div>
                        </div>
                    </div>
                    <div class="col col-3" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
                        <div>
                            <div class="d-lg-flex justify-content-lg-center"><small>Ps</small></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <hr>
                    </div>
                    <div class="col col-12"><small>Genesis</small></div>
                    <div class="col col-2" style="background: #e4ecff;border: 1px solid rgb(214,227,254) ;">
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
                <div class="row">
                    <div class="col">
                        <hr>
                    </div>
                    <div class="col col-12">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Genesis 1 "God"&nbsp; &nbsp; &nbsp;Found 2 Items</th>
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
                </div><textarea class="form-control-sm" id="new-note" style="border-style: none;border-bottom-style: solid;border-bottom-color: var(--bs-blue);width: 30%;background: rgb(240,244,255);" placeholder="New Note" rows="2"></textarea>
            </div> -->
        </div>
    </div>
  <!-- <div class="jumbotron">
    <h1 class="display-4">College Search</h1>
    <img src="/assets/college-search.jpg"/>
    <hr class="my-4">
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    
    <router-link class="btn btn-primary btn-lg" to="/login">Login</router-link>
  </div> -->
</template>

<script>    // Home screen vue - no scripts (There are only UI)
import Bible from './components/Bible.vue';

export default {
    name: 'Home',
    components: {
        Bible
    }
}
</script>
