import type { DemoTheme, DemoContent } from "./types";

interface Props {
  theme: DemoTheme;
  content: DemoContent;
}

export function DemoTeam({ theme, content }: Props) {
  const cols = content.team.length <= 3
    ? "grid-cols-1 sm:grid-cols-3"
    : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section id="equipo" data-demo-section className="py-20 sm:py-28 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-demo-title className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 sm:mb-14">{content.teamTitle}</h2>
        <div className={`grid ${cols} gap-6 sm:gap-8`}>
          {content.team.map((m) => (
            <div key={m.name} data-demo-item>
              {m.image ? (
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
                />
              ) : (
                <div className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full ${theme.avatarBg} mx-auto mb-3 sm:mb-4 flex items-center justify-center text-2xl sm:text-3xl`}>
                  👨‍⚕️
                </div>
              )}
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{m.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{m.role}</p>
              <p className={`text-xs ${theme.accentText} mt-0.5`}>{m.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
