<template>
  <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-minimize">
          <button id="minimizeSidebar" class="btn btn-just-icon btn-white btn-fab btn-round" @click='onToggleMinimizeSidebar'>
            <i class="material-icons text_align-center visible-on-sidebar-regular">more_vert</i>
            <i class="material-icons design_bullet-list-67 visible-on-sidebar-mini">view_list</i>
          </button>
        </div>
        <a class="navbar-brand" href="javascript:void(0)">Welcome Administrator</a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
        <span class="sr-only">Toggle navigation</span>
        <span class="navbar-toggler-icon icon-bar"></span>
        <span class="navbar-toggler-icon icon-bar"></span>
        <span class="navbar-toggler-icon icon-bar"></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      minimizeSideBar: false,
      minimizeSideBarMobile: false,
    };
  },
  computed: {
    username() {
      return this.$store.getters.loggedInUser.username;
    },
  },
  components: {
  },
  methods: {
    onToggleMinimizeSidebar() {
      this.minimizeSideBar = !this.minimizeSideBar;
      toggleSideBar(this.minimizeSideBar);
    },
    onToggleExpandSidebarMobile() {
      this.minimizeSideBarMobile = !this.minimizeSideBarMobile;
      toggleSideBarMoble(this.minimizeSideBarMobile, this.onToggleExpandSidebarMobile);
    },
  },
};

function toggleSideBar(active) {
  if (active) {
    $('body').addClass('sidebar-mini');
  } else {
    $('body').removeClass('sidebar-mini');
  }

  // we simulate the window Resize so the charts will get updated in realtime.
  const simulateWindowResize = setInterval(() => {
    window.dispatchEvent(new Event('resize'));
  }, 180);

  // we stop the simulation of Window Resize after the animations are completed
  setTimeout(() => {
    clearInterval(simulateWindowResize);
  }, 1000);
}

function toggleSideBarMoble(active, callback) {
  const $toggle = $('.navbar-toggler');

  if (active) {
    setTimeout(() => {
      $toggle.addClass('toggled');
    }, 430);

    const $layer = $('<div class="close-layer"></div>');

    if ($('body').find('.main-panel').length !== 0) {
      $layer.appendTo('.main-panel');
    } else if (($('body').hasClass('off-canvas-sidebar'))) {
      $layer.appendTo('.wrapper-full-page');
    }

    setTimeout(() => {
      $layer.addClass('visible');
    }, 100);

    $layer.click(() => {
      $('html').removeClass('nav-open');

      $layer.removeClass('visible');

      callback();

      setTimeout(() => {
        $layer.remove();
        $toggle.removeClass('toggled');
      }, 400);
    });

    $('html').addClass('nav-open');
  } else {
    $('html').removeClass('nav-open');

    $('.close-layer').remove();
    setTimeout(() => {
      $toggle.removeClass('toggled');
    }, 400);
  }
}
</script>
