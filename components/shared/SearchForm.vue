<template>
  <div
    class="
      hidden
      w-screen
      h-screen
      bg-primary
      absolute
      inset-0
      flex-row
      justify-center
      items-center
      bg-opacity-75
    "
  >
    <div
      class="
        flex flex-col
        justify-center
        items-center
        bg-white
        w-4/5
        h-1/4
        md:w-2/5
        rounded
      "
    >
      <close />
      <form
        class="bg-transparent w-full flex flex-col justify-start items-center"
      >
        <input
          type="text"
          class="
            bg-transparent
            my-4
            py-2
            border-b
            outline-none
            w-3/5
            border-sec
            block
            px-4
          "
          autofocus="autofocus"
          placeholder="Type in your search"
        />
        <button
          class="
            my-4
            w-2/5
            block
            px-8
            py-2
            text-lg
            rounded
            tracking-wide
            text-white
            bg-sec
            hover:bg-sechovered
          "
        >
          search
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
