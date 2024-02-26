<template>
  <main class="max-w-sm mx-auto" style="overflow-y: scroll">
    <h1>useValidation</h1>
    <div class="mt-4">
      <strong>Profile</strong>
    </div>
    <div class="w-auto max-w-500">
      <label class="text-sm" for="name">Name</label>
      <InputText
        id="name"
        v-model="form.name"
        class="w-full"
        :class="{ 'p-invalid': !!getError('name') }"
      />
      <div class="error">{{ getError('name') }}</div>
    </div>
    <div class="w-auto max-w-500">
      <label class="text-sm" for="email">Email</label>
      <InputText
        id="email"
        v-model="form.email"
        class="w-full"
        :class="{ 'p-invalid': !!getError('email') }"
      />
      <div class="error">{{ getError('email') }}</div>
    </div>
    <div class="w-auto max-w-500">
      <label class="text-sm" for="website">Website</label>
      <InputText
        id="website"
        v-model="form.website"
        class="w-full"
        :class="{ 'p-invalid': !!getError('website') }"
      />
      <div class="error">{{ getError('website') }}</div>
    </div>
    <div class="mt-4">
      <strong>Address</strong>
    </div>
    <div class="w-auto max-w-500">
      <label class="text-sm" for="city">City</label>
      <InputText
        id="city"
        v-model="form.address.city"
        class="w-full"
        :class="{ 'p-invalid': !!getError('address.city') }"
      />
      <div class="error">{{ getError('address.city') }}</div>
    </div>
    <div class="w-auto max-w-500">
      <label class="text-sm" for="city">Street</label>
      <InputText
        id="street"
        v-model="form.address.street"
        class="w-full"
        :class="{ 'p-invalid': !!getError('address.street') }"
      />
      <div class="error">{{ getError('address.street') }}</div>
    </div>
    <div class="flex mt-4">
      <Button size="small" class="w-auto px-4 py-2" @click="submit">Submit</Button>
    </div>

    <div class="clear"></div>
    <hr class="mt-4" />

    <div class="mt-4">
      <strong>Form data</strong>
      <pre>{{ form }}</pre>
    </div>
    <div class="clear mt-4">
      <strong>Valitation errors</strong>
      <pre>{{ errors }}</pre>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { z } from 'zod'

const validationSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(1, 'Please enter a valid email'),
  website: z.string().url('Please enter a valid URL'),
  address: z.object({
    street: z.string().min(1, 'The street field is required'),
    city: z.string().min(1, 'The city field is required')
  })
})

const form = ref({
  name: '',
  email: '',
  website: '',
  address: {
    street: '',
    city: ''
  }
})

const { validate, errors, isValid, getError, scrolltoError } = useValidation(
  validationSchema,
  form,
  {
    mode: 'lazy'
  }
)

const submit = async () => {
  await validate()

  if (isValid.value) {
    alert('Validation succeeded!')
  } else {
    scrolltoError('.p-invalid', { offset: 24 })
  }
}
</script>

<style scoped>
label:after {
  content: ' *';
  color: red;
}

.error {
  font-size: 14px;
  color: red;
  margin-top: 4px;
}
</style>
