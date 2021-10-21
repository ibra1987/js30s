<template>
  <nav
    class="
      hidden
      h-full
      lg:flex
      text-sm
      lg:text-base
      mx-6
      justify-end
      items-center
    "
  >
    <ul class="h-full flex justify-center items-center">
      <nuxt-link to="/">
        <li
          class="
            px-2
            lg:py-2 lg:mx-1
            xl:py-2
            lg:px-4
            text-center text-secondary
            border-b border-primary
            hover:border-secondary
            transition
            duration-500
            ease-in-out
          "
        >
          Home
        </li>
      </nuxt-link>

      <nuxt-link to="/learning/exercices">
        <li
          class="
            px-2
            lg:py-2 lg:mx-1
            xl:py-2 xl:px-6
            lg:px-4
            text-center text-secondary
            border-b border-primary
            hover:border-secondary
            transition
            duration-500
            ease-in-out
          "
        >
          Exercices
        </li>
      </nuxt-link>
      <nuxt-link to="/learning/tutorials">
        <li
          class="
            px-2
            lg:py-2 lg:mx-1
            xl:py-2 xl:px-6
            lg:px-4
            text-center text-secondary
            border-b border-primary
            hover:border-secondary
            transition
            duration-500
            ease-in-out
          "
        >
          tutorials
        </li>
      </nuxt-link>
      <nuxt-link to="/community/community">
        <li
          class="
            px-2
            lg:py-2 lg:mx-1
            xl:py-2 xl:px-6
            lg:px-4
            text-center text-secondary
            border-b border-primary
            hover:border-secondary
            transition
            duration-500
            ease-in-out
          "
        >
          community
        </li>
      </nuxt-link>
      <nuxt-link to="/users/signup">
        <li
          class="
            px-2
            lg:py-2 lg:mx-1
            w-32
            xl:py-2 xl:px-6
            lg:px-4
            text-center
            block
            outline-none
            border border-sec
            text-white
            hover:text-primary hover:bg-white
            transition
            duration-500
            ease-in-out
            rounded
          "
        >
          Sign Up
        </li>
      </nuxt-link>
      <nuxt-link to="/users/signin">
        <li
          class="
            px-2
            lg:py-2 lg:mx-1
            w-32
            xl:px-6 xl:py-2
            lg:px-4
            border border-white
            text-center
            bg-white
            block
            outline-none
            rounded
            text-primary
            font-bold
            hover:bg-primary hover:text-white hover:border-white
            transition
            duration-500
            ease-in-out
          "
        >
          Login
        </li>
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>
