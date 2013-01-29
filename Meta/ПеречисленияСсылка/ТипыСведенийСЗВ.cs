
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
	public enum “ипы—ведений—«¬
	{
		ѕуста€—сылка = - 1,
		»—’ќƒЌјя = 0,
		ѕ≈Ќ—»ќЌЌјя = 1,
		 ќ––≈ “»–”ёўјя = 2,
		ќ“ћ≈Ќяёўјя = 3,
	}
	public static partial class “ипы—ведений—«¬_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid »—’ќƒЌјя = new Guid("0fda778f-51a7-eb31-4473-8ab43621c5e7");
		public static readonly Guid ѕ≈Ќ—»ќЌЌјя = new Guid("d8d003a0-8b7b-30e6-4b3b-05328424e951");
		public static readonly Guid  ќ––≈ “»–”ёўјя = new Guid("2e3b18b1-8698-554c-41bf-88507ac52df7");
		public static readonly Guid ќ“ћ≈Ќяёўјя = new Guid("b1d5af92-de66-276d-4719-394fbc1472ee");
		public static “ипы—ведений—«¬ ѕолучить(this “ипы—ведений—«¬ «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static “ипы—ведений—«¬ ѕолучить(this “ипы—ведений—«¬ «начение, Guid —сылка)
		{
			if(—сылка == »—’ќƒЌјя)
			{
				return “ипы—ведений—«¬.»—’ќƒЌјя;
			}
			else if(—сылка == ѕ≈Ќ—»ќЌЌјя)
			{
				return “ипы—ведений—«¬.ѕ≈Ќ—»ќЌЌјя;
			}
			else if(—сылка ==  ќ––≈ “»–”ёўјя)
			{
				return “ипы—ведений—«¬. ќ––≈ “»–”ёўјя;
			}
			else if(—сылка == ќ“ћ≈Ќяёўјя)
			{
				return “ипы—ведений—«¬.ќ“ћ≈Ќяёўјя;
			}
			return “ипы—ведений—«¬.ѕуста€—сылка;
		}
		public static byte[]  люч(this “ипы—ведений—«¬ «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this “ипы—ведений—«¬ «начение)
		{
			switch («начение)
			{
				case “ипы—ведений—«¬.»—’ќƒЌјя: return »—’ќƒЌјя;
				case “ипы—ведений—«¬.ѕ≈Ќ—»ќЌЌјя: return ѕ≈Ќ—»ќЌЌјя;
				case “ипы—ведений—«¬. ќ––≈ “»–”ёўјя: return  ќ––≈ “»–”ёўјя;
				case “ипы—ведений—«¬.ќ“ћ≈Ќяёўјя: return ќ“ћ≈Ќяёўјя;
			}
			return Guid.Empty;
		}
	}
}
