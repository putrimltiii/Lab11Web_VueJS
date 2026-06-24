const Artikel = {
  data() {
    return {
      artikel: [],
      formData: {
        id: null,
        judul: '',
        isi: '',
        status: 0
      },
      showForm: false,
      formTitle: 'Tambah Data',
      statusOptions: [
        {text: 'Draft', value: 0},
        {text: 'Publish', value: 1},
      ],
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      axios.get('http://localhost/lab11_ci/ci4/public/post')
        .then(response => {
          this.artikel = response.data.artikel
        })
        .catch(error => console.log(error))
    },
    tambah() {
      this.showForm = true
      this.formTitle = 'Tambah Data'
      this.formData = { id: null, judul: '', isi: '', status: 0 }
    },
    hapus(index, id) {
      if (confirm('Yakin menghapus data?')) {
        axios.delete('http://localhost/lab11_ci/ci4/public/post/' + id)
          .then(response => {
            this.artikel.splice(index, 1)
          })
          .catch(error => console.log(error))
      }
    },
    edit(data) {
      this.showForm = true
      this.formTitle = 'Ubah Data'
      this.formData = {
        id: data.id,
        judul: data.judul,
        isi: data.isi,
        status: data.status
      }
    },
    saveData() {
      const headers = { 'Content-Type': 'application/json' }
      if (this.formData.id) {
        axios.put('http://localhost/lab11_ci/ci4/public/post/' + this.formData.id, this.formData, { headers })
          .then(response => {
            this.loadData()
            this.formData = { id: null, judul: '', isi: '', status: 0 }
            this.showForm = false
          })
          .catch(error => console.log(error))
      } else {
        axios.post('http://localhost/lab11_ci/ci4/public/post', this.formData, { headers })
          .then(response => {
            this.loadData()
            this.formData = { id: null, judul: '', isi: '', status: 0 }
            this.showForm = false
          })
          .catch(error => console.log(error))
      }
    },
    statusText(status) {
      if (!status) return ''
      return status == 1 ? 'Publish' : 'Draft'
    }
  },
  template: `
    <div>
      <h2>Daftar Artikel</h2>
      <button id="btn-tambah" @click="tambah">Tambah Data</button>

      <div class="modal" v-if="showForm">
        <div class="modal-content">
          <span class="close" @click="showForm = false">&times;</span>
          <form id="form-data" @submit.prevent="saveData">
            <h3>{{ formTitle }}</h3>
            <div><input type="text" v-model="formData.judul" placeholder="Judul" required></div>
            <div><textarea rows="10" v-model="formData.isi"></textarea></div>
            <div>
              <select v-model="formData.status">
                <option v-for="option in statusOptions" :value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
            <input type="hidden" v-model="formData.id">
            <button type="submit" id="btnSimpan">Simpan</button>
            <button type="button" @click="showForm = false">Batal</button>
          </form>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Judul</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in artikel">
            <td class="center-text">{{ row.id }}</td>
            <td>{{ row.judul }}</td>
            <td>{{ statusText(row.status) }}</td>
            <td class="center-text">
              <a href="#" @click.prevent="edit(row)">Edit</a>
              <a href="#" @click.prevent="hapus(index, row.id)">Hapus</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
}