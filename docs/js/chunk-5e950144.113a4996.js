(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e950144"],{"3f47":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-3"},[n("uploader",{on:{"after-uploaded":t.onAfterUploaded}})],1),n("div",{staticClass:"col-lg-9"},[t.loading?n("div",{staticClass:"text-center py-5"},[n("span",{staticClass:"spinner-border spinner-border-lg text-primary"})]):t._e(),t.loading?t._e():n("div",{staticClass:"card mt-0"},[n("div",{staticClass:"card-body"},[n("button",{staticClass:"btn btn-primary btn-round m-0",on:{click:t.onRefresh}},[n("i",{staticClass:"fa fa-refresh"}),t._v("  Refresh list")]),n("hr"),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-shopping"},[n("tbody",t._l(t.collections,function(e,s){return n("tr",{key:s},[n("td",[n("div",{staticClass:"img-container"},[n("img",{attrs:{src:e.url,alt:"..."}})])]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.url))]),n("td",{staticClass:"td-actions"},[n("button",{staticClass:"btn btn-link",attrs:{type:"button",rel:"tooltip","data-placement":"left",title:"Remove item"},on:{click:function(n){return t.onClickDelete(e)}}},[n("i",{staticClass:"material-icons"},[t._v("close")])])])])}),0)])])])])])])},a=[],i=(n("7f7f"),{name:"ImagesManage",data:function(){return{img:null}},computed:{loading:function(){return this.$store.state.images.loading},collections:function(){return this.$store.state.images.collections}},components:{uploader:function(){return n.e("chunk-647d1caa").then(n.bind(null,"10ba"))}},methods:{onRefresh:function(){this.$store.dispatch("getImages")},onClickDelete:function(t){var e=this;swal({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it",confirmButtonClass:"btn btn-success",cancelButtonClass:"btn btn-danger",buttonsStyling:!1}).then(function(n){"cancel"===n.dismiss?swal({title:"Cancelled",text:"Your imaginary file is safe :)",type:"error",confirmButtonClass:"btn btn-info",buttonsStyling:!1}).catch(swal.noop):(e.$store.dispatch("deleteImage",{fullpath:t.name,id:t.id}),swal({title:"Deleted!",text:"Your imaginary file has been deleted.",type:"success",confirmButtonClass:"btn btn-success",buttonsStyling:!1}).then(function(){e.onRefresh()}).catch(swal.noop))})},onAfterUploaded:function(){this.onRefresh()}},mounted:function(){this.$store.dispatch("getImages"),this.$store.commit("setUploadSuccess",!1)}}),o=i,l=(n("c2b8"),n("2877")),c=Object(l["a"])(o,s,a,!1,null,null,null);e["default"]=c.exports},"9d49":function(t,e,n){},c2b8:function(t,e,n){"use strict";var s=n("9d49"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-5e950144.113a4996.js.map