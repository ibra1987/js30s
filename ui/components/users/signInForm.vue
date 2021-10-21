<template>
  <div
    class="
      w-11/12
      md:w-4/6
      lg:w-2/4
      bg-white
      flex flex-col
      justify-center
      items-center
      rounded
    "
  >
    <form class="flex w-4/5 h-4/5 flex-col justify-center items-center p-6">
      <div class="mb-6">
        <h3 class="text-sec">ACCOUNT LOGIN</h3>
      </div>
      <div
        class="
          w-full
          border-gray-300 border
          px-2
          m-2
          focus:border-sec focus:border-2
          rounded
          flex
          justify-between
          items-center
        "
      >
        <fa icon="user" class="text-gray-400" />

        <input
          class="my-2 mx-2 block outline-none flex-grow"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div
        class="
          w-full
          border-gray-300 border
          px-2
          m-2
          focus:border-sec focus:border-2
          rounded
          flex
          justify-between
          items-center
        "
      >
        <fa icon="unlock-alt" class="text-gray-400" />
        <input
          class="my-2 mx-2 block flex-grow outline-none"
          type="password"
          placeholder="Password"
        />
      </div>
      <input
        class="
          block
          w-full
          outline-none
          m-2
          py-2
          border border-sec
          bg-sec
          text-white
          font-bold
          rounded
          cursor-pointer
          hover:bg-sechovered
        "
        type="submit"
        value="LOGIN "
      />
    </form>
    <p class="block text-sm text-red-400 mx-2">
      <span>Forgot password?</span><br />
      <span>don t have an ccount? Create one here.</span>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
