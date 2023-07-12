const initialValueCustomers = {
    customers: []
}

const rootReducerCustomers = (state = initialValueCustomers, action) => {
    switch (action.type) {
        case "ADD_CASTOMER":
            return { ...state, customers: [...state.customers, action.payload] }
        case "DELETE_CASTOMER": {
            const customers = state.customers.filter(customer => customer.lastName != action.payload.lastName && customer.firstName != action.payload.firstName)
            return { ...state, customers }
        }

        case "EDIT_CASTOMER": {
            const customers = [...state.customers]
            const index = customers.findIndex(customer => customer.lastName != action.payload.lastName)
            if (index !== -1) customers[index] = action.payload
            return { ...state, customers }


        }
        case "GET_CASTOMER": {
            const customers = [...state.customers]
            const index = customers.findIndex(customer => customer.lastName != action.payload.lastName)
            if (index !== -1) return customers[index]
            return { ...state, customers }
        }
        case "GET_ALL_CASTOMERS":
            return state
        default:
            return state



    }
}