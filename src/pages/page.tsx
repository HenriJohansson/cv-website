
function PageSlot(props: {
  currentPage: React.ComponentType<{
    className?: string;
  }>;
}) {

  return (
    <slot id="page">
      <props.currentPage/>
    </slot>
  );
}

export default PageSlot;
