<template>

    <div class="count-down">
       <small>
        {{  data.days }}
       </small>
       天
       <small>
        {{  data.hours }}
       </small>
       :
       <small>
        {{  data.minutes }}
       </small>
       :
       <small>
        {{  data.seconds }}
       </small>
    </div>
</template>
<script setup>
import { TimeOutline } from "@vicons/ionicons5";

const props = defineProps({
  time: {
    type: [String, Number],
    default: "",
  },
});

const data = useCountDown(props.time);
const emit = defineEmits(["start", "end"]);
function useCountDown(endTime) {
  const timeout = ref(0);
  const Timer = ref(null);
  if (typeof endTime == "string") {
    endTime = new Date(endTime).getTime();
  }
  // 结束时间戳-当前时间戳
  timeout.value = (endTime - Date.now()) / 1000;

  // 开启倒计时 timeout<=0,直接结束
  if (timeout.value <= 0) return emit("end");

  //   开启倒计时
  Timer.value = setInterval(() => {
    timeout.value--;
    // 如果timeout.value < 0,关闭定时器，触发结束
    if (timeout.value <= 0) {
      close();
      emit("end");
    }
  }, 1000);

  //   关闭定时器
  function close() {
    if (Timer.value) clearInterval(Timer.value);
  }
  // 将秒转为天/时/分/秒
  const d = computed(()=>formatDiffDate(timeout.value))
  return d
}

function formatDiffDate(seconds) {
    let time = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (seconds > 0) {
      time.days = Math.floor(seconds / (60 * 60 * 24));
      time.hours = Math.floor(seconds / (60 * 60)) - time.days * 24;
      time.minutes =
        Math.floor(seconds / 60) - time.days * 24 * 60 - time.hours * 60;
      time.seconds =
        Math.floor(seconds) -
        time.days * 24 * 60 * 60 -
        time.hours * 60 * 60 -
        time.minutes * 60;
    }
    // 手动三元补零
    time.days = time.days < 10 ? "0" + time.days : time.days;
    time.hours = time.hours < 10 ? "0" + time.hours : time.hours;
    time.minutes = time.minutes < 10 ? "0" + time.minutes : time.minutes;
    time.seconds = time.seconds < 10 ? "0" + time.seconds : time.seconds;

    return time;
  }
</script>
<style>
.count-down small{
    background-color: #fff;
    border-radius: 2px;
    padding: 2px 3px;
    margin: 0 3px;
    @apply text-yellow-500;
}
</style>