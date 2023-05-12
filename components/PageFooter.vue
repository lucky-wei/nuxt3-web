<template>
  <!-- 底栏文字 -->
 <div>
  底栏文字
 </div>
</template>
<script setup>


</script>
  <style scoped>
@media screen and (max-width: 750px) {
  .big_title_p {
    font-size: 18px !important;
    line-height: 30px;
  }
  .bottom_tips p {
    font-size: 12px !important;
  }
  .bottom_info_list {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 20px;
    margin: 7px 0;
  }
  .bottom_info_list p {
    color: #ffffff;
    margin-left: 20px;
    line-height: 21px;
    font-size: 14px;
  }
  .bottom_info_list p:last-child {
    width: calc(100% - 100px);
  }
  .bottom_info_list img {
    max-width: 16px;
    min-width: 14px;
    max-height: 16px;
    min-height: 14px;
    margin-top: 3px;
  }
  .bottom_head_list {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }

  .bottom_head_listView {
    flex-flow: column;
    margin: 10px 0 10px 0 !important;
  }

  .bottom_inner_top {
    justify-content: space-around;
    flex-wrap: wrap !important;
  }

  .bottom_father {
    height: auto !important;
  }
  .bottom_tips {
    flex-wrap: wrap;
    height: auto !important;
    margin: 10px 0;
  }
}

@media screen and (min-width: 750px) and (max-width: 1200px) {
  .bottom_info_list img {
    max-width: 33px;
    min-width: 24px;
    max-height: 33px;
    min-height: 24px;
  }
  .bottom_info_list {
    width: 300px;
    height: 160px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .bottom_info_list p {
    margin-top: 20px;
    color: #ffffff;
    text-align: center;
  }
  .bottom_head {
    width: 100%;
  }

  .bottom_head_list {
    width: 31%;
    height: 40px;
    background-color: #f5f5f4;
    text-align: center;
    line-height: 40px;
  }

  .el-icon--right {
    margin-left: 150px;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1601px) {
  .bottom_info_list img {
    max-width: 33px;
    min-width: 24px;
    max-height: 33px;
    min-height: 24px;
  }
  .bottom_info_list {
    width: 300px;
    height: 160px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .bottom_info_list p {
    margin-top: 20px;
    color: #ffffff;
    text-align: center;
  }
  .bottom_head {
    width: 100%;
  }

  .bottom_head_list {
    width: 31%;
    height: 40px;
    background-color: #f5f5f4;
    text-align: center;
    line-height: 40px;
  }

  .el-icon--right {
    margin-left: 150px;
  }
}

@media screen and (min-width: 1601px) {
  .bottom_info_list img {
    max-width: 33px;
    min-width: 24px;
    max-height: 33px;
    min-height: 24px;
  }
  .bottom_info_list {
    width: 300px;
    height: 160px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .bottom_info_list p {
    margin-top: 20px;
    color: #ffffff;
    text-align: center;
  }

  .bottom_father {
    height: 210px;
    width: 1600px !important;
  }

  .el-icon--right {
    margin-left: 230px;
  }

  .bottom_head_list {
    width: 500px;
    height: 40px;
    background-color: #f5f5f4;
    text-align: center;
    line-height: 40px;
  }

  .bottom_head {
    width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }
}

.bottom_father {
  height: 210px;
  width: 100%;
}

.floatLink2 {
  padding: 5px 0;
  position: absolute;
  z-index: 999;
  height: auto;
  bottom: 20px;
  left: 50%;
  overflow-y: scroll;
  min-width: 150px;
  display: flex;
  background-color: #ffffff;
  border: 1px solid #eee;
  flex-flow: column;
}

.floatLink {
  padding: 5px 0;
  position: absolute;
  z-index: 999;
  height: auto;
  bottom: 20px;
  left: 18%;
  overflow-y: scroll;
  min-width: 150px;
  display: flex;
  background-color: #ffffff;
  border: 1px solid #eee;
  flex-flow: column;
}

.floatLink span,
.floatLink2 span {
  color: #000;
  padding: 5px 10px;
}

.floatLink span:hover,
.floatLink2 span:hover {
  cursor: pointer;
  background-color: #015aaa;
  color: #fff;
}

.new_sa_link {
  width: 100%;
  min-height: 120px;
  height: auto;
  background-color: #015aaa;
}

.link_inner {
  box-sizing: border-box;
  width: 1600px;
  min-height: 140px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.link_innerLeft {
  width: 82%;
}

.leftPtitle {
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  text-decoration: underline;
}

.link_bot {
  min-height: 80px;
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  align-items: center;

  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}

.link_bot_List {
  min-width: 164px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.link_innerRight {
  width: 18%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
}

.sd_bottom {
  width: 100%;
  padding-top: 10px;
}

.bottom_inner {
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  background-color: #fff;
}

.bottom_link {
  padding-top: 30px;
  display: flex;
  align-items: center;
}

.bottom_head_listView {
  display: flex;
  justify-content: space-between;
  margin: 28px 0 40px 0;
}

.after_add_bottm {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.el-dropdown {
  display: flex;
  justify-content: center;
  font-size: 16px;
}

.el-dropdown-menu__item {
  font-size: 16px;
}

.bottm_inner_first {
  width: 294px;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
  position: relative;
}

.bottm_inner_first p {
  display: inline-block;
  width: 98px;
  text-align: center;
  cursor: pointer;
}

.bottom_Outer {
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url("../static/img/bottom.png");
  background-size: cover;
}

.bottom_inner_top {
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
}

.bottom_dash {
  width: 100%;
  height: 1px;
  background-color: #d8d8d8;
}

.bottom_tips {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
}

.bottom_tips p {
  color: #fff;
  margin-right: 20px;
  font-size: 14px;
}

.bottom_tips p > a {
  color: #fff;
  text-decoration: none;
}

.big_title_box {
  /* width: 132px; */
  display: flex;
  border-bottom: 3px solid #1567f9;
  height: 40px;
  padding-right: 10px;
}

.big_title_span1 {
  display: inline-block;
  width: 8px;
  height: 30px;
  background-color: #1567f9;
}

.big_title_span2 {
  margin-left: 5px;
  display: inline-block;
  width: 4px;
  height: 30px;
  background-color: #1567f9;
}

.big_title_p {
  /* width: 100px; */
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #131415;
  letter-spacing: 0;
  text-align: center;
  font-weight: 600;
  margin-left: 15px;
}

.big_title_lastP {
  margin-top: -5px;
  font-family: PingFangSC-Light;
  font-size: 16px;
  color: #131415;
  letter-spacing: 0;
  font-weight: 200;
}
</style>
  