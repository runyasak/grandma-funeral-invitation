<template>
  <div id="app" class="bg-primary h-screen">
    <div class="container mx-auto h-full p-4 flex flex-col justify-center items-center text-center">
      <div class="max-w-xs rounded overflow-hidden shadow-lg mb-8">
        <img alt="Grandma Image" src="https://firebasestorage.googleapis.com/v0/b/grandma-funeral.appspot.com/o/grandma-mono.jpg?alt=media&token=61ed9474-e14e-4d84-b0ad-a2700953d909">
      </div>

      <p class="text-2xl text-white mb-4">ขอเชิญร่วมรับฟังสวดพระอภิธรรมศพ</p>
      <p class="text-2xl text-white mb-4">คุณแม่ สมปอง แจ้งในเมือง</p>

      <p class="text-xl text-white mb-8">ณ วัดสรรเพชญ อำเภอสามพราน จังหวัดนครปฐม</p>

      <button
        class="border border-white text-white font-bold py-2 px-4 rounded-full mb-4"
        @click="onSendShare">
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
  },
  methods: {
    async onSendShare() {
      await this.$liff.shareTargetPicker([
        {
          type: 'flex',
          altText: 'ขอเชิญร่วมรับฟังสวดพระอภิธรรมศพ คุณแม่ สมปอง แจ้งในเมือง',
          size: 'giga',
          contents: {
            type: 'bubble',
            hero: {
              type: 'image',
              url: 'https://firebasestorage.googleapis.com/v0/b/grandma-funeral.appspot.com/o/grandma-mono.jpg?alt=media&token=61ed9474-e14e-4d84-b0ad-a2700953d909',
              size: 'full',
              aspectRatio: '9:16',
              aspectMode: 'cover',
              action: {
                type: 'uri',
                label: 'Action',
                uri: 'https://linecorp.com/'
              }
            },
            body: {
              type: 'box',
              layout: 'vertical',
              spacing: 'md',
              contents: [
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'text',
                      text: 'ขอเชิญร่วมรับฟังสวด',
                      size: 'xl',
                      align: 'center',
                      gravity: 'center',
                      weight: 'bold',
                      color: '#FFFFFF',
                      wrap: true
                    },
                    {
                      type: 'text',
                      text: 'พระอภิธรรมศพ',
                      size: 'xl',
                      align: 'center',
                      gravity: 'center',
                      weight: 'bold',
                      color: '#FFFFFF',
                      wrap: true
                    },
                    {
                      type: 'text',
                      text: 'คุณแม่ สมปอง แจ้งในเมือง',
                      margin: 'md',
                      size: 'xl',
                      align: 'center',
                      gravity: 'center',
                      weight: 'bold',
                      color: '#FFFFFF',
                      wrap: true
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'text',
                      text: 'ณ วัดสรรเพชญ',
                      size: 'lg',
                      align: 'center',
                      color: '#FFFFFF',
                      wrap: true
                    },
                    {
                      type: 'text',
                      text: 'อำเภอสามพราน จังหวัดนครปฐม',
                      size: 'lg',
                      align: 'center',
                      color: '#FFFFFF',
                      wrap: true
                    }
                  ]
                },
                {
                  type: 'separator',
                  margin: 'lg'
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  margin: 'lg',
                  contents: [
                    {
                      type: 'text',
                      text: 'สวดอภิธรรม ตั้งแต่',
                      align: 'center',
                      color: '#FFFFFF',
                      wrap: true
                    },
                    {
                      type: 'text',
                      text: 'วันที่ 28 มิถุนายน พ.ศ.2563',
                      margin: 'md',
                      align: 'center',
                      color: '#FFFFFF',
                      wrap: true
                    },
                    {
                      type: 'text',
                      text: 'ถึงวันเสาร์ที่ 4 กรกฎาคม พ.ศ.2563',
                      align: 'center',
                      color: '#FFFFFF',
                      wrap: true
                    },
                    {
                      type: 'text',
                      text: 'เวลา​ 19:00 น. เป็นต้นไป ที่ศาลา 1',
                      align: 'center',
                      color: '#FFFFFF',
                      wrap: true
                    }
                  ]
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  margin: 'lg',
                  contents: [
                    {
                      type: 'text',
                      text: 'เก็บร่างคุณแม่ไว้ 100 วัน',
                      align: 'center',
                      color: '#FFFFFF',
                      wrap: true
                    },
                    {
                      type: 'text',
                      text: 'ณ วันเสาร์ที่ 4 กรกฎาคม พ.ศ.2563',
                      size: 'md',
                      align: 'center',
                      color: '#FFFFFF',
                      wrap: true
                    },
                    {
                      type: 'spacer'
                    }
                  ]
                }
              ]
            },
            footer: {
              type: 'box',
              layout: 'horizontal',
              flex: 1,
              contents: [
                {
                  type: 'button',
                  action: {
                    type: 'uri',
                    label: 'Location สถานที่',
                    uri: 'https://goo.gl/maps/EPm4CrEqD1t9kLES7'
                  },
                  color: '#FFFFFF',
                  style: 'secondary'
                }
              ]
            },
            styles: {
              body: {
                backgroundColor: '#27292E'
              },
              footer: {
                backgroundColor: '#27292E'
              }
            }
          }
        }
      ])
    }
  }
}
</script>

<style>
* {
  font-family: 'Sarabun', sans-serif;
}
</style>
