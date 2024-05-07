export default function useTimeLine(){
  function flex(value: Boolean){
    if(value) return {
      wrapperFlex: 'flex-col',
      lineFlex: 'h-2 w-2 rounded-t-lg'
    }
    return{
      wrapperFlex: '',
      lineFlex: 'flex-col  h-2 w-2 rounded-l-lg'
    } 
    
  }
  return{flex}
}