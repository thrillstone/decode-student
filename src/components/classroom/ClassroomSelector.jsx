function ClassroomSelector({onClasroomSelected}) {
  return (
    <div>
      <div onClick={() => onClasroomSelected(1)}>Class 1</div>
      <div onClick={() => onClasroomSelected(2)}>Class 2</div>
      <div onClick={() => onClasroomSelected(3)}>Class 3</div>
      <div onClick={() => onClasroomSelected(4)}>Class 4</div>
    </div>
  );
}

export default ClassroomSelector;
