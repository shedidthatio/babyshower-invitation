<template>
    <div class='relative h-screen flex flex-col justify-center items-center' id='content-wrapper-parent'>
        <div class='p-7 flex flex-col items-center justify-center' id='content-wrapper-child'>
            <div class='p-3 flex flex-col items-center justify-center'>
                <div class='p-3 flex flex-col items-center justify-center text-center text-sm leading-6'>
                    <h1 class='text-5xl md:text-7xl mb-2 leading-none'>join us</h1>
                    <p>To celebrate</p>
                    <p>Lyjah and Jairon</p>
                    <p>on their amazing path</p>
                    <p>to parenthood</p>
                    <h2 class='text-6xl md:text-8xl leading-none mb-2'>Experience</h2>
                    <p>The upcoming arrival of</p>
                    <p>their new baby boy</p>
                    <p class='text-xl leading-8 font-bold mt-2'>Jaire Jamarr Dorsey</p>
                    <p class='font-semibold'>February 25<sup>th</sup> at 3pm</p>
                    <p class='mt-2'>Address details will be</p>
                    <p>shared after RSVP is submitted</p>
                    <p>RSVP by February 18<sup>th</sup></p>
                    <nuxt-link :to='`https://amzn.to/3lu1JRu`'
                        class='uppercase font-semibold mt-4 hover:scale-105 ease-linear duration-200'
                        id='registryLink'>Jaire’s baby
                        registry 👶🏾</nuxt-link>
                </div>
            </div>
        </div>

        <div class='fixed top-16 left-8'>
            <h1 class='rotated text-white rounded-tl-3xl rounded-br-3xl pr-6 p-3 md:p-4 text-3xl md:text-4xl border-4'>
                You're
                invited!
            </h1>
        </div>
        <div class='fixed bottom-0 right-0'>
            <nuxt-link :to='`http://bit.ly/3S2ldJq`' class='flex flex-col items-center m-4' id='rsvpLinkBlock'>
                <img class='w-28 md:w-40 rounded-full p-3 md:p-6 border-4' id='rsvpImg' src='~assets/imgs/Union.svg'
                    alt="Image of a planet with RSVP HERE text surrounding it." />
            </nuxt-link>
        </div>
    </div>
</template>


<script setup>

</script>

<style scoped>
#content-wrapper-parent {
    background-image: url('assets/imgs/starsBg800w.svg'), linear-gradient(180deg, #010A0D 0%, #2A2E2F 73.13%);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: initial;
    background-position: 50% 50%;
}

#content-wrapper-child {
    background-image: url('assets/imgs/inviteBgImg.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: initial;
    background-position: center;
    width: 300px;
    min-width: 100%;
    height: auto;
}

.rotated {
    border-color: #FFE4AF;
    background-color: #010A0D;
    transform: rotate(-18deg);
    /* animation: bounce 3s infinite; */

    /* @keyframes bounce {

        0%,
        100% {
            transform: scale(1.1) translateY(50px) rotate(-18deg);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        50% {
            transform: scale(1) translateY(50px) rotate(-18deg);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
    } */
}

h1,
h2 {
    font-family: 'Aplenty';
}

p {
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
}

#rsvpLinkBlock {
    animation: spin 8s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
}

#rsvpImg {
    background-color: #010A0D;
    border-color: #FFE4AF;
    box-shadow: 0 25px 50px -12px rgb(255 255 255 / 0.15);
}
</style>    