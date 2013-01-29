
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(ќбщ)
		///</summary>
	public enum ¬идыќперацийѕрочие«атраты
	{
		ѕуста€—сылка = - 1,
	///<summary>
	///(ќбщ)
	///</summary>
		ќтражение = 0,
	///<summary>
	///(ќбщ)
	///</summary>
		—писание = 1,
	}
	public static partial class ¬идыќперацийѕрочие«атраты_«начени€//:ѕеречисление—сылка
	{
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid ќтражение = new Guid("9afe68ae-949b-3a12-48d9-fb915d435973");
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid —писание = new Guid("e12ba4a8-d4ae-c2c2-4e02-09fce63c0913");
		public static ¬идыќперацийѕрочие«атраты ѕолучить(this ¬идыќперацийѕрочие«атраты «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬идыќперацийѕрочие«атраты ѕолучить(this ¬идыќперацийѕрочие«атраты «начение, Guid —сылка)
		{
			if(—сылка == ќтражение)
			{
				return ¬идыќперацийѕрочие«атраты.ќтражение;
			}
			else if(—сылка == —писание)
			{
				return ¬идыќперацийѕрочие«атраты.—писание;
			}
			return ¬идыќперацийѕрочие«атраты.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬идыќперацийѕрочие«атраты «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬идыќперацийѕрочие«атраты «начение)
		{
			switch («начение)
			{
				case ¬идыќперацийѕрочие«атраты.ќтражение: return ќтражение;
				case ¬идыќперацийѕрочие«атраты.—писание: return —писание;
			}
			return Guid.Empty;
		}
	}
}
