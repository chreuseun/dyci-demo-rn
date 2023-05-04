import {useHTTPPost} from 'src/hooks/axios'
import {ENDPOINTS} from 'src/constants/endpoints'

const usePOSTLogin = () => {
    const {
        isPOSTRequestLoading: isPOSTLoginLoading,
        runHTTPPostRequest
    } = useHTTPPost({
            url:ENDPOINTS.LOGIN,
            onCompleted: data => {
                console.log('--- LOGIN SUCCESSFUL: ', JSON.stringify(data?.data,null,4))
            },
            onError: error => {
                console.log('--- LOGIN ERROR: ', error)
            }
    })


    const runHTTPPostLogin = async ({username = null } = {}) => {
        await runHTTPPostRequest({data:{
            username
        }})
    }


    return {
        isPOSTLoginLoading,
        runHTTPPostLogin
    }
}

export default usePOSTLogin