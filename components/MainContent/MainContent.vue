<template>
    <div class="w-full h-full flex flex-col">
        <slot name="header" class="flex-1" />
        <div class="bg-gray-50 h-max w-full flex-1">
            <div class="w-full h-full p-5 mx-auto max-w-screen-xl">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>