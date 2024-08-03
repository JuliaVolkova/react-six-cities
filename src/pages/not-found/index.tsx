import EmptySection from '../../components/empty-section';

const BackLink = () => (
  <a className="locations__item-link" href="#">
    <span>Back to main page ➝ </span>
  </a>
);

const NotFound = () => (
  <main className="page__main page__main--index page__main--index-empty">
    <h1 className="visually-hidden">Not found page</h1>
    <EmptySection title='404' description='Page you are looking for is not found'>
      <BackLink/>
    </EmptySection>
  </main>
);

export default NotFound;
