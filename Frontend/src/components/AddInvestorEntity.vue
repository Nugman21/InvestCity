<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Add New Entity For {{ investor.name }}</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
            <v-text-field
              v-model="name"
              label='Entity Name'
              value=''
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                v-model="entityNotes"
                label="Entity Notes"
                value=''
              ></v-textarea>
            </v-flex>

            <v-flex xs8>
              <v-textarea
              v-model="address"
              label="Address"
              value=""
              hint="Address"
              ></v-textarea>
            </v-flex>

              <v-text-field
                v-model="city"
                label="City"
                value=""
              ></v-text-field>

              <v-select
              v-model="state"
              :items="states"
              label="State"
              value=""
              ></v-select>

              <v-text-field
                v-model="contactNumber"
                label="Contact Number"
                value=""
              ></v-text-field>

              <v-text-field
                v-model="mobileNumber"
                label="Mobile Number"
                value=""
              ></v-text-field>


            <v-btn color="success" @click='addEntity' >Add Entity</v-btn>
            <v-btn color="warning" :to="`/investorDetails/${investor.id}`">Cancel</v-btn>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>


export default {


  data (){
    return {
      name: "",
      address: "",
      city: "",
      contactNumber: "",
      mobileNumber: "",
      states: [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Luisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ],
      state: "",
      entityNotes: ""
    }
  },
  created () {
    this.$store.dispatch('getInvestors')
  },
  computed: {
      investor(){
        return this.$store.getters.getInvestorsByInvestorId(this.$route.params.id);
      },
    },

  methods: {
    addEntity() {
       return this.$store.dispatch('addInvestorEntity',{
        investor_id: this.$route.params.id,
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        contactNumber: this.contactNumber,
        mobileNumber: this.mobileNumber,
        entityNotes: this.entityNotes,
        }).then(()=>{
        this.$router.push("/adminInvestorDashboard");
        alert("Your Entity Has been added");
      })
    }
  }

}
</script>

<style scoped>

</style>
