<template>
    <div class="d-flex justify-content-center">
        <div class="row">
            <div class="col-auto mb-2">
                <button class="btn-filter-ac">All</button>
            </div>
            <div class="col-auto mb-2">
                <button class="btn-filter">Cake</button>
            </div>
            <div class="col-auto mb-2">
                <button class="btn-filter">Daifuku</button>
            </div>
            <div class="col-auto mb-2">
                <button class="btn-filter">IceCream</button>
            </div>
            <div class="col-auto mb-2">
                <button class="btn-filter">Drink</button>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.btn-filter-ac {
    width: 100px;
    color: #fff8ba;
    background: #ff33ff;
    font-weight: 600;
    border: none;
    height: 2rem;
    border-radius: 10px;
}
.btn-filter {
    width: 100px;
    color: #ff33ff;
    background: #fff8ba;
    font-weight: 600;
    border: none;
    height: 2rem;
    border-radius: 10px;
}
.btn-filter:hover {
    width: 100px;
    color: #fff8ba;
    background: #eb07df;
    font-weight: 600;
    border: none;
    height: 2rem;
    border-radius: 10px;
}

.btn-filter-ac:active,
.btn-filter:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>