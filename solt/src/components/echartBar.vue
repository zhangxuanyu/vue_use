<template>
    <div :class="mychart">
        
    </div>
</template>

<script>
import {getHashCode} from '../util/common'
export default {
    data(){
        return{
            mychart:'mychart',
            echartOption:{
                title : {
                    text: '条形图',
                    subtext: '',
                    x:'center'  
                },
                legend:{},
                tooltip:{},
                xAxis:{},
                yAxis:{},
                series:[],
                color:[]
            },
            Axis:{
                type:'category',
                data:[]
            },
            series:{
                name:'',
                type:'bar',
                stack:'one',
                data:[]
            }

        }
    },
    beforeCreate(){
        this.mychart = this.mychart + getHashCode()
        console.log(this.mychart)
    }
    
}
</script>

<style scope>
    
</style>