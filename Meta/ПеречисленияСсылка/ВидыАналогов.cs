
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(ќбщ)
		///</summary>
	public enum ¬идыјналогов
	{
		ѕуста€—сылка = - 1,
		 омплектующа€ = 0,
		”зел = 1,
	}
	public static partial class ¬идыјналогов_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid  омплектующа€ = new Guid("808b62a8-24fa-7f3b-4d6b-67dfa2abade5");
		public static readonly Guid ”зел = new Guid("0058c985-5744-6b9d-4b66-dbe731abca43");
		public static ¬идыјналогов ѕолучить(this ¬идыјналогов «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬идыјналогов ѕолучить(this ¬идыјналогов «начение, Guid —сылка)
		{
			if(—сылка ==  омплектующа€)
			{
				return ¬идыјналогов. омплектующа€;
			}
			else if(—сылка == ”зел)
			{
				return ¬идыјналогов.”зел;
			}
			return ¬идыјналогов.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬идыјналогов «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬идыјналогов «начение)
		{
			switch («начение)
			{
				case ¬идыјналогов. омплектующа€: return  омплектующа€;
				case ¬идыјналогов.”зел: return ”зел;
			}
			return Guid.Empty;
		}
	}
}
