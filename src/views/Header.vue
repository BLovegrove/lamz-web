<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <img src="../assets/lamz_head_transparent_small.png" alt="" class="pe-2" height="40">
            <a class="navbar-brand" href="#">
                LAMz-net
            </a>
            <div class="navbar-brand me-0">
                <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white">&nbsp;</div>
                <hr class="d-lg-none text-white-50">
            </div>
            <div class="social-media order-lg-last">
                <p class="mb-0 d-flex">
                    <a href="#" class="d-flex align-items-center justify-content-center px-2">
                        <font-awesome-icon icon="fa fa-heart" /> &nbsp; Donate!
                    </a>
                    <a href="#" class="d-flex align-items-center justify-content-center">
                        <font-awesome-icon icon="fa-brands fa-discord" />
                    </a>
                </p>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavContent"
                aria-controls="NavContent" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon icon="fa fa-bars" />
            </button>
            <div class="collapse navbar-collapse" id="NavContent">
                <ul class="navbar-nav ml-auto mr-md-3">
                    <li class="nav-item active"><a href="#" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Artwork
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                            <li>
                                <h6 class="dropdown-header">Art mediums</h6>
                            </li>
                            <li><a class="dropdown-item" href="#">Digital</a></li>
                            <li><a class="dropdown-item" href="#">Painting</a></li>
                            <li><a class="dropdown-item" href="#">Pen/Pencil</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <h6 class="dropdown-header">Digital scrapbooks</h6>
                            </li>
                            <li><a class="dropdown-item" href="#">Destiny 2</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
</script>

<style>
.navbar-toggler {
    min-height: 40px;
    border: 1px solid #e6e6e6!important;
}

.social-media p a {
    border: 1px solid #e6e6e6;
    min-width: 40px;
    height: 40px;
    border-radius: 1rem;
    margin-right: 4px;
    text-decoration: none;
}

.social-media p a {
    color: rgb(255, 255, 255);
}

.social-media p a:hover {
    background: #fc7fb2;
    border-color: #fc7fb2;
}

.social-media p a:hover {
    color: rgb(0, 0, 0);
}

.navbar-dark {
    z-index: 3;
    padding: 10px 10px;
    border-radius: 0  0 5px 5px;
    box-shadow: 0px 5px 20px 8px rgba(0, 0, 0, 0.34);
}
</style>