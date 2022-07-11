<template>
<!-- Navbar -->
<div class="main">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand logo-font text-dark ms-5 ps-2" href="#" id="brand">
                <img src="./assets/swarm.png"  alt="">
                <span class="logo-text ps-3 mt--2">Adilo</span>
            </a>
            <!-- links toggle -->
            <button class="navbar-toggler order-first" type="button" data-toggle="collapse" data-target="#links" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse links ms-0 ps-5" id="links">
                <ul class="navbar-nav mr-auto first-ul">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                        Tools & App <i class="fas fa-angle-down"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Chicken</a>
                            <a class="dropdown-item" href="#">Mutton/Lamb/Beef 2</a>
                            <a class="dropdown-item" href="#">Deserts</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Channels</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Analytics</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Settings</a>
                    </li>

                </ul>
            </div>
            <div class="collapse navbar-collapse account align-middle">
                <ul class="navbar-nav ml-auto mt-2">
                    <li class="nav-item me-2"><a class="nav-link help" href="#">Help</a></li>
                    <li class="nav-item me-2"><a class="nav-link" href="#">|</a></li>
                    <!-- <li class="nav-item">
                        <div class="row">
                            <div class="col">
                                <img src="https://img.icons8.com/bubbles/100/000000/administrator-male.png" class="img-lg rounded-circle mb-4" alt="profile image">
                            </div>
                        </div>
                    </li> -->
                    <li class="nav-item me-2">
                        <img src="https://img.icons8.com/bubbles/100/000000/administrator-male.png" class="rounded-circle mt-1" alt="profile image">
                    </li>
                    <li class="nav-item me-2 profile"><a class="nav-link" href="#">
                        <div class="profile-name">Cody Fisher</div>
                        <div class="profile-gmail">Cody Fisher@gmail.com</div>
                    </a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Navbar Ends -->

    <!-- Content -->
    <div class="content" v-if="!startToRecord">
        <div class="container-fluid">
            <div class="row">
            <!-- Left Sidebar -->
                <div class="col-12 col-lg-3 sidebar">
                    <div class="row mt-5 page-sidebar">
                        <div class="col-12">
                            <div class="recording text-center">
                                <img src="./assets/video-player.png" alt="">
                                <span class="ps-3">My Recordings</span>

                            </div>
                        </div>

                        <div class="col-12">
                            <div class="share text-left mt-4 text-left" style="margin-left: 50px">
                                <i class="fas fa-share-alt text-left"></i>
                                <span class="ps-3 text-left">Requested</span>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- Left Sidebar Ends -->

            <!-- Main body -->
                <div class="col-12 col-lg-9 main-body">
                    <div class="container mx-4">
                        <div class="row mt-1">
                            <div class="col-12 title">
                                <p><span class="me-2">Snapbyte</span> <span class="me-2">></span> <span>My Recordings</span></p>
                            </div>
                        </div>

                        <div class="row mt-0">
                            <div class="col-3 recording-title">
                                <h6>My Recordings <span>25</span></h6>
                            </div>

                            <div class="col-9 recording-actions">
                                <div class="row">
                                    <div class="col">
                                        <span class="ra light-bg cursor-pointer">
                                            <i class="fas fa-arrows-v"></i> By Date
                                        </span>

                                        <span class="ra light-bg cursor-pointer ms-3">
                                            <i class="fa fa-filter text-secondary"></i> Add Filter
                                        </span>

                                        <span class="ra camera-bg cursor-pointer ms-3">
                                            <i class="fa fa-video"></i> New Request
                                        </span>

                                        <span class="ra recording-bg ms-3 cursor-pointer" @click="showModalDialog">
                                            <i class="fa fa-record-vinyl"></i> Start Recording
                                        </span>
                                        <ModalDialog :mic="mic" :camera="camera" :screen="screen" @closeModal="closeModal" @startRecording="startRecording"  v-show="showModal" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3 table-section">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                    <th scope="col" width="12%">Recordings</th>
                                    <th scope="col" width="36%">Title</th>
                                    <th scope="col" width="10%">Views</th>
                                    <th scope="col" width="10%">Size</th>
                                    <th scope="col" width="16%">Last Modified</th>
                                    <th scope="col"></th>
                                    </tr>
                                </thead>
                                <!-- Dummy tbody -->
                                <tbody>
                                    <tr>

                                    </tr>
                                </tbody>
                                <!-- Dummy tbody ends-->
                                <tbody  class="mt-5 pt-5">
                                    <tr class="mt-4 tr-margin-top" v-for="rec in recordings" :key="recordings.id">
                                        <td>
                                            <img :src="`/src/assets/${rec.video}`" alt="Hello">
                                        </td>
                                        <td>
                                            <div class="headings">
                                                <div class="col heading">
                                                    {{rec.title}}
                                                </div>
                                                <div class="col heading-small mt-2">
                                                    <!-- The Video description is shown here <br> if the user has added it. -->
                                                    {{rec.text}}
                                                </div>
                                            </div>
                                        </td>
                                        <td><span class="views">{{rec.views}}</span></td>
                                        <td>{{rec.size}}</td>
                                        <td>{{rec.modified}}</td>
                                        <td><i class="fa-solid fa-ellipsis"></i></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            <!-- Main body ends -->
            </div>
        </div>
    </div>
    <div class="container" v-else>

       <div class="row video-recording">
            <div class="col-12">
                <i class="icon fa fa-record-vinyl ls-5"></i><span class="ms-1 preview">Live Preview</span>
            </div>
            <div class="screen col-12">

            </div>
            <div class="col-12 mt-4 mx-auto justify-content-center">
                <div class="text-center">
                    <span class="start-recording  mx-auto text-center">
                    Start recording
                    </span>
                </div>

            </div>
       </div>
    </div>
</div>
<!-- Content Ends -->


</template>

<script>
import Recordings from './assets/recordings.json'
import ModalDialog from './components/ModalDialog.vue';

export default {
  components: { ModalDialog },
  data() {
    return {
      recordings: Recordings,
      showModal: false,
      startToRecord: false,
      screen: true,
      camera: true,
      mic: false
    };
  },
  created() {
    //console.log("Geeee "+this.mic)
    this.showModal = false;
  },

  methods: {
    showModalDialog() {
        this.showModal = true;
    },
    closeModal() {
        this.showModal = false;
    },
    startRecording() {
        navigator.mediaDevices.getUserMedia({audio: this.mic, video: this.camera, })
        //
        this.startToRecord = true
        }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&display=swap');

.navbar {
    color: red;
    border-bottom: 1px solid #EDF0F0;

}

.navbar ul li a{
    color: #707070;
    font-family: poppins;
    font-size: 13px;
}
.navbar .navbar-collapse ul li a:active, .navbar .navbar-collapse ul li a:hover{
        border-top:  5px solid #0DABD8;
        border-radius: 3px;
        padding-bottom: 10px;
        font-weight: bolder;
    }

.navbar a .logo-text{
    color: #21455E;
    font-family: Helvetica, sans-serif;
    font-weight: 400px;
    font-size: 28px;
    height: 31px;
}

.navbar ul.first-ul li {
    padding-right: 13px;


}
.navbar .navbar-brand img {
    width: 29px;
    margin-top: -9px;
    /*height: 25px;*/
    background: #FBBD71 0% 0% no-repeat padding-box;
    border-radius: 10px;
    padding: 7px;
}

.navbar .links .first-ul {
    margin-left: 20px;
}

.account li a.help {
    color: black;
    font-weight: 600px;
}


.dropdown-toggle:after { content: none }


#brand {
    font-family: 'Berkshire Swash';font-size: 30px;
}

.profile {
    font-family: poppins;
}

.profile-name {
    color: black;
    font-weight: bolder;
    font-size: 11px;
}
.account .profile .profile-gmail {
    font-weight: 200px;
    font-size: 9px;
    padding-top: -20px;
}

.account img {
    /*margin-top: 20px;*/
    width: 30px;
    height: 30px;
    align-content: center;
    align-items: center;

}

/*  Content  */
.content {
    margin-top: 0px;
    /*background: blue;*/
}

.sidebar {
    width: 260px;
    height: 1147px;
    background: #EBF2F6 0% 0% no-repeat padding-box;
    opacity: 0.4;
}

/*.sidebar .page-sidebar {
    padding-top: 12px;
}*/

.recording {
    background: #bdbfc4 0% 0% no-repeat padding-box;
    border: 1px solid #0DABD838;
    border-radius: 10px;
    opacity: 99999;
    padding: 10px 0;

}

.recording span, .share span {
    font: normal normal 300 14px/20px Poppins;
    letter-spacing: 0px;
    color: #081118;
    font-weight: bolder;
    font-size: 14px;
}

.fa-share-nodes {
    font-size: 26px;
    font-weight: 100px;
    color: #21455E;
}

.share {
    margin-left: 64px;
}

/*  Main body  */

.main-body {
    margin-left: 17px;
    max-width: 100%;
}
.main-body .title p {
    text-align: left;
    font: normal normal normal 14px/26px Poppins;
    letter-spacing: 0px;
    color: #637C8E;
    font-size: 12px;
    opacity: 1;
}

.main-body .recording-title h6 {
    text-align: left;
    font: normal normal 300 24px/35px Poppins;
    letter-spacing: 0px;
    color: #000000;
    font-size: 18px;
}

.main-body .recording-title h6 span {
    color: #637C8E;
    margin-left: 10px;
    font-weight: bold;
}

.main-body .recording-actions .ra {
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: #637C8E;
    opacity: 1;
    border: 1px solid #E2E5ED;
    border-radius: 28px;
    padding: 8px 30px;
    font-size: 10px;
}

.main-body .recording-actions .camera-bg {
    color: #ffffff;
    background: #0DABD8 0% 0% no-repeat padding-box;
}

.main-body .recording-actions .recording-bg {
    color: #ffffff;
    background: #EF5350 0% 0% no-repeat padding-box;
}

.table {
    border-collapse: separate;
    border-spacing: 0 3px;
}

.table-section .table th {
    text-align: left;
    font: normal normal medium 18px/27px Poppins;
    letter-spacing: 0px;
    color: #21455E;
    opacity: 1;
}

.table-section .table tbody {
    margin-top: 20px;
    padding-top: 40px;
}

.table-section .table td img {
    width: 120px;
    height: 65px;
    border-radius: 6px;
}

.table-section .table td .heading{
    text-align: left;
    font: normal normal normal 12px/19px Poppins;
    letter-spacing: 0px;
    color: #21455E;
    opacity: 1;
    font-weight: bolder;
}

.table-section .table td .heading-small {
    text-align: left;
    font: normal normal normal 11px/16px Poppins;
    letter-spacing: 0px;
    color: #A3BAC6;
    opacity: 1;
}

.tr-margin-top {
    padding-top: 300px
}

.cursor-pointer {
    cursor: pointer;
}

/*  Sreen display  */

.main .video-recording {
    margin: 37px auto 10px auto;
}
.main .video-recording .icon {
    color: #EE5951;
    margin-left: 120px;
}

.main .video-recording .preview {
    font: normal normal normal 14px/26px Poppins;
    letter-spacing: 0px;
    color: #637C8E;
    opacity: 1;
}
.main .video-recording .screen {
    margin: 6px auto 10px auto;
    width: 1030px;
    height: 490px;
    background: #21455E 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
}

.main .video-recording .start-recording {
    margin-left: 400px;
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    opacity: 1;
    border: 1px solid #E2E5ED;
    padding: 12px 36px;
    color: #ffffff;
    background: #0DABD8 0% 0% no-repeat padding-box;
    border-radius: 32px;
    opacity: 0.3;
}


</style>
