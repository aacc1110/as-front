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
  name: string;
  email: string;
  password: string;
  about: string;
};
interface RegisterFormProps {
  onSubmit: (form: RegisterFormType) => any;
  defaultEmail: string | null | undefined;
  errors: string | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, defaultEmail, errors }) => {
  console.log('defaultEmail', defaultEmail);
  const [form, onChange] = useInputs<RegisterFormType>({
    name: '',
    email: '',
    password: '',
    about: ''
  });
  return (
    <RegisterFormBlock>
      <LabelInput
        name="name"
        onChange={onChange}
        label="이름"
        placeholder="이름을 입력하세요"
        value={form.name}
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
        name="password"
        type="password"
        onChange={onChange}
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
        value={form.password}
        size={15}
      />
      <LabelInput
        name="about"
        onChange={onChange}
        label="한줄소개"
        placeholder="당신을 한 줄로 소개해보세요"
        value={form.about}
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
