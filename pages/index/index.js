Page({
  data: {
    name: "",
    genders: ["女", "男", "其他"],
    genderIndex: 0,
    birthDate: "1990-01-01",
    birthTime: "08:00",
    summary: "请先填写信息并生成排盘摘要。",
  },
  onNameChange(event) {
    this.setData({ name: event.detail.value });
  },
  onGenderChange(event) {
    this.setData({ genderIndex: Number(event.detail.value) });
  },
  onDateChange(event) {
    this.setData({ birthDate: event.detail.value });
  },
  onTimeChange(event) {
    this.setData({ birthTime: event.detail.value });
  },
  onGenerate() {
    const { name, genders, genderIndex, birthDate, birthTime } = this.data;
    const displayName = name || "访客";
    const gender = genders[genderIndex];
    const summary = `${displayName}，${gender}，出生于 ${birthDate} ${birthTime}。\n` +
      "本小程序将为你生成八字排盘与运势解析（功能开发中）。";
    this.setData({ summary });
  },
});
