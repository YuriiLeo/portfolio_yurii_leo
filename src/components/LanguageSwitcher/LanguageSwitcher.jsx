import i18next from 'i18next'
import { Button, ListItem, Text } from "./LanguageSwitcher.styled";

const languages = [
    {
        title: 'En',
        id: 'en',
    },
    {
        title: 'Ua',
        id: 'uk',
    },
];

function LanguageSwitcher() {
    return (
        <ul style={{ display: 'flex' }}>
            {languages.map(({ title, id }) => {
                const isCurrentLangUrl = i18next.language === id;
                return (
                    <ListItem
                        key={id}
                    >
                        <Button
                            className={isCurrentLangUrl ? 'pointer-events-none' : ''}
                            disabled={isCurrentLangUrl}
                            type="button"
                            onClick={() => i18next.changeLanguage(id)}
                        >
                            <Text
                                className={isCurrentLangUrl ? 'active' : ''}
                            >
                                {title}
                            </Text>
                        </Button>
                    </ListItem>
                );
            })}
        </ul>
    );
}

export default LanguageSwitcher;
