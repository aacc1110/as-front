import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import useInputs from '../../lib/hooks/useInputs';
import LabelInput from '../common/LabelInput';
import Button from '../../styles/Button';

const RegisterFormBlock = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  .form-bottom {
    margin-top: 6rem;
  }
  .error {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: ${palette.red5};
    font-weight: bold;
  }
`;
export type RegisterFormType = {
  displayName: string;
  email: string;
  username: string;
  shortBio: string;
};
interface RegisterFormProps {
  onSubmit: (form: RegisterFormType) => any;
  defaultEmail: string | null | undefined;
  errors: string | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, defaultEmail, errors }) => {
  console.log('defaultEmail', defaultEmail);
  const [form, onChange] = useInputs<RegisterFormType>({
    displayName: '',
    email: '',
    username: '',
    shortBio: ''
  });
  return (
    <RegisterFormBlock>
      <LabelInput
        name="displayName"
        onChange={onChange}
        label="이름"
        placeholder="이름을 입력하세요"
        value={form.displayName}
        size={20}
      />
      <LabelInput
        name="email"
        onChange={onChange}
        label="이메일"
        placeholder="이메일을 입력하세요"
        value={defaultEmail || form.email}
        disabled={!!defaultEmail}
        size={25}
      />
      <LabelInput
        name="username"
        onChange={onChange}
        label="아이디"
        placeholder="아이디를 입력하세요"
        value={form.username}
        size={15}
      />
      <LabelInput
        name="shortBio"
        onChange={onChange}
        label="한 줄 소개"
        placeholder="당신을 한 줄로 소개해보세요"
        value={form.shortBio}
        size={30}
      />
      <div className="form-bottom">
        {errors && <div className="error">{errors}</div>}
        <div className="buttons">
          <Button inline color="lightGray" to="/" size="LARGE">
            취소
          </Button>
          <Button
            inline
            type="submit"
            color="blue"
            size="LARGE"
            onClick={() => onSubmit({ ...form, email: defaultEmail || form.email })}
          >
            다음
          </Button>
        </div>
      </div>
    </RegisterFormBlock>
  );
};

export default RegisterForm;
