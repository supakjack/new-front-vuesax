<template lang="html">
  <div>
    <vs-table
      multiple
      v-model="selected"
      pagination
      max-items="3"
      search
      :data="users"
    >
      <template slot="header">
        <h3>ผู้ใช้งาน</h3>
      </template>
      <template slot="thead">
        <vs-th sort-key="email"> รหัสนิสิต </vs-th>
        <vs-th sort-key="username"> ชื่อ - นามสกุล </vs-th>
        <vs-th sort-key="website"> สถานะ </vs-th>
        <vs-th sort-key="id"> ดำเนินการ </vs-th>
      </template>

      <template slot-scope="{ data }">
        <!-- eslint-disable -->
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].email">
            {{ data[indextr].email }}
          </vs-td>

          <vs-td :data="data[indextr].username">
            {{ data[indextr].username }}
          </vs-td>

          <vs-td :data="data[indextr].id">
            <vs-chip transparent color="success"> พร้อมใช้งาน </vs-chip>
          </vs-td>

          <vs-td :data="data[indextr].id">
            <vs-button color="warning" type="filled">แก้ไข</vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>

    <!-- <pre>{{ selected }}</pre> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: [],
    users: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'นายสมชาย รักชาติ',
        email: '60160025',
        website: 'hildegard.org'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'นางสาวสมหญิง รักชาติ',
        email: '60160026',
        website: 'anastasia.net'
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'นายสมศรี รักชาติ',
        email: '60160027',
        website: 'ramiro.info'
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        website: 'kale.biz'
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        website: 'demarco.info'
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        website: 'ola.org'
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        website: 'elvis.io'
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        website: 'jacynthe.com'
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        website: 'conrad.com'
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        website: 'ambrose.net'
      }
    ]
  })
}
</script>
