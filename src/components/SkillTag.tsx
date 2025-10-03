type SkillTagProps = {
	label: string;
};

export default function SkillTag({ label }: SkillTagProps) {
	return <span className="skill-tag">{label}</span>;
}


