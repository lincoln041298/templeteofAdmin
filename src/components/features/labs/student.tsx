export interface StudentProps {
  name?: string;
}

export function Student({ name }: StudentProps) {
  return <div className="text-red-800">Student: {name} </div>;
}
