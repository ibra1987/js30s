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
      py-2
    "
  >
    <form class="flex w-4/5 flex-col justify-center items-center py-2">
      <div class="mb-6">
        <h3 class="text-sec text-lg">Register a new account</h3>
      </div>
      <div class="w-full px-2 m-2 focus:border-gray-600 focus:border-2 rounded">
        <label class="text-gray-500" for="name">Full Name:</label><br />
        <input
          class="
            block
            my-2
            outline-none
            border-gray-300
            w-full
            p-2
            border
            rounded
            focus:border-gray-600
          "
          type="text"
          placeholder="Full Name"
          name="name"
          required
        />
      </div>
      <div class="w-full px-2 m-2 focus:border-gray-600 focus:border-2 rounded">
        <label class="text-gray-500" for="email">Email:</label><br />
        <input
          class="
            block
            my-2
            outline-none
            border-gray-300
            w-full
            p-2
            border
            rounded
            focus:border-gray-600
          "
          type="email"
          placeholder="Enter your email"
          name="email"
          required
        />
      </div>
      <div class="w-full px-2 m-2 focus:border-gray-600 focus:border-2 rounded">
        <label class="text-gray-500" for="confirmEmail"
          >Confirm your email:</label
        >
        <input
          class="
            block
            my-2
            outline-none
            border-gray-300
            w-full
            p-2
            border
            rounded
            focus:border-gray-600
          "
          type="email"
          placeholder="confirm your email"
          name="confirmEmail"
          required
        />
      </div>
      <div class="w-full px-2 m-2 focus:border-gray-600 focus:border-2 rounded">
        <label class="text-gray-500" for="password">Choose a password:</label>
        <input
          class="
            block
            my-2
            outline-none
            border-gray-300
            w-full
            p-2
            border
            rounded
            focus:border-gray-600
          "
          type="password"
          placeholder="Password"
          name="password"
        />
      </div>
      <div class="w-full px-2 m-2 focus:border-gray-600 focus:border-2 rounded">
        <label class="text-gray-500" for="confirmPassword"
          >Confirm password:</label
        >
        <input
          class="
            block
            my-2
            outline-none
            border-gray-300
            w-full
            p-2
            border
            rounded
            focus:border-gray-600
          "
          type="password"
          placeholder="Password"
          name="confirmPassord"
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
      <span>Already registerd?</span><br />
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
