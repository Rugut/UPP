
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(ќбщ.)
		///</summary>
	public enum “ипы—труктурных≈диниц
	{
		ѕуста€—сылка = - 1,
		—клад = 0,
		 асса = 1,
	}
	public static partial class “ипы—труктурных≈диниц_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid —клад = new Guid("c729ac80-2e21-605e-4e96-7e734984bbba");
		public static readonly Guid  асса = new Guid("896552b5-b9a7-b876-4aca-8d718320845c");
		public static “ипы—труктурных≈диниц ѕолучить(this “ипы—труктурных≈диниц «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static “ипы—труктурных≈диниц ѕолучить(this “ипы—труктурных≈диниц «начение, Guid —сылка)
		{
			if(—сылка == —клад)
			{
				return “ипы—труктурных≈диниц.—клад;
			}
			else if(—сылка ==  асса)
			{
				return “ипы—труктурных≈диниц. асса;
			}
			return “ипы—труктурных≈диниц.ѕуста€—сылка;
		}
		public static byte[]  люч(this “ипы—труктурных≈диниц «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this “ипы—труктурных≈диниц «начение)
		{
			switch («начение)
			{
				case “ипы—труктурных≈диниц.—клад: return —клад;
				case “ипы—труктурных≈диниц. асса: return  асса;
			}
			return Guid.Empty;
		}
	}
}
