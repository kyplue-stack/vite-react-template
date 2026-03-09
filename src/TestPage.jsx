import React from 'react'
import { useNavigate } from 'react-router-dom'

function TestPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>테스트 페이지에 오신 것을 환영합니다!</h1>
      <p>성공적으로 화면이 이동되었습니다.</p>
      <button onClick={() => navigate('/')}>메인으로 돌아가기</button>
    </div>
  )
}

export default TestPage