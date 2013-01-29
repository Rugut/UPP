
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(”пр)
		///</summary>
	public enum ¬идыƒвиженийЅухгалтерии
	{
		ѕуста€—сылка = - 1,
		ƒебет = 0,
		 редит = 1,
	}
	public static partial class ¬идыƒвиженийЅухгалтерии_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid ƒебет = new Guid("3fd27ab6-071e-4af5-4000-3bb44f9fbfea");
		public static readonly Guid  редит = new Guid("1b847c97-2a16-d8a2-4ab5-09cafdcefb80");
		public static ¬идыƒвиженийЅухгалтерии ѕолучить(this ¬идыƒвиженийЅухгалтерии «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬идыƒвиженийЅухгалтерии ѕолучить(this ¬идыƒвиженийЅухгалтерии «начение, Guid —сылка)
		{
			if(—сылка == ƒебет)
			{
				return ¬идыƒвиженийЅухгалтерии.ƒебет;
			}
			else if(—сылка ==  редит)
			{
				return ¬идыƒвиженийЅухгалтерии. редит;
			}
			return ¬идыƒвиженийЅухгалтерии.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬идыƒвиженийЅухгалтерии «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬идыƒвиженийЅухгалтерии «начение)
		{
			switch («начение)
			{
				case ¬идыƒвиженийЅухгалтерии.ƒебет: return ƒебет;
				case ¬идыƒвиженийЅухгалтерии. редит: return  редит;
			}
			return Guid.Empty;
		}
	}
}
