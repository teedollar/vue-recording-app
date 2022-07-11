<template>
    <div class="modal-overlay">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title text-left pt-1">New Recording <span @click="this.$emit('closeModal')" class="close">X</span></h5>
            </div>
            <div class="card-body" style="">

                <div class="container">
                    <div class="row mt-2">
                        <div class="col-12 save">
                            Save the recording in
                        </div>
                        <div class="col-12 mt-2">
                            <form class="form">
                                <div class="form-group">
                                    <select name="" id="" class="custom-select p-2 select">
                                        <option value="">
                                            Select a project
                                        </option>
                                    </select>
                                </div>
                            </form>
                        </div>

                        <div class="col-12 mt-4 actions">
                            <div class="row">
                                <div class="col-9 text-left">
                                    <span class="text-heading">Record Screen</span>
                                </div>
                                <div class="col float-right new-col">
                                    <div class="form-check form-switch float-right text-right justify-content-end">
                                        <input class="form-check-input switch" v-model="screen" type="checkbox" id="flexSwitchCheckChecked" checked>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-2 actions">
                            <div class="row">
                                <div class="col-9 text-left">
                                    <span class="text-heading">Record Camera</span>
                                </div>
                                <div class="col float-right new-col">
                                    <div class="form-check form-switch float-right text-right justify-content-end">
                                        <input class="form-check-input switch" v-model="camera" type="checkbox" id="flexSwitchCheckChecked" checked>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-2 actions">
                            <div class="row">
                                <div class="col-9 text-left">
                                    <span class="text-heading">Record Mic</span>
                                </div>
                                <div class="col float-right new-col" >
                                    <div class="form-check form-switch float-right text-right justify-content-end">
                                        <input class="form-check-input switch" v-model="mic" type="checkbox" id="flexSwitchCheckChecked">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-4 text-center">
                            <span class="mt-2 ra recording-bg cursor-pointer ms-3" @click="this.$emit('startRecording')">
                                Start Recording
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "ModalDialog",
    props: ['screen', 'camera', 'mic'],
    data() {
        return {
            screen: this.screen,
            camera: this.camera,
            mic: this.mic
        }
    }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
  opacity: 1 !important;

}

.card {
    width: 27%;
    height: 64%;
    margin-top: 200px;
    margin-right: 130px;
    border-radius: 12px;
    margin-left: 150px
}

.card-header {
    background: #ffffff;
    padding: 17 0px;
}

.card-title {
    font: normal normal 600 22px/33px Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
    font-size: 19px;
    font-weight: bold;
}
.card-title .close {
    float:right;
    height: 11px
}

.close {
    cursor: pointer;
}

.save {
    text-align: left;
    font: normal normal 300 16px/25px Poppins;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;

}

form select {
    background: #F8FAFB 0% 0% no-repeat padding-box;
    border: 1px solid #E2E5ED;
    border-radius: 8px;
    opacity: 1;
    width: 20vw;
}

.select option {
    font: normal normal normal 16px/25px Poppins;
    letter-spacing: 0px;
    color: #21455E;
    opacity: 1;
}

.actions h5 {
    font: normal normal medium 18px/27px Poppins;
    letter-spacing: 0px;
    color: #21455E;
    opacity: 1;
    font-size: 18px;
}

.actions .switch {
    margin-left: 120px
}
.recording-bg {
    color: #ffffff;
    background: #0DABD8 0% 0% no-repeat padding-box;
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    opacity: 1;
    border: 1px solid #E2E5ED;
    border-radius: 28px;
    padding: 9px 45px;
    font-size: 11px;
}

.form-check-input:checked, .form-check-input::before {
    /*border-color: #0AD688 !important;*/
    background-color: #0AD688 !important;
}

.form-check-input:active, .form-check-input::before {
    background-color: #0AD688 !important;
    /*border-color: #0AD688 !important;*/
}

.form-check-input:focus:not(:checked), .form-check-input::before {
    background-color: #9d868629 !important;
}

.text-heading {
    text-align: left;
    font-family: Poppins;
    letter-spacing: 0px;
    color: #21455E;
    opacity: 0.7;
    font-weight: bold;
    font-size: 11px;
}

.cursor-pointer {
    cursor: pointer
}

.new-col {
    margin-top: -19px;
    margin-left: 60px
}

</style>
