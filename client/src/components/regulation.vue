<template>
  <div class="regulation-page" @click="removeAllInputs($event)">
    <h3>Положение</h3>

    <div class="row">
      <div class="col s12" @dblclick.prevent="createInput($event)">
        <h5 :data-name="getKey(REGULATION_DATA, REGULATION_DATA.title)"
        >{{ REGULATION_DATA.title }}</h5>
        <span
          class="description"
          :data-name="getKey(REGULATION_DATA, REGULATION_DATA.description)"
          :data-name2="getKey(REGULATION_DATA.description, REGULATION_DATA.description.description)"
        >
          {{ REGULATION_DATA.description.description }}</span>
        <span
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.description)"
            :data-name2="getKey(REGULATION_DATA.description, REGULATION_DATA.description.date)"
        >
          {{ REGULATION_DATA.description.date }}
        </span>
        <h4
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.category)"
        >
          {{REGULATION_DATA.category}}
        </h4>
        <p
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.organizers)"
        >
          {{ REGULATION_DATA.organizers }}
        </p>
        <hr>
        <p
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.age)"
        >
          {{ REGULATION_DATA.age }}
        </p>
        <hr>
        <h5
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.ageCategory)"
            :data-name2="getKey(REGULATION_DATA.ageCategory, REGULATION_DATA.ageCategory.title)"
        >
          {{ REGULATION_DATA.ageCategory.title }}
        </h5>
        <ul>
          <li
              v-for="(item, index) in REGULATION_DATA.ageCategory.description"
              :data-idx="index"
              :data-name="getKey(REGULATION_DATA, REGULATION_DATA.ageCategory)"
              :data-name2="getKey(REGULATION_DATA.ageCategory, REGULATION_DATA.ageCategory.description)"
          >
            {{ item }}
          </li>
        </ul>
        <h5
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.nominations)"
            :data-name2="getKey(REGULATION_DATA.nominations, REGULATION_DATA.nominations.title)"
        >
          {{ REGULATION_DATA.nominations.title }}
        </h5>
        <h6
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.nominations)"
            :data-name2="getKey(REGULATION_DATA.nominations, REGULATION_DATA.nominations.name)"
        >
          {{ REGULATION_DATA.nominations.name }}
        </h6>
        <ul>

          <li
            v-for="(item, index) in REGULATION_DATA.nominations.description"
            :data-idx="index"
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.nominations)"
            :data-name2="getKey(REGULATION_DATA.nominations, REGULATION_DATA.nominations.description)"
          >
            {{ item }}
          </li>

        </ul>
        <h5
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.criteria)"
            :data-name2="getKey(REGULATION_DATA.criteria, REGULATION_DATA.criteria.title)"
        >
          {{ REGULATION_DATA.criteria.title }}
        </h5>
        <ul>
          <li
            v-for="(item, index) in REGULATION_DATA.criteria.description"
            :data-idx="index"
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.criteria)"
            :data-name2="getKey(REGULATION_DATA.criteria, REGULATION_DATA.criteria.description)"
          >
            {{ item }}
          </li>
        </ul>
        <h5
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.terms)"
            :data-name2="getKey(REGULATION_DATA.terms, REGULATION_DATA.terms.title)"
        >
          {{ REGULATION_DATA.terms.title }}
        </h5>
        <ul>
          <li
            v-for="(item, index) in REGULATION_DATA.terms.description"
            :data-idx="index"
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.terms)"
            :data-name2="getKey(REGULATION_DATA.terms, REGULATION_DATA.terms.description)"
          >
            {{ item }}
          </li>
        </ul>
        <h5
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.awards)"
            :data-name2="getKey(REGULATION_DATA.awards, REGULATION_DATA.awards.title)"
        >
          {{ REGULATION_DATA.awards.title }}
        </h5>
        <ul>
          <li
            v-for="(item, index) in REGULATION_DATA.awards.places"
            :data-idx="index"
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.awards)"
            :data-name2="getKey(REGULATION_DATA.awards, REGULATION_DATA.awards.places)"
          >
            {{ item }}
          </li>
        </ul>
        <ul>
          <li
            v-for="(item, index) in REGULATION_DATA.awards.diplomas"
            :data-idx="index"
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.awards)"
            :data-name2="getKey(REGULATION_DATA.awards, REGULATION_DATA.awards.diplomas)"
          >
            {{ item }}
          </li>
        </ul>
        <h5
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.finance)"
            :data-name2="getKey(REGULATION_DATA.finance, REGULATION_DATA.finance.title)"
        >
          {{ REGULATION_DATA.finance.title }}
        </h5>
        <p
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.finance)"
            :data-name2="getKey(REGULATION_DATA.finance, REGULATION_DATA.finance.desc1)"
        >
          {{ REGULATION_DATA.finance.desc1 }}
        </p>
        <p
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.finance)"
            :data-name2="getKey(REGULATION_DATA.finance, REGULATION_DATA.finance.desc2)"
        >
          {{ REGULATION_DATA.finance.desc2 }}
        </p>
        <ul>
          <li
            v-for="(item, index) in REGULATION_DATA.finance.fields"
            :data-idx="index"
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.finance)"
            :data-name2="getKey(REGULATION_DATA.finance, REGULATION_DATA.finance.fields)"
          >
            {{ item }}
          </li>
        </ul>
        <h5
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.note)"
            :data-name2="getKey(REGULATION_DATA.note, REGULATION_DATA.note.title)"
        >
          {{ REGULATION_DATA.note.title }}
        </h5>
        <p
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.note)"
            :data-name2="getKey(REGULATION_DATA.note, REGULATION_DATA.note.description)"
        >
          {{ REGULATION_DATA.note.description }}
        </p>
        <h5
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.privileges)"
            :data-name2="getKey(REGULATION_DATA.privileges, REGULATION_DATA.privileges.title)"
        >
          {{ REGULATION_DATA.privileges.title }}
        </h5>
        <p
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.privileges)"
            :data-name2="getKey(REGULATION_DATA.privileges, REGULATION_DATA.privileges.desc1)"
        >
          {{ REGULATION_DATA.privileges.desc1 }}
        </p>
        <p
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.privileges)"
            :data-name2="getKey(REGULATION_DATA.privileges, REGULATION_DATA.privileges.desc2)"
        >
          {{ REGULATION_DATA.privileges.desc2 }}
        </p>
        <ul>
          <li
            v-for="(item, index) in REGULATION_DATA.privileges.fields"
            :data-idx="index"
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.privileges)"
            :data-name2="getKey(REGULATION_DATA.privileges, REGULATION_DATA.privileges.fields)"
          >
            {{ item }}
          </li>
        </ul>
        <h5
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.request)"
            :data-name2="getKey(REGULATION_DATA.request, REGULATION_DATA.request.title)"
        >
          {{ REGULATION_DATA.request.title }}
        </h5>
        <ul>
          <li
            v-for="(item, index) in REGULATION_DATA.request.fields"
            :data-idx="index"
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.request)"
            :data-name2="getKey(REGULATION_DATA.request, REGULATION_DATA.request.fields)"
          >
            {{ item }}
          </li>
        </ul>
        <h5
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.contacts)"
            :data-name2="getKey(REGULATION_DATA.contacts, REGULATION_DATA.contacts.title)"
        >
          {{ REGULATION_DATA.contacts.title }}
        </h5>
        <ul>
          <li
            v-for="(item, index) in REGULATION_DATA.contacts.fields"
            :data-idx="index"
            :data-name="getKey(REGULATION_DATA, REGULATION_DATA.contacts)"
            :data-name2="getKey(REGULATION_DATA.contacts, REGULATION_DATA.contacts.fields)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import messages from "@/utils/messages";
export default {
name: "regulation",
  data: () => ({
    input: '',
    button: '',
    div: '',
    elem: ''
  }),
  computed: {
    ...mapGetters([
        'REGULATION_DATA'
    ])
  },
  methods: {
    getKey: (obj, val) => {
      return Object.keys(obj).find(key => obj[key] === val)
    },
    removeAllInputs: function (e) {
      if(e.target.tagName === 'INPUT' || e.target.tagName === 'A') return
      const divs = this.$el.querySelectorAll('.input-field')
      if(divs.length) divs.forEach(i => i.remove())
    },
    createInput (e){
      this.elem = e.target
      if(e.target.nextSibling && e.target.nextSibling.className === 'input-field') return
      this.div = document.createElement('div')
      this.div.classList.add('input-field')
      this.input = document.createElement('input')
      this.input.setAttribute('type', 'text')
      this.button = document.createElement('a')
      this.button.classList.add('btn-small', 'btn-save-field')
      this.button.addEventListener('click', () => this.changeField(e))
      this.button.textContent = 'изменить'
      this.div.append(this.input)
      this.div.append(this.button)
      e.target.after(this.div)
    },
    changeField: async function (e) {
      const el = e.target.nextSibling.querySelector('input')
      console.log(el)
      const container = {
        id: this.REGULATION_DATA._id,
        index: this.elem.dataset.idx,
        name: this.elem.dataset.name,
        name2: this.elem.dataset.name2,
        value: this.elem.textContent.trim(),
        candidate: el.value
      }
      try {
        const response = await this.$store.dispatch('updateRegulationData', container)
        this.$store.state.regulation = response.data
        this.$done(messages[response.statusText])
        el.value = ''
      } catch (e) {
        this.$error(e.response.data.message)
        el.value = ''
      }
    }
  }
}
</script>
<style>
.regulation-page {
  padding: 25px 25px;
}
</style>
