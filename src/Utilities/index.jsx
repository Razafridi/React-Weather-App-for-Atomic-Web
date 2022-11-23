export const isEmpty = (data)=>{
    return JSON.stringify(data) === '{}'
}
export const getTime = (sec)=>{
    var date  = new Date(sec*1000)
    
    return (date.getHours()%12).toString()+":"+date.getMinutes().toString()+' '+(date.getHours()<12 ? 'AM' : 'PM')
}

export const getTimeNow = ()=>{
    var date = new Date()
    
    return (date.getHours()%12).toString()+":"+(date.getMinutes().toString().length < 2 ? '0'+date.getMinutes().toString() : date.getMinutes().toString())+(date.getHours()< 12 ? 'AM' : 'PM')
} 

export const getDateNow = ()=>{
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    var mon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var date = new Date()
    return days[date.getDay()]+', '+ date.getDate().toString()+' '+mon[date.getMonth()]
}
export const getDate = (dateData)=>{
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    var mon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var date = new Date(dateData)
    return days[date.getDay()]+', '+ date.getDate().toString()+' '+mon[date.getMonth()]
}

