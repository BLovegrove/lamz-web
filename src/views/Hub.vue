<template>
    <section id="masthead">
        <div class="container jumbotron">
            <img src="" alt="" class="mascot-head">
            <div class="billboard">

                <h1>Welcome to the LAMz-net hub!</h1>
                <p>
                    The LAMz, or Lusty Argonian Maidz <sub>(<a href="#about">don't ask</a>)</sub> started off as a 4-man
                    clan in the
                    popular MMO Destiny 2,
                    but over the years we've expanded to a community of around {{member_count}}
                    members. {{isNice}}<br>
                    These days we do eveything from a myriad more games to real life events - keep scrolling to see some
                    specifics!<br>
                    We hope you enjoy the stories and content we created this site to share, and if you'd like to say hi
                    to the awesome folks who made it all happen, drop in to our <a :href="this.discordInvite"
                        target="_blank">Discord server
                        <font-awesome-icon icon="fa-brands fa-discord" />
                    </a>
                </p>
                <p>Here you'll find stuff like:</p>
                <ul>
                    <li>Scrapbook of our adventures in destiny (soon &trade;)</li>
                    <li><b>Multiple</b> scrapbooks with moments from our DnD campaigns (soon &trade;)</li>
                    <li>Artwork &amp; design projects made by our members (soon &trade;)</li>
                    <li>Custom interactive DnD map-maker (soon &trade;)</li>
                </ul>

            </div>
            <img src="" alt="" class="mascpt-foot">
        </div>
    </section>
    <section id="masthead-followup">
        <div class="container col-12 mx-auto">
            <h2>Some cool stuff we do:</h2>
            <div class="row">
                <div class="col-lg-6"></div>
                <div class="col-lg-6"></div>
            </div>
            <div class="row">
                <div class="col-lg-6"></div>
                <div class="col-lg-6"></div>
            </div>
            <div class="row">
                <div class="col-lg-6"></div>
                <div class="col-lg-6"></div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    title: 'LAMz-net - Home',

    data() {
        return {
            member_count: '??',
        }
    },

    computed: {
        isNice() {
            return [69, 420, 690].includes(this.member_count) ? 'Nice.' : ''
        }
    },

    methods: {
        async updateMemberCount() {
            this.member_count = '👀'
            try {
                const res = await fetch(this.apiUrl)
                this.member_count = (await res.json())['member_count']
            } catch (error) {
                this.member_count = 'Error!'
            }
        }
    },

    mounted() {
        // GET request using fetch with async/await
        this.updateMemberCount()
    }
}


</script>

<style></style>