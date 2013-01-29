
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(”пр)
		///</summary>
	public enum ¬иды—кидок
	{
		ѕуста€—сылка = - 1,
		ќптова€ = 0,
		–ознична€ = 1,
	}
	public static partial class ¬иды—кидок_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid ќптова€ = new Guid("3043d496-19fe-a9cf-4dc3-54a0e56dacec");
		public static readonly Guid –ознична€ = new Guid("f0071482-dfe5-1475-4225-0ceca1a984f8");
		public static ¬иды—кидок ѕолучить(this ¬иды—кидок «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬иды—кидок ѕолучить(this ¬иды—кидок «начение, Guid —сылка)
		{
			if(—сылка == ќптова€)
			{
				return ¬иды—кидок.ќптова€;
			}
			else if(—сылка == –ознична€)
			{
				return ¬иды—кидок.–ознична€;
			}
			return ¬иды—кидок.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬иды—кидок «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬иды—кидок «начение)
		{
			switch («начение)
			{
				case ¬иды—кидок.ќптова€: return ќптова€;
				case ¬иды—кидок.–ознична€: return –ознична€;
			}
			return Guid.Empty;
		}
	}
}
