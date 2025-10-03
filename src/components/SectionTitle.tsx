type SectionTitleProps = {
	label: string;
};

export default function SectionTitle({ label }: SectionTitleProps) {
	return <h2 className="section-title">{label}</h2>;
}


