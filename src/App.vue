<template>
  <div id="app" class="bg-primary h-screen">
    <div class="container mx-auto h-full p-4 flex flex-col justify-center items-center text-center">
      <div class="max-w-xs rounded overflow-hidden shadow-lg mb-8">
        <img alt="Grandma Image" src="https://firebasestorage.googleapis.com/v0/b/grandma-funeral.appspot.com/o/grandma-mono.jpg?alt=media&token=61ed9474-e14e-4d84-b0ad-a2700953d909">
      </div>

      <p class="text-2xl text-white mb-4">ขอเชิญร่วมรับฟังสวดพระอภิธรรมศพ</p>
      <p class="text-2xl text-white mb-4">คุณแม่ สมปอง แจ้งในเมือง</p>

      <p class="text-xl text-white mb-8">ณ วัดสรรเพชญ อำเภอสามพราน จังหวัดนครปฐม</p>

      <button class="border border-white text-white font-bold py-2 px-4 rounded-full mb-4">
        สร้างบัตรเชิญร่วมงานผ่าน LINE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      liffId: '1654395955-MgvA6gqm'
    }
  },
  async created () {
    await this.$liff.init({ liffId: this.liffId })
    if (!this.$liff.isLoggedIn()) {
      if (process.env.NODE_ENV === 'production') {
        this.$liff.login()
      } else {
        this.$liff.login({ redirectUri: window.origin })
      }
    }
  }
}
</script>

<style>
* {
  font-family: 'Sarabun', sans-serif;
}
</style>
