
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
	public enum “ипы вартир
	{
		ѕуста€—сылка = - 1,
		 вартира = 0,//кв.
		ќфис = 1,//оф.
	}
	public static partial class “ипы вартир_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid  вартира = new Guid("71f5a694-9547-2d15-46fd-d4e175d6a533");//кв.
		public static readonly Guid ќфис = new Guid("4a0c6e92-9423-8c6d-439c-1ef8f4dcca98");//оф.
		public static “ипы вартир ѕолучить(this “ипы вартир «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static “ипы вартир ѕолучить(this “ипы вартир «начение, Guid —сылка)
		{
			if(—сылка ==  вартира)
			{
				return “ипы вартир. вартира;
			}
			else if(—сылка == ќфис)
			{
				return “ипы вартир.ќфис;
			}
			return “ипы вартир.ѕуста€—сылка;
		}
		public static byte[]  люч(this “ипы вартир «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this “ипы вартир «начение)
		{
			switch («начение)
			{
				case “ипы вартир. вартира: return  вартира;
				case “ипы вартир.ќфис: return ќфис;
			}
			return Guid.Empty;
		}
	}
}
