import {useHTTPPost} from 'src/hooks/axios'
import {ENDPOINTS} from 'src/constants/endpoints'

const usePOSTLogin = ({
    onCompleted = () =>{},
    onError = ()=>{}
}) => {
    const {
        isPOSTRequestLoading: isPOSTLoginLoading,
        runHTTPPostRequest
    } = useHTTPPost({
            url:ENDPOINTS.LOGIN,
            onCompleted: data => {
                onCompleted(data?.data)
            },
            onError: error => {
                onError(error)
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