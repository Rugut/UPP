
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(”пр)
		///</summary>
	public enum ¬идыƒвиженийѕартий
	{
		ѕуста€—сылка = - 1,
		ѕоступление = 0,
		–еализаци€ = 1,
	}
	public static partial class ¬идыƒвиженийѕартий_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid ѕоступление = new Guid("6cd12b81-6fbe-fde7-4f39-cb7409d98381");
		public static readonly Guid –еализаци€ = new Guid("2859939c-a21c-1209-4f85-3f740ebb2474");
		public static ¬идыƒвиженийѕартий ѕолучить(this ¬идыƒвиженийѕартий «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬идыƒвиженийѕартий ѕолучить(this ¬идыƒвиженийѕартий «начение, Guid —сылка)
		{
			if(—сылка == ѕоступление)
			{
				return ¬идыƒвиженийѕартий.ѕоступление;
			}
			else if(—сылка == –еализаци€)
			{
				return ¬идыƒвиженийѕартий.–еализаци€;
			}
			return ¬идыƒвиженийѕартий.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬идыƒвиженийѕартий «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬идыƒвиженийѕартий «начение)
		{
			switch («начение)
			{
				case ¬идыƒвиженийѕартий.ѕоступление: return ѕоступление;
				case ¬идыƒвиженийѕартий.–еализаци€: return –еализаци€;
			}
			return Guid.Empty;
		}
	}
}
