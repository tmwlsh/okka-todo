import { useRouter } from 'next/router';
import TodoContainer from '../../components/todoContainer';
import Container from '@/components/container';

const TodosPage: React.FC = () => {
  const router = useRouter();
  const { group } = router.query;

  return (
    <Container width="small">
      <TodoContainer group={group as string} />
    </Container>
  );
};

export default TodosPage;