
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
	public enum ¬иды«начений–азр€дов
	{
		ѕуста€—сылка = - 1,
		 од = 0,
		јртикул = 1,
		—войство = 2,
	}
	public static partial class ¬иды«начений–азр€дов_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid  од = new Guid("135b0893-5dd0-ecf8-4ff8-5c6e7ef38d2a");
		public static readonly Guid јртикул = new Guid("395a2cab-bd34-b799-449d-1c08738bd98a");
		public static readonly Guid —войство = new Guid("f74e48af-1981-5cb7-4f0d-267761af8c5b");
		public static ¬иды«начений–азр€дов ѕолучить(this ¬иды«начений–азр€дов «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬иды«начений–азр€дов ѕолучить(this ¬иды«начений–азр€дов «начение, Guid —сылка)
		{
			if(—сылка ==  од)
			{
				return ¬иды«начений–азр€дов. од;
			}
			else if(—сылка == јртикул)
			{
				return ¬иды«начений–азр€дов.јртикул;
			}
			else if(—сылка == —войство)
			{
				return ¬иды«начений–азр€дов.—войство;
			}
			return ¬иды«начений–азр€дов.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬иды«начений–азр€дов «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬иды«начений–азр€дов «начение)
		{
			switch («начение)
			{
				case ¬иды«начений–азр€дов. од: return  од;
				case ¬иды«начений–азр€дов.јртикул: return јртикул;
				case ¬иды«начений–азр€дов.—войство: return —войство;
			}
			return Guid.Empty;
		}
	}
}
