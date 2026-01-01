type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const SearchInput = ({ value, onChange, placeholder = "Search..." }: SearchInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-card/50 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors text-sm"
    />
  );
};

export default SearchInput;
