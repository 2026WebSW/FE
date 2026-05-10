import { useNavigate } from 'react-router-dom'

function Landing() {
  // navigate 함수 - navigate('/map'), /map 이동
  const navigate = useNavigate()

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <h1>지금 발생한 재난과 현재 필요한 도움을 지역별로 확인</h1>
      <button onClick={() => navigate('/map')}>현재 재난 보기</button>
    </div>
  )
}

export default Landing