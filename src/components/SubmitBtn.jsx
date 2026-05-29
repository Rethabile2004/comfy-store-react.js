import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className='btn btn-primary btn-block'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className='h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white'></span>
          sending...
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};
export default SubmitBtn;
