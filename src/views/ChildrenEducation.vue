<template>
    <div>
        <TopBackground :page="page"></TopBackground>
        <ChildrenEducationSwiper></ChildrenEducationSwiper>
        <div class="exam_block">
            <div class="level_exam_block">
                <h1>书法等级考试</h1>
                <h2>北京教育考试院主办的中国书画等级考试书法考试</h2>
                <h2>文化部艺术发展中心主办的书法水平考级</h2>
                <h2>书法家协会主办的社会书法水平考级</h2>
            </div>
            <div class="teacher_exam_block">
                <h1>书法教师资格考试</h1>
            </div>
            <div class="publication_block">
                <h1>青少年书法刊物</h1>
            </div>
        </div>
        <video width="1200" height="900" controls loop="loop" autoplay="autoplay" muted="muted" preload="metadata"
            poster="http://101.43.39.188/image/calligraphy/carousel/carousel3.jpg">
            <source src="https://v.cic.tsinghua.edu.cn/vod/video/2/8/421731.mp4" type="video/mp4">
        </video>

        <div class="training_institution_block">
            <h1>书法培训机构</h1>
        </div>
    </div>
</template>

<script>
import ChildrenEducationSwiper from '@/components/ChildrenEducationSwiper/index.vue'
import TopBackground from '@/components/TopBackground/index.vue'

export default {
    components: {
        ChildrenEducationSwiper,
        TopBackground
    },
    setup() {
        return {
            page:'children_education'
        }
    }
}
</script>
<style>
.exam_block {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.level_exam_block {
    width: 33.33%;
}

.teacher_exam_block {
    width: 33.33%;
}

.publication_block {
    width: 33.33%;
}

.training_institution_block {
    margin-top: 10%;
    margin-right: 60%;
}
</style>