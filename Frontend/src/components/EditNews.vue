<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Edit News</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
            <v-text-field
            v-model="adminNews.newsTitle"
            label="News Title"
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                v-model="adminNews.newsBody"
                label="Body"
                hint="Body"
                value=''
              ></v-textarea>
            </v-flex>


            <v-btn color="success" @click="updateNews">Update</v-btn>
            <v-btn color="warning" to="/manageNews">Cancel</v-btn>
            <v-container text-xs-right>
              <v-btn color="error" @click="deleteNews" >Delete News</v-btn>
            </v-container>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>

export default {

  data (){
    return{
      newsTitle: "",
      newsBody: ""
    }
  },


  created(){
    this.$store.dispatch('getAdminNews')
  },

  methods: {
    updateNews(e) {
      e.preventDefault()
      return this.$store.dispatch('editAdminNews',{
        id: this.$route.params.id,
        newsTitle: this.adminNews.newsTitle,
        newsBody: this.adminNews.newsBody,
        }).then(()=>{
          alert("Your News Has Been Updated");
          this.$router.push('/manageNews');
      })
    },
    deleteNews (e) {
      e.preventDefault()
      return this.$store.dispatch('deleteAdminNews', {
        id: this.$route.params.id
      }).then(() =>{
        alert("Your News Has Been Deleted");
        this.$router.push('/manageNews');
    })
  }
},
  computed: {
    adminNews(){
      return this.$store.state.adminNews.length ? this.$store.state.adminNews.filter(news => news.id == this.$route.params.id)[0] : {};
    }
  },


}
</script>

<style scoped>

</style>
