export const DELETED_FILTER="DELETED_FILTER"
export const SELECTED_FILTER="SELECTED_FILTER"
export const SELECTED_MONTH="SELECTED_MONTH"
export const MONTHS="MONTHS"
export const RAW_MONTHS="RAW_MONTHS"
export const DELETED_MONTHS="DELETED_MONTHS"
export const DELETED_ITEMS="DELETED_ITEMS"

export const filterByMonths=(months, position, index)=>{
   return{ type: MONTHS , value:months, position, index}
}

export const rawMonths=(months)=>{
   return{ type: RAW_MONTHS , value:months}
}

export const selectFilter =(filter, name)=>{
   return{type:SELECTED_FILTER , value:filter, name}
}


export const deleteFilter =()=>{
   return{type:DELETED_FILTER  }
}

export const deleteMonth =()=>{
   return{type:DELETED_MONTHS  }
}

export const deletedItem= (id)=>{
   return{type:DELETED_ITEMS , value:id}
}

export const selectedMonth= (month)=>{
   return{type:SELECTED_MONTH , value:month}
}