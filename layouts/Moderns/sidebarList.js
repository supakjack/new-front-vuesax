module.exports = [
  {
    title: 'เขียนโปรแกรม',
    icon: 'question_answer',
    url: '/coding',
    breadCrumb: [
      {
        title: 'เขียนโปรแกรม',
        url: '/coding'
      }
    ]
  },
  {
    group: 'นักเรียน',
    list: [
      { title: 'ดูการบ้าน', icon: 'question_answer' },
      { title: 'ดูบทเรียน', icon: 'question_answer' },
      { title: 'ติดตามความก้าวหน้า', icon: 'question_answer' }
    ]
  },
  {
    group: 'อาจารย์',
    list: [
      {
        title: 'สร้างกลุ่มเรียน',
        icon: 'question_answer',
        url: '/teacher/create-study-group'
      },
      {
        title: 'สร้างบทเรียน',
        icon: 'question_answer',
        url: '/teacher/create-study-group'
      },
      {
        title: 'สร้างโจทย์',
        icon: 'question_answer',
        url: '/teacher/create-problem'
      },
      {
        title: 'สร้างแท็กการค้นหา',
        icon: 'question_answer',
        url: '/teacher/create-search-tag'
      },
      {
        title: 'ตรวจสอบการบ้าน',
        icon: 'question_answer',
        url: '/coding'
      },
      {
        title: 'ค้นหาขั้นสูง',
        icon: 'question_answer',
        url: '/coding'
      }
    ]
  },
  {
    group: 'ติดตามความก้าวหน้า (อาจารย์)',
    list: [
      { title: 'กลุ่มเรียน', icon: 'question_answer' },
      { title: 'บทเรียน', icon: 'question_answer' },
      { title: 'นักเรียน', icon: 'question_answer' }
    ]
  },
  {
    group: 'การจัดการ (อาจารย์)',
    list: [
      { title: 'กลุ่มเรียน', icon: 'question_answer' },
      { title: 'บทเรียน', icon: 'question_answer' },
      { title: 'โจทย์', icon: 'question_answer' },
      { title: 'ชุดข้อมูลทดสอบ', icon: 'question_answer' },
      { title: 'แท็กการค้นหา', icon: 'question_answer' },
      { title: 'ผู้ใช้งาน', icon: 'question_answer' },
      { title: 'ปีการศึกษา', icon: 'question_answer' }
    ]
  }
]
